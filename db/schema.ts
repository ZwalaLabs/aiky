import type { AdapterAccount } from "@auth/core/adapters";
import { createId } from "@paralleldrive/cuid2";
import {
  integer,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { communityTypeValues } from "@/lib/constants";
import { relations } from "drizzle-orm";

export const users = pgTable("user", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

export const communities = pgTable("community", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull().unique(),
  timestamp: timestamp("timestamp", { mode: "string" })
    .$defaultFn(() => new Date().toISOString())
    .notNull(),
  description: text("description").notNull(),
  type: text("inputType", {
    enum: communityTypeValues,
  }).notNull(),
  publicURL: text("publicURL").notNull().unique(),
  chatURL: text("chatURL").unique(),
  logo: text("logo"),
  coverPhoto: text("coverPhoto"),
});
export type SelectCommunity = typeof communities.$inferSelect;
export type InsertCommunity = typeof communities.$inferInsert;

export const posts = pgTable("post", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  communityId: text("communityId")
    .notNull()
    .references(() => communities.id, { onDelete: "cascade" }),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  timestamp: timestamp("timestamp", { mode: "string" })
    .$defaultFn(() => new Date().toISOString())
    .notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  likes: json("likes").$type<string[]>().default([]).notNull(),
});
export type SelectPost = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

export const members = pgTable("member", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  communityId: text("communityId")
    .notNull()
    .references(() => communities.id, { onDelete: "cascade" }),
});

// Relations
// export const communitiesRelations = relations(comm, ({ many }) => ({
//   pages: many(pages),
//   responses: many(responses),
// }));
export const postsRelations = relations(posts, ({ one }) => ({
  communityId: one(communities, {
    fields: [posts.communityId],
    references: [communities.id],
  }),
  userId: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));
