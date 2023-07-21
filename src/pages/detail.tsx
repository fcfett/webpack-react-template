import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <main className="flex h-full flex-col gap-2">
      <h1 className="text-xl font-bold">Detail page</h1>
      <p>
        Go bach to{" "}
        <Link className="text-blue-600 underline" to="/">
          home
        </Link>{" "}
        page.
      </p>
    </main>
  );
}
