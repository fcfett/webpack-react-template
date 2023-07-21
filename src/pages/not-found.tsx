import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-2">
      <h1 className="text-xl font-bold">Page no found.</h1>
      <Link
        className="w-max rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        to="/"
      >
        go back to home
      </Link>
    </main>
  );
}
