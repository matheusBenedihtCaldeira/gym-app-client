'use client';
import Header from '@/components/Header';
import RegisterExerciseWindow from '@/components/RegisterExerciseWindow';
import WorkoutMenu from '@/components/WorkoutMenu';
import axios from '@/services/axios';
import { PlusIcon } from '@heroicons/react/24/solid';

import { useEffect, useState } from 'react';

type MuscleGroupProps = {
  id: number;
  name: string;
};

type ExerciseProps = {
  id: number;
  name: string;
  description: string;
  muscleGroup: MuscleGroupProps;
};

export default function Exercises() {
  const [showWorkoutWindow, setShowWorkoutWindow] = useState(false);
  const [showRegisterExerciseWindow, setShowRegisterExerciseWindow] =
    useState(false);
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroupProps[]>([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');

  useEffect(() => {
    try {
      const getExercises = async () => {
        const response = await axios.get<ExerciseProps[]>('/api/exercises', {
          timeout: 10000,
        });
        setExercises(response.data);
      };
      getExercises();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const getMuscleGroups = async () => {
        const response =
          await axios.get<MuscleGroupProps[]>('/api/musclegroups');
        setMuscleGroups(response.data);
      };
      getMuscleGroups();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const muscleGroupId = parseInt(muscleGroup);
    console.log(
      `Dados: ${name} ${description} ${muscleGroupId} Tipo do musculo` +
        typeof muscleGroupId
    );
    try {
      const { data } = await axios.post('/api/register/exercise', {
        name,
        description,
        muscleGroupId,
      });
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
          onClick={() => setShowRegisterExerciseWindow(true)}
        >
          New Workout
        </button>
      </div>
      <div className="m-10 py-20 sm:py-10">
        <ul className="divide-y divide-gray-100">
          {exercises.map((exercise) => (
            // eslint-disable-next-line react/jsx-key
            <li
              key={exercise.id}
              className="flex justify-between gap-x-6 p-3 mb-7 shadow-lg bg-slate-300 rounded-md"
            >
              <div className="min-w-0 flex-auto">
                <p className="text-base font-semibold leading-6">
                  Name: {exercise.name}
                </p>
                <p>Description: {exercise.description}</p>
                <p className="mt-1 truncate text-sm leading-5">
                  Muscle Group: {exercise.muscleGroup.name}
                </p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:items-center m-2">
                <button
                  className="hidden shrink-0 sm:flex sm:items-center m-2"
                  onClick={() => setShowWorkoutWindow(true)}
                >
                  Add to workout
                  <PlusIcon className="h-6 w-6" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <WorkoutMenu isVisible={showWorkoutWindow}>
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
              Add to workout
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <button
              type="button"
              className="rounded-md bg-gray-700 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700  transition duration-300 ease-out md:ease-in"
              onClick={() => setShowWorkoutWindow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </WorkoutMenu>
      <RegisterExerciseWindow isVisible={showRegisterExerciseWindow}>
        <div className="py-7 px-7 lg:px-7 text-left">
          <h2 className="mb-7">Create e new workout</h2>
          <form className="space-y-" action="#" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="workout-name"
                className="block mc-2 text-sm font-medium text-gray-900"
              >
                Exercise name
              </label>
              <input
                type="text"
                name="workout-name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="workout-name"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="workout-name"
                className="block mc-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="workout-name"
                id="workout-name"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="workout-name"
                className="block mc-2 text-sm font-medium text-gray-900"
              >
                Muscle group
              </label>
              <select
                className="w-full h-10 rounded-lg"
                name="muscleGroupId"
                id="muscleGroupId"
                onChange={(e) => setMuscleGroup(e.target.value)}
              >
                {muscleGroups.map((muscle) => (
                  <option key={muscle.id} value={muscle.id}>
                    {muscle.name}
                  </option>
                ))}
              </select>
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
                onClick={() => setShowRegisterExerciseWindow(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </RegisterExerciseWindow>
    </>
  );
}
