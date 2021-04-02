import camelCase from 'lodash.camelcase'
import XLSX from 'xlsx'

export const xlsxToJson = ({ filename, worksheetName }) => {
    const workbook = XLSX.readFile(filename)
    const worksheet = workbook.Sheets[worksheetName]
    const results = XLSX.utils.sheet_to_json(worksheet)
    return results.map(result => Object.keys(result).reduce((previous, current) => ({
      ...previous,
      [camelCase(current)]: result[current],
    }), {}))
}
