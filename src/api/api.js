
const BASE_URL = '/backend'

export const upload = async (endpoint) => {
  try {
    const response = await fetch(BASE_URL + endpoint)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}