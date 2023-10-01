import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, About Page!</h1>
        <Link href="/">Back</Link>
    </main>
  );
}
