/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoIndRequestBuilder } from './PerGlobalInfoIndRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoIND" of service "SFOData".
 */
export class PerGlobalInfoInd extends Entity implements PerGlobalInfoIndType {
  /**
   * Technical entity name for PerGlobalInfoInd.
   */
  static _entityName = 'PerGlobalInfoIND';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoInd.
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
   * Date Learned.
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
   * Religion.
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
   * Number of Children.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Active duty wartime or campaign badge veterans.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Occupational Code.
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
   * Child Education Allowances.
   * Maximum length: 2.
   * @nullable
   */
  genericString5?: string;
  /**
   * Child Hostel Allowances.
   * Maximum length: 2.
   * @nullable
   */
  genericString6?: string;
  /**
   * Other Allowances.
   * Maximum length: 2.
   * @nullable
   */
  genericString7?: string;
  /**
   * Name of Father/Husband/Legal Guardian.
   * Maximum length: 256.
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
  genericNumber4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString2Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoInd`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoInd`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoInd, PerGlobalInfoIndTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoInd);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoInd` entity type.
   * @returns A `PerGlobalInfoInd` request builder.
   */
  static requestBuilder(): PerGlobalInfoIndRequestBuilder {
    return new PerGlobalInfoIndRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoInd`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoInd`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoInd> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoInd);
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

export interface PerGlobalInfoIndType {
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
  genericNumber4Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoIndTypeForceMandatory {
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
  genericNumber4Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoInd {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoInd> = new StringField('country', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoInd> = new StringField('createdBy', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoInd> = new DateField('createdDateTime', PerGlobalInfoInd, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoInd> = new DateField('createdOn', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoInd> = new DateField('endDate', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoInd> = new DateField('genericDate1', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoInd> = new DateField('genericDate2', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoInd> = new DateField('genericDate3', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoInd> = new DateField('genericDate4', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoInd> = new DateField('genericDate5', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoInd> = new DateField('genericDate6', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoInd> = new DateField('genericDate7', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoInd> = new DateField('genericDate8', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber1', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber10', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber11', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber12', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber13', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber2', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber3', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber4', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber5', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber6', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber7', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber8', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoInd> = new BigNumberField('genericNumber9', PerGlobalInfoInd, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoInd> = new StringField('genericString1', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoInd> = new StringField('genericString10', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoInd> = new StringField('genericString11', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoInd> = new StringField('genericString12', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoInd> = new StringField('genericString13', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoInd> = new StringField('genericString14', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoInd> = new StringField('genericString15', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoInd> = new StringField('genericString16', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoInd> = new StringField('genericString17', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoInd> = new StringField('genericString18', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoInd> = new StringField('genericString19', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoInd> = new StringField('genericString2', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoInd> = new StringField('genericString20', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoInd> = new StringField('genericString3', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoInd> = new StringField('genericString4', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoInd> = new StringField('genericString5', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoInd> = new StringField('genericString6', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoInd> = new StringField('genericString7', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoInd> = new StringField('genericString8', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoInd> = new StringField('genericString9', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoInd> = new StringField('lastModifiedBy', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoInd> = new DateField('lastModifiedDateTime', PerGlobalInfoInd, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoInd> = new DateField('lastModifiedOn', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoInd> = new StringField('operation', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoInd> = new StringField('personIdExternal', PerGlobalInfoInd, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoInd> = new DateField('startDate', PerGlobalInfoInd, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoInd, Territory> = new OneToOneLink('countryNav', PerGlobalInfoInd, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoInd, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoInd, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoInd, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoInd, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoInd, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoInd, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoInd, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoInd, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoInd, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoInd, PerPerson);
  /**
   * All fields of the PerGlobalInfoInd entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoInd> | DateField<PerGlobalInfoInd> | BigNumberField<PerGlobalInfoInd> | OneToOneLink<PerGlobalInfoInd, Territory> | OneToOneLink<PerGlobalInfoInd, PicklistOption> | OneToOneLink<PerGlobalInfoInd, PerPerson>> = [
    PerGlobalInfoInd.COUNTRY,
    PerGlobalInfoInd.CREATED_BY,
    PerGlobalInfoInd.CREATED_DATE_TIME,
    PerGlobalInfoInd.CREATED_ON,
    PerGlobalInfoInd.END_DATE,
    PerGlobalInfoInd.GENERIC_DATE_1,
    PerGlobalInfoInd.GENERIC_DATE_2,
    PerGlobalInfoInd.GENERIC_DATE_3,
    PerGlobalInfoInd.GENERIC_DATE_4,
    PerGlobalInfoInd.GENERIC_DATE_5,
    PerGlobalInfoInd.GENERIC_DATE_6,
    PerGlobalInfoInd.GENERIC_DATE_7,
    PerGlobalInfoInd.GENERIC_DATE_8,
    PerGlobalInfoInd.GENERIC_NUMBER_1,
    PerGlobalInfoInd.GENERIC_NUMBER_10,
    PerGlobalInfoInd.GENERIC_NUMBER_11,
    PerGlobalInfoInd.GENERIC_NUMBER_12,
    PerGlobalInfoInd.GENERIC_NUMBER_13,
    PerGlobalInfoInd.GENERIC_NUMBER_2,
    PerGlobalInfoInd.GENERIC_NUMBER_3,
    PerGlobalInfoInd.GENERIC_NUMBER_4,
    PerGlobalInfoInd.GENERIC_NUMBER_5,
    PerGlobalInfoInd.GENERIC_NUMBER_6,
    PerGlobalInfoInd.GENERIC_NUMBER_7,
    PerGlobalInfoInd.GENERIC_NUMBER_8,
    PerGlobalInfoInd.GENERIC_NUMBER_9,
    PerGlobalInfoInd.GENERIC_STRING_1,
    PerGlobalInfoInd.GENERIC_STRING_10,
    PerGlobalInfoInd.GENERIC_STRING_11,
    PerGlobalInfoInd.GENERIC_STRING_12,
    PerGlobalInfoInd.GENERIC_STRING_13,
    PerGlobalInfoInd.GENERIC_STRING_14,
    PerGlobalInfoInd.GENERIC_STRING_15,
    PerGlobalInfoInd.GENERIC_STRING_16,
    PerGlobalInfoInd.GENERIC_STRING_17,
    PerGlobalInfoInd.GENERIC_STRING_18,
    PerGlobalInfoInd.GENERIC_STRING_19,
    PerGlobalInfoInd.GENERIC_STRING_2,
    PerGlobalInfoInd.GENERIC_STRING_20,
    PerGlobalInfoInd.GENERIC_STRING_3,
    PerGlobalInfoInd.GENERIC_STRING_4,
    PerGlobalInfoInd.GENERIC_STRING_5,
    PerGlobalInfoInd.GENERIC_STRING_6,
    PerGlobalInfoInd.GENERIC_STRING_7,
    PerGlobalInfoInd.GENERIC_STRING_8,
    PerGlobalInfoInd.GENERIC_STRING_9,
    PerGlobalInfoInd.LAST_MODIFIED_BY,
    PerGlobalInfoInd.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoInd.LAST_MODIFIED_ON,
    PerGlobalInfoInd.OPERATION,
    PerGlobalInfoInd.PERSON_ID_EXTERNAL,
    PerGlobalInfoInd.START_DATE,
    PerGlobalInfoInd.COUNTRY_NAV,
    PerGlobalInfoInd.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoInd.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoInd.GENERIC_STRING_1_NAV,
    PerGlobalInfoInd.GENERIC_STRING_2_NAV,
    PerGlobalInfoInd.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoInd> = new AllFields('*', PerGlobalInfoInd);
  /**
   * All key fields of the PerGlobalInfoInd entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoInd>> = [PerGlobalInfoInd.COUNTRY, PerGlobalInfoInd.PERSON_ID_EXTERNAL, PerGlobalInfoInd.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoInd.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoInd> } = PerGlobalInfoInd._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoInd> }, field: Selectable<PerGlobalInfoInd>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
