'use server';

import { redirect } from "next/navigation";
import { getAuth, deleteSessionCookie } from "../cookie";
import { invalidateSession } from "../session";

export const signOut = async () => {
  const { session } = await getAuth();

  if (!session) {
    redirect('/login');
  }

  await invalidateSession(session.id);
  await deleteSessionCookie();

  redirect('/login');
};