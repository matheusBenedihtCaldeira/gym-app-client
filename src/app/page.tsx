import Header from '@/components/header';
export default function Home() {
  return (
    <>
      <Header />
      <div className="py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gym App
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Manage and create your personalized workouts
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Manage your workouts
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  Our website offers you the opportunity to create personalized
                  workouts and manage your physical activities. With ease and
                  efficiency, you can design workouts that meet your specific
                  goals.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Exercises Lists
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  We provide focused exercise lists for each muscle group.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
