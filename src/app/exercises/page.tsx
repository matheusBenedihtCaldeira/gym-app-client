'use client';
import Header from '@/components/header';
import WorkoutMenu from '@/components/workout-menu';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';

export default function Exercises() {
  const [showWindow, setShowWindow] = useState(false);
  return (
    <>
      <Header />
      <div className="m-10 py-20 sm:py-10">
        <ul className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 p-3 mb-7 shadow-lg bg-slate-300 rounded-md">
            <div className="min-w-0 flex-auto">
              <p className="text-base font-semibold leading-6">
                Name: Bent Over Row
              </p>
              <p>Straight bar</p>
              <p className="mt-1 truncate text-sm leading-5">
                Muscle Group: Back
              </p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-center m-2">
              <button
                className="hidden shrink-0 sm:flex sm:items-center m-2"
                onClick={() => setShowWindow(true)}
              >
                Add to workout
                <PlusIcon className="h-6 w-6" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <WorkoutMenu isVisible={showWindow}>
        <div>
          <div className="m-4">
            <label htmlFor="workout">Workout</label>
          </div>
          <div>
            <select className="w-full h-10 rounded-lg" name="" id="">
              <option value="">Back</option>
              <option value="">Biceps</option>
              <option value="">Leg</option>
            </select>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <button
              type="submit"
              className="px-20 py-2 text-white bg-red-800 hover:bg-red-700 focus:ring focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm p-3 text-center transition duration-300 ease-out md:ease-in"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button
              type="button"
              className="rounded-md bg-gray-700 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700  transition duration-300 ease-out md:ease-in"
              onClick={() => setShowWindow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </WorkoutMenu>
    </>
  );
}
