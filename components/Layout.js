import { Header, Footer } from '.'

export function Layout({ children, isHome = false }) {
  return (
    <>
      <Header isExpanded={isHome} />
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  )
}
