/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoBraRequestBuilder } from './PerGlobalInfoBraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoBRA" of service "SFOData".
 */
export class PerGlobalInfoBra extends Entity implements PerGlobalInfoBraType {
  /**
   * Technical entity name for PerGlobalInfoBra.
   */
  static _entityName = 'PerGlobalInfoBRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoBra.
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
   * Date Learned.
   * @nullable
   */
  genericDate1?: Moment;
  /**
   * Vaccination Card Expiration Date.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * Sick Leave Date.
   * @nullable
   */
  genericDate3?: Moment;
  /**
   * Certificate Date Of Delivery.
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
   * Race.
   * @nullable
   */
  genericNumber1?: BigNumber;
  /**
   * Child Allowance.
   * @nullable
   */
  genericNumber10?: BigNumber;
  /**
   * Education Allowance.
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
   * Number of Children.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Naturalized Citizen.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Birth Registry Office Number.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Entry Ledger Number.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Entry Sheet Number.
   * @nullable
   */
  genericNumber7?: BigNumber;
  /**
   * Health National Card Number.
   * @nullable
   */
  genericNumber8?: BigNumber;
  /**
   * Eligible For Income Tax Discount.
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
   * Grade.
   * Maximum length: 256.
   * @nullable
   */
  genericString10?: string;
  /**
   * Education Specification.
   * Maximum length: 256.
   * @nullable
   */
  genericString11?: string;
  /**
   * Smoker.
   * Maximum length: 15.
   * @nullable
   */
  genericString12?: string;
  /**
   * School.
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
   * Challenge Group.
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
   * Type of Challenge.
   * Maximum length: 256.
   * @nullable
   */
  genericString3?: string;
  /**
   * Issuing Authority.
   * Maximum length: 256.
   * @nullable
   */
  genericString4?: string;
  /**
   * Reference Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString5?: string;
  /**
   * Live Birth Cerfiticate Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Name Of Public Notary.
   * Maximum length: 40.
   * @nullable
   */
  genericString7?: string;
  /**
   * Birth Certificate Register.
   * Maximum length: 32.
   * @nullable
   */
  genericString8?: string;
  /**
   * Education Level.
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
  genericNumber10Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber11Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber12Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber13Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber9Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString10Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString11Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString12Nav!: PicklistOption;
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
  genericString3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString9Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoBra`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoBra`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoBra, PerGlobalInfoBraTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoBra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoBra` entity type.
   * @returns A `PerGlobalInfoBra` request builder.
   */
  static requestBuilder(): PerGlobalInfoBraRequestBuilder {
    return new PerGlobalInfoBraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoBra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoBra`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoBra> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoBra);
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

export interface PerGlobalInfoBraType {
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
  genericNumber10Nav: PicklistOptionType;
  genericNumber11Nav: PicklistOptionType;
  genericNumber12Nav: PicklistOptionType;
  genericNumber13Nav: PicklistOptionType;
  genericNumber1Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoBraTypeForceMandatory {
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
  genericNumber10Nav: PicklistOptionType;
  genericNumber11Nav: PicklistOptionType;
  genericNumber12Nav: PicklistOptionType;
  genericNumber13Nav: PicklistOptionType;
  genericNumber1Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoBra {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoBra> = new StringField('country', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoBra> = new StringField('createdBy', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoBra> = new DateField('createdDateTime', PerGlobalInfoBra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoBra> = new DateField('createdOn', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoBra> = new DateField('endDate', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoBra> = new DateField('genericDate1', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoBra> = new DateField('genericDate2', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoBra> = new DateField('genericDate3', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoBra> = new DateField('genericDate4', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoBra> = new DateField('genericDate5', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoBra> = new DateField('genericDate6', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoBra> = new DateField('genericDate7', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoBra> = new DateField('genericDate8', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber1', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber10', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber11', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber12', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber13', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber2', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber3', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber4', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber5', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber6', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber7', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber8', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoBra> = new BigNumberField('genericNumber9', PerGlobalInfoBra, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoBra> = new StringField('genericString1', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoBra> = new StringField('genericString10', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoBra> = new StringField('genericString11', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoBra> = new StringField('genericString12', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoBra> = new StringField('genericString13', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoBra> = new StringField('genericString14', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoBra> = new StringField('genericString15', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoBra> = new StringField('genericString16', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoBra> = new StringField('genericString17', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoBra> = new StringField('genericString18', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoBra> = new StringField('genericString19', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoBra> = new StringField('genericString2', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoBra> = new StringField('genericString20', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoBra> = new StringField('genericString3', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoBra> = new StringField('genericString4', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoBra> = new StringField('genericString5', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoBra> = new StringField('genericString6', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoBra> = new StringField('genericString7', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoBra> = new StringField('genericString8', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoBra> = new StringField('genericString9', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoBra> = new StringField('lastModifiedBy', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoBra> = new DateField('lastModifiedDateTime', PerGlobalInfoBra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoBra> = new DateField('lastModifiedOn', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoBra> = new StringField('operation', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoBra> = new StringField('personIdExternal', PerGlobalInfoBra, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoBra> = new DateField('startDate', PerGlobalInfoBra, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoBra, Territory> = new OneToOneLink('countryNav', PerGlobalInfoBra, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber10Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber11Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber12Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber12Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber13Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber13Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericNumber9Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString10Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString11Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString12Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9_NAV: OneToOneLink<PerGlobalInfoBra, PicklistOption> = new OneToOneLink('genericString9Nav', PerGlobalInfoBra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoBra, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoBra, PerPerson);
  /**
   * All fields of the PerGlobalInfoBra entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoBra> | DateField<PerGlobalInfoBra> | BigNumberField<PerGlobalInfoBra> | OneToOneLink<PerGlobalInfoBra, Territory> | OneToOneLink<PerGlobalInfoBra, PicklistOption> | OneToOneLink<PerGlobalInfoBra, PerPerson>> = [
    PerGlobalInfoBra.COUNTRY,
    PerGlobalInfoBra.CREATED_BY,
    PerGlobalInfoBra.CREATED_DATE_TIME,
    PerGlobalInfoBra.CREATED_ON,
    PerGlobalInfoBra.END_DATE,
    PerGlobalInfoBra.GENERIC_DATE_1,
    PerGlobalInfoBra.GENERIC_DATE_2,
    PerGlobalInfoBra.GENERIC_DATE_3,
    PerGlobalInfoBra.GENERIC_DATE_4,
    PerGlobalInfoBra.GENERIC_DATE_5,
    PerGlobalInfoBra.GENERIC_DATE_6,
    PerGlobalInfoBra.GENERIC_DATE_7,
    PerGlobalInfoBra.GENERIC_DATE_8,
    PerGlobalInfoBra.GENERIC_NUMBER_1,
    PerGlobalInfoBra.GENERIC_NUMBER_10,
    PerGlobalInfoBra.GENERIC_NUMBER_11,
    PerGlobalInfoBra.GENERIC_NUMBER_12,
    PerGlobalInfoBra.GENERIC_NUMBER_13,
    PerGlobalInfoBra.GENERIC_NUMBER_2,
    PerGlobalInfoBra.GENERIC_NUMBER_3,
    PerGlobalInfoBra.GENERIC_NUMBER_4,
    PerGlobalInfoBra.GENERIC_NUMBER_5,
    PerGlobalInfoBra.GENERIC_NUMBER_6,
    PerGlobalInfoBra.GENERIC_NUMBER_7,
    PerGlobalInfoBra.GENERIC_NUMBER_8,
    PerGlobalInfoBra.GENERIC_NUMBER_9,
    PerGlobalInfoBra.GENERIC_STRING_1,
    PerGlobalInfoBra.GENERIC_STRING_10,
    PerGlobalInfoBra.GENERIC_STRING_11,
    PerGlobalInfoBra.GENERIC_STRING_12,
    PerGlobalInfoBra.GENERIC_STRING_13,
    PerGlobalInfoBra.GENERIC_STRING_14,
    PerGlobalInfoBra.GENERIC_STRING_15,
    PerGlobalInfoBra.GENERIC_STRING_16,
    PerGlobalInfoBra.GENERIC_STRING_17,
    PerGlobalInfoBra.GENERIC_STRING_18,
    PerGlobalInfoBra.GENERIC_STRING_19,
    PerGlobalInfoBra.GENERIC_STRING_2,
    PerGlobalInfoBra.GENERIC_STRING_20,
    PerGlobalInfoBra.GENERIC_STRING_3,
    PerGlobalInfoBra.GENERIC_STRING_4,
    PerGlobalInfoBra.GENERIC_STRING_5,
    PerGlobalInfoBra.GENERIC_STRING_6,
    PerGlobalInfoBra.GENERIC_STRING_7,
    PerGlobalInfoBra.GENERIC_STRING_8,
    PerGlobalInfoBra.GENERIC_STRING_9,
    PerGlobalInfoBra.LAST_MODIFIED_BY,
    PerGlobalInfoBra.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoBra.LAST_MODIFIED_ON,
    PerGlobalInfoBra.OPERATION,
    PerGlobalInfoBra.PERSON_ID_EXTERNAL,
    PerGlobalInfoBra.START_DATE,
    PerGlobalInfoBra.COUNTRY_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_10_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_11_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_12_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_13_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoBra.GENERIC_NUMBER_9_NAV,
    PerGlobalInfoBra.GENERIC_STRING_10_NAV,
    PerGlobalInfoBra.GENERIC_STRING_11_NAV,
    PerGlobalInfoBra.GENERIC_STRING_12_NAV,
    PerGlobalInfoBra.GENERIC_STRING_1_NAV,
    PerGlobalInfoBra.GENERIC_STRING_2_NAV,
    PerGlobalInfoBra.GENERIC_STRING_3_NAV,
    PerGlobalInfoBra.GENERIC_STRING_9_NAV,
    PerGlobalInfoBra.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoBra> = new AllFields('*', PerGlobalInfoBra);
  /**
   * All key fields of the PerGlobalInfoBra entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoBra>> = [PerGlobalInfoBra.COUNTRY, PerGlobalInfoBra.PERSON_ID_EXTERNAL, PerGlobalInfoBra.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoBra.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoBra> } = PerGlobalInfoBra._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoBra> }, field: Selectable<PerGlobalInfoBra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
