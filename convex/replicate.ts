"use node"

import { action, internalAction } from './_generated/server'
import { v } from 'convex/values'

import Replicate from 'replicate'

export const llava = internalAction({
    args: { imageURL: v.string() },
    handler: async (_, args) => {
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_KEY
        })

        const output = await replicate.run(
            "yorickvp/llava-13b:2facb4a474a0462c15041b78b1ad70952ea46b5ec6ad29583c0b29dbd4249591",
            {
              input: {
                image: args.imageURL,
                prompt: `Identify the food item. Then determine each component in the food item and its approximate quantity in grams. Finally, output your findings in the following format:
                {
                    "foodItem": "food item",
                    "components": [
                        {
                            "component": "component 1",
                            "quantity":"<component 1 quantity in grams> grams"
                        },
                        {
                            "component": "component 2",
                            "quantity": "<component 2 quantity in grams> grams"
                        },
                        {
                            "component": "component 3",
                            "quantity": "<component 3 quantity in grams> grams"
                        },
                        ...,
                        {
                            "component": "component n",
                            "quantity": "<component n quantity in grams> grams"
                        },
                
                    ]
                }`,
                tempature: 0.25,
              }
            }
          );

        return Object.values(output).join('')
    }
})