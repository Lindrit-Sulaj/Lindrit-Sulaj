import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-byzantine-blue h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl md:text-4xl font-medium">Page is in development</h1>
      <Link href="/" className="mt-4 text-blue-300 text-xl">Go to home</Link>
    </div>
  )
}