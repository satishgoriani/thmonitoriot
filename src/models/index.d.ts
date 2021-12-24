import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SensorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Room {
  readonly id: string;
  readonly name?: string;
  readonly temperaturemin?: number;
  readonly temperaturemax?: number;
  readonly humiditymi?: number;
  readonly humiditymax?: number;
  readonly currenttemp?: number;
  readonly currenthumidity?: number;
  readonly sectionname?: string;
  readonly sensors?: (string | null)[];
  readonly sensorsasstring?: string;
  readonly sectionID?: string;
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Room, RoomMetaData>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}

export declare class Section {
  readonly id: string;
  readonly name?: string;
  readonly SectionRooms?: (Room | null)[];
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Section, SectionMetaData>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section, SectionMetaData>) => MutableModel<Section, SectionMetaData> | void): Section;
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
  readonly CompanySection?: (Section | null)[];
  readonly Rooms?: (Room | null)[];
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