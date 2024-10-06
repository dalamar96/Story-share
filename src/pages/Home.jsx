function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to StoryShare</h1>
      <p className="text-xl mb-8">Unleash your creativity and share your stories with the world!</p>
      <div className="space-x-4">
        <a href="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </a>
        <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </a>
      </div>
    </div>
  )
}

export default Home