"use client"

import { api } from "@/convex/_generated/api"
import { useQuery, useAction, useMutation } from "convex/react"
import { useEffect, useState } from "react"

import styles from './Session.module.css'
import { ObjectType } from "convex/values"

type Session = {
    foodItem: string,
    storageId: string,
    nutritionalValues: {
        carbs: number,
        fat: number,
        fiber: number,
        protein: number,
        saturatedFat: number,
        total_calories: number,
    },
    category: string,
} | null


const PrettyLabels: any = {
    carbs: "Carbohydrates",
    fat: "Fat",
    fiber: "Fiber",
    protein: "Protein",
    saturatedFat: "Saturated Fat",
    total_calories: "Total Calories"
}

const SessionPage = ({ params } : { params: { id: string } }) => {

    const [session, setSession] = useState<Session>(null)

    const getSession = useMutation(api.sessiondb.getSessionFromDatabase)

    useEffect(() => {
        getSession({ sessionId: params.id })
            .then((session: Session) => setSession(session))
    }, [])


    const imageURL = useQuery(api.store.getImage, { storageId: session?.storageId as string })

    
    if (!session && !imageURL)
        return (
            <div className={styles.page}>
                <h1> Loading... </h1>
            </div>
        )

    return (
        <div className={styles.page}>
            <section>
                <h1>Analysis of {session?.foodItem}</h1>
                <img src={imageURL as string} alt="food" />
                <h2> Category: {session?.category}</h2>
            </section>

            <section>
                <table>
                    <tr>
                        <th> Nutrient </th>
                        <th> Value </th>
                    </tr>
                    { Object.entries(session?.nutritionalValues as object).map(([key, value]) => (
                        <tr>
                            <td> {PrettyLabels[key]}</td>
                            <td> {value}{(key != "total_calories") ? 'g' : 'cals'}</td>
                        </tr>
                    ))}
                </table>
            </section>
        </div>
    )
}

export default SessionPage