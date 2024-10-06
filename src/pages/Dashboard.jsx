function Dashboard() {
  // TODO: Fetch user's stories and other relevant data
  const stories = [
    { id: 1, title: 'My First Story', excerpt: 'Once upon a time...', isPremium: false },
    { id: 2, title: 'A Premium Tale', excerpt: 'In a land far, far away...', isPremium: true },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Dashboard</h2>
      <a href="/create-story" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mb-4">
        Create New Story
      </a>
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{story.title}</h3>
            <p className="text-gray-600">{story.excerpt}</p>
            {story.isPremium && (
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                Premium
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard