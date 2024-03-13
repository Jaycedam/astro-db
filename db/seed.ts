import { db, Comment } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "A", body: "Hope you like Astro DB!" },
    { author: "B", body: "Enjoy!" },
  ]);
}
