import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";

import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col m-5  sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        <form className="flex items-center mb-6 rounded-md group bg-gray-600">
          <input
            type="Enter the movie name"
            className="bg-transparent outline-none md:px-3 ml-1"
          />
          <SearchIcon className="h-6 p-1 group-hover:animate-bounce" />
        </form>
      </div>

      <Image
        className="rounded-full w-36"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sahara-filmi-tv-logo.svg/1200px-Sahara-filmi-tv-logo.svg.png"
        width={200}
        height={100}
        alt="image"
      />
    </header>
  );
};

export default Header;
