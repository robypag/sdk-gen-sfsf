/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserPermissionsRequestBuilder } from './UserPermissionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserPermissions" of service "SFOData".
 */
export class UserPermissions extends Entity implements UserPermissionsType {
  /**
   * Technical entity name for UserPermissions.
   */
  static _entityName = 'UserPermissions';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserPermissions.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * addressLine1.
   * @nullable
   */
  addressLine1?: number;
  /**
   * addressLine2.
   * @nullable
   */
  addressLine2?: number;
  /**
   * addressLine3.
   * @nullable
   */
  addressLine3?: number;
  /**
   * benchStrength.
   * @nullable
   */
  benchStrength?: number;
  /**
   * benchStrengthNav.
   * @nullable
   */
  benchStrengthNav?: number;
  /**
   * businessPhone.
   * @nullable
   */
  businessPhone?: number;
  /**
   * businessSegment.
   * @nullable
   */
  businessSegment?: number;
  /**
   * businessSegmentNav.
   * @nullable
   */
  businessSegmentNav?: number;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: number;
  /**
   * citizenship.
   * @nullable
   */
  citizenship?: number;
  /**
   * city.
   * @nullable
   */
  city?: number;
  /**
   * competency.
   * @nullable
   */
  competency?: number;
  /**
   * competencyRatingNav.
   * @nullable
   */
  competencyRatingNav?: number;
  /**
   * country.
   * @nullable
   */
  country?: number;
  /**
   * custom01.
   * @nullable
   */
  custom01?: number;
  /**
   * custom02.
   * @nullable
   */
  custom02?: number;
  /**
   * custom03.
   * @nullable
   */
  custom03?: number;
  /**
   * custom04.
   * @nullable
   */
  custom04?: number;
  /**
   * custom05.
   * @nullable
   */
  custom05?: number;
  /**
   * custom05Nav.
   * @nullable
   */
  custom05Nav?: number;
  /**
   * custom06.
   * @nullable
   */
  custom06?: number;
  /**
   * custom07.
   * @nullable
   */
  custom07?: number;
  /**
   * custom08.
   * @nullable
   */
  custom08?: number;
  /**
   * custom09.
   * @nullable
   */
  custom09?: number;
  /**
   * custom10.
   * @nullable
   */
  custom10?: number;
  /**
   * custom11.
   * @nullable
   */
  custom11?: number;
  /**
   * custom12.
   * @nullable
   */
  custom12?: number;
  /**
   * custom13.
   * @nullable
   */
  custom13?: number;
  /**
   * custom14.
   * @nullable
   */
  custom14?: number;
  /**
   * custom15.
   * @nullable
   */
  custom15?: number;
  /**
   * customManager.
   * @nullable
   */
  customManager?: number;
  /**
   * customReports.
   * @nullable
   */
  customReports?: number;
  /**
   * dateOfBirth.
   * @nullable
   */
  dateOfBirth?: number;
  /**
   * dateOfPosition.
   * @nullable
   */
  dateOfPosition?: number;
  /**
   * defaultFullName.
   * @nullable
   */
  defaultFullName?: number;
  /**
   * defaultLocale.
   * @nullable
   */
  defaultLocale?: number;
  /**
   * department.
   * @nullable
   */
  department?: number;
  /**
   * directReports.
   * @nullable
   */
  directReports?: number;
  /**
   * division.
   * @nullable
   */
  division?: number;
  /**
   * dummyNominationNav.
   * @nullable
   */
  dummyNominationNav?: number;
  /**
   * email.
   * @nullable
   */
  email?: number;
  /**
   * empId.
   * @nullable
   */
  empId?: number;
  /**
   * empInfo.
   * @nullable
   */
  empInfo?: number;
  /**
   * ethnicity.
   * @nullable
   */
  ethnicity?: number;
  /**
   * ethnicityNav.
   * @nullable
   */
  ethnicityNav?: number;
  /**
   * fax.
   * @nullable
   */
  fax?: number;
  /**
   * firstName.
   * @nullable
   */
  firstName?: number;
  /**
   * futureLeader.
   * @nullable
   */
  futureLeader?: number;
  /**
   * gender.
   * @nullable
   */
  gender?: number;
  /**
   * hireDate.
   * @nullable
   */
  hireDate?: number;
  /**
   * homePhone.
   * @nullable
   */
  homePhone?: number;
  /**
   * hr.
   * @nullable
   */
  hr?: number;
  /**
   * hrReports.
   * @nullable
   */
  hrReports?: number;
  /**
   * impactOfLoss.
   * @nullable
   */
  impactOfLoss?: number;
  /**
   * impactOfLossNav.
   * @nullable
   */
  impactOfLossNav?: number;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: number;
  /**
   * keyPosition.
   * @nullable
   */
  keyPosition?: number;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: number;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: number;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: number;
  /**
   * lastName.
   * @nullable
   */
  lastName?: number;
  /**
   * lastReviewDate.
   * @nullable
   */
  lastReviewDate?: number;
  /**
   * level.
   * @nullable
   */
  level?: number;
  /**
   * location.
   * @nullable
   */
  location?: number;
  /**
   * manager.
   * @nullable
   */
  manager?: number;
  /**
   * married.
   * @nullable
   */
  married?: number;
  /**
   * matrix1Label.
   * @nullable
   */
  matrix1Label?: number;
  /**
   * matrix2Label.
   * @nullable
   */
  matrix2Label?: number;
  /**
   * matrixManaged.
   * @nullable
   */
  matrixManaged?: number;
  /**
   * matrixManager.
   * @nullable
   */
  matrixManager?: number;
  /**
   * matrixReports.
   * @nullable
   */
  matrixReports?: number;
  /**
   * mi.
   * @nullable
   */
  mi?: number;
  /**
   * minority.
   * @nullable
   */
  minority?: number;
  /**
   * nationality.
   * @nullable
   */
  nationality?: number;
  /**
   * newToPosition.
   * @nullable
   */
  newToPosition?: number;
  /**
   * nickname.
   * @nullable
   */
  nickname?: number;
  /**
   * nominationNav.
   * @nullable
   */
  nominationNav?: number;
  /**
   * objective.
   * @nullable
   */
  objective?: number;
  /**
   * onboardingId.
   * @nullable
   */
  onboardingId?: number;
  /**
   * password.
   * @nullable
   */
  password?: number;
  /**
   * performance.
   * @nullable
   */
  performance?: number;
  /**
   * potential.
   * @nullable
   */
  potential?: number;
  /**
   * proxy.
   * @nullable
   */
  proxy?: number;
  /**
   * reasonForLeaving.
   * @nullable
   */
  reasonForLeaving?: number;
  /**
   * reasonForLeavingNav.
   * @nullable
   */
  reasonForLeavingNav?: number;
  /**
   * reviewFreq.
   * @nullable
   */
  reviewFreq?: number;
  /**
   * riskOfLoss.
   * @nullable
   */
  riskOfLoss?: number;
  /**
   * riskOfLossNav.
   * @nullable
   */
  riskOfLossNav?: number;
  /**
   * sciLastModified.
   * @nullable
   */
  sciLastModified?: number;
  /**
   * secondManager.
   * @nullable
   */
  secondManager?: number;
  /**
   * secondReports.
   * @nullable
   */
  secondReports?: number;
  /**
   * serviceDate.
   * @nullable
   */
  serviceDate?: number;
  /**
   * ssn.
   * @nullable
   */
  ssn?: number;
  /**
   * state.
   * @nullable
   */
  state?: number;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * suffix.
   * @nullable
   */
  suffix?: number;
  /**
   * talentPool.
   * @nullable
   */
  talentPool?: number;
  /**
   * talentPoolNav.
   * @nullable
   */
  talentPoolNav?: number;
  /**
   * teamMembersSize.
   * @nullable
   */
  teamMembersSize?: number;
  /**
   * timeZone.
   * @nullable
   */
  timeZone?: number;
  /**
   * title.
   * @nullable
   */
  title?: number;
  /**
   * totalTeamSize.
   * @nullable
   */
  totalTeamSize?: number;
  /**
   * userId.
   */
  userId!: number;
  /**
   * userPermissionsNav.
   * @nullable
   */
  userPermissionsNav?: number;
  /**
   * username.
   * @nullable
   */
  username?: number;
  /**
   * zipCode.
   * @nullable
   */
  zipCode?: number;

