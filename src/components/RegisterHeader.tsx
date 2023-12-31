import { UserIcon } from '@heroicons/react/24/solid';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

export default function Header() {
  const Menu = ['Profile', 'Your Workouts', 'Logout'];
  return (
    <div className="shadow-md w-full bg-red-800 text-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl">
          {/*Logo*/}
          <h3 className="text-3xl font-normal">Gym App</h3>
        </div>
      </div>
    </div>
  );
}
