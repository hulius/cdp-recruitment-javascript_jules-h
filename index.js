const { data: countries } = require('./data')  // we could use ESModules instead of CommonJS ones
const lib = require('./lib')

const helpDoc = `
  Usage
  -----

  --filter=FILTER   # filter out the countries which do not contain people with animal whose name matches the FILTER.
  --count           # for each parent (countries, people), count the number of children (people, animals)
`

function main() {
  const command = getCommand()
  if (command === '--count') {
    if (!isValid(countries)) 
      return
    print(lib.count(countries, command))
  }
  else if (command?.startsWith('--filter='))  {
    const query = command.substring(command.indexOf('=') + 1)
    if (!isValid(countries)) 
      return
    print(lib.filter(countries, query))
  }
  else
    console.log(helpDoc)
}

function getCommand() {
  return process.argv.at(2)
}

function isValid(data) {
  if (!lib.isValid(data)) {
    console.error('wrong data format')
    return false
  }
  return true
}

function print(data) {  
  console.dir(data, { depth: null })
}


main()