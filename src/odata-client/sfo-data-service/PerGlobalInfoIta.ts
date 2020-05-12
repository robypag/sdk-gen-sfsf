/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoItaRequestBuilder } from './PerGlobalInfoItaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoITA" of service "SFOData".
 */
export class PerGlobalInfoIta extends Entity implements PerGlobalInfoItaType {
  /**
   * Technical entity name for PerGlobalInfoIta.
   */
  static _entityName = 'PerGlobalInfoITA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoIta.
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
   * Date of Determination of Challenge Status.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * Employed Since.
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
   * Number of Children.
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
   * Percentage of Allowance Due to Heirs.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Percentage of Allowance for Severance Indemnity Due to Heirs.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Deduction Measure.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Recently Separated Veteran.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Special Disabled Veteran.
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
   * Eligible For Maintenance Benefit.
   * Maximum length: 256.
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
   * Tax Payer's Reference Number.
   * Maximum length: 16.
   * @nullable
   */
  genericString6?: string;
  /**
   * Deduction for Spouse Given to Child Instead.
   * Maximum length: 5.
   * @nullable
   */
  genericString7?: string;
  /**
   * Less Than Three Years.
   * Maximum length: 5.
   * @nullable
   */
  genericString8?: string;
  /**
   * Challenged.
   * Maximum length: 5.
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
  genericString10Nav!: PicklistOption;
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
  genericString7Nav!: PicklistOption;
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
   * Returns an entity builder to construct instances `PerGlobalInfoIta`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoIta`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoIta, PerGlobalInfoItaTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoIta);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoIta` entity type.
   * @returns A `PerGlobalInfoIta` request builder.
   */
  static requestBuilder(): PerGlobalInfoItaRequestBuilder {
    return new PerGlobalInfoItaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoIta`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoIta`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoIta> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoIta);
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

export interface PerGlobalInfoItaType {
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
  genericString10Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoItaTypeForceMandatory {
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
  genericString10Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoIta {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoIta> = new StringField('country', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoIta> = new StringField('createdBy', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoIta> = new DateField('createdDateTime', PerGlobalInfoIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoIta> = new DateField('createdOn', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoIta> = new DateField('endDate', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoIta> = new DateField('genericDate1', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoIta> = new DateField('genericDate2', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoIta> = new DateField('genericDate3', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoIta> = new DateField('genericDate4', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoIta> = new DateField('genericDate5', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoIta> = new DateField('genericDate6', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoIta> = new DateField('genericDate7', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoIta> = new DateField('genericDate8', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber1', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber10', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber11', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber12', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber13', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber2', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber3', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber4', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber5', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber6', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber7', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber8', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoIta> = new BigNumberField('genericNumber9', PerGlobalInfoIta, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoIta> = new StringField('genericString1', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoIta> = new StringField('genericString10', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoIta> = new StringField('genericString11', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoIta> = new StringField('genericString12', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoIta> = new StringField('genericString13', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoIta> = new StringField('genericString14', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoIta> = new StringField('genericString15', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoIta> = new StringField('genericString16', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoIta> = new StringField('genericString17', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoIta> = new StringField('genericString18', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoIta> = new StringField('genericString19', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoIta> = new StringField('genericString2', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoIta> = new StringField('genericString20', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoIta> = new StringField('genericString3', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoIta> = new StringField('genericString4', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoIta> = new StringField('genericString5', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoIta> = new StringField('genericString6', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoIta> = new StringField('genericString7', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoIta> = new StringField('genericString8', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoIta> = new StringField('genericString9', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoIta> = new StringField('lastModifiedBy', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoIta> = new DateField('lastModifiedDateTime', PerGlobalInfoIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoIta> = new DateField('lastModifiedOn', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoIta> = new StringField('operation', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoIta> = new StringField('personIdExternal', PerGlobalInfoIta, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoIta> = new DateField('startDate', PerGlobalInfoIta, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoIta, Territory> = new OneToOneLink('countryNav', PerGlobalInfoIta, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString10Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString8Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9_NAV: OneToOneLink<PerGlobalInfoIta, PicklistOption> = new OneToOneLink('genericString9Nav', PerGlobalInfoIta, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoIta, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoIta, PerPerson);
  /**
   * All fields of the PerGlobalInfoIta entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoIta> | DateField<PerGlobalInfoIta> | BigNumberField<PerGlobalInfoIta> | OneToOneLink<PerGlobalInfoIta, Territory> | OneToOneLink<PerGlobalInfoIta, PicklistOption> | OneToOneLink<PerGlobalInfoIta, PerPerson>> = [
    PerGlobalInfoIta.COUNTRY,
    PerGlobalInfoIta.CREATED_BY,
    PerGlobalInfoIta.CREATED_DATE_TIME,
    PerGlobalInfoIta.CREATED_ON,
    PerGlobalInfoIta.END_DATE,
    PerGlobalInfoIta.GENERIC_DATE_1,
    PerGlobalInfoIta.GENERIC_DATE_2,
    PerGlobalInfoIta.GENERIC_DATE_3,
    PerGlobalInfoIta.GENERIC_DATE_4,
    PerGlobalInfoIta.GENERIC_DATE_5,
    PerGlobalInfoIta.GENERIC_DATE_6,
    PerGlobalInfoIta.GENERIC_DATE_7,
    PerGlobalInfoIta.GENERIC_DATE_8,
    PerGlobalInfoIta.GENERIC_NUMBER_1,
    PerGlobalInfoIta.GENERIC_NUMBER_10,
    PerGlobalInfoIta.GENERIC_NUMBER_11,
    PerGlobalInfoIta.GENERIC_NUMBER_12,
    PerGlobalInfoIta.GENERIC_NUMBER_13,
    PerGlobalInfoIta.GENERIC_NUMBER_2,
    PerGlobalInfoIta.GENERIC_NUMBER_3,
    PerGlobalInfoIta.GENERIC_NUMBER_4,
    PerGlobalInfoIta.GENERIC_NUMBER_5,
    PerGlobalInfoIta.GENERIC_NUMBER_6,
    PerGlobalInfoIta.GENERIC_NUMBER_7,
    PerGlobalInfoIta.GENERIC_NUMBER_8,
    PerGlobalInfoIta.GENERIC_NUMBER_9,
    PerGlobalInfoIta.GENERIC_STRING_1,
    PerGlobalInfoIta.GENERIC_STRING_10,
    PerGlobalInfoIta.GENERIC_STRING_11,
    PerGlobalInfoIta.GENERIC_STRING_12,
    PerGlobalInfoIta.GENERIC_STRING_13,
    PerGlobalInfoIta.GENERIC_STRING_14,
    PerGlobalInfoIta.GENERIC_STRING_15,
    PerGlobalInfoIta.GENERIC_STRING_16,
    PerGlobalInfoIta.GENERIC_STRING_17,
    PerGlobalInfoIta.GENERIC_STRING_18,
    PerGlobalInfoIta.GENERIC_STRING_19,
    PerGlobalInfoIta.GENERIC_STRING_2,
    PerGlobalInfoIta.GENERIC_STRING_20,
    PerGlobalInfoIta.GENERIC_STRING_3,
    PerGlobalInfoIta.GENERIC_STRING_4,
    PerGlobalInfoIta.GENERIC_STRING_5,
    PerGlobalInfoIta.GENERIC_STRING_6,
    PerGlobalInfoIta.GENERIC_STRING_7,
    PerGlobalInfoIta.GENERIC_STRING_8,
    PerGlobalInfoIta.GENERIC_STRING_9,
    PerGlobalInfoIta.LAST_MODIFIED_BY,
    PerGlobalInfoIta.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoIta.LAST_MODIFIED_ON,
    PerGlobalInfoIta.OPERATION,
    PerGlobalInfoIta.PERSON_ID_EXTERNAL,
    PerGlobalInfoIta.START_DATE,
    PerGlobalInfoIta.COUNTRY_NAV,
    PerGlobalInfoIta.GENERIC_STRING_10_NAV,
    PerGlobalInfoIta.GENERIC_STRING_1_NAV,
    PerGlobalInfoIta.GENERIC_STRING_2_NAV,
    PerGlobalInfoIta.GENERIC_STRING_7_NAV,
    PerGlobalInfoIta.GENERIC_STRING_8_NAV,
    PerGlobalInfoIta.GENERIC_STRING_9_NAV,
    PerGlobalInfoIta.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoIta> = new AllFields('*', PerGlobalInfoIta);
  /**
   * All key fields of the PerGlobalInfoIta entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoIta>> = [PerGlobalInfoIta.COUNTRY, PerGlobalInfoIta.PERSON_ID_EXTERNAL, PerGlobalInfoIta.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoIta.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoIta> } = PerGlobalInfoIta._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoIta> }, field: Selectable<PerGlobalInfoIta>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
