"use client"
import React, { ChangeEvent, FC } from 'react';
import styles from './ImageUpload.module.css'

const ImageUploader: FC = () => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Do something with the file (e.g., upload to server, display as a preview, etc.)
      console.log(file);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default ImageUploader;
