'use client';

import Header from '@/components/header';
import RegisterWorkoutWindow from '@/components/register-workout-window';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function Workout() {
  const [showWindow, setShowWindow] = useState(false);
  return (
    <>
      <Header />
      <div className="m-10 pl-3">
        <button
          className="text-white bg-red-800 rounded-full transition duration-300 ease-out md:ease-in hover:bg-red-700 p-2 drop-shadow-lg"
          onClick={() => setShowWindow(true)}
        >
          New Workout
        </button>
      </div>
      <div className="m-10 py-10 sm:py-30">
        <ul className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-300 rounded-md">
            <div className="min-w-0 flex-auto">
              <Link
                href="workout"
                className="text-base font-semibold leading-6"
              >
                Back
              </Link>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-center m-1">
              <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in hover:text-blue-700">
                <PencilSquareIcon />
              </p>
              <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in hover:text-red-600">
                <TrashIcon />
              </p>
            </div>
          </li>
        </ul>
      </div>
      <RegisterWorkoutWindow isVisible={showWindow}>
        <div className="py-7 px-7 lg:px-7 text-left">
          <h2 className="mb-7">Create e new workout</h2>
          <form className="space-y-" action="#">
            <div className="mb-5">
              <label
                htmlFor="workout-name"
                className="block mc-2 text-sm font-medium text-gray-900"
              >
                Workout name
              </label>
              <input
                type="text"
                name="workout-name"
                id="workout-name"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                required
              />
            </div>
            <div className="p-4">
              <button
                type="submit"
                className="w-full text-white bg-red-800 hover:bg-red-700 focus:ring focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm p-3 text-center transition duration-300 ease-out md:ease-in"
              >
                Create
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <button
                type="button"
                className="rounded-md bg-gray-700 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700  transition duration-300 ease-out md:ease-in"
                onClick={() => setShowWindow(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </RegisterWorkoutWindow>
    </>
  );
}
