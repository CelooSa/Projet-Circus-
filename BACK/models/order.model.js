const mongoose = require('mongoose');


const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Référence à l'objet 'User' lié
        required: true,
    },
    // Autres champs pour la commande, comme les articles, le total, etc.
    totalAmount: {
        type: Number,
        required: true,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
