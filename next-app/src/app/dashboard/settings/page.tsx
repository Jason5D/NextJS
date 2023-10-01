import Link from "next/link";
// app/dashboard.page is the UI for the '/dashboard' URL
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Settings Page!</h1>
      <Link href="/dashboard">Back to dashboard</Link>
    </main>
  );
}
