import fetch from 'node-fetch'
import * as faker from 'faker'
import chalk from 'chalk'

const changeOfHavingFirstName = 0.95
const cumulativeChanceOfHavingSecondName = 0.5
const cumulativeChangeOfHavingThirdName = 0.2
const femaleChance = 0.5
const recordsToAdd = 1000000
const concurrency = 20
const elasticDB = 'ocrvs-million'

function generateFirstNames() {
  const names = []

  if (Math.random() <= changeOfHavingFirstName) {
    names.push(faker.name.firstName())
    if (Math.random() <= cumulativeChanceOfHavingSecondName) {
      names.push(faker.name.firstName())
      if (Math.random() <= cumulativeChangeOfHavingThirdName) {
        names.push(faker.name.firstName())
      }
    }
  }

  return names
}

;(async () => {
  let recordsAdded = 0
  let outstandingRequests = 0
  while (recordsAdded + outstandingRequests < recordsToAdd) {
    if (outstandingRequests >= concurrency) {
      await new Promise(resolve => {
        setTimeout(resolve, 0)
      })
      continue
    }

    const gender = Math.random() > femaleChance ? 'm' : 'f'
    const lastName = faker.name.lastName()

    const body = {
      childFirstNames: generateFirstNames(),
      childFamilyName: lastName,
      childDoB: faker.date.between('2013-11-29', '2018-11-29'),
      gender,
      motherFirstNames: generateFirstNames(),
      motherFamilyNames: lastName,
      motherDoB: faker.date.between('1980-01-01', '2000-01-01'),
      motherIdentifier: faker.random.uuid(),
      fatherFirstNames: generateFirstNames(),
      fatherFamilyName: lastName,
      fatherDoB: faker.date.between('1980-01-01', '2000-01-01'),
      fatherIdentifier: faker.random.uuid()
    }

    fetch(`http://localhost:9200/${elasticDB}/_doc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        recordsAdded++
        outstandingRequests--

        if (recordsAdded % 1000 === 0) {
          console.log(
            `${chalk.green('Added')} ${chalk.yellow('' + recordsAdded)} records`
          )
        }
      })
      .catch(err => {
        console.error(err)
      })

    outstandingRequests++
  }
})()
