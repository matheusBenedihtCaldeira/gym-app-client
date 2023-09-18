'use client';

import Header from '@/components/header';
import RegisterWorkoutWindow from '@/components/register-workout-window';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
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
              <p className="text-base font-semibold leading-6">Back</p>
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
      <RegisterWorkoutWindow
        isVisible={showWindow}
        onClose={() => setShowWindow(false)}
      />
    </>
  );
}
