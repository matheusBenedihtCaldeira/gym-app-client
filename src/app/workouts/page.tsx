'use client';

import Header from '@/components/Header';
import RegisterWorkoutWindow from '@/components/WorkoutMenu';
import axios from '@/services/axios';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type WorkoutProps = {
  id: number;
  name: string;
};

export default function Workout() {
  const router = useRouter();
  const [showWindow, setShowWindow] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutProps[]>([]);
  const [name, setName] = useState('');
  useEffect(() => {
    try {
      const getWorkouts = async () => {
        const response = await axios.get<WorkoutProps[]>('/api/index/workouts');
        setWorkouts(response.data);
      };
      getWorkouts();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/register/workout', {
        name,
      });
      setShowWindow(false);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      console.log(id);
      await axios.delete(`api/delete/workout/${id}`);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div className="m-10 pl-2">
        <button
          className="text-white bg-red-800 rounded-full transition duration-300 ease-out md:ease-in hover:bg-red-700 p-3 drop-shadow-xl"
          onClick={() => setShowWindow(true)}
        >
          New Workout
        </button>
      </div>
      <div className="m-10 py-3 sm:py-30">
        <ul className="divide-y divide-gray-100">
          {workouts.map((workout) => (
            <li
              key={workout.id}
              className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-300 rounded-md shadow-md w-full"
            >
              <div className="min-w-0 flex-auto">
                <Link href="#" className="text-base font-semibold leading-6">
                  {workout.name}
                </Link>
              </div>
              <div className="hidden shrink-0 sm:flex sm:items-center m-1">
                <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in hover:text-blue-700">
                  <PencilSquareIcon />
                </p>
                <button
                  className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in hover:text-red-600"
                  onClick={() => handleDelete(workout.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <RegisterWorkoutWindow isVisible={showWindow}>
        <div className="py-7 px-7 lg:px-7 text-left">
          <h2 className="mb-7">Create e new workout</h2>
          <form className="space-y-" action="#" onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="workout-name"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                required
              />
            </div>
            <div className="p-1">
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
