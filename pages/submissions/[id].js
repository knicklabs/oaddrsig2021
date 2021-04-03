import {xlsxToJson} from "../../utils";

export default function Submission({ submission }) {
  if (!submission) {
    return 'Not found'
  }
  return <h1>{ submission.title }</h1>
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
