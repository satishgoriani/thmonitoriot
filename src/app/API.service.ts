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
  onCreateLocation: OnCreateLocationSubscription;
  onUpdateLocation: OnUpdateLocationSubscription;
  onDeleteLocation: OnDeleteLocationSubscription;
  onCreateLocationtype: OnCreateLocationtypeSubscription;
  onUpdateLocationtype: OnUpdateLocationtypeSubscription;
  onDeleteLocationtype: OnDeleteLocationtypeSubscription;
  onCreateCompany: OnCreateCompanySubscription;
  onUpdateCompany: OnUpdateCompanySubscription;
  onDeleteCompany: OnDeleteCompanySubscription;
  onCreateSensor: OnCreateSensorSubscription;
  onUpdateSensor: OnUpdateSensorSubscription;
  onDeleteSensor: OnDeleteSensorSubscription;
};

export type CreateLocationInput = {
  id?: string | null;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type ModelLocationConditionInput = {
  name?: ModelStringInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  humiditymi?: ModelFloatInput | null;
  humiditymax?: ModelFloatInput | null;
  currenttemp?: ModelFloatInput | null;
  currenthumidity?: ModelFloatInput | null;
  locationtypename?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  locationtypeID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
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

export type Location = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationInput = {
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type DeleteLocationInput = {
  id: string;
  _version?: number | null;
};

export type CreateLocationtypeInput = {
  id?: string | null;
  name?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type ModelLocationtypeConditionInput = {
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelLocationtypeConditionInput | null> | null;
  or?: Array<ModelLocationtypeConditionInput | null> | null;
  not?: ModelLocationtypeConditionInput | null;
};

export type Locationtype = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: ModelLocationConnection | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection";
  items: Array<Location | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateLocationtypeInput = {
  id: string;
  name?: string | null;
  companyID?: string | null;
  _version?: number | null;
};

export type DeleteLocationtypeInput = {
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
  CompanyLocationtype?: ModelLocationtypeConnection | null;
  Locations?: ModelLocationConnection | null;
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

export type ModelLocationtypeConnection = {
  __typename: "ModelLocationtypeConnection";
  items: Array<Locationtype | null>;
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

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  temperaturemin?: ModelFloatInput | null;
  temperaturemax?: ModelFloatInput | null;
  humiditymi?: ModelFloatInput | null;
  humiditymax?: ModelFloatInput | null;
  currenttemp?: ModelFloatInput | null;
  currenthumidity?: ModelFloatInput | null;
  locationtypename?: ModelStringInput | null;
  sensors?: ModelStringInput | null;
  sensorsasstring?: ModelStringInput | null;
  locationtypeID?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelLocationtypeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelLocationtypeFilterInput | null> | null;
  or?: Array<ModelLocationtypeFilterInput | null> | null;
  not?: ModelLocationtypeFilterInput | null;
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

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateLocationtypeMutation = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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

export type UpdateLocationtypeMutation = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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

export type DeleteLocationtypeMutation = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    name?: string | null;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymi?: number | null;
    humiditymax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    locationtypename?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    locationtypeID?: string | null;
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

export type SyncLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    name?: string | null;
    temperaturemin?: number | null;
    temperaturemax?: number | null;
    humiditymi?: number | null;
    humiditymax?: number | null;
    currenttemp?: number | null;
    currenthumidity?: number | null;
    locationtypename?: string | null;
    sensors?: Array<string | null> | null;
    sensorsasstring?: string | null;
    locationtypeID?: string | null;
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

export type GetLocationtypeQuery = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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

export type ListLocationtypesQuery = {
  __typename: "ModelLocationtypeConnection";
  items: Array<{
    __typename: "Locationtype";
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

export type SyncLocationtypesQuery = {
  __typename: "ModelLocationtypeConnection";
  items: Array<{
    __typename: "Locationtype";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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

export type CompanyByEmailQuery = {
  __typename: "ModelCompanyConnection";
  items?: Array<{
    __typename: "Company";
    id: string;
    name: string;
    registeredemail?: string | null;
    adminpass?: string | null;
    domainname?: string | null;
    highsecpin?: string | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    CompanyLocationtypes?: {
      __typename: "ModelLocationtypeConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null> | null;
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

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  name?: string | null;
  temperaturemin?: number | null;
  temperaturemax?: number | null;
  humiditymi?: number | null;
  humiditymax?: number | null;
  currenttemp?: number | null;
  currenthumidity?: number | null;
  locationtypename?: string | null;
  sensors?: Array<string | null> | null;
  sensorsasstring?: string | null;
  locationtypeID?: string | null;
  companyID?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateLocationtypeSubscription = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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

export type OnUpdateLocationtypeSubscription = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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

export type OnDeleteLocationtypeSubscription = {
  __typename: "Locationtype";
  id: string;
  name?: string | null;
  LocationtypeLocations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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
  CompanyLocationtype?: {
    __typename: "ModelLocationtypeConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  Locations?: {
    __typename: "ModelLocationConnection";
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
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateLocationtype(
    input: CreateLocationtypeInput,
    condition?: ModelLocationtypeConditionInput
  ): Promise<CreateLocationtypeMutation> {
    const statement = `mutation CreateLocationtype($input: CreateLocationtypeInput!, $condition: ModelLocationtypeConditionInput) {
        createLocationtype(input: $input, condition: $condition) {
          __typename
          id
          name
          LocationtypeLocations {
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
    return <CreateLocationtypeMutation>response.data.createLocationtype;
  }
  async UpdateLocationtype(
    input: UpdateLocationtypeInput,
    condition?: ModelLocationtypeConditionInput
  ): Promise<UpdateLocationtypeMutation> {
    const statement = `mutation UpdateLocationtype($input: UpdateLocationtypeInput!, $condition: ModelLocationtypeConditionInput) {
        updateLocationtype(input: $input, condition: $condition) {
          __typename
          id
          name
          LocationtypeLocations {
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
    return <UpdateLocationtypeMutation>response.data.updateLocationtype;
  }
  async DeleteLocationtype(
    input: DeleteLocationtypeInput,
    condition?: ModelLocationtypeConditionInput
  ): Promise<DeleteLocationtypeMutation> {
    const statement = `mutation DeleteLocationtype($input: DeleteLocationtypeInput!, $condition: ModelLocationtypeConditionInput) {
        deleteLocationtype(input: $input, condition: $condition) {
          __typename
          id
          name
          LocationtypeLocations {
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
    return <DeleteLocationtypeMutation>response.data.deleteLocationtype;
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            locationtypename
            sensors
            sensorsasstring
            locationtypeID
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
    return <ListLocationsQuery>response.data.listLocations;
  }
  async SyncLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLocationsQuery> {
    const statement = `query SyncLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLocations(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
            locationtypename
            sensors
            sensorsasstring
            locationtypeID
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
    return <SyncLocationsQuery>response.data.syncLocations;
  }
  async GetLocationtype(id: string): Promise<GetLocationtypeQuery> {
    const statement = `query GetLocationtype($id: ID!) {
        getLocationtype(id: $id) {
          __typename
          id
          name
          LocationtypeLocations {
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
    return <GetLocationtypeQuery>response.data.getLocationtype;
  }
  async ListLocationtypes(
    filter?: ModelLocationtypeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationtypesQuery> {
    const statement = `query ListLocationtypes($filter: ModelLocationtypeFilterInput, $limit: Int, $nextToken: String) {
        listLocationtypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListLocationtypesQuery>response.data.listLocationtypes;
  }
  async SyncLocationtypes(
    filter?: ModelLocationtypeFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncLocationtypesQuery> {
    const statement = `query SyncLocationtypes($filter: ModelLocationtypeFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncLocationtypes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
    return <SyncLocationtypesQuery>response.data.syncLocationtypes;
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
  OnCreateLocationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation {
        onCreateLocation {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocation">>
  >;

  OnUpdateLocationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation {
        onUpdateLocation {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocation">>
  >;

  OnDeleteLocationListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation {
        onDeleteLocation {
          __typename
          id
          name
          temperaturemin
          temperaturemax
          humiditymi
          humiditymax
          currenttemp
          currenthumidity
          locationtypename
          sensors
          sensorsasstring
          locationtypeID
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocation">>
  >;

  OnCreateLocationtypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocationtype">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocationtype {
        onCreateLocationtype {
          __typename
          id
          name
          LocationtypeLocations {
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLocationtype">>
  >;

  OnUpdateLocationtypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocationtype">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocationtype {
        onUpdateLocationtype {
          __typename
          id
          name
          LocationtypeLocations {
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLocationtype">>
  >;

  OnDeleteLocationtypeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocationtype">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocationtype {
        onDeleteLocationtype {
          __typename
          id
          name
          LocationtypeLocations {
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
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLocationtype">>
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
          CompanyLocationtype {
            __typename
            nextToken
            startedAt
          }
          Locations {
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
