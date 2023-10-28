"use client"

import ImageForm from './components/ImageForm'
import styles from './LandingPage.module.css'

const UploadPage = () => {

  const handleImageUpload = async (file: File) => {
    const sendImageUrl = new URL(`${process.env.NEXT_PUBLIC_CONVEX_URL}/sendImage`)

    fetch(sendImageUrl.toString(), {
      method: 'POST',
      headers: { 'Content-Type': file.type},
      body: file
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm handleUpload={handleImageUpload}/>
    </div>
  )
} 

export default UploadPage
