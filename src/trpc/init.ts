import { initTRPC } from "@trpc/server";
import { cache } from "react";

/**
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = cache(async () => {
  return {
    userId: "user_123",
  };
});

/**
 * We assign the result of `initTRPC.create()` to a variable `t` instead of exporting the entire object directly.
 * This is because `t` is a common variable name in i18n libraries, and we want to avoid confusion.
 */
const t = initTRPC.create({
  // transformer: superjson,
  // @see https://trpc.io/docs/server/data-transformers
});

/**
 * Helper for building tRPC applications.
 */
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;

