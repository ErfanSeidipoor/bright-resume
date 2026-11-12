import { cookie } from "@chatbot/cookie";

export default async function RootLayout() {
  const userCookie = await cookie.user.get();

  return (
    <div>
      {userCookie && <h1>welcome {userCookie.username || userCookie.email}</h1>}
    </div>
  );
}
