import Head from 'next/head'
import { Card, Grid, Layout, Section } from '../components'

import { xlsxToJson } from '../utils'

export default function Home({ submissions, universities }) {
  return (
      <Layout isHome>
        <Head>
          <title>2021 RSIG Research Day | OADD</title>
          <meta name="description" content="Poster presentations from the 2021 RSIG Research Day" />
        </Head>
        <Section
          title="Posters"
          subtitle="View the poster submissions from 2021"
        >
          <Grid>
            { submissions.map(({ coAuthors, contactAuthor, email, file, id, title }) => (
              <Card
                title={title}
                authorEmail={email || 'Email n/a'}
                authorName={`${contactAuthor}${coAuthors ? ', et al' : ''}`}
                file={`/downloads/${file}`}
                href={`/submissions/${id}`}
                key={id}
                tag="Poster"
              />
            ))}
          </Grid>
        </Section>
        <Section
          title="Universities"
          subtitle="Check out these universities with disability programs"
        >
          <Grid>
            { universities.map(({ contactEmail, contactPerson, id, file, link, title }) => (
              <Card
                title={title}
                authorEmail={contactEmail || 'Email n/a'}
                authorName={contactPerson || 'Contact n/a'}
                file={`/downloads/${file}`}
                href={link}
                key={id}
                tag="University"
              />
            ))}
          </Grid>
        </Section>
      </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      submissions: xlsxToJson({
        filename: 'data/data.xlsx',
        worksheetName: 'Poster Presentations',
      }),
      universities: xlsxToJson({
        filename: 'data/data.xlsx',
        worksheetName: 'Universities',
      }),
    }
  }
}
