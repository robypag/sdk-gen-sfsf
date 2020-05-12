/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoMexRequestBuilder } from './PerGlobalInfoMexRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoMEX" of service "SFOData".
 */
export class PerGlobalInfoMex extends Entity implements PerGlobalInfoMexType {
  /**
   * Technical entity name for PerGlobalInfoMex.
   */
  static _entityName = 'PerGlobalInfoMEX';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoMex.
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
   * Degree of Challenge.
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
   * Economically Dependent.
   * Maximum length: 15.
   * @nullable
   */
  genericString5?: string;
  /**
   * Student.
   * Maximum length: 15.
   * @nullable
   */
  genericString6?: string;
  /**
   * Live Together.
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
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoMex`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoMex`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoMex, PerGlobalInfoMexTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoMex);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoMex` entity type.
   * @returns A `PerGlobalInfoMex` request builder.
   */
  static requestBuilder(): PerGlobalInfoMexRequestBuilder {
    return new PerGlobalInfoMexRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoMex`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoMex`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoMex> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoMex);
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

export interface PerGlobalInfoMexType {
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
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoMexTypeForceMandatory {
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
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoMex {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoMex> = new StringField('country', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoMex> = new StringField('createdBy', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoMex> = new DateField('createdDateTime', PerGlobalInfoMex, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoMex> = new DateField('createdOn', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoMex> = new DateField('endDate', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoMex> = new DateField('genericDate1', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoMex> = new DateField('genericDate2', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoMex> = new DateField('genericDate3', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoMex> = new DateField('genericDate4', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoMex> = new DateField('genericDate5', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoMex> = new DateField('genericDate6', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoMex> = new DateField('genericDate7', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoMex> = new DateField('genericDate8', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber1', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber10', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber11', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber12', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber13', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber2', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber3', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber4', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber5', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber6', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber7', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber8', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoMex> = new BigNumberField('genericNumber9', PerGlobalInfoMex, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoMex> = new StringField('genericString1', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoMex> = new StringField('genericString10', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoMex> = new StringField('genericString11', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoMex> = new StringField('genericString12', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoMex> = new StringField('genericString13', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoMex> = new StringField('genericString14', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoMex> = new StringField('genericString15', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoMex> = new StringField('genericString16', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoMex> = new StringField('genericString17', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoMex> = new StringField('genericString18', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoMex> = new StringField('genericString19', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoMex> = new StringField('genericString2', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoMex> = new StringField('genericString20', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoMex> = new StringField('genericString3', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoMex> = new StringField('genericString4', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoMex> = new StringField('genericString5', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoMex> = new StringField('genericString6', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoMex> = new StringField('genericString7', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoMex> = new StringField('genericString8', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoMex> = new StringField('genericString9', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoMex> = new StringField('lastModifiedBy', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoMex> = new DateField('lastModifiedDateTime', PerGlobalInfoMex, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoMex> = new DateField('lastModifiedOn', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoMex> = new StringField('operation', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoMex> = new StringField('personIdExternal', PerGlobalInfoMex, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoMex> = new DateField('startDate', PerGlobalInfoMex, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoMex, Territory> = new OneToOneLink('countryNav', PerGlobalInfoMex, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoMex, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoMex, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoMex, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoMex, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5_NAV: OneToOneLink<PerGlobalInfoMex, PicklistOption> = new OneToOneLink('genericString5Nav', PerGlobalInfoMex, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoMex, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoMex, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoMex, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoMex, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoMex, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoMex, PerPerson);
  /**
   * All fields of the PerGlobalInfoMex entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoMex> | DateField<PerGlobalInfoMex> | BigNumberField<PerGlobalInfoMex> | OneToOneLink<PerGlobalInfoMex, Territory> | OneToOneLink<PerGlobalInfoMex, PicklistOption> | OneToOneLink<PerGlobalInfoMex, PerPerson>> = [
    PerGlobalInfoMex.COUNTRY,
    PerGlobalInfoMex.CREATED_BY,
    PerGlobalInfoMex.CREATED_DATE_TIME,
    PerGlobalInfoMex.CREATED_ON,
    PerGlobalInfoMex.END_DATE,
    PerGlobalInfoMex.GENERIC_DATE_1,
    PerGlobalInfoMex.GENERIC_DATE_2,
    PerGlobalInfoMex.GENERIC_DATE_3,
    PerGlobalInfoMex.GENERIC_DATE_4,
    PerGlobalInfoMex.GENERIC_DATE_5,
    PerGlobalInfoMex.GENERIC_DATE_6,
    PerGlobalInfoMex.GENERIC_DATE_7,
    PerGlobalInfoMex.GENERIC_DATE_8,
    PerGlobalInfoMex.GENERIC_NUMBER_1,
    PerGlobalInfoMex.GENERIC_NUMBER_10,
    PerGlobalInfoMex.GENERIC_NUMBER_11,
    PerGlobalInfoMex.GENERIC_NUMBER_12,
    PerGlobalInfoMex.GENERIC_NUMBER_13,
    PerGlobalInfoMex.GENERIC_NUMBER_2,
    PerGlobalInfoMex.GENERIC_NUMBER_3,
    PerGlobalInfoMex.GENERIC_NUMBER_4,
    PerGlobalInfoMex.GENERIC_NUMBER_5,
    PerGlobalInfoMex.GENERIC_NUMBER_6,
    PerGlobalInfoMex.GENERIC_NUMBER_7,
    PerGlobalInfoMex.GENERIC_NUMBER_8,
    PerGlobalInfoMex.GENERIC_NUMBER_9,
    PerGlobalInfoMex.GENERIC_STRING_1,
    PerGlobalInfoMex.GENERIC_STRING_10,
    PerGlobalInfoMex.GENERIC_STRING_11,
    PerGlobalInfoMex.GENERIC_STRING_12,
    PerGlobalInfoMex.GENERIC_STRING_13,
    PerGlobalInfoMex.GENERIC_STRING_14,
    PerGlobalInfoMex.GENERIC_STRING_15,
    PerGlobalInfoMex.GENERIC_STRING_16,
    PerGlobalInfoMex.GENERIC_STRING_17,
    PerGlobalInfoMex.GENERIC_STRING_18,
    PerGlobalInfoMex.GENERIC_STRING_19,
    PerGlobalInfoMex.GENERIC_STRING_2,
    PerGlobalInfoMex.GENERIC_STRING_20,
    PerGlobalInfoMex.GENERIC_STRING_3,
    PerGlobalInfoMex.GENERIC_STRING_4,
    PerGlobalInfoMex.GENERIC_STRING_5,
    PerGlobalInfoMex.GENERIC_STRING_6,
    PerGlobalInfoMex.GENERIC_STRING_7,
    PerGlobalInfoMex.GENERIC_STRING_8,
    PerGlobalInfoMex.GENERIC_STRING_9,
    PerGlobalInfoMex.LAST_MODIFIED_BY,
    PerGlobalInfoMex.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoMex.LAST_MODIFIED_ON,
    PerGlobalInfoMex.OPERATION,
    PerGlobalInfoMex.PERSON_ID_EXTERNAL,
    PerGlobalInfoMex.START_DATE,
    PerGlobalInfoMex.COUNTRY_NAV,
    PerGlobalInfoMex.GENERIC_STRING_1_NAV,
    PerGlobalInfoMex.GENERIC_STRING_2_NAV,
    PerGlobalInfoMex.GENERIC_STRING_5_NAV,
    PerGlobalInfoMex.GENERIC_STRING_6_NAV,
    PerGlobalInfoMex.GENERIC_STRING_7_NAV,
    PerGlobalInfoMex.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoMex> = new AllFields('*', PerGlobalInfoMex);
  /**
   * All key fields of the PerGlobalInfoMex entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoMex>> = [PerGlobalInfoMex.COUNTRY, PerGlobalInfoMex.PERSON_ID_EXTERNAL, PerGlobalInfoMex.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoMex.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoMex> } = PerGlobalInfoMex._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoMex> }, field: Selectable<PerGlobalInfoMex>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
