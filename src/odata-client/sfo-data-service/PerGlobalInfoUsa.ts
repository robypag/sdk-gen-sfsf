/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoUsaRequestBuilder } from './PerGlobalInfoUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoUSA" of service "SFOData".
 */
export class PerGlobalInfoUsa extends Entity implements PerGlobalInfoUsaType {
  /**
   * Technical entity name for PerGlobalInfoUsa.
   */
  static _entityName = 'PerGlobalInfoUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoUsa.
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
   * Veteran.
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
   * Challenged Veteran.
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
  genericNumber4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber5Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber8Nav!: PicklistOption;
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
  genericString13Nav!: PicklistOption;
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
  genericString6Nav!: PicklistOption;
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
   * Returns an entity builder to construct instances `PerGlobalInfoUsa`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoUsa`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoUsa, PerGlobalInfoUsaTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoUsa` entity type.
   * @returns A `PerGlobalInfoUsa` request builder.
   */
  static requestBuilder(): PerGlobalInfoUsaRequestBuilder {
    return new PerGlobalInfoUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoUsa`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoUsa> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoUsa);
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

export interface PerGlobalInfoUsaType {
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
  genericNumber6Nav: PicklistOptionType;
  genericNumber7Nav: PicklistOptionType;
  genericNumber8Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoUsaTypeForceMandatory {
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
  genericNumber6Nav: PicklistOptionType;
  genericNumber7Nav: PicklistOptionType;
  genericNumber8Nav: PicklistOptionType;
  genericNumber9Nav: PicklistOptionType;
  genericString10Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  genericString9Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoUsa {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoUsa> = new StringField('country', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoUsa> = new StringField('createdBy', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoUsa> = new DateField('createdDateTime', PerGlobalInfoUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoUsa> = new DateField('createdOn', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoUsa> = new DateField('endDate', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoUsa> = new DateField('genericDate1', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoUsa> = new DateField('genericDate2', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoUsa> = new DateField('genericDate3', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoUsa> = new DateField('genericDate4', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoUsa> = new DateField('genericDate5', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoUsa> = new DateField('genericDate6', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoUsa> = new DateField('genericDate7', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoUsa> = new DateField('genericDate8', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber1', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber10', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber11', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber12', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber13', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber2', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber3', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber4', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber5', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber6', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber7', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber8', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoUsa> = new BigNumberField('genericNumber9', PerGlobalInfoUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoUsa> = new StringField('genericString1', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoUsa> = new StringField('genericString10', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoUsa> = new StringField('genericString11', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoUsa> = new StringField('genericString12', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoUsa> = new StringField('genericString13', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoUsa> = new StringField('genericString14', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoUsa> = new StringField('genericString15', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoUsa> = new StringField('genericString16', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoUsa> = new StringField('genericString17', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoUsa> = new StringField('genericString18', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoUsa> = new StringField('genericString19', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoUsa> = new StringField('genericString2', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoUsa> = new StringField('genericString20', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoUsa> = new StringField('genericString3', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoUsa> = new StringField('genericString4', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoUsa> = new StringField('genericString5', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoUsa> = new StringField('genericString6', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoUsa> = new StringField('genericString7', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoUsa> = new StringField('genericString8', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoUsa> = new StringField('genericString9', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoUsa> = new StringField('lastModifiedBy', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoUsa> = new DateField('lastModifiedDateTime', PerGlobalInfoUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoUsa> = new DateField('lastModifiedOn', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoUsa> = new StringField('operation', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoUsa> = new StringField('personIdExternal', PerGlobalInfoUsa, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoUsa> = new DateField('startDate', PerGlobalInfoUsa, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoUsa, Territory> = new OneToOneLink('countryNav', PerGlobalInfoUsa, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber2Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber5Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber6Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber7Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber8Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericNumber9Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString10Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString10Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString11Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString13Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString8Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString9Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9_NAV: OneToOneLink<PerGlobalInfoUsa, PicklistOption> = new OneToOneLink('genericString9Nav', PerGlobalInfoUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoUsa, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoUsa, PerPerson);
  /**
   * All fields of the PerGlobalInfoUsa entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoUsa> | DateField<PerGlobalInfoUsa> | BigNumberField<PerGlobalInfoUsa> | OneToOneLink<PerGlobalInfoUsa, Territory> | OneToOneLink<PerGlobalInfoUsa, PicklistOption> | OneToOneLink<PerGlobalInfoUsa, PerPerson>> = [
    PerGlobalInfoUsa.COUNTRY,
    PerGlobalInfoUsa.CREATED_BY,
    PerGlobalInfoUsa.CREATED_DATE_TIME,
    PerGlobalInfoUsa.CREATED_ON,
    PerGlobalInfoUsa.END_DATE,
    PerGlobalInfoUsa.GENERIC_DATE_1,
    PerGlobalInfoUsa.GENERIC_DATE_2,
    PerGlobalInfoUsa.GENERIC_DATE_3,
    PerGlobalInfoUsa.GENERIC_DATE_4,
    PerGlobalInfoUsa.GENERIC_DATE_5,
    PerGlobalInfoUsa.GENERIC_DATE_6,
    PerGlobalInfoUsa.GENERIC_DATE_7,
    PerGlobalInfoUsa.GENERIC_DATE_8,
    PerGlobalInfoUsa.GENERIC_NUMBER_1,
    PerGlobalInfoUsa.GENERIC_NUMBER_10,
    PerGlobalInfoUsa.GENERIC_NUMBER_11,
    PerGlobalInfoUsa.GENERIC_NUMBER_12,
    PerGlobalInfoUsa.GENERIC_NUMBER_13,
    PerGlobalInfoUsa.GENERIC_NUMBER_2,
    PerGlobalInfoUsa.GENERIC_NUMBER_3,
    PerGlobalInfoUsa.GENERIC_NUMBER_4,
    PerGlobalInfoUsa.GENERIC_NUMBER_5,
    PerGlobalInfoUsa.GENERIC_NUMBER_6,
    PerGlobalInfoUsa.GENERIC_NUMBER_7,
    PerGlobalInfoUsa.GENERIC_NUMBER_8,
    PerGlobalInfoUsa.GENERIC_NUMBER_9,
    PerGlobalInfoUsa.GENERIC_STRING_1,
    PerGlobalInfoUsa.GENERIC_STRING_10,
    PerGlobalInfoUsa.GENERIC_STRING_11,
    PerGlobalInfoUsa.GENERIC_STRING_12,
    PerGlobalInfoUsa.GENERIC_STRING_13,
    PerGlobalInfoUsa.GENERIC_STRING_14,
    PerGlobalInfoUsa.GENERIC_STRING_15,
    PerGlobalInfoUsa.GENERIC_STRING_16,
    PerGlobalInfoUsa.GENERIC_STRING_17,
    PerGlobalInfoUsa.GENERIC_STRING_18,
    PerGlobalInfoUsa.GENERIC_STRING_19,
    PerGlobalInfoUsa.GENERIC_STRING_2,
    PerGlobalInfoUsa.GENERIC_STRING_20,
    PerGlobalInfoUsa.GENERIC_STRING_3,
    PerGlobalInfoUsa.GENERIC_STRING_4,
    PerGlobalInfoUsa.GENERIC_STRING_5,
    PerGlobalInfoUsa.GENERIC_STRING_6,
    PerGlobalInfoUsa.GENERIC_STRING_7,
    PerGlobalInfoUsa.GENERIC_STRING_8,
    PerGlobalInfoUsa.GENERIC_STRING_9,
    PerGlobalInfoUsa.LAST_MODIFIED_BY,
    PerGlobalInfoUsa.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoUsa.LAST_MODIFIED_ON,
    PerGlobalInfoUsa.OPERATION,
    PerGlobalInfoUsa.PERSON_ID_EXTERNAL,
    PerGlobalInfoUsa.START_DATE,
    PerGlobalInfoUsa.COUNTRY_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_2_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_5_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_6_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_7_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_8_NAV,
    PerGlobalInfoUsa.GENERIC_NUMBER_9_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_10_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_11_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_13_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_1_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_2_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_3_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_6_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_7_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_8_NAV,
    PerGlobalInfoUsa.GENERIC_STRING_9_NAV,
    PerGlobalInfoUsa.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoUsa> = new AllFields('*', PerGlobalInfoUsa);
  /**
   * All key fields of the PerGlobalInfoUsa entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoUsa>> = [PerGlobalInfoUsa.COUNTRY, PerGlobalInfoUsa.PERSON_ID_EXTERNAL, PerGlobalInfoUsa.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoUsa.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoUsa> } = PerGlobalInfoUsa._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoUsa> }, field: Selectable<PerGlobalInfoUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
