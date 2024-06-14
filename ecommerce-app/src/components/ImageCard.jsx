import React from 'react';

const ImageCard = ({ imageUrl, children }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }} />
      {children && (
        <div className="p-4 relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageCard;