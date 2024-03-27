import { authedProcedure, router } from "@/server/trpc";

const formRouter = router({
  getAll: authedProcedure.query(async () => true),
});

export default formRouter;
