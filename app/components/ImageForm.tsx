"use client";
import React, { useState, ChangeEvent, FC } from 'react';
import ImageUpload from './ImageUpload'
import styles from './ImageForm.module.css'


const ImageForm: FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const target = e.target as any
    const file: File = target[0].files[0]

    if (file) {
      console.log(file)
    }
    else {
      console.error("No file selected")
    }
  };
  
  return (
    <form  className={styles.form} onSubmit={handleSubmit}>
      <ImageUpload />
      <button type="submit"> Submit </button>
    </form>
  )

}

export default ImageForm
