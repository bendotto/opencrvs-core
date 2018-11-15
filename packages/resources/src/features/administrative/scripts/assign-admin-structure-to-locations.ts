import {
  fetchAndComposeLocations,
  getLocationsByParentDivisions
} from './service'
import { logger } from '../../../logger'
import { internal } from 'boom'
import * as fs from 'fs'
import { ADMIN_STRUCTURE_SOURCE } from '../../../constants'

export default async function importAdminStructure() {
  let divisions: fhir.Location[]
  let districts: fhir.Location[]
  let upazilas: fhir.Location[]
  let thanas: fhir.Location[]
  let cities: fhir.Location[]
  let cityWards: fhir.Location[]
  let unions: fhir.Location[]
  let municipalities: fhir.Location[]
  let municipalityWards: fhir.Location[]

  try {
    logger.info('getting divisions')
    divisions = await fetchAndComposeLocations('division', '0')
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting districts')
    districts = await getLocationsByParentDivisions('district', divisions)
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting upazilas')
    upazilas = await getLocationsByParentDivisions('upazila', districts)
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting thanas')
    thanas = await getLocationsByParentDivisions('thana', districts)
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting cities')
    cities = await getLocationsByParentDivisions('citycorporation', districts)
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting city wards')
    cityWards = await getLocationsByParentDivisions(
      'citycorporationward',
      cities
    )
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting unions')
    unions = await getLocationsByParentDivisions('union', upazilas)
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting municipalities')
    municipalities = await getLocationsByParentDivisions(
      'municipality',
      upazilas
    )
  } catch (err) {
    return internal(err)
  }

  try {
    logger.info('getting municipality wards')
    municipalityWards = await getLocationsByParentDivisions(
      'municipalityward',
      municipalities
    )
  } catch (err) {
    return internal(err)
  }

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/divisions.json`,
    JSON.stringify({ divisions }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/districts.json`,
    JSON.stringify({ districts }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/upazilas.json`,
    JSON.stringify({ upazilas }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/thanas.json`,
    JSON.stringify({ thanas }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/cities.json`,
    JSON.stringify({ cities }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/cityWards.json`,
    JSON.stringify({ cityWards }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/unions.json`,
    JSON.stringify({ unions }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/municipalities.json`,
    JSON.stringify({ municipalities }, null, 2)
  )

  fs.writeFileSync(
    `${ADMIN_STRUCTURE_SOURCE}locations/municipalityWards.json`,
    JSON.stringify({ municipalityWards }, null, 2)
  )

  return true
}

importAdminStructure()