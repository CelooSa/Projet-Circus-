import React from 'react';

const ArtistCard = ({ name, discipline, bio, image }) => {
  return (
    <div className="artist-card">
      <img src={image} alt={name} className="artist-image" />
      <h3>{name}</h3>
      <p><strong>{discipline}</strong></p>
      <p>{bio}</p>
    </div>
  );
};

export default ArtistCard;