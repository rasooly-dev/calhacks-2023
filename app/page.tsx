import ImageUpload from './components/ImageUpload'
import styles from './Landing.module.css'


const UploadPage = () => {
  return (
    <div className={styles.page}>
      <section>
        <h1> Upload Image </h1>
        <ImageUpload />
      </section>
    </div>
  )
} 

export default UploadPage
