import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-50 border-t-4 border-green-700">
          <div className="relative bg-green-700">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
              <div className="text-center sm:px-16">
                <p className="font-medium text-white">
                  <span className="inline">2022 RSIG Research Day is here!</span>
                  <span className="block sm:ml-2 sm:inline-block">
                    <a href="https://oaddrsig2022.vercel.app" className="text-white font-bold underline"> Visit the site <span aria-hidden="true">&rarr;</span></a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
