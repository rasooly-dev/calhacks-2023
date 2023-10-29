"use node"

import { mutation, action } from "./_generated/server"
import { v } from "convex/values"
import { api, internal } from './_generated/api'
import { Id } from "./_generated/dataModel";

export const createSession = action({
  args: { storageId: v.string()},
  handler: async (ctx, args) => {

    const image = await ctx.storage.getUrl(args.storageId)
    const llavaOutput = await ctx.runAction(internal.replicate.llava, { imageURL: image as string })
    const llamaOutput: any = await ctx.runAction(internal.together.llama_tuned, { foodData: llavaOutput as string })

    const sessionData = {
        storageId: args.storageId,
        foodItem: llamaOutput.foodItem,
        category: llamaOutput.category,
        nutritionalValues: llamaOutput.nutritionalValues
    }

    const session: Id = await ctx.runMutation(api.sessiondb.saveSessionToDatabase, { sessionData: sessionData })
    return session
  },
})