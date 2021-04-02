import Head from 'next/head'
import { Card, Grid, Header, Section } from '../components'

import { xlsxToJson } from '../utils'

export default function Home({ sections, submissions, universities }) {
  const homeSection = getSection(sections, 'home')
  const posterSection = getSection(sections, 'posters')
  const universitySection = getSection(sections, 'universities')

  return (
      <div>
        <Header
          title={homeSection.title}
          subtitle={homeSection.subtitle}
        />
        <Section
          title={posterSection.title}
          subtitle={posterSection.subtitle}
        >
          <Grid>
            { submissions.map(({ coAuthors, contactAuthor, email, title }) => (
              <Card
                title={title}
                authorEmail={email || 'Email n/a'}
                authorName={`${contactAuthor}${coAuthors ? ', et al' : ''}`}
                linkType="file"
                tag="Poster"
              />
            ))}
          </Grid>
        </Section>
        <Section
          title={universitySection.title}
          subtitle={universitySection.subtitle}
        >

        </Section>
      </div>
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

      },
      submissions,
      universities,
    }
  }
}

function getSection(sections, key) {
  const section = sections.find(({ section }) => String(section).toLowerCase() == key) || {}
  return {
    subtitle: section.subtitle || '',
    title: section.title || '',
  }
}
