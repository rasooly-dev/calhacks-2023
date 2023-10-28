"use client"
import React, { useState, ChangeEvent, FC } from 'react';
import styles from './ImageUpload.module.css'

interface ImageUploadProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const ImageUploader: FC = ( onImageChange ) => {

  const [fileName, setFileName] = useState(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name)
    } else {
      console.log("File not found")
    }
  };

  return (
    <>

      {fileName && <p>Your Selected File: {fileName}</p>} {/* Display the file name if available */}
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
