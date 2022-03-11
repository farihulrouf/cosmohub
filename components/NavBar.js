import sectionBanner from "./home/sectionBanner"
export default function NavBar() {
    return (
      <nav className="object-cover min-h-[688px] bg-[url('/img/bg_nav.png')]">
        <div className="max-w-screen-xl mx-auto">
          <div className="pt-5 flex justify-between items-center">
            <div className="flex space-x-1 items-center">
                <img className="w-16 h-auto"src="/img/logo.svg" alt="logo" />
                <h3 className="text-white text-lg">Cosmohub</h3>
            </div>
            <div className="flex gap-4 items-center">
                <ul className="flex gap-4 text-white">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Events</li>
                    <li>Jobs</li>
                </ul>
                <button className="px-3 py-2 bg-[#FFBE0B] rounded-3xl">Become a member</button>
            </div>
          </div>
          <div className="max-w-lg pt-[100px]">
             <h2 className="text-white text-5xl py-2">A new way to revolutionise your workspace to yourself</h2>
             <p className="text-white py-2">We are currently open for trial visits until the end of April, we invite you to try your new coworking space.</p>
          </div>

          <div className="w-1/2 pt-[58px]">
             <div className="h-20 bg-gradient-to-r from-cyan-500 to-gray-500 py-6 flex items-center justify-between w-full p-6">
                  <p className="text-white">Enter your email address</p>
                  <button className="px-3 py-2 bg-[#FFBE0B] rounded-3xl">Apply For membership</button>
             </div>
          </div>
        </div>   
      </nav>
    )
  }