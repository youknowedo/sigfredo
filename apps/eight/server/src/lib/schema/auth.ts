import { pgSchema, pgTable, text, timestamp } from "drizzle-orm/pg-core";

const schema = pgSchema("eight");

export const userTable = schema.table("user", {
    id: text("id").primaryKey(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
});

export const sessionTable = schema.table("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date",
    }).notNull(),
});
