'use client';

import { 
    HeartIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PlusCircleIcon,
    RssIcon,
    BookOpenIcon
} from "@heroicons/react/24/outline";
import IconButton from "./IconButton";
import { signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';

const Divider = () => <hr className='border-t-[0.1px] border-gray-900' />;

const Sidebar = () => {
    const { data: session } = useSession();

    // Dùng useMemo để tránh render lại không cần thiết
    const playlists = useMemo(() => new Array(20).fill("PLAYLIST"), []);

    return (
        <div className='text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-auto scrollbar-none sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block'>
            <div className='space-y-4'>
                {session?.user && (
                    <button
                        onClick={() => signOut()}
                        className="text-white font-semibold"
                    >
                        {session?.user?.name} - Log Out
                    </button>
                )}

                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={MagnifyingGlassIcon} label="Search" />
                <IconButton icon={BookOpenIcon} label="Your Library" />

                <Divider />

                <IconButton icon={PlusCircleIcon} label="Create Playlist" />
                <IconButton icon={HeartIcon} label="Liked Songs" />
                <IconButton icon={RssIcon} label="Your Episodes" />

                <Divider />

                {playlists.map((playlist, index) => (
                    <p key={index} className='cursor-pointer hover:text-white'>
                        {playlist}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
