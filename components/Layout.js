import { Header, Footer } from '.'

export function Layout({ children, home }) {
  return (
    <>
      <Header
        title={home.title}
        subtitle={home.subtitle}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
