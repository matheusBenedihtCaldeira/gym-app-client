import Header from '@/components/header';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Exercises() {
  return (
    <>
      <Header />
      <div className="m-10 py-20 sm:py-30">
        <ul className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-300 rounded-md">
            <div className="min-w-0 flex-auto">
              <p className="text-base font-semibold leading-6">
                Name: Bent Over Row
              </p>
              <p>Straight bar</p>
              <p className="mt-1 truncate text-sm leading-5">
                Muscle Group: Back
              </p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-center">
              <p className="m-2">Add to workout</p>
              <Link href="#">
                <PlusIcon className="h-6 w-6" />
              </Link>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-300 rounded-md">
            <div className="min-w-0 flex-auto">
              <p className="text-base font-semibold leading-6">
                Name: Barbell Biceps Curl
              </p>
              <p>Barbell</p>
              <p className="mt-1 truncate text-sm leading-5">
                Muscle Group: Biceps
              </p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-center">
              <p className="m-2">Add to workout</p>
              <Link href="#">
                <PlusIcon className="h-6 w-6" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
