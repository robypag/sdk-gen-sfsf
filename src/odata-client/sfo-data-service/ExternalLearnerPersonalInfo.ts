/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerPersonalInfoRequestBuilder } from './ExternalLearnerPersonalInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalLearnerPersonalInfo" of service "SFOData".
 */
export class ExternalLearnerPersonalInfo extends Entity implements ExternalLearnerPersonalInfoType {
  /**
   * Technical entity name for ExternalLearnerPersonalInfo.
   */
  static _entityName = 'ExternalLearnerPersonalInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalLearnerPersonalInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Birth Name.
   * Maximum length: 128.
   * @nullable
   */
  birthName?: string;
  /**
   * Certificate End Date.
   * @nullable
   */
  certificateEndDate?: Moment;
  /**
   * Certificate Start Date.
   * @nullable
   */
  certificateStartDate?: Moment;
  /**
   * Challenge Status.
   * @nullable
   */
  challengeStatus?: boolean;
  /**
   * Country Of Birth.
   * Maximum length: 256.
   * @nullable
   */
  countryOfBirth?: string;
  /**
   * Preferred Name.
   * Maximum length: 128.
   * @nullable
   */
  customString1?: string;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: Moment;
  /**
   * Date Of Death.
   * @nullable
   */
  dateOfDeath?: Moment;
  /**
   * Display Name.
   * Maximum length: 128.
   * @nullable
   */
  displayName?: string;
  /**
   * Display Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  displayNameAlt1?: string;
  /**
   * Display Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  displayNameAlt2?: string;
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: string;
  /**
   * First Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  firstNameAlt1?: string;
  /**
   * First Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  firstNameAlt2?: string;
  /**
   * Formal Name.
   * Maximum length: 128.
   * @nullable
   */
  formalName?: string;
  /**
   * Formal Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  formalNameAlt1?: string;
  /**
   * Formal Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  formalNameAlt2?: string;
  /**
   * Gender.
   * Maximum length: 2.
   * @nullable
   */
  gender?: string;
  /**
   * Initials.
   * Maximum length: 128.
   * @nullable
   */
  initials?: string;
  /**
   * Customize Name Format.
   * @nullable
   */
  isOverridden?: boolean;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: boolean;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: string;
  /**
   * Last Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  lastNameAlt1?: string;
  /**
   * Last Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  lastNameAlt2?: string;
  /**
   * Marital Status.
   * Maximum length: 50.
   * @nullable
   */
  maritalStatus?: string;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleName?: string;
  /**
   * Middle Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  middleNameAlt1?: string;
  /**
   * Middle Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  middleNameAlt2?: string;
  /**
   * Prefix.
   * Maximum length: 128.
   * @nullable
   */
  namePrefix?: string;
  /**
   * Nationality.
   * Maximum length: 128.
   * @nullable
   */
  nationality?: string;
  /**
   * Native Preferred Language.
   * Maximum length: 256.
   * @nullable
   */
  nativePreferredLang?: string;
  /**
   * Preferred Name.
   * Maximum length: 128.
   * @nullable
   */
  preferredName?: string;
  /**
   * Salutation.
   * Maximum length: 128.
   * @nullable
   */
  salutation?: string;
  /**
   * Second Last Name.
   * Maximum length: 128.
   * @nullable
   */
  secondLastName?: string;
  /**
   * Second Nationality.
   * Maximum length: 128.
   * @nullable
   */
  secondNationality?: string;
  /**
   * Second Title.
   * Maximum length: 128.
   * @nullable
   */
  secondTitle?: string;
  /**
   * Marital Status Since.
   * @nullable
   */
  since?: Moment;
  /**
   * Suffix.
   * Maximum length: 128.
   * @nullable
   */
  suffix?: string;
  /**
   * Third Nationality.
   * Maximum length: 128.
   * @nullable
   */
  thirdNationality?: string;
  /**
   * Title.
   * Maximum length: 128.
   * @nullable
   */
  title?: string;

