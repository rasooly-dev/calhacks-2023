"use node"

import { mutation, action } from "./_generated/server"
import { v } from "convex/values"
import { api, internal } from './_generated/api'

export const createSession = action({
  args: { storageId: v.string()},
  handler: async (ctx, args) => {

    const image = await ctx.storage.getUrl(args.storageId)
    const llavaOutput = await ctx.runAction(internal.replicate.llava, { imageURL: image as string })
    const llamaOutput: any = await ctx.runAction(internal.together.llama_tuned, { foodData: llavaOutput as string })

    return llamaOutput

    // do something with `taskId`
  },
});