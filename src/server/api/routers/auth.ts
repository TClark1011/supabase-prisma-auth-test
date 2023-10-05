import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getCurrentSession: publicProcedure.query(async ({ ctx }) => {
    const sessionResponse = await ctx.supabase.auth.getSession();
    return sessionResponse?.data?.session;
  }),
  getSignedInUser: publicProcedure.query(({ ctx }) => ctx.session?.user),
});
