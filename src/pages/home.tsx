import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col gap-2">
      <h1 className="text-xl font-bold">Home page</h1>
      <p>Welcome to the home page.</p>
      <p>
        You can also navigato to the{" "}
        <Link className="text-blue-600 underline" to="/detail">
          detail
        </Link>{" "}
        page.
      </p>
    </main>
  );
}
