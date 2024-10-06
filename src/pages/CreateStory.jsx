import { useState } from 'react'

function CreateStory() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isPremium, setIsPremium] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement story creation logic
    console.log('Story creation attempt', { title, content, isPremium })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded h-64"
          ></textarea>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
              className="mr-2"
            />
            Make this a premium story
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Story
        </button>
      </form>
    </div>
  )
}

export default CreateStory