  /**
   * Returns an entity builder to construct instances `UserPermissions`.
   * @returns A builder that constructs instances of entity type `UserPermissions`.
   */
  static builder(): EntityBuilderType<UserPermissions, UserPermissionsTypeForceMandatory> {
    return Entity.entityBuilder(UserPermissions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserPermissions` entity type.
   * @returns A `UserPermissions` request builder.
   */
  static requestBuilder(): UserPermissionsRequestBuilder {
    return new UserPermissionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserPermissions`.
   */
  static customField(fieldName: string): CustomField<UserPermissions> {
    return Entity.customFieldSelector(fieldName, UserPermissions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface UserPermissionsType {
  addressLine1?: number;
  addressLine2?: number;
  addressLine3?: number;
  benchStrength?: number;
  benchStrengthNav?: number;
  businessPhone?: number;
  businessSegment?: number;
  businessSegmentNav?: number;
  cellPhone?: number;
  citizenship?: number;
  city?: number;
  competency?: number;
  competencyRatingNav?: number;
  country?: number;
  custom01?: number;
  custom02?: number;
  custom03?: number;
  custom04?: number;
  custom05?: number;
  custom05Nav?: number;
  custom06?: number;
  custom07?: number;
  custom08?: number;
  custom09?: number;
  custom10?: number;
  custom11?: number;
  custom12?: number;
  custom13?: number;
  custom14?: number;
  custom15?: number;
  customManager?: number;
  customReports?: number;
  dateOfBirth?: number;
  dateOfPosition?: number;
  defaultFullName?: number;
  defaultLocale?: number;
  department?: number;
  directReports?: number;
  division?: number;
  dummyNominationNav?: number;
  email?: number;
  empId?: number;
  empInfo?: number;
  ethnicity?: number;
  ethnicityNav?: number;
  fax?: number;
  firstName?: number;
  futureLeader?: number;
  gender?: number;
  hireDate?: number;
  homePhone?: number;
  hr?: number;
  hrReports?: number;
  impactOfLoss?: number;
  impactOfLossNav?: number;
  jobCode?: number;
  keyPosition?: number;
  lastModified?: number;
  lastModifiedDateTime?: number;
  lastModifiedWithTz?: number;
  lastName?: number;
  lastReviewDate?: number;
  level?: number;
  location?: number;
  manager?: number;
  married?: number;
  matrix1Label?: number;
  matrix2Label?: number;
  matrixManaged?: number;
  matrixManager?: number;
  matrixReports?: number;
  mi?: number;
  minority?: number;
  nationality?: number;
  newToPosition?: number;
  nickname?: number;
  nominationNav?: number;
  objective?: number;
  onboardingId?: number;
  password?: number;
  performance?: number;
  potential?: number;
  proxy?: number;
  reasonForLeaving?: number;
  reasonForLeavingNav?: number;
  reviewFreq?: number;
  riskOfLoss?: number;
  riskOfLossNav?: number;
  sciLastModified?: number;
  secondManager?: number;
  secondReports?: number;
  serviceDate?: number;
  ssn?: number;
  state?: number;
  status?: number;
  suffix?: number;
  talentPool?: number;
  talentPoolNav?: number;
  teamMembersSize?: number;
  timeZone?: number;
  title?: number;
  totalTeamSize?: number;
  userId: number;
  userPermissionsNav?: number;
  username?: number;
  zipCode?: number;
}

export interface UserPermissionsTypeForceMandatory {
  addressLine1: number;
  addressLine2: number;
  addressLine3: number;
  benchStrength: number;
  benchStrengthNav: number;
  businessPhone: number;
  businessSegment: number;
  businessSegmentNav: number;
  cellPhone: number;
  citizenship: number;
  city: number;
  competency: number;
  competencyRatingNav: number;
  country: number;
  custom01: number;
  custom02: number;
  custom03: number;
  custom04: number;
  custom05: number;
  custom05Nav: number;
  custom06: number;
  custom07: number;
  custom08: number;
  custom09: number;
  custom10: number;
  custom11: number;
  custom12: number;
  custom13: number;
  custom14: number;
  custom15: number;
  customManager: number;
  customReports: number;
  dateOfBirth: number;
  dateOfPosition: number;
  defaultFullName: number;
  defaultLocale: number;
  department: number;
  directReports: number;
  division: number;
  dummyNominationNav: number;
  email: number;
  empId: number;
  empInfo: number;
  ethnicity: number;
  ethnicityNav: number;
  fax: number;
  firstName: number;
  futureLeader: number;
  gender: number;
  hireDate: number;
  homePhone: number;
  hr: number;
  hrReports: number;
  impactOfLoss: number;
  impactOfLossNav: number;
  jobCode: number;
  keyPosition: number;
  lastModified: number;
  lastModifiedDateTime: number;
  lastModifiedWithTz: number;
  lastName: number;
  lastReviewDate: number;
  level: number;
  location: number;
  manager: number;
  married: number;
  matrix1Label: number;
  matrix2Label: number;
  matrixManaged: number;
  matrixManager: number;
  matrixReports: number;
  mi: number;
  minority: number;
  nationality: number;
  newToPosition: number;
  nickname: number;
  nominationNav: number;
  objective: number;
  onboardingId: number;
  password: number;
  performance: number;
  potential: number;
  proxy: number;
  reasonForLeaving: number;
  reasonForLeavingNav: number;
  reviewFreq: number;
  riskOfLoss: number;
  riskOfLossNav: number;
  sciLastModified: number;
  secondManager: number;
  secondReports: number;
  serviceDate: number;
  ssn: number;
  state: number;
  status: number;
  suffix: number;
  talentPool: number;
  talentPoolNav: number;
  teamMembersSize: number;
  timeZone: number;
  title: number;
  totalTeamSize: number;
  userId: number;
  userPermissionsNav: number;
  username: number;
  zipCode: number;
}

export namespace UserPermissions {
  /**
   * Static representation of the [[addressLine1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_1: NumberField<UserPermissions> = new NumberField('addressLine1', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[addressLine2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_2: NumberField<UserPermissions> = new NumberField('addressLine2', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[addressLine3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_3: NumberField<UserPermissions> = new NumberField('addressLine3', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[benchStrength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENCH_STRENGTH: NumberField<UserPermissions> = new NumberField('benchStrength', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[benchStrengthNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENCH_STRENGTH_NAV: NumberField<UserPermissions> = new NumberField('benchStrengthNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PHONE: NumberField<UserPermissions> = new NumberField('businessPhone', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[businessSegment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_SEGMENT: NumberField<UserPermissions> = new NumberField('businessSegment', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[businessSegmentNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_SEGMENT_NAV: NumberField<UserPermissions> = new NumberField('businessSegmentNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: NumberField<UserPermissions> = new NumberField('cellPhone', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[citizenship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITIZENSHIP: NumberField<UserPermissions> = new NumberField('citizenship', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: NumberField<UserPermissions> = new NumberField('city', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: NumberField<UserPermissions> = new NumberField('competency', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[competencyRatingNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_RATING_NAV: NumberField<UserPermissions> = new NumberField('competencyRatingNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: NumberField<UserPermissions> = new NumberField('country', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom01]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_01: NumberField<UserPermissions> = new NumberField('custom01', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom02]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_02: NumberField<UserPermissions> = new NumberField('custom02', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom03]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_03: NumberField<UserPermissions> = new NumberField('custom03', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom04]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_04: NumberField<UserPermissions> = new NumberField('custom04', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom05]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_05: NumberField<UserPermissions> = new NumberField('custom05', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom05Nav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_05_NAV: NumberField<UserPermissions> = new NumberField('custom05Nav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom06]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_06: NumberField<UserPermissions> = new NumberField('custom06', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom07]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_07: NumberField<UserPermissions> = new NumberField('custom07', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom08]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_08: NumberField<UserPermissions> = new NumberField('custom08', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom09]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_09: NumberField<UserPermissions> = new NumberField('custom09', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_10: NumberField<UserPermissions> = new NumberField('custom10', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_11: NumberField<UserPermissions> = new NumberField('custom11', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_12: NumberField<UserPermissions> = new NumberField('custom12', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_13: NumberField<UserPermissions> = new NumberField('custom13', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_14: NumberField<UserPermissions> = new NumberField('custom14', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[custom15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_15: NumberField<UserPermissions> = new NumberField('custom15', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[customManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_MANAGER: NumberField<UserPermissions> = new NumberField('customManager', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[customReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_REPORTS: NumberField<UserPermissions> = new NumberField('customReports', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_BIRTH: NumberField<UserPermissions> = new NumberField('dateOfBirth', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[dateOfPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_POSITION: NumberField<UserPermissions> = new NumberField('dateOfPosition', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[defaultFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_FULL_NAME: NumberField<UserPermissions> = new NumberField('defaultFullName', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[defaultLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LOCALE: NumberField<UserPermissions> = new NumberField('defaultLocale', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: NumberField<UserPermissions> = new NumberField('department', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[directReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIRECT_REPORTS: NumberField<UserPermissions> = new NumberField('directReports', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: NumberField<UserPermissions> = new NumberField('division', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[dummyNominationNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUMMY_NOMINATION_NAV: NumberField<UserPermissions> = new NumberField('dummyNominationNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[email]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL: NumberField<UserPermissions> = new NumberField('email', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[empId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_ID: NumberField<UserPermissions> = new NumberField('empId', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[empInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_INFO: NumberField<UserPermissions> = new NumberField('empInfo', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[ethnicity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ETHNICITY: NumberField<UserPermissions> = new NumberField('ethnicity', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[ethnicityNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ETHNICITY_NAV: NumberField<UserPermissions> = new NumberField('ethnicityNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: NumberField<UserPermissions> = new NumberField('fax', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: NumberField<UserPermissions> = new NumberField('firstName', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[futureLeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUTURE_LEADER: NumberField<UserPermissions> = new NumberField('futureLeader', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: NumberField<UserPermissions> = new NumberField('gender', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[hireDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRE_DATE: NumberField<UserPermissions> = new NumberField('hireDate', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: NumberField<UserPermissions> = new NumberField('homePhone', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[hr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HR: NumberField<UserPermissions> = new NumberField('hr', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[hrReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HR_REPORTS: NumberField<UserPermissions> = new NumberField('hrReports', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[impactOfLoss]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPACT_OF_LOSS: NumberField<UserPermissions> = new NumberField('impactOfLoss', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[impactOfLossNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPACT_OF_LOSS_NAV: NumberField<UserPermissions> = new NumberField('impactOfLossNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: NumberField<UserPermissions> = new NumberField('jobCode', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[keyPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_POSITION: NumberField<UserPermissions> = new NumberField('keyPosition', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: NumberField<UserPermissions> = new NumberField('lastModified', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: NumberField<UserPermissions> = new NumberField('lastModifiedDateTime', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_WITH_TZ: NumberField<UserPermissions> = new NumberField('lastModifiedWithTZ', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: NumberField<UserPermissions> = new NumberField('lastName', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[lastReviewDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_REVIEW_DATE: NumberField<UserPermissions> = new NumberField('lastReviewDate', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: NumberField<UserPermissions> = new NumberField('level', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: NumberField<UserPermissions> = new NumberField('location', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[manager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER: NumberField<UserPermissions> = new NumberField('manager', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[married]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARRIED: NumberField<UserPermissions> = new NumberField('married', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[matrix1Label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_1_LABEL: NumberField<UserPermissions> = new NumberField('matrix1Label', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[matrix2Label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_2_LABEL: NumberField<UserPermissions> = new NumberField('matrix2Label', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[matrixManaged]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_MANAGED: NumberField<UserPermissions> = new NumberField('matrixManaged', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[matrixManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_MANAGER: NumberField<UserPermissions> = new NumberField('matrixManager', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[matrixReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_REPORTS: NumberField<UserPermissions> = new NumberField('matrixReports', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[mi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MI: NumberField<UserPermissions> = new NumberField('mi', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[minority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINORITY: NumberField<UserPermissions> = new NumberField('minority', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[nationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONALITY: NumberField<UserPermissions> = new NumberField('nationality', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[newToPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_TO_POSITION: NumberField<UserPermissions> = new NumberField('newToPosition', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[nickname]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NICKNAME: NumberField<UserPermissions> = new NumberField('nickname', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[nominationNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATION_NAV: NumberField<UserPermissions> = new NumberField('nominationNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[objective]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVE: NumberField<UserPermissions> = new NumberField('objective', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[onboardingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_ID: NumberField<UserPermissions> = new NumberField('onboardingId', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: NumberField<UserPermissions> = new NumberField('password', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[performance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERFORMANCE: NumberField<UserPermissions> = new NumberField('performance', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[potential]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POTENTIAL: NumberField<UserPermissions> = new NumberField('potential', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[proxy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROXY: NumberField<UserPermissions> = new NumberField('proxy', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[reasonForLeaving]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_FOR_LEAVING: NumberField<UserPermissions> = new NumberField('reasonForLeaving', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[reasonForLeavingNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_FOR_LEAVING_NAV: NumberField<UserPermissions> = new NumberField('reasonForLeavingNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[reviewFreq]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_FREQ: NumberField<UserPermissions> = new NumberField('reviewFreq', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[riskOfLoss]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RISK_OF_LOSS: NumberField<UserPermissions> = new NumberField('riskOfLoss', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[riskOfLossNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RISK_OF_LOSS_NAV: NumberField<UserPermissions> = new NumberField('riskOfLossNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[sciLastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCI_LAST_MODIFIED: NumberField<UserPermissions> = new NumberField('sciLastModified', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[secondManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_MANAGER: NumberField<UserPermissions> = new NumberField('secondManager', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[secondReports]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_REPORTS: NumberField<UserPermissions> = new NumberField('secondReports', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[serviceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DATE: NumberField<UserPermissions> = new NumberField('serviceDate', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[ssn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SSN: NumberField<UserPermissions> = new NumberField('ssn', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: NumberField<UserPermissions> = new NumberField('state', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<UserPermissions> = new NumberField('status', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[suffix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUFFIX: NumberField<UserPermissions> = new NumberField('suffix', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[talentPool]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL: NumberField<UserPermissions> = new NumberField('talentPool', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[talentPoolNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_NAV: NumberField<UserPermissions> = new NumberField('talentPoolNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[teamMembersSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_MEMBERS_SIZE: NumberField<UserPermissions> = new NumberField('teamMembersSize', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[timeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ZONE: NumberField<UserPermissions> = new NumberField('timeZone', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: NumberField<UserPermissions> = new NumberField('title', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[totalTeamSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_TEAM_SIZE: NumberField<UserPermissions> = new NumberField('totalTeamSize', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: NumberField<UserPermissions> = new NumberField('userId', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[userPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_PERMISSIONS_NAV: NumberField<UserPermissions> = new NumberField('userPermissionsNav', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[username]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERNAME: NumberField<UserPermissions> = new NumberField('username', UserPermissions, 'Edm.Byte');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: NumberField<UserPermissions> = new NumberField('zipCode', UserPermissions, 'Edm.Byte');
  /**
   * All fields of the UserPermissions entity.
   */
  export const _allFields: Array<NumberField<UserPermissions>> = [
    UserPermissions.ADDRESS_LINE_1,
    UserPermissions.ADDRESS_LINE_2,
    UserPermissions.ADDRESS_LINE_3,
    UserPermissions.BENCH_STRENGTH,
    UserPermissions.BENCH_STRENGTH_NAV,
    UserPermissions.BUSINESS_PHONE,
    UserPermissions.BUSINESS_SEGMENT,
    UserPermissions.BUSINESS_SEGMENT_NAV,
    UserPermissions.CELL_PHONE,
    UserPermissions.CITIZENSHIP,
    UserPermissions.CITY,
    UserPermissions.COMPETENCY,
    UserPermissions.COMPETENCY_RATING_NAV,
    UserPermissions.COUNTRY,
    UserPermissions.CUSTOM_01,
    UserPermissions.CUSTOM_02,
    UserPermissions.CUSTOM_03,
    UserPermissions.CUSTOM_04,
    UserPermissions.CUSTOM_05,
    UserPermissions.CUSTOM_05_NAV,
    UserPermissions.CUSTOM_06,
    UserPermissions.CUSTOM_07,
    UserPermissions.CUSTOM_08,
    UserPermissions.CUSTOM_09,
    UserPermissions.CUSTOM_10,
    UserPermissions.CUSTOM_11,
    UserPermissions.CUSTOM_12,
    UserPermissions.CUSTOM_13,
    UserPermissions.CUSTOM_14,
    UserPermissions.CUSTOM_15,
    UserPermissions.CUSTOM_MANAGER,
    UserPermissions.CUSTOM_REPORTS,
    UserPermissions.DATE_OF_BIRTH,
    UserPermissions.DATE_OF_POSITION,
    UserPermissions.DEFAULT_FULL_NAME,
    UserPermissions.DEFAULT_LOCALE,
    UserPermissions.DEPARTMENT,
    UserPermissions.DIRECT_REPORTS,
    UserPermissions.DIVISION,
    UserPermissions.DUMMY_NOMINATION_NAV,
    UserPermissions.EMAIL,
    UserPermissions.EMP_ID,
    UserPermissions.EMP_INFO,
    UserPermissions.ETHNICITY,
    UserPermissions.ETHNICITY_NAV,
    UserPermissions.FAX,
    UserPermissions.FIRST_NAME,
    UserPermissions.FUTURE_LEADER,
    UserPermissions.GENDER,
    UserPermissions.HIRE_DATE,
    UserPermissions.HOME_PHONE,
    UserPermissions.HR,
    UserPermissions.HR_REPORTS,
    UserPermissions.IMPACT_OF_LOSS,
    UserPermissions.IMPACT_OF_LOSS_NAV,
    UserPermissions.JOB_CODE,
    UserPermissions.KEY_POSITION,
    UserPermissions.LAST_MODIFIED,
    UserPermissions.LAST_MODIFIED_DATE_TIME,
    UserPermissions.LAST_MODIFIED_WITH_TZ,
    UserPermissions.LAST_NAME,
    UserPermissions.LAST_REVIEW_DATE,
    UserPermissions.LEVEL,
    UserPermissions.LOCATION,
    UserPermissions.MANAGER,
    UserPermissions.MARRIED,
    UserPermissions.MATRIX_1_LABEL,
    UserPermissions.MATRIX_2_LABEL,
    UserPermissions.MATRIX_MANAGED,
    UserPermissions.MATRIX_MANAGER,
    UserPermissions.MATRIX_REPORTS,
    UserPermissions.MI,
    UserPermissions.MINORITY,
    UserPermissions.NATIONALITY,
    UserPermissions.NEW_TO_POSITION,
    UserPermissions.NICKNAME,
    UserPermissions.NOMINATION_NAV,
    UserPermissions.OBJECTIVE,
    UserPermissions.ONBOARDING_ID,
    UserPermissions.PASSWORD,
    UserPermissions.PERFORMANCE,
    UserPermissions.POTENTIAL,
    UserPermissions.PROXY,
    UserPermissions.REASON_FOR_LEAVING,
    UserPermissions.REASON_FOR_LEAVING_NAV,
    UserPermissions.REVIEW_FREQ,
    UserPermissions.RISK_OF_LOSS,
    UserPermissions.RISK_OF_LOSS_NAV,
    UserPermissions.SCI_LAST_MODIFIED,
    UserPermissions.SECOND_MANAGER,
    UserPermissions.SECOND_REPORTS,
    UserPermissions.SERVICE_DATE,
    UserPermissions.SSN,
    UserPermissions.STATE,
    UserPermissions.STATUS,
    UserPermissions.SUFFIX,
    UserPermissions.TALENT_POOL,
    UserPermissions.TALENT_POOL_NAV,
    UserPermissions.TEAM_MEMBERS_SIZE,
    UserPermissions.TIME_ZONE,
    UserPermissions.TITLE,
    UserPermissions.TOTAL_TEAM_SIZE,
    UserPermissions.USER_ID,
    UserPermissions.USER_PERMISSIONS_NAV,
    UserPermissions.USERNAME,
    UserPermissions.ZIP_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserPermissions> = new AllFields('*', UserPermissions);
  /**
   * All key fields of the UserPermissions entity.
   */
  export const _keyFields: Array<Selectable<UserPermissions>> = [UserPermissions.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property UserPermissions.
   */
  export const _keys: { [keys: string]: Selectable<UserPermissions> } = UserPermissions._keyFields.reduce((acc: { [keys: string]: Selectable<UserPermissions> }, field: Selectable<UserPermissions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
