require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('applWvFfkoo9Dwke5')
  .table('products')


exports.handler = async (event, context, cb) => {
 try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const { Name, images, price,desc,featured,category,company,review,stars,stock,delivery,colors } = product.fields
      const url = images[0].url
      return { id, Name, url, price,desc,featured,category,company,review,stars,stock,delivery,colors }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
 
}