// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import XLSX from 'xlsx'

export default (req, res) => {
  const workbook = XLSX.readFile('data/submissions.xlsx')
  const sheets = workbook.SheetNames
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheets[0]])


  res.status(200).json(data)
}
