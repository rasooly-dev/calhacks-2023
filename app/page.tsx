"use client"

import ImageForm from './components/ImageForm'
import styles from './LandingPage.module.css'

import Pizza from '@/assets/pizza.png'

import { useMutation, useAction } from 'convex/react'
import { api } from "@/convex/_generated/api"

import { useRouter } from 'next/navigation'

import { useState } from 'react'

const UploadPage = () => {
  const generateUploadUrl = useMutation(api.store.generateUploadUrl)
  const createSession = useAction(api.session.createSession)
  const getSessionFromDatabase = useMutation(api.sessiondb.getSessionFromDatabase)

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

  const handleImageUpload = async (file: File) => {
    setLoading(true)
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
    .finally(() => setLoading(false))
  }

  // const llava = useAction(api.replicate.llava)

  // useEffect(() => {
  //   llava({
  //     image: Pizza
  //   }).then(output => Object.values(output).join(''))
  //     .then(console.log)
  // }, [])

  if (loading)
    return (
      <div className={styles.loading}>
        <h1>Processing Image</h1>
        <p>This will only take a few seconds. Thank you for your patience.</p>

        <span className={styles.movable} />
      </div>
    )

  return (
    <div className={styles.page}>
      <h1> Upload Image </h1>
      <ImageForm handleUpload={handleImageUpload}/>
    </div>
  )
}

export default UploadPage