export const Section = ({ children, subtitle, title }) => {
  const subtitleMarkup = subtitle
    ? (
        <h3 className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          { subtitle }
        </h3>
      )
    : null

  const titleMarkup = title
    ? (
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          { title }
        </h2>
      )
    : null

  const headingMarkup = subtitle || title
    ? (
        <div className="text-center">
          {titleMarkup}
          {subtitleMarkup}
        </div>
      )
    : null

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {headingMarkup}
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}
