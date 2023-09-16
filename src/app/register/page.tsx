import Header from '@/components/register-header';

export default function Register() {
  return (
    <form>
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
                  name="full-name"
                  id="full-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                  step="0.01"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/*Password input*/}
            <div className="sm:col-span-3">
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="weight"
                  id="weight"
                  step="0.01"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
    </form>
  );
}
