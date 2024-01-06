/* import { z } from "zod";
import { publicProcedure, router } from './trpc'

export const userRouter = router({

  updatePatreonId: publicProcedure
  .input(z.object({ id: z.string(), patreonId: z.string() }))
  .mutation(async ({ input, ctx }) => {
    return await ctx.prisma.user.update({
      where: {
        id: input.id,
      },
      data: {
        patreonMemberId: input.patreonId,
      },
    });
  }),

}); */