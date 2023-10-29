import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const saveSessionToDatabase = mutation({
    args: { sessionData: v.any() },
    handler: async (ctx, args) => {
        const session = await ctx.db.insert("sessions", args.sessionData)
        return session
    }
})

export const getSessionFromDatabase = mutation({
    args: { sessionId: v.any() },
    handler: async (ctx, args) => {
        const session = await ctx.db.get(args.sessionId)
        return session
    }
})