export const Card = ({
  authorName,
  authorEmail,
  href = '#',
  imageTitle,
  imageUrl,
  linkType,
  subtitle,
  tag,
  title
}) => {
  const tagMarkup = tag
    ? (
        <p className="text-sm font-medium text-blue-600">
          {tag}
        </p>
      )
    : null

  const titleMarkup = title
    ? (
      <p className="text-md font-semibold text-gray-900">
        {title}
      </p>
    )
    : null

  const subtitleMarkup = subtitle
    ? (
        <p className="mt-3 text-base text-gray-500">
          {subtitle}
        </p>
      )
    : null

  const contentMarkup = subtitle || title
    ? (
        <div className="block mt-2">
          {titleMarkup}
          {subtitleMarkup}
        </div>
      )
    : null

  const authorNameMarkup = authorName
    ? (
        <p className="text-sm font-medium text-gray-900">
          {authorName}
        </p>
      )
    : null

  const authorEmailMarkup = authorEmail
    ? (
        <div className="flex space-x-1 text-sm text-gray-500">
          {authorEmail}
        </div>
      )
    : null

  const icon = linkType === 'file'
    ? (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
    : (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )

  const authorMarkup = authorName || authorEmail
    ? (
        <div className="mt-6 flex items-center">
          <div className="ml-3 flex-grow">
            {authorNameMarkup}
            {authorEmailMarkup}
          </div>
          <div class="flex-shrink-0">
            <a href={href} title={`${linkType === 'file' ? 'Download' : 'Visit'}: ${title}`}>
              <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-700 ring-4 ring-white">
                {icon}
              </span>
            </a>
          </div>
        </div>
      )
    : null

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover"
             src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=i0EmzW8Tu6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
             alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {tagMarkup}
          {contentMarkup}
        </div>
        {authorMarkup}
      </div>
    </div>
  )
}