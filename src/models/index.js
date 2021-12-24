// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Room, Section, Company, Sensor } = initSchema(schema);

export {
  Room,
  Section,
  Company,
  Sensor
};