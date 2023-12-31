import Link from "next/link";

// app/page is the UI for the '/' URL
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, NextJS. This is the Home Page!</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
    </main>
  );
}
