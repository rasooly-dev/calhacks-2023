"use client"

import ImageForm from './components/ImageForm'
import styles from './LandingPage.module.css'

import Pizza from '@/assets/pizza.png'

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

  // const llava = useAction(api.replicate.llava)

  // useEffect(() => {
  //   llava({
  //     image: Pizza
  //   }).then(output => Object.values(output).join(''))
  //     .then(console.log)
  // }, [])

  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm handleUpload={handleImageUpload}/>
    </div>
  )
}

export default UploadPage
