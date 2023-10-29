"use client"

import ImageForm from './components/ImageForm'
import styles from './LandingPage.module.css'

import Pizza from '@/assets/pizza.png'

import { useMutation, useAction } from 'convex/react'
import { api } from "@/convex/_generated/api"

import { useRouter } from 'next/navigation'

const UploadPage = () => {
  const generateUploadUrl = useMutation(api.store.generateUploadUrl)
  const createSession = useAction(api.session.createSession)
  const getSessionFromDatabase = useMutation(api.sessiondb.getSessionFromDatabase)

  const router = useRouter()

  const handleImageUpload = async (file: File) => {

    const sendImageUrl = await generateUploadUrl()

    fetch(sendImageUrl.toString(), {
      method: 'POST',
      headers: { 'Content-Type': file.type},
      body: file
    })
    .then(response => response.json())
    .then(async data => {
      console.log(data)
      const sessionId = await createSession({
        storageId: data.storageId,
      })

      console.log(router.push(`/session/${sessionId}`))
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