// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { xlsxToJson } from '../../utils'

export default (req, res) => {
  if (process.env.production) {
    return res.status(403).json({ message: 'Forbidden' })
  }

  try {
    const data = {
      sections: xlsxToJson({
        filename: 'data/data.xlsx',
        worksheetName: 'Sections',
      }),
      submissions: xlsxToJson({
        filename: 'data/data.xlsx',
        worksheetName: 'Poster Presentations',
      }),
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
  }
}
