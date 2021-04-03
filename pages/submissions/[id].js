import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Layout } from '../../components'
import {xlsxToJson} from "../../utils"
import Head from "next/head";

const PdfViewer = dynamic(() => import('../../components/PdfViewer'), {ssr: false })

export default function Submission({ submission }) {
  if (!submission) {
    return 'Not found'
  }

  return (
    <Layout>
      <Head>
        <title>Poster Submission | 2021 RSIG Research Day | OADD</title>
        <meta name="description" content={`Poster submission: ${submission.title}`} />
      </Head>
      <article className="bg-white p-5 shadow-md rounded-md flex flex-col flex-col-reverse">
        <header className="bg-white pt-5">
          <div className="flex justify-between items-start flex-wrap sm:flex-nowrap">
            <div>
              <div className="flex items-center">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {submission.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {`${submission.contactAuthor}${submission.coAuthors ? ', et al' : ''}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-1 flex-shrink-0 flex">
              <a href={submission.file} download
                 className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                Download
              </span>
              </a>
            </div>
          </div>
        </header>
        <PdfViewer url={`/downloads/${submission.file}`} />
      </article>
      <div className="text-center mt-12">
        <Link href="/">
          <a className="text text-gray-500">
            View all poster submissions
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { params: { id } } = context
  const submissions = xlsxToJson({
    filename: 'data/data.xlsx',
    worksheetName: 'Poster Presentations',
  })
  return {
    props: {
      submission: submissions.find((submission) => String(submission.id) === id),
    }
  }
}

export async function getStaticPaths() {
  const submissions = xlsxToJson({
    filename: 'data/data.xlsx',
    worksheetName: 'Poster Presentations',
  })
  return {
    paths: submissions.map(({ id }) => ({
      params: { id: String(id) }
    })),
    fallback: false,
  }
}
