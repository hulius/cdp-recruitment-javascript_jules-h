// simpler data than the 'real' one.

const filterInput = [
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          { name: 'John Dory' },
          { name: 'Yellowjacket' },
        ]
      },
      {
        name: 'Lillian Calamandrei',
        animals: [
          { name: 'Rats' },
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people:
      [{
        name: 'Anthony Bruno',
        animals:
          [{ name: 'Caracal' },
          { name: 'Oryx' }]
      }]
  },
  {
    name: 'Duck',
    people:
      [{
        name: 'Jojo',
        animals:
          [{ name: 'Caracal' }]
      }]
  }
]


const filterOutput = [
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
]


const countInput = [
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          { name: 'John Dory' },
          { name: 'Alfred' },
          { name: 'Yellowjacket' },
        ]
      },
      {
        name: 'Lillian Calamandrei',
        animals: [
          { name: 'Rats' },
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people:
      [{
        name: 'Anthony Bruno',
        animals: []
      }]
  },
]


const countOutput = [
  {
    name: 'Uzuzozne [2]',
    people: [
      {
        name: 'Lillie Abbott [3]',
        animals: [
          { name: 'John Dory' },
          { name: 'Alfred' },
          { name: 'Yellowjacket' },
        ]
      },
      {
        name: 'Lillian Calamandrei [1]',
        animals: [
          { name: 'Rats' },
        ]
      }
    ]
  },
  {
    name: 'Satanwi [1]',
    people:
      [{
        name: 'Anthony Bruno [0]',
        animals: []
      }]
  },
]

module.exports = {
  countInput,
  countOutput,
  filterInput,
  filterOutput
}
