import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        className="rounded-full w-36"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sahara-filmi-tv-logo.svg/1200px-Sahara-filmi-tv-logo.svg.png"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
