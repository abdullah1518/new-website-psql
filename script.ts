import { db } from "./src/prisma/db";

async function main() {
  //add a user
  const created = await db.orm.public.User.create({
    email: "alice@example.com",
    name: "Alice",
  });
  console.log("Created:", created);

  //find a user by email
  const found = await db.orm.public.User
    .where({ email: "alice@example.com" })
    .first();
  console.log("Found:", found);

  //remove a user by email
  const removed = await db.orm.public.User
    .where({ email: "alice@example.com" })
    .delete();
  console.log("Removed:", removed);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});