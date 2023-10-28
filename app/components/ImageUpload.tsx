"use client"
import React, { ChangeEvent, FC } from 'react';
import styles from './ImageUpload.module.css'

interface ImageUploadProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const ImageUploader: FC = () => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Do something with the file (e.g., upload to server, display as a preview, etc.)
      console.log(file);
    } else {
      console.log('file not found')
    }
  };

  return (
    <>
      <label htmlFor="image-upload" className={styles.button}>
        Upload an Image
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default ImageUploader;
