import Header from '@/components/header';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function Exercise() {
  return (
    <>
      <Header />
      <div className="p-10">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Workout Information
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
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
                <TrashIcon className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in hover:text-red-600" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
