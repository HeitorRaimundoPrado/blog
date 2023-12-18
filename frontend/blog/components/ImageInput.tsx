"use client";

import React, { ChangeEvent, useState } from 'react';

interface ImageInputProps {
  onImageSelect: (imageData: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result as string;
        setSelectedImage(imageData);
        onImageSelect(imageData); // You can pass the selected image data to a parent component or perform other actions
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[95%] h-30 mx-auto mb-4">
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <div
        style={{
          padding: '30px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: 'var(--primary-color)'
        }}
        className="rounded-md"
        onClick={() => document.getElementById('imageInput')?.click()}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        ) : (
          <p>Click here to select or drop an image</p>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
