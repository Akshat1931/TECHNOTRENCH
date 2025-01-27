import SidebarItem from "./SidebarItem"
import defaultProfile from "../../assets/defaultProfile.png"
import { GiCook, GiOpenBook, GiHearts } from "react-icons/gi"
import { MdTrackChanges } from "react-icons/md"
import { MdAccountCircle } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { NavLink, Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { useAuth } from "../../context/authContext"
import { useUser } from "../../hooks/useUser"

const SidebarItems = [
  { name: "Recipes", icon: GiOpenBook, to: "/" },
  { name: "Favorites", icon: GiHearts, to: "/favorites" },
  { name: "Meal Planner", icon: MdTrackChanges, to: "/planner" },
  { name: "Profile", icon: MdAccountCircle, to: "/profile" },
]

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { auth } = useAuth()
  const { data: user } = useUser()

  useEffect(() => {
    const closeSidebar = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    }
    document.addEventListener("mousedown", closeSidebar)
    return () => {
      document.removeEventListener("mousedown", closeSidebar)
    }
  })

  const sidebarRef = useRef()
  return (
    <nav
      className={`fixed ${
        isSidebarOpen ? "-left-0" : "-left-[250px]"
      } transition-all duration-300 transition- md:left-0 top-0 py-8 bg-white w-[250px] h-full z-10`}
      ref={sidebarRef}
    >
      <AiOutlineClose
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-4 right-4 cursor-pointer text-lg transition md:hidden hover:text-primary"
      />
      <h3>
        <Link
          to="/"
          className="block font-bold text-2xl text-center cursor-pointer"
        >
          Foodie
        </Link>
      </h3>
      <div className="flex flex-col items-center mt-10 mb-20">
        <img
          src={
            user
              ? auth.profilePhoto || user.personalInformation.profilePhoto
              : defaultProfile
          }
          alt="profile"
          className="w-[75px] h-[75px] mb-3 rounded-full"
        />
        <h3 className="font-bold">{auth.isAuthenticated && auth.username}</h3>
        <span className="rounded-lg shadow-lg px-4 flex justify-between py-1 mt-2">
          <GiCook className="inline-block text-primary" />
          <p className="text-sm text-slate-500 ml-1">Chef</p>
        </span>
      </div>
      <div>
        {SidebarItems.map((item, idx) => (
          <NavLink
            to={item.to}
            children={({ isActive }) =>
              isActive ? (
                <SidebarItem
                  active={true}
                  icon={item.icon}
                  name={item.name}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              ) : (
                <SidebarItem
                  icon={item.icon}
                  name={item.name}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              )
            }
            key={idx}
          />
        ))}
      </div>
      {user && user.role === "admin" && (
        <div className="px-3 mb-5 text-center absolute bottom-0 w-full">
          <Link
            to="/recipes/new"
            className="block mb-2 w-full py-2 px-5 bg-primary rounded-md text-body font-bold transition hover:bg-red-700"
          >
            Create Recipe
          </Link>
        </div>
      )}
    </nav>
  )
}
export default Sidebar