  /**
   * Returns an entity builder to construct instances `ExternalLearnerPersonalInfo`.
   * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
   */
  static builder(): EntityBuilderType<ExternalLearnerPersonalInfo, ExternalLearnerPersonalInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExternalLearnerPersonalInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalLearnerPersonalInfo` entity type.
   * @returns A `ExternalLearnerPersonalInfo` request builder.
   */
  static requestBuilder(): ExternalLearnerPersonalInfoRequestBuilder {
    return new ExternalLearnerPersonalInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPersonalInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
   */
  static customField(fieldName: string): CustomField<ExternalLearnerPersonalInfo> {
    return Entity.customFieldSelector(fieldName, ExternalLearnerPersonalInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ExternalLearnerPersonalInfoType {
  birthName?: string;
  certificateEndDate?: Moment;
  certificateStartDate?: Moment;
  challengeStatus?: boolean;
  countryOfBirth?: string;
  customString1?: string;
  dateOfBirth?: Moment;
  dateOfDeath?: Moment;
  displayName?: string;
  displayNameAlt1?: string;
  displayNameAlt2?: string;
  firstName?: string;
  firstNameAlt1?: string;
  firstNameAlt2?: string;
  formalName?: string;
  formalNameAlt1?: string;
  formalNameAlt2?: string;
  gender?: string;
  initials?: string;
  isOverridden?: boolean;
  isDeleted?: boolean;
  itemId: BigNumber;
  lastModifiedDateTime?: Moment;
  lastName?: string;
  lastNameAlt1?: string;
  lastNameAlt2?: string;
  maritalStatus?: string;
  middleName?: string;
  middleNameAlt1?: string;
  middleNameAlt2?: string;
  namePrefix?: string;
  nationality?: string;
  nativePreferredLang?: string;
  preferredName?: string;
  salutation?: string;
  secondLastName?: string;
  secondNationality?: string;
  secondTitle?: string;
  since?: Moment;
  suffix?: string;
  thirdNationality?: string;
  title?: string;
}

export interface ExternalLearnerPersonalInfoTypeForceMandatory {
  birthName: string;
  certificateEndDate: Moment;
  certificateStartDate: Moment;
  challengeStatus: boolean;
  countryOfBirth: string;
  customString1: string;
  dateOfBirth: Moment;
  dateOfDeath: Moment;
  displayName: string;
  displayNameAlt1: string;
  displayNameAlt2: string;
  firstName: string;
  firstNameAlt1: string;
  firstNameAlt2: string;
  formalName: string;
  formalNameAlt1: string;
  formalNameAlt2: string;
  gender: string;
  initials: string;
  isOverridden: boolean;
  isDeleted: boolean;
  itemId: BigNumber;
  lastModifiedDateTime: Moment;
  lastName: string;
  lastNameAlt1: string;
  lastNameAlt2: string;
  maritalStatus: string;
  middleName: string;
  middleNameAlt1: string;
  middleNameAlt2: string;
  namePrefix: string;
  nationality: string;
  nativePreferredLang: string;
  preferredName: string;
  salutation: string;
  secondLastName: string;
  secondNationality: string;
  secondTitle: string;
  since: Moment;
  suffix: string;
  thirdNationality: string;
  title: string;
}

export namespace ExternalLearnerPersonalInfo {
  /**
   * Static representation of the [[birthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('birthName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[certificateEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATE_END_DATE: DateField<ExternalLearnerPersonalInfo> = new DateField('certificateEndDate', ExternalLearnerPersonalInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[certificateStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATE_START_DATE: DateField<ExternalLearnerPersonalInfo> = new DateField('certificateStartDate', ExternalLearnerPersonalInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[challengeStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHALLENGE_STATUS: BooleanField<ExternalLearnerPersonalInfo> = new BooleanField('challengeStatus', ExternalLearnerPersonalInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[countryOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_BIRTH: StringField<ExternalLearnerPersonalInfo> = new StringField('countryOfBirth', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[customString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_1: StringField<ExternalLearnerPersonalInfo> = new StringField('customString1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_BIRTH: DateField<ExternalLearnerPersonalInfo> = new DateField('dateOfBirth', ExternalLearnerPersonalInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[dateOfDeath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_DEATH: DateField<ExternalLearnerPersonalInfo> = new DateField('dateOfDeath', ExternalLearnerPersonalInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[displayName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('displayName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[displayNameAlt1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo> = new StringField('displayNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[displayNameAlt2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo> = new StringField('displayNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('firstName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[firstNameAlt1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo> = new StringField('firstNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[firstNameAlt2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo> = new StringField('firstNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[formalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAL_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('formalName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[formalNameAlt1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAL_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo> = new StringField('formalNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[formalNameAlt2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAL_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo> = new StringField('formalNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: StringField<ExternalLearnerPersonalInfo> = new StringField('gender', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[initials]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIALS: StringField<ExternalLearnerPersonalInfo> = new StringField('initials', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[isOverridden]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_OVERRIDDEN: BooleanField<ExternalLearnerPersonalInfo> = new BooleanField('isOverridden', ExternalLearnerPersonalInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalLearnerPersonalInfo> = new BooleanField('is_deleted', ExternalLearnerPersonalInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<ExternalLearnerPersonalInfo> = new BigNumberField('itemId', ExternalLearnerPersonalInfo, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerPersonalInfo> = new DateField('lastModifiedDateTime', ExternalLearnerPersonalInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('lastName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[lastNameAlt1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo> = new StringField('lastNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[lastNameAlt2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo> = new StringField('lastNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[maritalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARITAL_STATUS: StringField<ExternalLearnerPersonalInfo> = new StringField('maritalStatus', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('middleName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[middleNameAlt1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo> = new StringField('middleNameAlt1', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[middleNameAlt2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo> = new StringField('middleNameAlt2', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[namePrefix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PREFIX: StringField<ExternalLearnerPersonalInfo> = new StringField('namePrefix', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[nationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONALITY: StringField<ExternalLearnerPersonalInfo> = new StringField('nationality', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[nativePreferredLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIVE_PREFERRED_LANG: StringField<ExternalLearnerPersonalInfo> = new StringField('nativePreferredLang', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[preferredName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREFERRED_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('preferredName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[salutation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALUTATION: StringField<ExternalLearnerPersonalInfo> = new StringField('salutation', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[secondLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_LAST_NAME: StringField<ExternalLearnerPersonalInfo> = new StringField('secondLastName', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[secondNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_NATIONALITY: StringField<ExternalLearnerPersonalInfo> = new StringField('secondNationality', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[secondTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_TITLE: StringField<ExternalLearnerPersonalInfo> = new StringField('secondTitle', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[since]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINCE: DateField<ExternalLearnerPersonalInfo> = new DateField('since', ExternalLearnerPersonalInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[suffix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUFFIX: StringField<ExternalLearnerPersonalInfo> = new StringField('suffix', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[thirdNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THIRD_NATIONALITY: StringField<ExternalLearnerPersonalInfo> = new StringField('thirdNationality', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<ExternalLearnerPersonalInfo> = new StringField('title', ExternalLearnerPersonalInfo, 'Edm.String');
  /**
   * All fields of the ExternalLearnerPersonalInfo entity.
   */
  export const _allFields: Array<StringField<ExternalLearnerPersonalInfo> | DateField<ExternalLearnerPersonalInfo> | BooleanField<ExternalLearnerPersonalInfo> | BigNumberField<ExternalLearnerPersonalInfo>> = [
    ExternalLearnerPersonalInfo.BIRTH_NAME,
    ExternalLearnerPersonalInfo.CERTIFICATE_END_DATE,
    ExternalLearnerPersonalInfo.CERTIFICATE_START_DATE,
    ExternalLearnerPersonalInfo.CHALLENGE_STATUS,
    ExternalLearnerPersonalInfo.COUNTRY_OF_BIRTH,
    ExternalLearnerPersonalInfo.CUSTOM_STRING_1,
    ExternalLearnerPersonalInfo.DATE_OF_BIRTH,
    ExternalLearnerPersonalInfo.DATE_OF_DEATH,
    ExternalLearnerPersonalInfo.DISPLAY_NAME,
    ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_1,
    ExternalLearnerPersonalInfo.DISPLAY_NAME_ALT_2,
    ExternalLearnerPersonalInfo.FIRST_NAME,
    ExternalLearnerPersonalInfo.FIRST_NAME_ALT_1,
    ExternalLearnerPersonalInfo.FIRST_NAME_ALT_2,
    ExternalLearnerPersonalInfo.FORMAL_NAME,
    ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_1,
    ExternalLearnerPersonalInfo.FORMAL_NAME_ALT_2,
    ExternalLearnerPersonalInfo.GENDER,
    ExternalLearnerPersonalInfo.INITIALS,
    ExternalLearnerPersonalInfo.IS_OVERRIDDEN,
    ExternalLearnerPersonalInfo.IS_DELETED,
    ExternalLearnerPersonalInfo.ITEM_ID,
    ExternalLearnerPersonalInfo.LAST_MODIFIED_DATE_TIME,
    ExternalLearnerPersonalInfo.LAST_NAME,
    ExternalLearnerPersonalInfo.LAST_NAME_ALT_1,
    ExternalLearnerPersonalInfo.LAST_NAME_ALT_2,
    ExternalLearnerPersonalInfo.MARITAL_STATUS,
    ExternalLearnerPersonalInfo.MIDDLE_NAME,
    ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_1,
    ExternalLearnerPersonalInfo.MIDDLE_NAME_ALT_2,
    ExternalLearnerPersonalInfo.NAME_PREFIX,
    ExternalLearnerPersonalInfo.NATIONALITY,
    ExternalLearnerPersonalInfo.NATIVE_PREFERRED_LANG,
    ExternalLearnerPersonalInfo.PREFERRED_NAME,
    ExternalLearnerPersonalInfo.SALUTATION,
    ExternalLearnerPersonalInfo.SECOND_LAST_NAME,
    ExternalLearnerPersonalInfo.SECOND_NATIONALITY,
    ExternalLearnerPersonalInfo.SECOND_TITLE,
    ExternalLearnerPersonalInfo.SINCE,
    ExternalLearnerPersonalInfo.SUFFIX,
    ExternalLearnerPersonalInfo.THIRD_NATIONALITY,
    ExternalLearnerPersonalInfo.TITLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalLearnerPersonalInfo> = new AllFields('*', ExternalLearnerPersonalInfo);
  /**
   * All key fields of the ExternalLearnerPersonalInfo entity.
   */
  export const _keyFields: Array<Selectable<ExternalLearnerPersonalInfo>> = [ExternalLearnerPersonalInfo.ITEM_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalLearnerPersonalInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExternalLearnerPersonalInfo> } = ExternalLearnerPersonalInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalLearnerPersonalInfo> }, field: Selectable<ExternalLearnerPersonalInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
