"use client";
import type { Session } from "@supabase/supabase-js";

const AccountPage = ({ session }: { session: Session | null }) => {
  return <h1>{session?.user?.id}</h1>;
};

export default AccountPage;
