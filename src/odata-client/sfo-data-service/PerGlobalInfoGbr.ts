/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoGbrRequestBuilder } from './PerGlobalInfoGbrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoGBR" of service "SFOData".
 */
export class PerGlobalInfoGbr extends Entity implements PerGlobalInfoGbrType {
  /**
   * Technical entity name for PerGlobalInfoGbr.
   */
  static _entityName = 'PerGlobalInfoGBR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoGbr.
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
   * Military Status.
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
   * Religion.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Standard Occupational Classification Code.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Armed Forces Medal Veteran.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Degree of Challenge.
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
   * Ethnic Group.
   * Maximum length: 60.
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
   * Challenged.
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
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoGbr`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoGbr, PerGlobalInfoGbrTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoGbr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoGbr` entity type.
   * @returns A `PerGlobalInfoGbr` request builder.
   */
  static requestBuilder(): PerGlobalInfoGbrRequestBuilder {
    return new PerGlobalInfoGbrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoGbr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoGbr`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoGbr> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoGbr);
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

export interface PerGlobalInfoGbrType {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoGbrTypeForceMandatory {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoGbr {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoGbr> = new StringField('country', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoGbr> = new StringField('createdBy', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoGbr> = new DateField('createdDateTime', PerGlobalInfoGbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoGbr> = new DateField('createdOn', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoGbr> = new DateField('endDate', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoGbr> = new DateField('genericDate1', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoGbr> = new DateField('genericDate2', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoGbr> = new DateField('genericDate3', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoGbr> = new DateField('genericDate4', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoGbr> = new DateField('genericDate5', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoGbr> = new DateField('genericDate6', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoGbr> = new DateField('genericDate7', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoGbr> = new DateField('genericDate8', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber1', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber10', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber11', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber12', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber13', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber2', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber3', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber4', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber5', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber6', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber7', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber8', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoGbr> = new BigNumberField('genericNumber9', PerGlobalInfoGbr, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoGbr> = new StringField('genericString1', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoGbr> = new StringField('genericString10', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoGbr> = new StringField('genericString11', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoGbr> = new StringField('genericString12', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoGbr> = new StringField('genericString13', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoGbr> = new StringField('genericString14', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoGbr> = new StringField('genericString15', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoGbr> = new StringField('genericString16', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoGbr> = new StringField('genericString17', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoGbr> = new StringField('genericString18', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoGbr> = new StringField('genericString19', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoGbr> = new StringField('genericString2', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoGbr> = new StringField('genericString20', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoGbr> = new StringField('genericString3', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoGbr> = new StringField('genericString4', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoGbr> = new StringField('genericString5', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoGbr> = new StringField('genericString6', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoGbr> = new StringField('genericString7', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoGbr> = new StringField('genericString8', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoGbr> = new StringField('genericString9', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoGbr> = new StringField('lastModifiedBy', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoGbr> = new DateField('lastModifiedDateTime', PerGlobalInfoGbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoGbr> = new DateField('lastModifiedOn', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoGbr> = new StringField('operation', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoGbr> = new StringField('personIdExternal', PerGlobalInfoGbr, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoGbr> = new DateField('startDate', PerGlobalInfoGbr, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoGbr, Territory> = new OneToOneLink('countryNav', PerGlobalInfoGbr, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericNumber2Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoGbr, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoGbr, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoGbr, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoGbr, PerPerson);
  /**
   * All fields of the PerGlobalInfoGbr entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoGbr> | DateField<PerGlobalInfoGbr> | BigNumberField<PerGlobalInfoGbr> | OneToOneLink<PerGlobalInfoGbr, Territory> | OneToOneLink<PerGlobalInfoGbr, PicklistOption> | OneToOneLink<PerGlobalInfoGbr, PerPerson>> = [
    PerGlobalInfoGbr.COUNTRY,
    PerGlobalInfoGbr.CREATED_BY,
    PerGlobalInfoGbr.CREATED_DATE_TIME,
    PerGlobalInfoGbr.CREATED_ON,
    PerGlobalInfoGbr.END_DATE,
    PerGlobalInfoGbr.GENERIC_DATE_1,
    PerGlobalInfoGbr.GENERIC_DATE_2,
    PerGlobalInfoGbr.GENERIC_DATE_3,
    PerGlobalInfoGbr.GENERIC_DATE_4,
    PerGlobalInfoGbr.GENERIC_DATE_5,
    PerGlobalInfoGbr.GENERIC_DATE_6,
    PerGlobalInfoGbr.GENERIC_DATE_7,
    PerGlobalInfoGbr.GENERIC_DATE_8,
    PerGlobalInfoGbr.GENERIC_NUMBER_1,
    PerGlobalInfoGbr.GENERIC_NUMBER_10,
    PerGlobalInfoGbr.GENERIC_NUMBER_11,
    PerGlobalInfoGbr.GENERIC_NUMBER_12,
    PerGlobalInfoGbr.GENERIC_NUMBER_13,
    PerGlobalInfoGbr.GENERIC_NUMBER_2,
    PerGlobalInfoGbr.GENERIC_NUMBER_3,
    PerGlobalInfoGbr.GENERIC_NUMBER_4,
    PerGlobalInfoGbr.GENERIC_NUMBER_5,
    PerGlobalInfoGbr.GENERIC_NUMBER_6,
    PerGlobalInfoGbr.GENERIC_NUMBER_7,
    PerGlobalInfoGbr.GENERIC_NUMBER_8,
    PerGlobalInfoGbr.GENERIC_NUMBER_9,
    PerGlobalInfoGbr.GENERIC_STRING_1,
    PerGlobalInfoGbr.GENERIC_STRING_10,
    PerGlobalInfoGbr.GENERIC_STRING_11,
    PerGlobalInfoGbr.GENERIC_STRING_12,
    PerGlobalInfoGbr.GENERIC_STRING_13,
    PerGlobalInfoGbr.GENERIC_STRING_14,
    PerGlobalInfoGbr.GENERIC_STRING_15,
    PerGlobalInfoGbr.GENERIC_STRING_16,
    PerGlobalInfoGbr.GENERIC_STRING_17,
    PerGlobalInfoGbr.GENERIC_STRING_18,
    PerGlobalInfoGbr.GENERIC_STRING_19,
    PerGlobalInfoGbr.GENERIC_STRING_2,
    PerGlobalInfoGbr.GENERIC_STRING_20,
    PerGlobalInfoGbr.GENERIC_STRING_3,
    PerGlobalInfoGbr.GENERIC_STRING_4,
    PerGlobalInfoGbr.GENERIC_STRING_5,
    PerGlobalInfoGbr.GENERIC_STRING_6,
    PerGlobalInfoGbr.GENERIC_STRING_7,
    PerGlobalInfoGbr.GENERIC_STRING_8,
    PerGlobalInfoGbr.GENERIC_STRING_9,
    PerGlobalInfoGbr.LAST_MODIFIED_BY,
    PerGlobalInfoGbr.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoGbr.LAST_MODIFIED_ON,
    PerGlobalInfoGbr.OPERATION,
    PerGlobalInfoGbr.PERSON_ID_EXTERNAL,
    PerGlobalInfoGbr.START_DATE,
    PerGlobalInfoGbr.COUNTRY_NAV,
    PerGlobalInfoGbr.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoGbr.GENERIC_NUMBER_2_NAV,
    PerGlobalInfoGbr.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoGbr.GENERIC_STRING_1_NAV,
    PerGlobalInfoGbr.GENERIC_STRING_2_NAV,
    PerGlobalInfoGbr.GENERIC_STRING_3_NAV,
    PerGlobalInfoGbr.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoGbr> = new AllFields('*', PerGlobalInfoGbr);
  /**
   * All key fields of the PerGlobalInfoGbr entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoGbr>> = [PerGlobalInfoGbr.COUNTRY, PerGlobalInfoGbr.PERSON_ID_EXTERNAL, PerGlobalInfoGbr.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoGbr.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoGbr> } = PerGlobalInfoGbr._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoGbr> }, field: Selectable<PerGlobalInfoGbr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
