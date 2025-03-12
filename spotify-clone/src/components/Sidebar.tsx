import { HeartIcon,
	HomeIcon,
	LibraryIcon,
	PlusCircleIcon,
	RssIcon,
	SearchIcon} from "@heroicons/react/24/outline"
import IconButton from "./IconButton"

const Sidebar = () => {
  return (
    <div className='text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block'>
        <div className="space-y-4">
            <IconButton icon={HomeIcon} label="Home"/>
            <IconButton icon={SearchIcon} label="Search"/>
            <IconButton icon={LibraryIcon} label="Your Libraray"/>
            <IconButton icon={PlusCircleIcon} label="Create Playlist"/>
            <IconButton icon={HeartIcon} label="Liked Songs"/>
            <IconButton icon={RssIcon} label="Your episodes"/>
        </div>
    </div>
  )
}

export default Sidebar