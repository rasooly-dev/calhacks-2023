"use node"

import { internalAction } from "./_generated/server"
import { v } from "convex/values"

export const llama_tuned = internalAction({
    args: { foodData: v.string() },
    handler: async (_, args) => {
        
        const prompt = `[INST] SYS
        You are a nutritional value output assistant. You will only ever output JSON without any kind of explanations or responses. Make sure you always write complete, valid JSON syntax.
        <</SYS>>

        Based on this food data containing the food item, the quantity of each component/ingredient in grams:
        ${args.foodData}
        Output a json object containing the nutritional information of the food item. The object should be in the following format:
        {
            "foodItem": <food item>,
            "category": <category>,
            "nutritionalValues": {
                "total_calories": <totalcalories>,
                "protein": <protein>,
                "fat": <fat>,
                "saturatedFat": <saturated fat>,
                "fiber": <fiber>,
                "carbs": <carbs>
            }
        }
        [/INST]`

        const body = {
            model: "alofiabdul@gmail.com/Llama-2-7B-32K-Instruct-2023-10-28-11-34-54",
            prompt: prompt,
            temperature: 0.9,
            stop: ["[INST]", "</s>", "\n\n\n\n"],
            max_tokens: 200,
            top_p: 0.7,
            top_k: 50,
            repitition_penalty: 1
        }
        
        // keep retrying until we get a response
        let json
        
        while (true) {
            try {
                const res = await fetch("https://api.together.xyz/inference" as string, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.TOGETHER_API_KEY}` as string
                    },
                    body: JSON.stringify(body),
                    method: 'POST'
                })


                const resJson: any = await res.json()
                const output = resJson.output.choices[0].text as string
                json = JSON.parse(output.substring(output.indexOf('{'), output.lastIndexOf('}') + 1))
                break
            } catch (e) {
                console.log(e)
            }
        }

        return json        
    }
})

