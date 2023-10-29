import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl()
})

export const getImage = query({
    args: { storageId: v.optional(v.string()) },
    handler: async (ctx, args) => {
        if (!args.storageId) return null
        const url = await ctx.storage.getUrl(args.storageId)
        return url
    },
  })