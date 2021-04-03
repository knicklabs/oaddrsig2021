import Head from 'next/head'
import { Card, Grid, Layout, Section } from '../components'

import { xlsxToJson } from '../utils'

export default function Home({ sections, submissions, universities }) {
  return (
      <Layout home={sections.home}>
        <Head>
          <title>2021 RSIG Research Day | OADD</title>
          <meta name="description" content="Poster presentations from the 2021 RSIG Research Day" />
        </Head>
        <Section
          title={sections.poster.title}
          subtitle={sections.poster.subtitle}
        >
          <Grid>
            { submissions.map(({ coAuthors, contactAuthor, email, id, title }) => (
              <Card
                title={title}
                authorEmail={email || 'Email n/a'}
                authorName={`${contactAuthor}${coAuthors ? ', et al' : ''}`}
                href={`/submissions/${id}`}
                linkType="file"
                key={id}
                tag="Poster"
              />
            ))}
          </Grid>
        </Section>
        <Section
          title={sections.university.title}
          subtitle={sections.university.subtitle}
        >
          <Grid>
            { universities.map(({ contactEmail, contactPerson, id, title }) => (
              <Card
                title={title}
                authorEmail={contactEmail || 'Email n/a'}
                authorName={contactPerson || 'Contact n/a'}
                linkType="link"
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
  const sections = xlsxToJson({
    filename: 'data/data.xlsx',
    worksheetName: 'Sections',
  })

  const submissions = xlsxToJson({
    filename: 'data/data.xlsx',
    worksheetName: 'Poster Presentations',
  })

  const universities = xlsxToJson({
    filename: 'data/data.xlsx',
    worksheetName: 'Universities',
  })

  return {
    props: {
      sections: {
        home: getSection(sections, 'home'),
        poster: getSection(sections, 'posters'),
        university: getSection(sections, 'universities'),
      },
      submissions,
      universities,
    }
  }
}

function getSection(sections, key) {
  const section = sections.find(({ section }) => String(section).toLowerCase() === key) || {}
  return {
    subtitle: section.subtitle || '',
    title: section.title || '',
  }
}
