import { UserIcon } from '@heroicons/react/24/solid';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

export default function Header() {
  const Menu = ['Profile', 'Your Workouts', 'Logout'];
  return (
    <div className="shadow-md w-full bg-red-800 text-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer">
          {/*Logo*/}
          <Link href="/" className="font-bold">
            Gym App
          </Link>
        </div>
        {/*Nav with links*/}
        <ul className="md:flex pl-9">
          <li className="my-7 md:my-0 md:ml-8">
            <Link href="/">Home</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8">
            <Link href="exercises">Exercises</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8">
            <Link href="workouts">Workouts</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8">
            <UserIcon className="h-6 w-6 cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
}
