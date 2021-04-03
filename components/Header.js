export const Header = ({ subtitle = '', title = '' }) => {
  const titleWords = title.split(' ')
  const [titleFirstWord, ...titleOtherWords] = titleWords

  const titleMarkup = title
    ? (
      <h1 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline text-green-600">{titleFirstWord}</span>
        <span className="block xl:inline xl:ml-2.5">{titleOtherWords.join(' ')}</span>
      </h1>
      )
    : null

  const subtitleMarkup = subtitle
    ? (
        <div className="mt-5">
          <h2 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {subtitle}
          </h2>
        </div>
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
          {titleMarkup}
          {subtitleMarkup}
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="/downloads/RSIG_Conference_Program_2020.pdf"
                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                 download
              >
                Download program
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
