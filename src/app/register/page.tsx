'use client';
import Header from '@/components/RegisterHeader';
import axios from '@/services/axios';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/register/user', {
        name,
        email,
        weight,
        password,
      });
      router.push('/login');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Header />
      <div className="space-y-12 m-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide your information so we can register.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/*Full name input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  required
                />
              </div>
            </div>
            {/*E-mail input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  required
                />
              </div>
            </div>
            {/*Weight input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Weight
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  min="0"
                  step="0.01"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  required
                />
              </div>
            </div>
            {/*Password input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-red-800 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          Register
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Link href="login">
          <button
            type="button"
            className="rounded-md bg-gray-700 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
