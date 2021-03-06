/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoAreRequestBuilder } from './PerGlobalInfoAreRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoARE" of service "SFOData".
 */
export class PerGlobalInfoAre extends Entity implements PerGlobalInfoAreType {
  /**
   * Technical entity name for PerGlobalInfoAre.
   */
  static _entityName = 'PerGlobalInfoARE';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoAre.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * country.
   */
  country!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Visa Expiry Date.
   * @nullable
   */
  genericDate1?: Moment;
  /**
   * Passport Expiry Date.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * Employed Since.
   * @nullable
   */
  genericDate3?: Moment;
  /**
   * Passport Issue Date.
   * @nullable
   */
  genericDate4?: Moment;
  /**
   * Visa Issue Date.
   * @nullable
   */
  genericDate5?: Moment;
  /**
   * Nationality Acquisition Date.
   * @nullable
   */
  genericDate6?: Moment;
  /**
   * Identity Card - Expiry Date.
   * @nullable
   */
  genericDate7?: Moment;
  /**
   * Resident Identity Card - Expiry Date.
   * @nullable
   */
  genericDate8?: Moment;
  /**
   * Employed.
   * @nullable
   */
  genericNumber1?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber10?: BigNumber;
  /**
   * Physician ID Number.
   * @nullable
   */
  genericNumber11?: BigNumber;
  /**
   * Student.
   * @nullable
   */
  genericNumber12?: BigNumber;
  /**
   * Is Dependent Challenged.
   * @nullable
   */
  genericNumber13?: BigNumber;
  /**
   * Accomodation Entitlement.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Legal Nominee.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Academic Degree.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Spouse ID (if in same company).
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Eligible for Leave Passage Benefit.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Leave Passage Entitlement Quota.
   * @nullable
   */
  genericNumber7?: BigNumber;
  /**
   * Number of Children.
   * @nullable
   */
  genericNumber8?: BigNumber;
  /**
   * Visa Type.
   * @nullable
   */
  genericNumber9?: BigNumber;
  /**
   * Religion.
   * Maximum length: 256.
   * @nullable
   */
  genericString1?: string;
  /**
   * Specialization.
   * Maximum length: 256.
   * @nullable
   */
  genericString10?: string;
  /**
   * Identity Card Number.
   * Maximum length: 15.
   * @nullable
   */
  genericString11?: string;
  /**
   * Resident Identity Card Number.
   * Maximum length: 15.
   * @nullable
   */
  genericString12?: string;
  /**
   * Disclosed Veteran Category.
   * Maximum length: 256.
   * @nullable
   */
  genericString13?: string;
  /**
   * Visible Minority Group.
   * Maximum length: 256.
   * @nullable
   */
  genericString14?: string;
  /**
   * Physician Name.
   * Maximum length: 30.
   * @nullable
   */
  genericString15?: string;
  /**
   * Smoker.
   * Maximum length: 15.
   * @nullable
   */
  genericString16?: string;
  /**
   * Name Of Employer.
   * Maximum length: 256.
   * @nullable
   */
  genericString17?: string;
  /**
   * Visa Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString18?: string;
  /**
   * Passport Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString19?: string;
  /**
   * WPS Code (Code on Labor Card).
   * Maximum length: 256.
   * @nullable
   */
  genericString2?: string;
  /**
   * Drivers Licence Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString20?: string;
  /**
   * Employer Unique ID.
   * Maximum length: 256.
   * @nullable
   */
  genericString3?: string;
  /**
   * Profession for Legal Reporting.
   * Maximum length: 256.
   * @nullable
   */
  genericString4?: string;
  /**
   * Home Airport.
   * Maximum length: 256.
   * @nullable
   */
  genericString5?: string;
  /**
   * Exclude from Legal Reporting.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Visa Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString7?: string;
  /**
   * Passport Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString8?: string;
  /**
   * Name Of Employer.
   * Maximum length: 256.
   * @nullable
   */
  genericString9?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber2Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoAre`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoAre`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoAre, PerGlobalInfoAreTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoAre);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoAre` entity type.
   * @returns A `PerGlobalInfoAre` request builder.
   */
  static requestBuilder(): PerGlobalInfoAreRequestBuilder {
    return new PerGlobalInfoAreRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoAre`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoAre`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoAre> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoAre);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Territory, TerritoryType } from './Territory';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { PerPerson, PerPersonType } from './PerPerson';

export interface PerGlobalInfoAreType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  genericDate1?: Moment;
  genericDate2?: Moment;
  genericDate3?: Moment;
  genericDate4?: Moment;
  genericDate5?: Moment;
  genericDate6?: Moment;
  genericDate7?: Moment;
  genericDate8?: Moment;
  genericNumber1?: BigNumber;
  genericNumber10?: BigNumber;
  genericNumber11?: BigNumber;
  genericNumber12?: BigNumber;
  genericNumber13?: BigNumber;
  genericNumber2?: BigNumber;
  genericNumber3?: BigNumber;
  genericNumber4?: BigNumber;
  genericNumber5?: BigNumber;
  genericNumber6?: BigNumber;
  genericNumber7?: BigNumber;
  genericNumber8?: BigNumber;
  genericNumber9?: BigNumber;
  genericString1?: string;
  genericString10?: string;
  genericString11?: string;
  genericString12?: string;
  genericString13?: string;
  genericString14?: string;
  genericString15?: string;
  genericString16?: string;
  genericString17?: string;
  genericString18?: string;
  genericString19?: string;
  genericString2?: string;
  genericString20?: string;
  genericString3?: string;
  genericString4?: string;
  genericString5?: string;
  genericString6?: string;
  genericString7?: string;
  genericString8?: string;
  genericString9?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  operation?: string;
  personIdExternal: string;
  startDate: Moment;
  countryNav: TerritoryType;
  genericNumber1Nav: PicklistOptionType;
  genericNumber2Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericNumber6Nav: PicklistOptionType;
  genericNumber7Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString4Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoAreTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  genericDate1: Moment;
  genericDate2: Moment;
  genericDate3: Moment;
  genericDate4: Moment;
  genericDate5: Moment;
  genericDate6: Moment;
  genericDate7: Moment;
  genericDate8: Moment;
  genericNumber1: BigNumber;
  genericNumber10: BigNumber;
  genericNumber11: BigNumber;
  genericNumber12: BigNumber;
  genericNumber13: BigNumber;
  genericNumber2: BigNumber;
  genericNumber3: BigNumber;
  genericNumber4: BigNumber;
  genericNumber5: BigNumber;
  genericNumber6: BigNumber;
  genericNumber7: BigNumber;
  genericNumber8: BigNumber;
  genericNumber9: BigNumber;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString16: string;
  genericString17: string;
  genericString18: string;
  genericString19: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  operation: string;
  personIdExternal: string;
  startDate: Moment;
  countryNav: TerritoryType;
  genericNumber1Nav: PicklistOptionType;
  genericNumber2Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericNumber6Nav: PicklistOptionType;
  genericNumber7Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString4Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoAre {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoAre> = new StringField('country', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoAre> = new StringField('createdBy', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoAre> = new DateField('createdDateTime', PerGlobalInfoAre, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoAre> = new DateField('createdOn', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoAre> = new DateField('endDate', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoAre> = new DateField('genericDate1', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoAre> = new DateField('genericDate2', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoAre> = new DateField('genericDate3', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoAre> = new DateField('genericDate4', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoAre> = new DateField('genericDate5', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoAre> = new DateField('genericDate6', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoAre> = new DateField('genericDate7', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoAre> = new DateField('genericDate8', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber1', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber10', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber11', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber12', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber13', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber2', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber3', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber4', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber5', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber6', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber7', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber8', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoAre> = new BigNumberField('genericNumber9', PerGlobalInfoAre, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoAre> = new StringField('genericString1', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoAre> = new StringField('genericString10', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoAre> = new StringField('genericString11', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoAre> = new StringField('genericString12', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoAre> = new StringField('genericString13', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoAre> = new StringField('genericString14', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoAre> = new StringField('genericString15', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoAre> = new StringField('genericString16', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoAre> = new StringField('genericString17', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoAre> = new StringField('genericString18', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoAre> = new StringField('genericString19', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoAre> = new StringField('genericString2', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoAre> = new StringField('genericString20', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoAre> = new StringField('genericString3', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoAre> = new StringField('genericString4', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoAre> = new StringField('genericString5', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoAre> = new StringField('genericString6', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoAre> = new StringField('genericString7', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoAre> = new StringField('genericString8', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoAre> = new StringField('genericString9', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoAre> = new StringField('lastModifiedBy', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoAre> = new DateField('lastModifiedDateTime', PerGlobalInfoAre, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoAre> = new DateField('lastModifiedOn', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoAre> = new StringField('operation', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoAre> = new StringField('personIdExternal', PerGlobalInfoAre, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoAre> = new DateField('startDate', PerGlobalInfoAre, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoAre, Territory> = new OneToOneLink('countryNav', PerGlobalInfoAre, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber2Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber6Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericNumber7Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericString4Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoAre, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoAre, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoAre, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoAre, PerPerson);
  /**
   * All fields of the PerGlobalInfoAre entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoAre> | DateField<PerGlobalInfoAre> | BigNumberField<PerGlobalInfoAre> | OneToOneLink<PerGlobalInfoAre, Territory> | OneToOneLink<PerGlobalInfoAre, PicklistOption> | OneToOneLink<PerGlobalInfoAre, PerPerson>> = [
    PerGlobalInfoAre.COUNTRY,
    PerGlobalInfoAre.CREATED_BY,
    PerGlobalInfoAre.CREATED_DATE_TIME,
    PerGlobalInfoAre.CREATED_ON,
    PerGlobalInfoAre.END_DATE,
    PerGlobalInfoAre.GENERIC_DATE_1,
    PerGlobalInfoAre.GENERIC_DATE_2,
    PerGlobalInfoAre.GENERIC_DATE_3,
    PerGlobalInfoAre.GENERIC_DATE_4,
    PerGlobalInfoAre.GENERIC_DATE_5,
    PerGlobalInfoAre.GENERIC_DATE_6,
    PerGlobalInfoAre.GENERIC_DATE_7,
    PerGlobalInfoAre.GENERIC_DATE_8,
    PerGlobalInfoAre.GENERIC_NUMBER_1,
    PerGlobalInfoAre.GENERIC_NUMBER_10,
    PerGlobalInfoAre.GENERIC_NUMBER_11,
    PerGlobalInfoAre.GENERIC_NUMBER_12,
    PerGlobalInfoAre.GENERIC_NUMBER_13,
    PerGlobalInfoAre.GENERIC_NUMBER_2,
    PerGlobalInfoAre.GENERIC_NUMBER_3,
    PerGlobalInfoAre.GENERIC_NUMBER_4,
    PerGlobalInfoAre.GENERIC_NUMBER_5,
    PerGlobalInfoAre.GENERIC_NUMBER_6,
    PerGlobalInfoAre.GENERIC_NUMBER_7,
    PerGlobalInfoAre.GENERIC_NUMBER_8,
    PerGlobalInfoAre.GENERIC_NUMBER_9,
    PerGlobalInfoAre.GENERIC_STRING_1,
    PerGlobalInfoAre.GENERIC_STRING_10,
    PerGlobalInfoAre.GENERIC_STRING_11,
    PerGlobalInfoAre.GENERIC_STRING_12,
    PerGlobalInfoAre.GENERIC_STRING_13,
    PerGlobalInfoAre.GENERIC_STRING_14,
    PerGlobalInfoAre.GENERIC_STRING_15,
    PerGlobalInfoAre.GENERIC_STRING_16,
    PerGlobalInfoAre.GENERIC_STRING_17,
    PerGlobalInfoAre.GENERIC_STRING_18,
    PerGlobalInfoAre.GENERIC_STRING_19,
    PerGlobalInfoAre.GENERIC_STRING_2,
    PerGlobalInfoAre.GENERIC_STRING_20,
    PerGlobalInfoAre.GENERIC_STRING_3,
    PerGlobalInfoAre.GENERIC_STRING_4,
    PerGlobalInfoAre.GENERIC_STRING_5,
    PerGlobalInfoAre.GENERIC_STRING_6,
    PerGlobalInfoAre.GENERIC_STRING_7,
    PerGlobalInfoAre.GENERIC_STRING_8,
    PerGlobalInfoAre.GENERIC_STRING_9,
    PerGlobalInfoAre.LAST_MODIFIED_BY,
    PerGlobalInfoAre.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoAre.LAST_MODIFIED_ON,
    PerGlobalInfoAre.OPERATION,
    PerGlobalInfoAre.PERSON_ID_EXTERNAL,
    PerGlobalInfoAre.START_DATE,
    PerGlobalInfoAre.COUNTRY_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_2_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_6_NAV,
    PerGlobalInfoAre.GENERIC_NUMBER_7_NAV,
    PerGlobalInfoAre.GENERIC_STRING_1_NAV,
    PerGlobalInfoAre.GENERIC_STRING_4_NAV,
    PerGlobalInfoAre.GENERIC_STRING_6_NAV,
    PerGlobalInfoAre.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoAre> = new AllFields('*', PerGlobalInfoAre);
  /**
   * All key fields of the PerGlobalInfoAre entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoAre>> = [PerGlobalInfoAre.COUNTRY, PerGlobalInfoAre.PERSON_ID_EXTERNAL, PerGlobalInfoAre.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoAre.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoAre> } = PerGlobalInfoAre._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoAre> }, field: Selectable<PerGlobalInfoAre>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
