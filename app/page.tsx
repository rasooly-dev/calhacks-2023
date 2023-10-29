import React from 'react';
import ImageUpload from './components/ImageUpload'
import ImageForm from './components/ImageForm'
import JsonOutput from './components/JsonOutput'
import styles from './LandingPage.module.css'





const UploadPage = () => {
  const jsonData = {
    name: "john",
    age: "26",
    race: "1st",
  }

  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm />
      <JsonOutput data={jsonData} />
    </div>
  )
} 

export default UploadPage
