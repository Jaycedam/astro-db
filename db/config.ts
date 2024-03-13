import { defineDb, defineTable, column } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    body: column.text(),
  },
});

export default defineDb({
  tables: { Comment },
});
