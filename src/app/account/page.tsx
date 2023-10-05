import AccountPage from "./account-page";
import { api } from "../../trpc/server";

export default async function Account() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = await api.auth.getSignedInUser.query();

  return <AccountPage user={user} />;
}
