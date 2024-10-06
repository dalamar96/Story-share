import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">StoryShare</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
            <Link to="/register" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar