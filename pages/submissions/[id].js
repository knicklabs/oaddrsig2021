import dynamic from 'next/dynamic'
import { Layout } from '../../components'
import {xlsxToJson} from "../../utils"

const PdfViewer = dynamic(() => import('../../components/PdfViewer'), {ssr: false })

export default function Submission({ submission }) {
  if (!submission) {
    return 'Not found'
  }

  return (
    <Layout home={{title: '', subtitle: ''}}>
      <article className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <h1>{ submission.title }</h1>
          <PdfViewer
            url={`/downloads/${submission.file}`}
            width={300}
          />
        </header>
      </article>
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
