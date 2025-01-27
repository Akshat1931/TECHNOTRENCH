import { FiSearch } from "react-icons/fi"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { logout } from "../../services/auth"
import { useAuth } from "../../context/authContext"
import { useRef } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

function Header({ setIsSidebarOpen }) {
  const { auth, setAuth } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchRef = useRef()
  const handleLogout = () => {
    logout()
    setAuth({ isAuthenticated: false })
  }
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    searchParams.set("search", searchRef.current.value)
    searchParams.delete("page")
    setSearchParams(searchParams)
    navigate(`/?${searchParams.toString()}`)
  }
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <GiHamburgerMenu
          className="mr-4 cursor-pointer text-lg transition md:hidden hover:text-primary"
          onClick={() => setIsSidebarOpen(true)}
        />
        <form className="relative w-[175px] md:w-[240px]" onSubmit={handleSearch}>
          <FiSearch
            size={17}
            className="absolute top-0 left-0 translate-y-2/3 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Enter Recipe..."
            className="py-2 pl-7 w-[100%] border-b-red-200 border-b-2 focus:outline-none focus:border-b-red-700 bg-inherit"
            ref={searchRef}
          />
        </form>
      </div>
      <div className="flex items-center relative">
        {auth.isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-sm bg-primary px-2 py-1 font-bold text-white rounded-md"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/sign-up"
            className="text-sm bg-primary px-2 py-1 font-bold text-white rounded-md"
          >
            Sign up
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Header
