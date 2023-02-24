import { describe, expect, test } from 'vitest'

const data = require('./data')
const lib = require('../lib')


test('validate format', () => {
  const areValid =  [
    data.filterInput,
    data.filterOutput,
    data.countInput,
    data.countOutput,
  ].map(input => lib.isValid(input))

  areValid.forEach(valid => expect(valid).toBeTruthy())
})


describe('filter', () => {

  test('main usecase', () => {
    const filteredData = lib.filter(data.filterInput, 'ry')
    expect(filteredData).toEqual(data.filterOutput)
  })

  test('order is preserved', () => {
    const filterInput = structuredClone(data.filterInput)

    const firstElement = { name: 'magic country 1', people: [ { name: 'sylvia', animals: [ { name: 'dorary' }] }] }
    const lastElement = { name: 'magic country 2', people: [ { name: 'sylvia', animals: [ { name: 'dorary' }] }] }
    filterInput.unshift(firstElement)
    filterInput.push(lastElement)

    const filteredData = lib.filter(filterInput, 'ry')

    expect(filteredData.at(0)).toEqual(firstElement)
    expect(filteredData.at(-1)).toEqual(lastElement)
  })

  test('no empty array in the filtered output', () => {
    const filterInput = structuredClone(data.filterInput)

    // we add input that could produce empty arrays in the ouput and test if the output remains unchanged
    filterInput.push({ name: 'magic country 1', people: [] })
    filterInput.push({ name: 'magic country 2', people: [ { name: 'alfred', animals: [] }] })
    filterInput.push({ name: 'magic country 3', people: [ { name: 'sylvia', animals: [ { name: 'dora' }] }] })

    const filteredData = lib.filter(filterInput, 'ry')

    expect(filteredData).toEqual(data.filterOutput)
  })

})

describe('count', () => {
  test('main usecase', () => {
    const countedData = lib.count(data.countInput)
    expect(countedData).toEqual(data.countOutput)
  })
})
