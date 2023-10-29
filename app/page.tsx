import ImageUpload from './components/ImageUpload'
import ImageForm from './components/ImageForm'
import JsonOutput from './components/JsonOutput'
import styles from './LandingPage.module.css'

const UploadPage = () => {
  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm handleUpload={handleImageUpload}/>
    </div>
  )
}

export default UploadPage
