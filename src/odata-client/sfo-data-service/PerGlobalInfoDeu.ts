/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoDeuRequestBuilder } from './PerGlobalInfoDeuRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoDEU" of service "SFOData".
 */
export class PerGlobalInfoDeu extends Entity implements PerGlobalInfoDeuType {
  /**
   * Technical entity name for PerGlobalInfoDeu.
   */
  static _entityName = 'PerGlobalInfoDEU';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoDeu.
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
   * Date of Cession.
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
   * Credit Factor.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Active duty wartime or campaign badge veterans.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Armed Forces Medal Veteran.
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
   * Working Hours Per Week (Challenged).
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
   * Verification Type.
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
   * City.
   * Maximum length: 256.
   * @nullable
   */
  genericString5?: string;
  /**
   * Reference Number.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Allowance Authority.
   * Maximum length: 2.
   * @nullable
   */
  genericString7?: string;
  /**
   * Bonus Allowance Entitlement.
   * Maximum length: 2.
   * @nullable
   */
  genericString8?: string;
  /**
   * Challenged Person is Managing Director.
   * Maximum length: 10.
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
  genericString3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString9Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoDeu`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoDeu`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoDeu, PerGlobalInfoDeuTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoDeu);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoDeu` entity type.
   * @returns A `PerGlobalInfoDeu` request builder.
   */
  static requestBuilder(): PerGlobalInfoDeuRequestBuilder {
    return new PerGlobalInfoDeuRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoDeu`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoDeu`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoDeu> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoDeu);
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

export interface PerGlobalInfoDeuType {
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
  genericString3Nav: PicklistOptionType;
  genericString4Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoDeuTypeForceMandatory {
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
  genericString3Nav: PicklistOptionType;
  genericString4Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoDeu {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoDeu> = new StringField('country', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoDeu> = new StringField('createdBy', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoDeu> = new DateField('createdDateTime', PerGlobalInfoDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoDeu> = new DateField('createdOn', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoDeu> = new DateField('endDate', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoDeu> = new DateField('genericDate1', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoDeu> = new DateField('genericDate2', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoDeu> = new DateField('genericDate3', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoDeu> = new DateField('genericDate4', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoDeu> = new DateField('genericDate5', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoDeu> = new DateField('genericDate6', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoDeu> = new DateField('genericDate7', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoDeu> = new DateField('genericDate8', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber1', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber10', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber11', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber12', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber13', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber2', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber3', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber4', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber5', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber6', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber7', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber8', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoDeu> = new BigNumberField('genericNumber9', PerGlobalInfoDeu, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoDeu> = new StringField('genericString1', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoDeu> = new StringField('genericString10', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoDeu> = new StringField('genericString11', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoDeu> = new StringField('genericString12', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoDeu> = new StringField('genericString13', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoDeu> = new StringField('genericString14', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoDeu> = new StringField('genericString15', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoDeu> = new StringField('genericString16', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoDeu> = new StringField('genericString17', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoDeu> = new StringField('genericString18', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoDeu> = new StringField('genericString19', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoDeu> = new StringField('genericString2', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoDeu> = new StringField('genericString20', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoDeu> = new StringField('genericString3', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoDeu> = new StringField('genericString4', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoDeu> = new StringField('genericString5', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoDeu> = new StringField('genericString6', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoDeu> = new StringField('genericString7', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoDeu> = new StringField('genericString8', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoDeu> = new StringField('genericString9', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoDeu> = new StringField('lastModifiedBy', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoDeu> = new DateField('lastModifiedDateTime', PerGlobalInfoDeu, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoDeu> = new DateField('lastModifiedOn', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoDeu> = new StringField('operation', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoDeu> = new StringField('personIdExternal', PerGlobalInfoDeu, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoDeu> = new DateField('startDate', PerGlobalInfoDeu, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoDeu, Territory> = new OneToOneLink('countryNav', PerGlobalInfoDeu, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString10Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString4Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9_NAV: OneToOneLink<PerGlobalInfoDeu, PicklistOption> = new OneToOneLink('genericString9Nav', PerGlobalInfoDeu, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoDeu, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoDeu, PerPerson);
  /**
   * All fields of the PerGlobalInfoDeu entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoDeu> | DateField<PerGlobalInfoDeu> | BigNumberField<PerGlobalInfoDeu> | OneToOneLink<PerGlobalInfoDeu, Territory> | OneToOneLink<PerGlobalInfoDeu, PicklistOption> | OneToOneLink<PerGlobalInfoDeu, PerPerson>> = [
    PerGlobalInfoDeu.COUNTRY,
    PerGlobalInfoDeu.CREATED_BY,
    PerGlobalInfoDeu.CREATED_DATE_TIME,
    PerGlobalInfoDeu.CREATED_ON,
    PerGlobalInfoDeu.END_DATE,
    PerGlobalInfoDeu.GENERIC_DATE_1,
    PerGlobalInfoDeu.GENERIC_DATE_2,
    PerGlobalInfoDeu.GENERIC_DATE_3,
    PerGlobalInfoDeu.GENERIC_DATE_4,
    PerGlobalInfoDeu.GENERIC_DATE_5,
    PerGlobalInfoDeu.GENERIC_DATE_6,
    PerGlobalInfoDeu.GENERIC_DATE_7,
    PerGlobalInfoDeu.GENERIC_DATE_8,
    PerGlobalInfoDeu.GENERIC_NUMBER_1,
    PerGlobalInfoDeu.GENERIC_NUMBER_10,
    PerGlobalInfoDeu.GENERIC_NUMBER_11,
    PerGlobalInfoDeu.GENERIC_NUMBER_12,
    PerGlobalInfoDeu.GENERIC_NUMBER_13,
    PerGlobalInfoDeu.GENERIC_NUMBER_2,
    PerGlobalInfoDeu.GENERIC_NUMBER_3,
    PerGlobalInfoDeu.GENERIC_NUMBER_4,
    PerGlobalInfoDeu.GENERIC_NUMBER_5,
    PerGlobalInfoDeu.GENERIC_NUMBER_6,
    PerGlobalInfoDeu.GENERIC_NUMBER_7,
    PerGlobalInfoDeu.GENERIC_NUMBER_8,
    PerGlobalInfoDeu.GENERIC_NUMBER_9,
    PerGlobalInfoDeu.GENERIC_STRING_1,
    PerGlobalInfoDeu.GENERIC_STRING_10,
    PerGlobalInfoDeu.GENERIC_STRING_11,
    PerGlobalInfoDeu.GENERIC_STRING_12,
    PerGlobalInfoDeu.GENERIC_STRING_13,
    PerGlobalInfoDeu.GENERIC_STRING_14,
    PerGlobalInfoDeu.GENERIC_STRING_15,
    PerGlobalInfoDeu.GENERIC_STRING_16,
    PerGlobalInfoDeu.GENERIC_STRING_17,
    PerGlobalInfoDeu.GENERIC_STRING_18,
    PerGlobalInfoDeu.GENERIC_STRING_19,
    PerGlobalInfoDeu.GENERIC_STRING_2,
    PerGlobalInfoDeu.GENERIC_STRING_20,
    PerGlobalInfoDeu.GENERIC_STRING_3,
    PerGlobalInfoDeu.GENERIC_STRING_4,
    PerGlobalInfoDeu.GENERIC_STRING_5,
    PerGlobalInfoDeu.GENERIC_STRING_6,
    PerGlobalInfoDeu.GENERIC_STRING_7,
    PerGlobalInfoDeu.GENERIC_STRING_8,
    PerGlobalInfoDeu.GENERIC_STRING_9,
    PerGlobalInfoDeu.LAST_MODIFIED_BY,
    PerGlobalInfoDeu.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoDeu.LAST_MODIFIED_ON,
    PerGlobalInfoDeu.OPERATION,
    PerGlobalInfoDeu.PERSON_ID_EXTERNAL,
    PerGlobalInfoDeu.START_DATE,
    PerGlobalInfoDeu.COUNTRY_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_10_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_1_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_2_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_3_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_4_NAV,
    PerGlobalInfoDeu.GENERIC_STRING_9_NAV,
    PerGlobalInfoDeu.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoDeu> = new AllFields('*', PerGlobalInfoDeu);
  /**
   * All key fields of the PerGlobalInfoDeu entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoDeu>> = [PerGlobalInfoDeu.COUNTRY, PerGlobalInfoDeu.PERSON_ID_EXTERNAL, PerGlobalInfoDeu.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoDeu.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoDeu> } = PerGlobalInfoDeu._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoDeu> }, field: Selectable<PerGlobalInfoDeu>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
