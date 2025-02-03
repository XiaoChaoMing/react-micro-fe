import { Button } from "../components/ui/button"

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Host Application</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to Micro-Frontend Demo</h2>
        <p className="mb-4">This is the host application built with React, Tailwind CSS, and shadcn/ui.</p>
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default Home