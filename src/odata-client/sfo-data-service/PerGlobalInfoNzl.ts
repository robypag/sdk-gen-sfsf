/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoNzlRequestBuilder } from './PerGlobalInfoNzlRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoNZL" of service "SFOData".
 */
export class PerGlobalInfoNzl extends Entity implements PerGlobalInfoNzlType {
  /**
   * Technical entity name for PerGlobalInfoNzl.
   */
  static _entityName = 'PerGlobalInfoNZL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoNzl.
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
   * Religion.
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
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoNzl`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoNzl`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoNzl, PerGlobalInfoNzlTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoNzl);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoNzl` entity type.
   * @returns A `PerGlobalInfoNzl` request builder.
   */
  static requestBuilder(): PerGlobalInfoNzlRequestBuilder {
    return new PerGlobalInfoNzlRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoNzl`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoNzl`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoNzl> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoNzl);
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

export interface PerGlobalInfoNzlType {
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
  genericString5Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoNzlTypeForceMandatory {
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
  genericString5Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoNzl {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoNzl> = new StringField('country', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoNzl> = new StringField('createdBy', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoNzl> = new DateField('createdDateTime', PerGlobalInfoNzl, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoNzl> = new DateField('createdOn', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoNzl> = new DateField('endDate', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoNzl> = new DateField('genericDate1', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoNzl> = new DateField('genericDate2', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoNzl> = new DateField('genericDate3', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoNzl> = new DateField('genericDate4', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoNzl> = new DateField('genericDate5', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoNzl> = new DateField('genericDate6', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoNzl> = new DateField('genericDate7', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoNzl> = new DateField('genericDate8', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber1', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber10', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber11', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber12', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber13', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber2', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber3', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber4', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber5', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber6', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber7', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber8', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoNzl> = new BigNumberField('genericNumber9', PerGlobalInfoNzl, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoNzl> = new StringField('genericString1', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoNzl> = new StringField('genericString10', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoNzl> = new StringField('genericString11', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoNzl> = new StringField('genericString12', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoNzl> = new StringField('genericString13', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoNzl> = new StringField('genericString14', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoNzl> = new StringField('genericString15', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoNzl> = new StringField('genericString16', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoNzl> = new StringField('genericString17', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoNzl> = new StringField('genericString18', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoNzl> = new StringField('genericString19', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoNzl> = new StringField('genericString2', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoNzl> = new StringField('genericString20', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoNzl> = new StringField('genericString3', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoNzl> = new StringField('genericString4', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoNzl> = new StringField('genericString5', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoNzl> = new StringField('genericString6', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoNzl> = new StringField('genericString7', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoNzl> = new StringField('genericString8', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoNzl> = new StringField('genericString9', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoNzl> = new StringField('lastModifiedBy', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoNzl> = new DateField('lastModifiedDateTime', PerGlobalInfoNzl, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoNzl> = new DateField('lastModifiedOn', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoNzl> = new StringField('operation', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoNzl> = new StringField('personIdExternal', PerGlobalInfoNzl, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoNzl> = new DateField('startDate', PerGlobalInfoNzl, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoNzl, Territory> = new OneToOneLink('countryNav', PerGlobalInfoNzl, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoNzl, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoNzl, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoNzl, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoNzl, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5_NAV: OneToOneLink<PerGlobalInfoNzl, PicklistOption> = new OneToOneLink('genericString5Nav', PerGlobalInfoNzl, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoNzl, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoNzl, PerPerson);
  /**
   * All fields of the PerGlobalInfoNzl entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoNzl> | DateField<PerGlobalInfoNzl> | BigNumberField<PerGlobalInfoNzl> | OneToOneLink<PerGlobalInfoNzl, Territory> | OneToOneLink<PerGlobalInfoNzl, PicklistOption> | OneToOneLink<PerGlobalInfoNzl, PerPerson>> = [
    PerGlobalInfoNzl.COUNTRY,
    PerGlobalInfoNzl.CREATED_BY,
    PerGlobalInfoNzl.CREATED_DATE_TIME,
    PerGlobalInfoNzl.CREATED_ON,
    PerGlobalInfoNzl.END_DATE,
    PerGlobalInfoNzl.GENERIC_DATE_1,
    PerGlobalInfoNzl.GENERIC_DATE_2,
    PerGlobalInfoNzl.GENERIC_DATE_3,
    PerGlobalInfoNzl.GENERIC_DATE_4,
    PerGlobalInfoNzl.GENERIC_DATE_5,
    PerGlobalInfoNzl.GENERIC_DATE_6,
    PerGlobalInfoNzl.GENERIC_DATE_7,
    PerGlobalInfoNzl.GENERIC_DATE_8,
    PerGlobalInfoNzl.GENERIC_NUMBER_1,
    PerGlobalInfoNzl.GENERIC_NUMBER_10,
    PerGlobalInfoNzl.GENERIC_NUMBER_11,
    PerGlobalInfoNzl.GENERIC_NUMBER_12,
    PerGlobalInfoNzl.GENERIC_NUMBER_13,
    PerGlobalInfoNzl.GENERIC_NUMBER_2,
    PerGlobalInfoNzl.GENERIC_NUMBER_3,
    PerGlobalInfoNzl.GENERIC_NUMBER_4,
    PerGlobalInfoNzl.GENERIC_NUMBER_5,
    PerGlobalInfoNzl.GENERIC_NUMBER_6,
    PerGlobalInfoNzl.GENERIC_NUMBER_7,
    PerGlobalInfoNzl.GENERIC_NUMBER_8,
    PerGlobalInfoNzl.GENERIC_NUMBER_9,
    PerGlobalInfoNzl.GENERIC_STRING_1,
    PerGlobalInfoNzl.GENERIC_STRING_10,
    PerGlobalInfoNzl.GENERIC_STRING_11,
    PerGlobalInfoNzl.GENERIC_STRING_12,
    PerGlobalInfoNzl.GENERIC_STRING_13,
    PerGlobalInfoNzl.GENERIC_STRING_14,
    PerGlobalInfoNzl.GENERIC_STRING_15,
    PerGlobalInfoNzl.GENERIC_STRING_16,
    PerGlobalInfoNzl.GENERIC_STRING_17,
    PerGlobalInfoNzl.GENERIC_STRING_18,
    PerGlobalInfoNzl.GENERIC_STRING_19,
    PerGlobalInfoNzl.GENERIC_STRING_2,
    PerGlobalInfoNzl.GENERIC_STRING_20,
    PerGlobalInfoNzl.GENERIC_STRING_3,
    PerGlobalInfoNzl.GENERIC_STRING_4,
    PerGlobalInfoNzl.GENERIC_STRING_5,
    PerGlobalInfoNzl.GENERIC_STRING_6,
    PerGlobalInfoNzl.GENERIC_STRING_7,
    PerGlobalInfoNzl.GENERIC_STRING_8,
    PerGlobalInfoNzl.GENERIC_STRING_9,
    PerGlobalInfoNzl.LAST_MODIFIED_BY,
    PerGlobalInfoNzl.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoNzl.LAST_MODIFIED_ON,
    PerGlobalInfoNzl.OPERATION,
    PerGlobalInfoNzl.PERSON_ID_EXTERNAL,
    PerGlobalInfoNzl.START_DATE,
    PerGlobalInfoNzl.COUNTRY_NAV,
    PerGlobalInfoNzl.GENERIC_STRING_1_NAV,
    PerGlobalInfoNzl.GENERIC_STRING_2_NAV,
    PerGlobalInfoNzl.GENERIC_STRING_5_NAV,
    PerGlobalInfoNzl.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoNzl> = new AllFields('*', PerGlobalInfoNzl);
  /**
   * All key fields of the PerGlobalInfoNzl entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoNzl>> = [PerGlobalInfoNzl.COUNTRY, PerGlobalInfoNzl.PERSON_ID_EXTERNAL, PerGlobalInfoNzl.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoNzl.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoNzl> } = PerGlobalInfoNzl._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoNzl> }, field: Selectable<PerGlobalInfoNzl>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
