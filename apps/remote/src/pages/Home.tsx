import { Button } from "../components/ui/button"

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Remote Application</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Remote Component</h2>
        <p className="mb-4">This is a remote application that can be loaded into the host.</p>
        <Button variant="outline">Remote Button</Button>
      </div>
    </div>
  )
}

export default Home