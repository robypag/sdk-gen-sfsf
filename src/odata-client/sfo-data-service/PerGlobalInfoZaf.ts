/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoZafRequestBuilder } from './PerGlobalInfoZafRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoZAF" of service "SFOData".
 */
export class PerGlobalInfoZaf extends Entity implements PerGlobalInfoZafType {
  /**
   * Technical entity name for PerGlobalInfoZaf.
   */
  static _entityName = 'PerGlobalInfoZAF';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoZaf.
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
   * Ethnicity.
   * Maximum length: 256.
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
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoZaf`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoZaf`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoZaf, PerGlobalInfoZafTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoZaf);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoZaf` entity type.
   * @returns A `PerGlobalInfoZaf` request builder.
   */
  static requestBuilder(): PerGlobalInfoZafRequestBuilder {
    return new PerGlobalInfoZafRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoZaf`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoZaf`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoZaf> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoZaf);
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

export interface PerGlobalInfoZafType {
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
  personNav: PerPersonType;
}

export interface PerGlobalInfoZafTypeForceMandatory {
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
  personNav: PerPersonType;
}

export namespace PerGlobalInfoZaf {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoZaf> = new StringField('country', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoZaf> = new StringField('createdBy', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoZaf> = new DateField('createdDateTime', PerGlobalInfoZaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoZaf> = new DateField('createdOn', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoZaf> = new DateField('endDate', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoZaf> = new DateField('genericDate1', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoZaf> = new DateField('genericDate2', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoZaf> = new DateField('genericDate3', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoZaf> = new DateField('genericDate4', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoZaf> = new DateField('genericDate5', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoZaf> = new DateField('genericDate6', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoZaf> = new DateField('genericDate7', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoZaf> = new DateField('genericDate8', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber1', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber10', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber11', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber12', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber13', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber2', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber3', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber4', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber5', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber6', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber7', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber8', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoZaf> = new BigNumberField('genericNumber9', PerGlobalInfoZaf, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoZaf> = new StringField('genericString1', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoZaf> = new StringField('genericString10', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoZaf> = new StringField('genericString11', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoZaf> = new StringField('genericString12', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoZaf> = new StringField('genericString13', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoZaf> = new StringField('genericString14', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoZaf> = new StringField('genericString15', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoZaf> = new StringField('genericString16', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoZaf> = new StringField('genericString17', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoZaf> = new StringField('genericString18', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoZaf> = new StringField('genericString19', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoZaf> = new StringField('genericString2', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoZaf> = new StringField('genericString20', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoZaf> = new StringField('genericString3', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoZaf> = new StringField('genericString4', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoZaf> = new StringField('genericString5', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoZaf> = new StringField('genericString6', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoZaf> = new StringField('genericString7', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoZaf> = new StringField('genericString8', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoZaf> = new StringField('genericString9', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoZaf> = new StringField('lastModifiedBy', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoZaf> = new DateField('lastModifiedDateTime', PerGlobalInfoZaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoZaf> = new DateField('lastModifiedOn', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoZaf> = new StringField('operation', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoZaf> = new StringField('personIdExternal', PerGlobalInfoZaf, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoZaf> = new DateField('startDate', PerGlobalInfoZaf, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoZaf, Territory> = new OneToOneLink('countryNav', PerGlobalInfoZaf, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoZaf, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoZaf, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoZaf, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoZaf, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5_NAV: OneToOneLink<PerGlobalInfoZaf, PicklistOption> = new OneToOneLink('genericString5Nav', PerGlobalInfoZaf, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoZaf, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoZaf, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoZaf, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoZaf, PerPerson);
  /**
   * All fields of the PerGlobalInfoZaf entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoZaf> | DateField<PerGlobalInfoZaf> | BigNumberField<PerGlobalInfoZaf> | OneToOneLink<PerGlobalInfoZaf, Territory> | OneToOneLink<PerGlobalInfoZaf, PicklistOption> | OneToOneLink<PerGlobalInfoZaf, PerPerson>> = [
    PerGlobalInfoZaf.COUNTRY,
    PerGlobalInfoZaf.CREATED_BY,
    PerGlobalInfoZaf.CREATED_DATE_TIME,
    PerGlobalInfoZaf.CREATED_ON,
    PerGlobalInfoZaf.END_DATE,
    PerGlobalInfoZaf.GENERIC_DATE_1,
    PerGlobalInfoZaf.GENERIC_DATE_2,
    PerGlobalInfoZaf.GENERIC_DATE_3,
    PerGlobalInfoZaf.GENERIC_DATE_4,
    PerGlobalInfoZaf.GENERIC_DATE_5,
    PerGlobalInfoZaf.GENERIC_DATE_6,
    PerGlobalInfoZaf.GENERIC_DATE_7,
    PerGlobalInfoZaf.GENERIC_DATE_8,
    PerGlobalInfoZaf.GENERIC_NUMBER_1,
    PerGlobalInfoZaf.GENERIC_NUMBER_10,
    PerGlobalInfoZaf.GENERIC_NUMBER_11,
    PerGlobalInfoZaf.GENERIC_NUMBER_12,
    PerGlobalInfoZaf.GENERIC_NUMBER_13,
    PerGlobalInfoZaf.GENERIC_NUMBER_2,
    PerGlobalInfoZaf.GENERIC_NUMBER_3,
    PerGlobalInfoZaf.GENERIC_NUMBER_4,
    PerGlobalInfoZaf.GENERIC_NUMBER_5,
    PerGlobalInfoZaf.GENERIC_NUMBER_6,
    PerGlobalInfoZaf.GENERIC_NUMBER_7,
    PerGlobalInfoZaf.GENERIC_NUMBER_8,
    PerGlobalInfoZaf.GENERIC_NUMBER_9,
    PerGlobalInfoZaf.GENERIC_STRING_1,
    PerGlobalInfoZaf.GENERIC_STRING_10,
    PerGlobalInfoZaf.GENERIC_STRING_11,
    PerGlobalInfoZaf.GENERIC_STRING_12,
    PerGlobalInfoZaf.GENERIC_STRING_13,
    PerGlobalInfoZaf.GENERIC_STRING_14,
    PerGlobalInfoZaf.GENERIC_STRING_15,
    PerGlobalInfoZaf.GENERIC_STRING_16,
    PerGlobalInfoZaf.GENERIC_STRING_17,
    PerGlobalInfoZaf.GENERIC_STRING_18,
    PerGlobalInfoZaf.GENERIC_STRING_19,
    PerGlobalInfoZaf.GENERIC_STRING_2,
    PerGlobalInfoZaf.GENERIC_STRING_20,
    PerGlobalInfoZaf.GENERIC_STRING_3,
    PerGlobalInfoZaf.GENERIC_STRING_4,
    PerGlobalInfoZaf.GENERIC_STRING_5,
    PerGlobalInfoZaf.GENERIC_STRING_6,
    PerGlobalInfoZaf.GENERIC_STRING_7,
    PerGlobalInfoZaf.GENERIC_STRING_8,
    PerGlobalInfoZaf.GENERIC_STRING_9,
    PerGlobalInfoZaf.LAST_MODIFIED_BY,
    PerGlobalInfoZaf.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoZaf.LAST_MODIFIED_ON,
    PerGlobalInfoZaf.OPERATION,
    PerGlobalInfoZaf.PERSON_ID_EXTERNAL,
    PerGlobalInfoZaf.START_DATE,
    PerGlobalInfoZaf.COUNTRY_NAV,
    PerGlobalInfoZaf.GENERIC_STRING_1_NAV,
    PerGlobalInfoZaf.GENERIC_STRING_2_NAV,
    PerGlobalInfoZaf.GENERIC_STRING_5_NAV,
    PerGlobalInfoZaf.GENERIC_STRING_6_NAV,
    PerGlobalInfoZaf.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoZaf> = new AllFields('*', PerGlobalInfoZaf);
  /**
   * All key fields of the PerGlobalInfoZaf entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoZaf>> = [PerGlobalInfoZaf.COUNTRY, PerGlobalInfoZaf.PERSON_ID_EXTERNAL, PerGlobalInfoZaf.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoZaf.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoZaf> } = PerGlobalInfoZaf._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoZaf> }, field: Selectable<PerGlobalInfoZaf>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
