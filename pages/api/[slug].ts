// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setProducts } from 'redux/reducers/app'
import { extractSheets } from 'spreadsheet-to-json'
import { Category, googlesheetData } from 'types'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY!, 'base64').toString()
  )

  extractSheets(
    {
      // your google spreadsheet key
      spreadsheetKey: process.env.SHEET_KEY,
      // your google oauth2 credentials or API_KEY
      credentials,
      // optional: names of the sheets you want to extract
      sheetsToExtract: ['slugs'],
    },
    function (err: any, data: googlesheetData) {
      console.log({ data })
      res.status(200).json({ data })
      const products = data.products.map(product=>{
        const slug = data.slugs.find(s=>{
            s.id === product.slugId
        } )
      })
    //   return slug
     
    }
  )
}
