const getOptions = async () => {
  try {
    const response = await fetch('/api')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default { getOptions }
