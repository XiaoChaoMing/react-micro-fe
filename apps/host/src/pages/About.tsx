function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          This is a demonstration of a micro-frontend architecture using Module Federation.
          The application is built with modern web technologies including React, TypeScript,
          Tailwind CSS, and shadcn/ui components.
        </p>
        <p className="mb-4">
          The host application serves as the container for other micro-frontends,
          demonstrating how multiple applications can work together seamlessly.
        </p>
      </div>
    </div>
  )
}

export default About