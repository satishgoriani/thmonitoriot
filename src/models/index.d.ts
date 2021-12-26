import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationtypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SensorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Location {
  readonly id: string;
  readonly name?: string;
  readonly temperaturemin?: number;
  readonly temperaturemax?: number;
  readonly humiditymi?: number;
  readonly humiditymax?: number;
  readonly currenttemp?: number;
  readonly currenthumidity?: number;
  readonly locationtypename?: string;
  readonly sensors?: (string | null)[];
  readonly sensorsasstring?: string;
  readonly locationtypeID?: string;
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Locationtype {
  readonly id: string;
  readonly name?: string;
  readonly LocationtypeLocations?: (Location | null)[];
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Locationtype, LocationtypeMetaData>);
  static copyOf(source: Locationtype, mutator: (draft: MutableModel<Locationtype, LocationtypeMetaData>) => MutableModel<Locationtype, LocationtypeMetaData> | void): Locationtype;
}

export declare class Company {
  readonly id: string;
  readonly name?: string;
  readonly registeredemail?: string;
  readonly adminpass?: string;
  readonly contactname?: string;
  readonly contactnumber?: string;
  readonly domainname?: string;
  readonly highsecpin?: string;
  readonly CompanySensors?: (Sensor | null)[];
  readonly CompanyLocationtype?: (Locationtype | null)[];
  readonly Locations?: (Location | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

export declare class Sensor {
  readonly id: string;
  readonly serialnumber?: string;
  readonly remarks?: string;
  readonly lastreadtemp?: number;
  readonly lastreadhumidity?: number;
  readonly lastreceivedon?: number;
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sensor, SensorMetaData>);
  static copyOf(source: Sensor, mutator: (draft: MutableModel<Sensor, SensorMetaData>) => MutableModel<Sensor, SensorMetaData> | void): Sensor;
}