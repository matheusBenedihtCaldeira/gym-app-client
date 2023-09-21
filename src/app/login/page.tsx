import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5UlEQVR4nO2ZMUvDQBiGn4K0FhXq0KA/TtwqbRcXcRDB0V/RIoKbDg62arf+g1roVDc3cWjRwaVy8AWO0KS9JHh3JQ8E2qaB98ldLvfdQUFBgS8EQB+YAx2gIr/X5PsHMAGaQMlm0F3gAfgFBhI8RH0eAwvteBKZbaAXOde2JaECDSNh3jSZRuTcYoXM1JZIMyaoLnNhIPNpS+Q0JmRama4tkT0JnJdMDYvUgVGCjBqRDuW/ZzH/6YuIdTZKJsihm3VwhKwyMxwii0wPx0jzzEyAAxwhkJekacs0IlMbZ1rhOkXLOMGyu3+VomWskhS0ZSBTd1UieqeDFTLPPkisc803nkiE1GOuvcUjCWJGs1egimcSeomsSttjYIsUqIuOgBNgx5JEZqrSjGGA0ZrDnlMSirsUY7hzEoqfHIdLq2/kF4OpgrMSpvOelqsSGMxIw7rgPOEcvspMXJIIpIgx7WZNV7pTdI5z6Wvhg6wb6SFV4e9V4RMyWxLSS5luTEjvZMrAY0xI756Z8ibI7MsicUWW8rN2M7WlYIUbWZLMS0Zt8ljhSwKYykQ3M8NDFWZWeNdCrCOTNAMYatvM/047EiZJZrxkSj+QLeh7qbetURKZqXSzrrZnV5FNlrkIOvG+KCgoYCV/JCsAeXhkfUQAAAAASUVORK5CYII="
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5 "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link
            href="/register"
            className="font-semibold leading-6 text-red-800 hover:text-red-600"
          >
            Create a account
          </Link>
        </p>
      </div>
    </div>
  );
}
