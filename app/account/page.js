import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

async function page() {
  const session = await auth();
  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
    </div>
  );
}

export default page;
