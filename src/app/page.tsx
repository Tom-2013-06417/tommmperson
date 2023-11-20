import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-5xl mb-5 text-center">Matthew Lopez</h1>
        <p className="mb-5 text-center">
          Hi. I like making stuff. Websites, graphic designs, sound, film. Food.
        </p>
        <div className="flex items-center gap-x-4">
          <Link href="/sites" className="hover:underline">sites</Link>
          <Link href="/graphics" className="hover:underline">graphics</Link>
          <Link href="/sound" className="hover:underline">sound</Link>
        </div>
      </div>
    </main>
  )
}
