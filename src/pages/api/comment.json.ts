import { db, Comment } from "astro:db";

export async function GET() {
  const comments = await db.select().from(Comment);

  return new Response(
    JSON.stringify({
      message: comments,
    }),
    {
      status: 200,
    }
  );
}
