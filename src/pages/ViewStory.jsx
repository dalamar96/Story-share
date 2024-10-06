import { useParams } from 'react-router-dom'

function ViewStory() {
  const { id } = useParams()
  // TODO: Fetch story data based on id
  const story = {
    id: id,
    title: 'Sample Story',
    content: 'This is a sample story content. It would be much longer in a real application.',
    author: 'John Doe',
    isPremium: false,
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
      <p className="text-gray-600 mb-4">By {story.author}</p>
      {story.isPremium && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p className="font-bold">Premium Content</p>
          <p>This is a premium story. Please purchase to read the full content.</p>
        </div>
      )}
      <div className="prose lg:prose-xl">
        <p>{story.content}</p>
      </div>
    </div>
  )
}

export default ViewStory