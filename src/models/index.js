// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Location, Locationtype, Company, Sensor } = initSchema(schema);

export {
  Location,
  Locationtype,
  Company,
  Sensor
};