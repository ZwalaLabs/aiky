import { auth } from "@/lib/auth";

const GET = async () => {
  const session = await auth();

  return Response.json(session);
};

export { GET };
