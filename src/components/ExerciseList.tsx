import { PlusIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';
import axios from '@/services/axios';

type ExerciseProps = {
  id: number;
  name: string;
  description: string;
  muscleGroup: string;
};

export default function ExerciseList() {
  return (
    <ul className="divide-y divide-gray-100">
      <li className="flex justify-between gap-x-6 p-3 mb-7 shadow-lg bg-slate-300 rounded-md">
        <div className="min-w-0 flex-auto">
          <p className="text-base font-semibold leading-6">Name:</p>
          <p>Description: </p>
          <p className="mt-1 truncate text-sm leading-5">Muscle Group:</p>
        </div>
        <div className="hidden shrink-0 sm:flex sm:items-center m-2">
          <button className="hidden shrink-0 sm:flex sm:items-center m-2">
            Add to workout
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </li>
    </ul>
  );
}
