import ImageUpload from './components/ImageUpload'
import ImageForm from './components/ImageForm'
import styles from './LandingPage.module.css'

const UploadPage = () => {
  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm />
    </div>
  )
} 

export default UploadPage
