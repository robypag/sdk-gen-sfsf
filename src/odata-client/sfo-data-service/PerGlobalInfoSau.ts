/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoSauRequestBuilder } from './PerGlobalInfoSauRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoSAU" of service "SFOData".
 */
export class PerGlobalInfoSau extends Entity implements PerGlobalInfoSauType {
  /**
   * Technical entity name for PerGlobalInfoSau.
   */
  static _entityName = 'PerGlobalInfoSAU';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoSau.
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
   * Entry Date (Islamic).
   * @nullable
   */
  genericDate1?: Moment;
  /**
   * Date Learned.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * Driving Licence Expiry Date.
   * @nullable
   */
  genericDate3?: Moment;
  /**
   * Visa Expiry Date.
   * @nullable
   */
  genericDate4?: Moment;
  /**
   * Passport Expiry Date.
   * @nullable
   */
  genericDate5?: Moment;
  /**
   * Iqama Expiry Date.
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
   * Degree of Challenge.
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
   * Spouse ID (if in same company).
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Leave Passage Entitlement Quota.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Applicable for Leave Passage?.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Is Eligibile For Scholarship Travel Ticket.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Iqama Number.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Number of Children.
   * @nullable
   */
  genericNumber7?: BigNumber;
  /**
   * Other Disabled Veteran.
   * @nullable
   */
  genericNumber8?: BigNumber;
  /**
   * Visa Type.
   * @nullable
   */
  genericNumber9?: BigNumber;
  /**
   * Challenge Group.
   * Maximum length: 256.
   * @nullable
   */
  genericString1?: string;
  /**
   * Passport Profession.
   * Maximum length: 256.
   * @nullable
   */
  genericString10?: string;
  /**
   * Border Entry No.
   * Maximum length: 256.
   * @nullable
   */
  genericString11?: string;
  /**
   * Port of Entry.
   * Maximum length: 256.
   * @nullable
   */
  genericString12?: string;
  /**
   * Family resides in Saudi Arabia.
   * Maximum length: 256.
   * @nullable
   */
  genericString13?: string;
  /**
   * Lives in Company Housing.
   * Maximum length: 256.
   * @nullable
   */
  genericString14?: string;
  /**
   * Exclude Employee from Legal Reporting.
   * Maximum length: 256.
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
   * Type of Challenge.
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
   * Issuing Authority.
   * Maximum length: 256.
   * @nullable
   */
  genericString3?: string;
  /**
   * Reference Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString4?: string;
  /**
   * Religion.
   * Maximum length: 256.
   * @nullable
   */
  genericString5?: string;
  /**
   * Blood Group.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Home Airport.
   * Maximum length: 256.
   * @nullable
   */
  genericString7?: string;
  /**
   * Sponsor ID.
   * Maximum length: 10.
   * @nullable
   */
  genericString8?: string;
  /**
   * Profession for Legal Reporting.
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
  genericNumber3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber5Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString13Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString14Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString15Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString2Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString5Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString8Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString9Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoSau`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoSau`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoSau, PerGlobalInfoSauTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoSau);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoSau` entity type.
   * @returns A `PerGlobalInfoSau` request builder.
   */
  static requestBuilder(): PerGlobalInfoSauRequestBuilder {
    return new PerGlobalInfoSauRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoSau`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoSau`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoSau> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoSau);
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

export interface PerGlobalInfoSauType {
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
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericNumber5Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString14Nav: PicklistOptionType;
  genericString15Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString5Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoSauTypeForceMandatory {
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
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericNumber5Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString14Nav: PicklistOptionType;
  genericString15Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString5Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoSau {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoSau> = new StringField('country', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoSau> = new StringField('createdBy', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoSau> = new DateField('createdDateTime', PerGlobalInfoSau, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoSau> = new DateField('createdOn', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoSau> = new DateField('endDate', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoSau> = new DateField('genericDate1', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoSau> = new DateField('genericDate2', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoSau> = new DateField('genericDate3', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoSau> = new DateField('genericDate4', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoSau> = new DateField('genericDate5', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoSau> = new DateField('genericDate6', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoSau> = new DateField('genericDate7', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoSau> = new DateField('genericDate8', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber1', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber10', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber11', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber12', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber13', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber2', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber3', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber4', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber5', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber6', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber7', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber8', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoSau> = new BigNumberField('genericNumber9', PerGlobalInfoSau, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoSau> = new StringField('genericString1', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoSau> = new StringField('genericString10', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoSau> = new StringField('genericString11', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoSau> = new StringField('genericString12', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoSau> = new StringField('genericString13', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoSau> = new StringField('genericString14', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoSau> = new StringField('genericString15', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoSau> = new StringField('genericString16', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoSau> = new StringField('genericString17', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoSau> = new StringField('genericString18', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoSau> = new StringField('genericString19', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoSau> = new StringField('genericString2', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoSau> = new StringField('genericString20', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoSau> = new StringField('genericString3', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoSau> = new StringField('genericString4', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoSau> = new StringField('genericString5', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoSau> = new StringField('genericString6', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoSau> = new StringField('genericString7', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoSau> = new StringField('genericString8', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoSau> = new StringField('genericString9', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoSau> = new StringField('lastModifiedBy', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoSau> = new DateField('lastModifiedDateTime', PerGlobalInfoSau, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoSau> = new DateField('lastModifiedOn', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoSau> = new StringField('operation', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoSau> = new StringField('personIdExternal', PerGlobalInfoSau, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoSau> = new DateField('startDate', PerGlobalInfoSau, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoSau, Territory> = new OneToOneLink('countryNav', PerGlobalInfoSau, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericNumber5Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString13Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString14Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString14Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString15Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString15Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString5Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString8Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9_NAV: OneToOneLink<PerGlobalInfoSau, PicklistOption> = new OneToOneLink('genericString9Nav', PerGlobalInfoSau, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoSau, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoSau, PerPerson);
  /**
   * All fields of the PerGlobalInfoSau entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoSau> | DateField<PerGlobalInfoSau> | BigNumberField<PerGlobalInfoSau> | OneToOneLink<PerGlobalInfoSau, Territory> | OneToOneLink<PerGlobalInfoSau, PicklistOption> | OneToOneLink<PerGlobalInfoSau, PerPerson>> = [
    PerGlobalInfoSau.COUNTRY,
    PerGlobalInfoSau.CREATED_BY,
    PerGlobalInfoSau.CREATED_DATE_TIME,
    PerGlobalInfoSau.CREATED_ON,
    PerGlobalInfoSau.END_DATE,
    PerGlobalInfoSau.GENERIC_DATE_1,
    PerGlobalInfoSau.GENERIC_DATE_2,
    PerGlobalInfoSau.GENERIC_DATE_3,
    PerGlobalInfoSau.GENERIC_DATE_4,
    PerGlobalInfoSau.GENERIC_DATE_5,
    PerGlobalInfoSau.GENERIC_DATE_6,
    PerGlobalInfoSau.GENERIC_DATE_7,
    PerGlobalInfoSau.GENERIC_DATE_8,
    PerGlobalInfoSau.GENERIC_NUMBER_1,
    PerGlobalInfoSau.GENERIC_NUMBER_10,
    PerGlobalInfoSau.GENERIC_NUMBER_11,
    PerGlobalInfoSau.GENERIC_NUMBER_12,
    PerGlobalInfoSau.GENERIC_NUMBER_13,
    PerGlobalInfoSau.GENERIC_NUMBER_2,
    PerGlobalInfoSau.GENERIC_NUMBER_3,
    PerGlobalInfoSau.GENERIC_NUMBER_4,
    PerGlobalInfoSau.GENERIC_NUMBER_5,
    PerGlobalInfoSau.GENERIC_NUMBER_6,
    PerGlobalInfoSau.GENERIC_NUMBER_7,
    PerGlobalInfoSau.GENERIC_NUMBER_8,
    PerGlobalInfoSau.GENERIC_NUMBER_9,
    PerGlobalInfoSau.GENERIC_STRING_1,
    PerGlobalInfoSau.GENERIC_STRING_10,
    PerGlobalInfoSau.GENERIC_STRING_11,
    PerGlobalInfoSau.GENERIC_STRING_12,
    PerGlobalInfoSau.GENERIC_STRING_13,
    PerGlobalInfoSau.GENERIC_STRING_14,
    PerGlobalInfoSau.GENERIC_STRING_15,
    PerGlobalInfoSau.GENERIC_STRING_16,
    PerGlobalInfoSau.GENERIC_STRING_17,
    PerGlobalInfoSau.GENERIC_STRING_18,
    PerGlobalInfoSau.GENERIC_STRING_19,
    PerGlobalInfoSau.GENERIC_STRING_2,
    PerGlobalInfoSau.GENERIC_STRING_20,
    PerGlobalInfoSau.GENERIC_STRING_3,
    PerGlobalInfoSau.GENERIC_STRING_4,
    PerGlobalInfoSau.GENERIC_STRING_5,
    PerGlobalInfoSau.GENERIC_STRING_6,
    PerGlobalInfoSau.GENERIC_STRING_7,
    PerGlobalInfoSau.GENERIC_STRING_8,
    PerGlobalInfoSau.GENERIC_STRING_9,
    PerGlobalInfoSau.LAST_MODIFIED_BY,
    PerGlobalInfoSau.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoSau.LAST_MODIFIED_ON,
    PerGlobalInfoSau.OPERATION,
    PerGlobalInfoSau.PERSON_ID_EXTERNAL,
    PerGlobalInfoSau.START_DATE,
    PerGlobalInfoSau.COUNTRY_NAV,
    PerGlobalInfoSau.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoSau.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoSau.GENERIC_NUMBER_5_NAV,
    PerGlobalInfoSau.GENERIC_STRING_13_NAV,
    PerGlobalInfoSau.GENERIC_STRING_14_NAV,
    PerGlobalInfoSau.GENERIC_STRING_15_NAV,
    PerGlobalInfoSau.GENERIC_STRING_1_NAV,
    PerGlobalInfoSau.GENERIC_STRING_2_NAV,
    PerGlobalInfoSau.GENERIC_STRING_5_NAV,
    PerGlobalInfoSau.GENERIC_STRING_6_NAV,
    PerGlobalInfoSau.GENERIC_STRING_8_NAV,
    PerGlobalInfoSau.GENERIC_STRING_9_NAV,
    PerGlobalInfoSau.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoSau> = new AllFields('*', PerGlobalInfoSau);
  /**
   * All key fields of the PerGlobalInfoSau entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoSau>> = [PerGlobalInfoSau.COUNTRY, PerGlobalInfoSau.PERSON_ID_EXTERNAL, PerGlobalInfoSau.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoSau.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoSau> } = PerGlobalInfoSau._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoSau> }, field: Selectable<PerGlobalInfoSau>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
