'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';

export default function Header() {
  const [showWindow, setShowWindow] = useState(false);
  return (
    <div className="shadow-md w-full bg-red-800 text-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer">
          {/*Logo*/}
          <Link href="/" className="text-3xl font-normal">
            Gym App
          </Link>
        </div>
        {/*Nav with links*/}
        <ul className="md:flex pl-9">
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="/">Home</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="exercises">Exercises</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="workouts">Workouts</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <UserIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowWindow(true)}
            />
            <DropDownMenu isVisible={showWindow} />
          </li>
        </ul>
      </div>
    </div>
  );
}
