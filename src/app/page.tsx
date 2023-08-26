import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-5xl mb-4">Matthew Lopez</h1>
        <div className="flex items-center gap-x-4">
          <Link href="/about" className="hover:underline">about</Link>
          <Link href="/projects" className="hover:underline">projects</Link>
        </div>
      </div>
    </main>
  )
}
