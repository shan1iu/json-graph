export const getValidJson = (json: any) => {
  try {
    return JSON.parse(json)
  } catch (err) {
    return null
  }
}


// parse
// const nodeParser = (json) => {

// }
