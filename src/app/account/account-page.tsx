"use client";
import type { User } from "@supabase/supabase-js";

const AccountPage = ({ user }: { user: User | undefined }) => {
  return <h1>{user?.id}</h1>;
};

export default AccountPage;
