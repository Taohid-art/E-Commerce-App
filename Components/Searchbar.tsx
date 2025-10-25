import React from 'react'
import{ Search } from 'lucide-react'
const Searchbar = () => {
  return (
    <div className="flex max-sm:hidden items-center gap-2 border border-border rounded-md  py-1 focus-within:border-blue-500 transition-colors">
  <Search className="text-gray-400 ml-1.5" />
  <input
    type="text"
    className="p-1 text-sm text-gray-600 focus:outline-none"
    placeholder="Search..."
  />
</div>

  )
}

export default Searchbar