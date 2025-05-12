// import { Router } from 'express';

const Router = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ENV = require('../config/env');
const createError = require('../middlewares/error');
const sendEmail = require('../services/nodemailer');
const User = require('../models/user.model');


const postUser = async (req, res) => {
    try {
        const passwordHashed = await bcrypt.hash(req.body.password, 10);
        const new_user = await User.create({
            ...req.body,
            password: passwordHashed,
            isVerified: false,
        });

        const verificationToken = jwt.sign(
            {id: new_user._id},
            ENV.TOKEN,
            {expiresIn: '5m'}
        );
        await sendEmail(req.body, verificationToken)

        res.status(201).json({
            message: "User created and Email send!",
            new_user,
        });

    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json(error.message);
    }
};

const verifyEmail = async (req, res, next) => {
    try {
        const {token} = req.params;

        const decoded = jwt.verify(token, ENV.TOKEN);

        await Users.findByIdAndUpdate(decoded.id, {isVerified: true}, {
            new: true,
        });

        return res.status(200).json({message: 'Email vérifié avec succès!'});
        }catch (error) {
            console.error( 'Erreur de vérification:', error);
            return res.sttatus(400).json({ message: 'Lien invalide ou expiré.'});
        }
    };



const signIn = async (req, res) => {
    try {

        const user = await Users.findOne({ email: req.body.email });
        if (!user) return res.status(404).json('Utilisateur introuvable');

        const comparePassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!comparePassword) return res.status(400).json("Erreur d'identification !")

        const token = jwt.sign({ id: user._id }, ENV.TOKEN, { expiresIn: "24h" })

        const { password, ...others } = user._doc;
        res.cookie('access_token', token,
            {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                secure: false,
            })
            .status(200).json(others);

        if (!user.isVerified) {
            return res.status(403).json({
                message: `Veuillez vérifier votre email afin d'accéder à votre compte.` });
        }
        
        

        Router.put("/verify/:token", verifyEmail)

    } catch (error) {
        console.log('Error :', error.message)
        res.status(500).json(error.message);
    }

};


const getAllUsers = async (req, res) => {
    try {
        const all_users = await Users.find()
        res.status(200).json(all_users);
    } catch (error) {
        res.status(500).json(error.message)
    }

};

const getUserById = async (req, res) => {
    try {
        const userId = await Users.findById(req.params.id);
        if (!userId) return res.status(404).json("User not found !")
        return res.status(200).json(userId)

    } catch (error) {
        return res.status(500).json(error.message)
    }

}

const deleteUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json("User not found")

        const deletedUser = await Users.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "User deleted successfully",
            deleteUser
        });

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json("User not found");


        const userUpdated = await Users.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            message: "User Updated",
            userUpdated
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
};




module.exports = {
    postUser,
    signIn,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    verifyEmail
};