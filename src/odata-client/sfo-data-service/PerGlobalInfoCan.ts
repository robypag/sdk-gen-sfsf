/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoCanRequestBuilder } from './PerGlobalInfoCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoCAN" of service "SFOData".
 */
export class PerGlobalInfoCan extends Entity implements PerGlobalInfoCanType {
  /**
   * Technical entity name for PerGlobalInfoCan.
   */
  static _entityName = 'PerGlobalInfoCAN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoCan.
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
   * Date of Determination of Challenge Status.
   * @nullable
   */
  genericDate1?: Moment;
  /**
   * Date Learned of Disability.
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
   * Ethnicity.
   * @nullable
   */
  genericNumber1?: BigNumber;
  /**
   * Physician ID Number.
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
   * Visible Minority.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Bilingualism.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Military Service.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Financially Independent.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Telephone Number.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Number of Children.
   * @nullable
   */
  genericNumber7?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber8?: BigNumber;
  /**
   * Student.
   * @nullable
   */
  genericNumber9?: BigNumber;
  /**
   * Healthcare Number.
   * Maximum length: 10.
   * @nullable
   */
  genericString1?: string;
  /**
   * Aboriginal People.
   * Maximum length: 256.
   * @nullable
   */
  genericString10?: string;
  /**
   * Aboriginal People Group.
   * Maximum length: 256.
   * @nullable
   */
  genericString11?: string;
  /**
   * Census Metropolitan Area (CMA).
   * Maximum length: 256.
   * @nullable
   */
  genericString12?: string;
  /**
   * Visible Minority.
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
   * Healthcare Province.
   * Maximum length: 10.
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
   * Marital Status.
   * Maximum length: 60.
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
   * Challenge Group.
   * @nullable
   */
  genericString5?: string;
  /**
   * Challenge Group.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Type of Challenge.
   * Maximum length: 256.
   * @nullable
   */
  genericString7?: string;
  /**
   * Issuing Authority.
   * Maximum length: 256.
   * @nullable
   */
  genericString8?: string;
  /**
   * Reference Number.
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
  genericNumber5Nav!: PicklistOption;
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
  genericString13Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString14Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString16Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString2Nav!: PicklistOption;
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
   * Returns an entity builder to construct instances `PerGlobalInfoCan`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoCan`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoCan, PerGlobalInfoCanTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoCan);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoCan` entity type.
   * @returns A `PerGlobalInfoCan` request builder.
   */
  static requestBuilder(): PerGlobalInfoCanRequestBuilder {
    return new PerGlobalInfoCanRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoCan`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoCan`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoCan> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoCan);
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

export interface PerGlobalInfoCanType {
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
  genericNumber5Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString14Nav: PicklistOptionType;
  genericString16Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoCanTypeForceMandatory {
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
  genericNumber5Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString14Nav: PicklistOptionType;
  genericString16Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoCan {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoCan> = new StringField('country', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoCan> = new StringField('createdBy', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoCan> = new DateField('createdDateTime', PerGlobalInfoCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoCan> = new DateField('createdOn', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoCan> = new DateField('endDate', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoCan> = new DateField('genericDate1', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoCan> = new DateField('genericDate2', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoCan> = new DateField('genericDate3', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoCan> = new DateField('genericDate4', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoCan> = new DateField('genericDate5', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoCan> = new DateField('genericDate6', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoCan> = new DateField('genericDate7', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoCan> = new DateField('genericDate8', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber1', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber10', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber11', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber12', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber13', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber2', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber3', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber4', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber5', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber6', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber7', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber8', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoCan> = new BigNumberField('genericNumber9', PerGlobalInfoCan, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoCan> = new StringField('genericString1', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoCan> = new StringField('genericString10', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoCan> = new StringField('genericString11', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoCan> = new StringField('genericString12', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoCan> = new StringField('genericString13', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoCan> = new StringField('genericString14', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoCan> = new StringField('genericString15', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoCan> = new StringField('genericString16', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoCan> = new StringField('genericString17', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoCan> = new StringField('genericString18', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoCan> = new StringField('genericString19', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoCan> = new StringField('genericString2', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoCan> = new StringField('genericString20', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoCan> = new StringField('genericString3', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoCan> = new StringField('genericString4', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoCan> = new StringField('genericString5', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoCan> = new StringField('genericString6', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoCan> = new StringField('genericString7', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoCan> = new StringField('genericString8', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoCan> = new StringField('genericString9', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoCan> = new StringField('lastModifiedBy', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoCan> = new DateField('lastModifiedDateTime', PerGlobalInfoCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoCan> = new DateField('lastModifiedOn', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoCan> = new StringField('operation', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoCan> = new StringField('personIdExternal', PerGlobalInfoCan, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoCan> = new DateField('startDate', PerGlobalInfoCan, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoCan, Territory> = new OneToOneLink('countryNav', PerGlobalInfoCan, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber2Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber5Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericNumber9Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString10Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString11Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString12Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString13Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString14Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString14Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString16Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString16Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoCan, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoCan, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoCan, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoCan, PerPerson);
  /**
   * All fields of the PerGlobalInfoCan entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoCan> | DateField<PerGlobalInfoCan> | BigNumberField<PerGlobalInfoCan> | OneToOneLink<PerGlobalInfoCan, Territory> | OneToOneLink<PerGlobalInfoCan, PicklistOption> | OneToOneLink<PerGlobalInfoCan, PerPerson>> = [
    PerGlobalInfoCan.COUNTRY,
    PerGlobalInfoCan.CREATED_BY,
    PerGlobalInfoCan.CREATED_DATE_TIME,
    PerGlobalInfoCan.CREATED_ON,
    PerGlobalInfoCan.END_DATE,
    PerGlobalInfoCan.GENERIC_DATE_1,
    PerGlobalInfoCan.GENERIC_DATE_2,
    PerGlobalInfoCan.GENERIC_DATE_3,
    PerGlobalInfoCan.GENERIC_DATE_4,
    PerGlobalInfoCan.GENERIC_DATE_5,
    PerGlobalInfoCan.GENERIC_DATE_6,
    PerGlobalInfoCan.GENERIC_DATE_7,
    PerGlobalInfoCan.GENERIC_DATE_8,
    PerGlobalInfoCan.GENERIC_NUMBER_1,
    PerGlobalInfoCan.GENERIC_NUMBER_10,
    PerGlobalInfoCan.GENERIC_NUMBER_11,
    PerGlobalInfoCan.GENERIC_NUMBER_12,
    PerGlobalInfoCan.GENERIC_NUMBER_13,
    PerGlobalInfoCan.GENERIC_NUMBER_2,
    PerGlobalInfoCan.GENERIC_NUMBER_3,
    PerGlobalInfoCan.GENERIC_NUMBER_4,
    PerGlobalInfoCan.GENERIC_NUMBER_5,
    PerGlobalInfoCan.GENERIC_NUMBER_6,
    PerGlobalInfoCan.GENERIC_NUMBER_7,
    PerGlobalInfoCan.GENERIC_NUMBER_8,
    PerGlobalInfoCan.GENERIC_NUMBER_9,
    PerGlobalInfoCan.GENERIC_STRING_1,
    PerGlobalInfoCan.GENERIC_STRING_10,
    PerGlobalInfoCan.GENERIC_STRING_11,
    PerGlobalInfoCan.GENERIC_STRING_12,
    PerGlobalInfoCan.GENERIC_STRING_13,
    PerGlobalInfoCan.GENERIC_STRING_14,
    PerGlobalInfoCan.GENERIC_STRING_15,
    PerGlobalInfoCan.GENERIC_STRING_16,
    PerGlobalInfoCan.GENERIC_STRING_17,
    PerGlobalInfoCan.GENERIC_STRING_18,
    PerGlobalInfoCan.GENERIC_STRING_19,
    PerGlobalInfoCan.GENERIC_STRING_2,
    PerGlobalInfoCan.GENERIC_STRING_20,
    PerGlobalInfoCan.GENERIC_STRING_3,
    PerGlobalInfoCan.GENERIC_STRING_4,
    PerGlobalInfoCan.GENERIC_STRING_5,
    PerGlobalInfoCan.GENERIC_STRING_6,
    PerGlobalInfoCan.GENERIC_STRING_7,
    PerGlobalInfoCan.GENERIC_STRING_8,
    PerGlobalInfoCan.GENERIC_STRING_9,
    PerGlobalInfoCan.LAST_MODIFIED_BY,
    PerGlobalInfoCan.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoCan.LAST_MODIFIED_ON,
    PerGlobalInfoCan.OPERATION,
    PerGlobalInfoCan.PERSON_ID_EXTERNAL,
    PerGlobalInfoCan.START_DATE,
    PerGlobalInfoCan.COUNTRY_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_2_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_5_NAV,
    PerGlobalInfoCan.GENERIC_NUMBER_9_NAV,
    PerGlobalInfoCan.GENERIC_STRING_10_NAV,
    PerGlobalInfoCan.GENERIC_STRING_11_NAV,
    PerGlobalInfoCan.GENERIC_STRING_12_NAV,
    PerGlobalInfoCan.GENERIC_STRING_13_NAV,
    PerGlobalInfoCan.GENERIC_STRING_14_NAV,
    PerGlobalInfoCan.GENERIC_STRING_16_NAV,
    PerGlobalInfoCan.GENERIC_STRING_2_NAV,
    PerGlobalInfoCan.GENERIC_STRING_6_NAV,
    PerGlobalInfoCan.GENERIC_STRING_7_NAV,
    PerGlobalInfoCan.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoCan> = new AllFields('*', PerGlobalInfoCan);
  /**
   * All key fields of the PerGlobalInfoCan entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoCan>> = [PerGlobalInfoCan.COUNTRY, PerGlobalInfoCan.PERSON_ID_EXTERNAL, PerGlobalInfoCan.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoCan.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoCan> } = PerGlobalInfoCan._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoCan> }, field: Selectable<PerGlobalInfoCan>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
