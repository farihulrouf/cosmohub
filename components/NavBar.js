
const NavBar = () => {
    return (
      <nav className="fixed w-full z-20">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="pt-5 flex justify-between items-center font-palo">
            <div className="flex space-x-1 items-center">
                <img className="w-16 h-auto"src="/img/logo.svg" alt="logo" />
                <h3 className="text-white text-lg">Cosmohub</h3>
            </div>
            <div className="flex gap-4 items-center">
                <ul className="flex gap-4 text-white font-semibold">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Events</li>
                    <li>Jobs</li>
                </ul>
                <button className="px-3 py-2 bg-[#FFBE0B] rounded-3xl font-semibold">Become a member</button>
            </div>
          </div>
        </div>   
      </nav>
    )
  }
  export default NavBar