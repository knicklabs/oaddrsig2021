export const Header = ({ subtitle, title }) => {
  const subtitleMarkup = subtitle
    ? (
        <div className="mt-10">
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              {subtitle}
            </p>
          </div>
        </div>
      )
    : null

  return (
    <section className="py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img className="mx-auto h-36"
               src="/assets/logo.svg"
               alt={title}
          />
          {subtitleMarkup}
        </div>
      </div>
    </section>
  )
}
