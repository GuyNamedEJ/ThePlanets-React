const getPlanet = async (term) =>{
    const response = await fetch(`/api/planets/${term}`)
    const json = await response.json()
    return json
  }

export default getPlanet