import Head from 'next/head'
import { Header } from '../components'

import { xlsxToJson } from '../utils'

export default function Home({ submissions }) {
  return (
      <div>
        <Header />
        { submissions.map(({ title }) => (
          <div>{title}</div>
        ))}
      </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      submissions: xlsxToJson({
        filename: 'data/submissions.xlsx',
        worksheetName: 'Poster Presentations',
      })
    }
  }
}
