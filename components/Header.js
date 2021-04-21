export const Header = ({ isExpanded= false }) => {
  const subtitleMarkup = isExpanded
    ? (
        <div className="mt-5">
          <h2 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Welcome to the 2021 Research Day! Thank you for coming!  Here you will find the poster submissions for the conference.
          </h2>
        </div>
      )
    : null

  const buttonMarkup = isExpanded
    ? (
        <>
          <div className="mt-5 max-w-7xl mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="/downloads/RSIG_Conference_Program_2021.pdf"
                 className="transition duration-500 ease-in-out flex items-center justify-center px-8 py-3 border border-transparent text-base text-center font-medium rounded-md text-white bg-green-700 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                 download
              >
                Download program
              </a>
            </div>
            <div className="rounded-md shadow mt-2 sm:mt-0 sm:ml-2">
              <a href="https://forms.gle/bXQAs1VSEaZLJyu87"
                 className="transition duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-transparent text-base text-center font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                 target="_blank"
              >
                Leave feedback
              </a>
            </div>
          </div>
          <div class="mt-5 max-w-md mx-auto text-base text-gray-500 sm:text-md md:mt-8 md:text-lg">
            <p className="text-gray-500 text-md block">
              Remember to <a class="transition duration-500 ease-in-out text-green-600 hover:text-green-700 font-bold" href="https://www.surveymonkey.com/r/QDBF3J3" target="_blank">vote for the People’s Choice Award</a> and <a class="transition duration-500 ease-in-out text-green-600 hover:text-green-700 font-bold" href="https://forms.gle/bXQAs1VSEaZLJyu87" target="_blank">provide us feedback</a> at the end of the day.
            </p>
          </div>
        </>
      )
    : null

  return (
    <header className="py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center">
          <img className="mx-auto h-36"
               src="/assets/logo.svg"
               alt="OADD RSIG logo"
          />
          <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-green-700">2021</span>
            <span className="block xl:inline xl:ml-2.5">RSIG Research Day</span>
          </h1>
          {subtitleMarkup}
          {buttonMarkup}
        </div>
      </div>
    </header>
  )
}
