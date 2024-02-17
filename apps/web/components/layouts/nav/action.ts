"use server";

import { signOut } from "@web/auth";

export async function handleSignOut() {
  await signOut();
}
