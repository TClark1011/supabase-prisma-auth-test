import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AccountPage from "./account-page";

export default async function Account() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const supabase = createServerComponentClient<any>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AccountPage session={session} />;
}
