/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateRoom: OnCreateRoomSubscription;
  onUpdateRoom: OnUpdateRoomSubscription;
  onDeleteRoom: OnDeleteRoomSubscription;
  onCreateSection: OnCreateSectionSubscription;
  onUpdateSection: OnUpdateSectionSubscription;
  onDeleteSection: OnDeleteSectionSubscription;
  onCreateCompany: OnCreateCompanySubscription;
  onUpdateCompany: OnUpdateCompanySubscription;
  onDeleteCompany: OnDeleteCompanySubscription;
  onCreateSensor: OnCreateSensorSubscription;
  onUpdateSensor: OnUpdateSensorSubscription;
  onDeleteSensor: OnDeleteSensorSubscription;
};

export type CreateRoomInput = {
  id?: string | null;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type ModelRoomConditionInput = {
  name?: ModelStringInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  humiditymi?: ModelFloatInput | null;
  humiditymax?: ModelFloatInput | null;
  currenttemp?: ModelFloatInput | null;
  currenthumidity?: ModelFloatInput | null;
  sectionname?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  sectionID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Room = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateRoomInput = {
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type DeleteRoomInput = {
  id: string;
  _version?: number | null;
};

export type CreateSectionInput = {
  id?: string | null;
  name?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSectionConditionInput | null> | null;
  or?: Array<ModelSectionConditionInput | null> | null;
  not?: ModelSectionConditionInput | null;
};

export type Section = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: ModelRoomConnection | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection";
  items: Array<Room | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateSectionInput = {
  id: string;
  name?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type DeleteSectionInput = {
  id: string;
  _version?: number | null;
};

export type CreateCompanyInput = {
  id?: string | null;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  _version?: number | null;
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null;
  registeredemail?: ModelStringInput | null;
  adminpass?: ModelStringInput | null;
  contactname?: ModelStringInput | null;
  contactnumber?: ModelStringInput | null;
  domainname?: ModelStringInput | null;
  highsecpin?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: ModelSensorConnection | null;
  CompanySection?: ModelSectionConnection | null;
  Rooms?: ModelRoomConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSensorConnection = {
  __typename: "ModelSensorConnection";
  items: Array<Sensor | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Sensor = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection";
  items: Array<Section | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateCompanyInput = {
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  _version?: number | null;
};

export type DeleteCompanyInput = {
  id: string;
  _version?: number | null;
};

export type CreateSensorInput = {
  id?: string | null;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  _version?: number | null;
};

export type ModelSensorConditionInput = {
  serialnumber?: ModelStringInput | null;
  remarks?: ModelStringInput | null;
  lastreadtemp?: ModelFloatInput | null;
  lastreadhumidity?: ModelFloatInput | null;
  lastreceivedon?: ModelIntInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSensorConditionInput | null> | null;
  or?: Array<ModelSensorConditionInput | null> | null;
  not?: ModelSensorConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateSensorInput = {
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  _version?: number | null;
};

export type DeleteSensorInput = {
  id: string;
  _version?: number | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  humiditymi?: ModelFloatInput | null;
  humiditymax?: ModelFloatInput | null;
  currenttemp?: ModelFloatInput | null;
  currenthumidity?: ModelFloatInput | null;
  sectionname?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  sectionID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSectionFilterInput | null> | null;
  or?: Array<ModelSectionFilterInput | null> | null;
  not?: ModelSectionFilterInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  registeredemail?: ModelStringInput | null;
  adminpass?: ModelStringInput | null;
  contactname?: ModelStringInput | null;
  contactnumber?: ModelStringInput | null;
  domainname?: ModelStringInput | null;
  highsecpin?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSensorFilterInput = {
  id?: ModelIDInput | null;
  serialnumber?: ModelStringInput | null;
  remarks?: ModelStringInput | null;
  lastreadtemp?: ModelFloatInput | null;
  lastreadhumidity?: ModelFloatInput | null;
  lastreceivedon?: ModelIntInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelSensorFilterInput | null> | null;
  or?: Array<ModelSensorFilterInput | null> | null;
  not?: ModelSensorFilterInput | null;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateSectionMutation = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSectionMutation = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteSectionMutation = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteSensorMutation = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    name?: string | null;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymi?: number | null;
    humiditymax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    sectionname?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    sectionID?: string | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    name?: string | null;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymi?: number | null;
    humiditymax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    sectionname?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    sectionID?: string | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetSectionQuery = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListSectionsQuery = {
  __typename: "ModelSectionConnection";
  items: Array<{
    __typename: "Section";
    id: string;
    name?: string | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncSectionsQuery = {
  __typename: "ModelSectionConnection";
  items: Array<{
    __typename: "Section";
    id: string;
    name?: string | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCompaniesQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name?: string | null;
    registeredemail?: string | null;
    adminpass?: string | null;
    contactname?: string | null;
    contactnumber?: string | null;
    domainname?: string | null;
    highsecpin?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCompaniesQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    name?: string | null;
    registeredemail?: string | null;
    adminpass?: string | null;
    contactname?: string | null;
    contactnumber?: string | null;
    domainname?: string | null;
    highsecpin?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetSensorQuery = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListSensorsQuery = {
  __typename: "ModelSensorConnection";
  items: Array<{
    __typename: "Sensor";
    id: string;
    serialnumber?: string | null;
    remarks?: string | null;
    lastreadtemp?: number | null;
    lastreadhumidity?: number | null;
    lastreceivedon?: number | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncSensorsQuery = {
  __typename: "ModelSensorConnection";
  items: Array<{
    __typename: "Sensor";
    id: string;
    serialnumber?: string | null;
    remarks?: string | null;
    lastreadtemp?: number | null;
    lastreadhumidity?: number | null;
    lastreceivedon?: number | null;
    companyID?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  sectionname?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  sectionID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateSectionSubscription = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateSectionSubscription = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteSectionSubscription = {
  __typename: "Section";
  id: string;
  name?: string | null;
  SectionRooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  name?: string | null;
  registeredemail?: string | null;
  adminpass?: string | null;
  contactname?: string | null;
  contactnumber?: string | null;
  domainname?: string | null;
  highsecpin?: string | null;
  CompanySensors?: {
    __typename: "ModelSensorConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  CompanySection?: {
    __typename: "ModelSectionConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Rooms?: {
    __typename: "ModelRoomConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteSensorSubscription = {
  __typename: "Sensor";
  id: string;
  serialnumber?: string | null;
  remarks?: string | null;
  lastreadtemp?: number | null;
  lastreadhumidity?: number | null;
  lastreceivedon?: number | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async CreateSection(
    input: CreateSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<CreateSectionMutation> {
    const statement = `mutation CreateSection($input: CreateSectionInput!, $condition: ModelSectionConditionInput) {
        createSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSectionMutation>response.data.createSection;
  }
  async UpdateSection(
    input: UpdateSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<UpdateSectionMutation> {
    const statement = `mutation UpdateSection($input: UpdateSectionInput!, $condition: ModelSectionConditionInput) {
        updateSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSectionMutation>response.data.updateSection;
  }
  async DeleteSection(
    input: DeleteSectionInput,
    condition?: ModelSectionConditionInput
  ): Promise<DeleteSectionMutation> {
    const statement = `mutation DeleteSection($input: DeleteSectionInput!, $condition: ModelSectionConditionInput) {
        deleteSection(input: $input, condition: $condition) {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSectionMutation>response.data.deleteSection;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateSensor(
    input: CreateSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<CreateSensorMutation> {
    const statement = `mutation CreateSensor($input: CreateSensorInput!, $condition: ModelSensorConditionInput) {
        createSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSensorMutation>response.data.createSensor;
  }
  async UpdateSensor(
    input: UpdateSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<UpdateSensorMutation> {
    const statement = `mutation UpdateSensor($input: UpdateSensorInput!, $condition: ModelSensorConditionInput) {
        updateSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSensorMutation>response.data.updateSensor;
  }
  async DeleteSensor(
    input: DeleteSensorInput,
    condition?: ModelSensorConditionInput
  ): Promise<DeleteSensorMutation> {
    const statement = `mutation DeleteSensor($input: DeleteSensorInput!, $condition: ModelSensorConditionInput) {
        deleteSensor(input: $input, condition: $condition) {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSensorMutation>response.data.deleteSensor;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            temperaturemin
            temperaturemax
            humiditymi
            humiditymax
            currenttemp
            currenthumidity
            sectionname
            sensors
            sensorsasstring
            sectionID
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  async SyncRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncRoomsQuery> {
    const statement = `query SyncRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncRooms(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            temperaturemin
            temperaturemax
            humiditymi
            humiditymax
            currenttemp
            currenthumidity
            sectionname
            sensors
            sensorsasstring
            sectionID
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncRoomsQuery>response.data.syncRooms;
  }
  async GetSection(id: string): Promise<GetSectionQuery> {
    const statement = `query GetSection($id: ID!) {
        getSection(id: $id) {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSectionQuery>response.data.getSection;
  }
  async ListSections(
    filter?: ModelSectionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSectionsQuery> {
    const statement = `query ListSections($filter: ModelSectionFilterInput, $limit: Int, $nextToken: String) {
        listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSectionsQuery>response.data.listSections;
  }
  async SyncSections(
    filter?: ModelSectionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSectionsQuery> {
    const statement = `query SyncSections($filter: ModelSectionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSections(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSectionsQuery>response.data.syncSections;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanies(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompaniesQuery> {
    const statement = `query ListCompanies($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            registeredemail
            adminpass
            contactname
            contactnumber
            domainname
            highsecpin
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompaniesQuery>response.data.listCompanies;
  }
  async SyncCompanies(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCompaniesQuery> {
    const statement = `query SyncCompanies($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCompanies(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            registeredemail
            adminpass
            contactname
            contactnumber
            domainname
            highsecpin
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCompaniesQuery>response.data.syncCompanies;
  }
  async GetSensor(id: string): Promise<GetSensorQuery> {
    const statement = `query GetSensor($id: ID!) {
        getSensor(id: $id) {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSensorQuery>response.data.getSensor;
  }
  async ListSensors(
    filter?: ModelSensorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSensorsQuery> {
    const statement = `query ListSensors($filter: ModelSensorFilterInput, $limit: Int, $nextToken: String) {
        listSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            serialnumber
            remarks
            lastreadtemp
            lastreadhumidity
            lastreceivedon
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSensorsQuery>response.data.listSensors;
  }
  async SyncSensors(
    filter?: ModelSensorFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSensorsQuery> {
    const statement = `query SyncSensors($filter: ModelSensorFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSensors(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            serialnumber
            remarks
            lastreadtemp
            lastreadhumidity
            lastreceivedon
            companyID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSensorsQuery>response.data.syncSensors;
  }
  OnCreateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRoom">>
  >;

  OnUpdateRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRoom">>
  >;

  OnDeleteRoomListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          sectionname
          sensors
          sensorsasstring
          sectionID
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRoom">>
  >;

  OnCreateSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSection {
        onCreateSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSection">>
  >;

  OnUpdateSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSection {
        onUpdateSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSection">>
  >;

  OnDeleteSectionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSection">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSection {
        onDeleteSection {
          __typename
          id
          name
          SectionRooms {
            __typename
            nextToken
            startedAt
          }
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSection">>
  >;

  OnCreateCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCompany">>
  >;

  OnUpdateCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCompany">>
  >;

  OnDeleteCompanyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCompany">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          name
          registeredemail
          adminpass
          contactname
          contactnumber
          domainname
          highsecpin
          CompanySensors {
            __typename
            nextToken
            startedAt
          }
          CompanySection {
            __typename
            nextToken
            startedAt
          }
          Rooms {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCompany">>
  >;

  OnCreateSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSensor {
        onCreateSensor {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSensor">>
  >;

  OnUpdateSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSensor {
        onUpdateSensor {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSensor">>
  >;

  OnDeleteSensorListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSensor">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSensor {
        onDeleteSensor {
          __typename
          id
          serialnumber
          remarks
          lastreadtemp
          lastreadhumidity
          lastreceivedon
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSensor">>
  >;
}
