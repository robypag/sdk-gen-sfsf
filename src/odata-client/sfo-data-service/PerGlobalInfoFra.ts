/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoFraRequestBuilder } from './PerGlobalInfoFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoFRA" of service "SFOData".
 */
export class PerGlobalInfoFra extends Entity implements PerGlobalInfoFraType {
  /**
   * Technical entity name for PerGlobalInfoFra.
   */
  static _entityName = 'PerGlobalInfoFRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoFra.
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
   * Date of First Arrival in France.
   * @nullable
   */
  genericDate1?: Moment;
  /**
   * Expected Date of Retirement.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * Date Learned.
   * @nullable
   */
  genericDate3?: Moment;
  /**
   * Date Of Providing Proof Of Medical Absence.
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
   * Employee Type.
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
   * Professional Status.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Contract Category.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Contract Type.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Number of Children.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Vietnam Era Veteran.
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
   * On Military Service.
   * Maximum length: 15.
   * @nullable
   */
  genericString10?: string;
  /**
   * Financially Independent.
   * Maximum length: 15.
   * @nullable
   */
  genericString11?: string;
  /**
   * Physician Name.
   * Maximum length: 30.
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
   * Reference Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString5?: string;
  /**
   * Child Costs.
   * Maximum length: 15.
   * @nullable
   */
  genericString6?: string;
  /**
   * Student.
   * Maximum length: 15.
   * @nullable
   */
  genericString7?: string;
  /**
   * Medicare.
   * Maximum length: 15.
   * @nullable
   */
  genericString8?: string;
  /**
   * Smoker.
   * Maximum length: 15.
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
  genericString1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString2Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoFra`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoFra`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoFra, PerGlobalInfoFraTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoFra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoFra` entity type.
   * @returns A `PerGlobalInfoFra` request builder.
   */
  static requestBuilder(): PerGlobalInfoFraRequestBuilder {
    return new PerGlobalInfoFraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoFra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoFra`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoFra> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoFra);
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

export interface PerGlobalInfoFraType {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoFraTypeForceMandatory {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoFra {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoFra> = new StringField('country', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoFra> = new StringField('createdBy', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoFra> = new DateField('createdDateTime', PerGlobalInfoFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoFra> = new DateField('createdOn', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoFra> = new DateField('endDate', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoFra> = new DateField('genericDate1', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoFra> = new DateField('genericDate2', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoFra> = new DateField('genericDate3', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoFra> = new DateField('genericDate4', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoFra> = new DateField('genericDate5', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoFra> = new DateField('genericDate6', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoFra> = new DateField('genericDate7', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoFra> = new DateField('genericDate8', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber1', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber10', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber11', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber12', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber13', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber2', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber3', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber4', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber5', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber6', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber7', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber8', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoFra> = new BigNumberField('genericNumber9', PerGlobalInfoFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoFra> = new StringField('genericString1', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoFra> = new StringField('genericString10', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoFra> = new StringField('genericString11', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoFra> = new StringField('genericString12', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoFra> = new StringField('genericString13', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoFra> = new StringField('genericString14', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoFra> = new StringField('genericString15', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoFra> = new StringField('genericString16', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoFra> = new StringField('genericString17', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoFra> = new StringField('genericString18', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoFra> = new StringField('genericString19', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoFra> = new StringField('genericString2', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoFra> = new StringField('genericString20', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoFra> = new StringField('genericString3', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoFra> = new StringField('genericString4', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoFra> = new StringField('genericString5', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoFra> = new StringField('genericString6', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoFra> = new StringField('genericString7', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoFra> = new StringField('genericString8', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoFra> = new StringField('genericString9', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoFra> = new StringField('lastModifiedBy', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoFra> = new DateField('lastModifiedDateTime', PerGlobalInfoFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoFra> = new DateField('lastModifiedOn', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoFra> = new StringField('operation', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoFra> = new StringField('personIdExternal', PerGlobalInfoFra, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoFra> = new DateField('startDate', PerGlobalInfoFra, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoFra, Territory> = new OneToOneLink('countryNav', PerGlobalInfoFra, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoFra, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoFra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoFra, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoFra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoFra, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoFra, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoFra, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoFra, PerPerson);
  /**
   * All fields of the PerGlobalInfoFra entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoFra> | DateField<PerGlobalInfoFra> | BigNumberField<PerGlobalInfoFra> | OneToOneLink<PerGlobalInfoFra, Territory> | OneToOneLink<PerGlobalInfoFra, PicklistOption> | OneToOneLink<PerGlobalInfoFra, PerPerson>> = [
    PerGlobalInfoFra.COUNTRY,
    PerGlobalInfoFra.CREATED_BY,
    PerGlobalInfoFra.CREATED_DATE_TIME,
    PerGlobalInfoFra.CREATED_ON,
    PerGlobalInfoFra.END_DATE,
    PerGlobalInfoFra.GENERIC_DATE_1,
    PerGlobalInfoFra.GENERIC_DATE_2,
    PerGlobalInfoFra.GENERIC_DATE_3,
    PerGlobalInfoFra.GENERIC_DATE_4,
    PerGlobalInfoFra.GENERIC_DATE_5,
    PerGlobalInfoFra.GENERIC_DATE_6,
    PerGlobalInfoFra.GENERIC_DATE_7,
    PerGlobalInfoFra.GENERIC_DATE_8,
    PerGlobalInfoFra.GENERIC_NUMBER_1,
    PerGlobalInfoFra.GENERIC_NUMBER_10,
    PerGlobalInfoFra.GENERIC_NUMBER_11,
    PerGlobalInfoFra.GENERIC_NUMBER_12,
    PerGlobalInfoFra.GENERIC_NUMBER_13,
    PerGlobalInfoFra.GENERIC_NUMBER_2,
    PerGlobalInfoFra.GENERIC_NUMBER_3,
    PerGlobalInfoFra.GENERIC_NUMBER_4,
    PerGlobalInfoFra.GENERIC_NUMBER_5,
    PerGlobalInfoFra.GENERIC_NUMBER_6,
    PerGlobalInfoFra.GENERIC_NUMBER_7,
    PerGlobalInfoFra.GENERIC_NUMBER_8,
    PerGlobalInfoFra.GENERIC_NUMBER_9,
    PerGlobalInfoFra.GENERIC_STRING_1,
    PerGlobalInfoFra.GENERIC_STRING_10,
    PerGlobalInfoFra.GENERIC_STRING_11,
    PerGlobalInfoFra.GENERIC_STRING_12,
    PerGlobalInfoFra.GENERIC_STRING_13,
    PerGlobalInfoFra.GENERIC_STRING_14,
    PerGlobalInfoFra.GENERIC_STRING_15,
    PerGlobalInfoFra.GENERIC_STRING_16,
    PerGlobalInfoFra.GENERIC_STRING_17,
    PerGlobalInfoFra.GENERIC_STRING_18,
    PerGlobalInfoFra.GENERIC_STRING_19,
    PerGlobalInfoFra.GENERIC_STRING_2,
    PerGlobalInfoFra.GENERIC_STRING_20,
    PerGlobalInfoFra.GENERIC_STRING_3,
    PerGlobalInfoFra.GENERIC_STRING_4,
    PerGlobalInfoFra.GENERIC_STRING_5,
    PerGlobalInfoFra.GENERIC_STRING_6,
    PerGlobalInfoFra.GENERIC_STRING_7,
    PerGlobalInfoFra.GENERIC_STRING_8,
    PerGlobalInfoFra.GENERIC_STRING_9,
    PerGlobalInfoFra.LAST_MODIFIED_BY,
    PerGlobalInfoFra.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoFra.LAST_MODIFIED_ON,
    PerGlobalInfoFra.OPERATION,
    PerGlobalInfoFra.PERSON_ID_EXTERNAL,
    PerGlobalInfoFra.START_DATE,
    PerGlobalInfoFra.COUNTRY_NAV,
    PerGlobalInfoFra.GENERIC_STRING_1_NAV,
    PerGlobalInfoFra.GENERIC_STRING_2_NAV,
    PerGlobalInfoFra.GENERIC_STRING_6_NAV,
    PerGlobalInfoFra.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoFra> = new AllFields('*', PerGlobalInfoFra);
  /**
   * All key fields of the PerGlobalInfoFra entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoFra>> = [PerGlobalInfoFra.COUNTRY, PerGlobalInfoFra.PERSON_ID_EXTERNAL, PerGlobalInfoFra.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoFra.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoFra> } = PerGlobalInfoFra._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoFra> }, field: Selectable<PerGlobalInfoFra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
