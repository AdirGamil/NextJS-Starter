export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-indigo-400">My Dev StarterKit</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          I created this starter template to simplify my workflow using Next.js
          15, TypeScript, and TailwindCSS. It's fast, modern, and ready for any
          project. <span className="font-semibold">AdirG</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://adirg.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium"
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition font-medium"
          >
            Github
          </a>
        </div>
      </section>

      <footer className="absolute bottom-4 text-xs text-gray-500">
        © {new Date().getFullYear()} AdirG. All rights reserved.
      </footer>
    </main>
  )
}
