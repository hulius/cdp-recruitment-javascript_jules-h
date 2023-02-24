function isValid(data = []) {   // we could use zod or json-schema to have a cleaner/easier/more-bulletproof format check (and typescript types). 
  return Array.isArray(data) &&
    data.every(country =>
      Array.isArray(country.people) &&
      country.people.every(people =>
        Array.isArray(people.animals) &&
        people.animals.every(animal =>
          typeof animal?.name === 'string'
        )
      )
    )
}

function filter(data = [], query = '') {   // we could have used a recursive function, or a more generic one, but imperative – if short – can be clearer (some may argue).
  const countriesFilteredByAnimal = []
  for (const country of data) {
    const peopleFilteredByAnimal = []
    for (const person of country.people) {
        const filteredAnimals = person.animals.filter(animal => animal.name.includes(query))
        if (filteredAnimals.length === 0)
          continue
        else
          peopleFilteredByAnimal.push({
              ...person,    // in case person has more props than just {.name & .animals}
              animals: filteredAnimals,
          })
    }
    if (peopleFilteredByAnimal.length === 0)
      continue
    else
      countriesFilteredByAnimal.push({
        ...country,
        people: peopleFilteredByAnimal
      })
  }
  return countriesFilteredByAnimal
}


function count(data = []) {
  const countedCountries = structuredClone(data)   // deepcopy the data since we want to mutate it, to keep the function pure
  for (const country of countedCountries) {
    country.name = `${country.name} [${country.people.length}]`
    for (const person of country.people) {
      person.name = `${person.name} [${person.animals.length}]`
    }
  }
  return countedCountries
}

module.exports = {  // all functions are pure and have default parameters
  isValid,
  filter,
  count,
}