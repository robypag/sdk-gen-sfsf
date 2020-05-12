/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoNldRequestBuilder } from './PerGlobalInfoNldRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoNLD" of service "SFOData".
 */
export class PerGlobalInfoNld extends Entity implements PerGlobalInfoNldType {
  /**
   * Technical entity name for PerGlobalInfoNld.
   */
  static _entityName = 'PerGlobalInfoNLD';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoNld.
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
   * Illness Recurrency Date.
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
   * Sickness and Disability - WAO/IVA/WGA Class.
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
   * Father’s Birth Country.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Mother’s Birth Country.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Number of Children.
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
   * Private Health Insurance Group.
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
   * Reason For Changing Data.
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
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoNld`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoNld`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoNld, PerGlobalInfoNldTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoNld);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoNld` entity type.
   * @returns A `PerGlobalInfoNld` request builder.
   */
  static requestBuilder(): PerGlobalInfoNldRequestBuilder {
    return new PerGlobalInfoNldRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoNld`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoNld`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoNld> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoNld);
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

export interface PerGlobalInfoNldType {
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
  genericNumber2Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoNldTypeForceMandatory {
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
  genericNumber2Nav: PicklistOptionType;
  genericNumber3Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoNld {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoNld> = new StringField('country', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoNld> = new StringField('createdBy', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoNld> = new DateField('createdDateTime', PerGlobalInfoNld, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoNld> = new DateField('createdOn', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoNld> = new DateField('endDate', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoNld> = new DateField('genericDate1', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoNld> = new DateField('genericDate2', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoNld> = new DateField('genericDate3', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoNld> = new DateField('genericDate4', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoNld> = new DateField('genericDate5', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoNld> = new DateField('genericDate6', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoNld> = new DateField('genericDate7', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoNld> = new DateField('genericDate8', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber1', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber10', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber11', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber12', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber13', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber2', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber3', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber4', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber5', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber6', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber7', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber8', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoNld> = new BigNumberField('genericNumber9', PerGlobalInfoNld, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoNld> = new StringField('genericString1', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoNld> = new StringField('genericString10', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoNld> = new StringField('genericString11', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoNld> = new StringField('genericString12', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoNld> = new StringField('genericString13', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoNld> = new StringField('genericString14', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoNld> = new StringField('genericString15', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoNld> = new StringField('genericString16', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoNld> = new StringField('genericString17', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoNld> = new StringField('genericString18', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoNld> = new StringField('genericString19', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoNld> = new StringField('genericString2', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoNld> = new StringField('genericString20', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoNld> = new StringField('genericString3', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoNld> = new StringField('genericString4', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoNld> = new StringField('genericString5', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoNld> = new StringField('genericString6', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoNld> = new StringField('genericString7', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoNld> = new StringField('genericString8', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoNld> = new StringField('genericString9', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoNld> = new StringField('lastModifiedBy', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoNld> = new DateField('lastModifiedDateTime', PerGlobalInfoNld, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoNld> = new DateField('lastModifiedOn', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoNld> = new StringField('operation', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoNld> = new StringField('personIdExternal', PerGlobalInfoNld, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoNld> = new DateField('startDate', PerGlobalInfoNld, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoNld, Territory> = new OneToOneLink('countryNav', PerGlobalInfoNld, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2_NAV: OneToOneLink<PerGlobalInfoNld, PicklistOption> = new OneToOneLink('genericNumber2Nav', PerGlobalInfoNld, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoNld, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoNld, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoNld, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoNld, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoNld, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoNld, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoNld, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoNld, PerPerson);
  /**
   * All fields of the PerGlobalInfoNld entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoNld> | DateField<PerGlobalInfoNld> | BigNumberField<PerGlobalInfoNld> | OneToOneLink<PerGlobalInfoNld, Territory> | OneToOneLink<PerGlobalInfoNld, PicklistOption> | OneToOneLink<PerGlobalInfoNld, PerPerson>> = [
    PerGlobalInfoNld.COUNTRY,
    PerGlobalInfoNld.CREATED_BY,
    PerGlobalInfoNld.CREATED_DATE_TIME,
    PerGlobalInfoNld.CREATED_ON,
    PerGlobalInfoNld.END_DATE,
    PerGlobalInfoNld.GENERIC_DATE_1,
    PerGlobalInfoNld.GENERIC_DATE_2,
    PerGlobalInfoNld.GENERIC_DATE_3,
    PerGlobalInfoNld.GENERIC_DATE_4,
    PerGlobalInfoNld.GENERIC_DATE_5,
    PerGlobalInfoNld.GENERIC_DATE_6,
    PerGlobalInfoNld.GENERIC_DATE_7,
    PerGlobalInfoNld.GENERIC_DATE_8,
    PerGlobalInfoNld.GENERIC_NUMBER_1,
    PerGlobalInfoNld.GENERIC_NUMBER_10,
    PerGlobalInfoNld.GENERIC_NUMBER_11,
    PerGlobalInfoNld.GENERIC_NUMBER_12,
    PerGlobalInfoNld.GENERIC_NUMBER_13,
    PerGlobalInfoNld.GENERIC_NUMBER_2,
    PerGlobalInfoNld.GENERIC_NUMBER_3,
    PerGlobalInfoNld.GENERIC_NUMBER_4,
    PerGlobalInfoNld.GENERIC_NUMBER_5,
    PerGlobalInfoNld.GENERIC_NUMBER_6,
    PerGlobalInfoNld.GENERIC_NUMBER_7,
    PerGlobalInfoNld.GENERIC_NUMBER_8,
    PerGlobalInfoNld.GENERIC_NUMBER_9,
    PerGlobalInfoNld.GENERIC_STRING_1,
    PerGlobalInfoNld.GENERIC_STRING_10,
    PerGlobalInfoNld.GENERIC_STRING_11,
    PerGlobalInfoNld.GENERIC_STRING_12,
    PerGlobalInfoNld.GENERIC_STRING_13,
    PerGlobalInfoNld.GENERIC_STRING_14,
    PerGlobalInfoNld.GENERIC_STRING_15,
    PerGlobalInfoNld.GENERIC_STRING_16,
    PerGlobalInfoNld.GENERIC_STRING_17,
    PerGlobalInfoNld.GENERIC_STRING_18,
    PerGlobalInfoNld.GENERIC_STRING_19,
    PerGlobalInfoNld.GENERIC_STRING_2,
    PerGlobalInfoNld.GENERIC_STRING_20,
    PerGlobalInfoNld.GENERIC_STRING_3,
    PerGlobalInfoNld.GENERIC_STRING_4,
    PerGlobalInfoNld.GENERIC_STRING_5,
    PerGlobalInfoNld.GENERIC_STRING_6,
    PerGlobalInfoNld.GENERIC_STRING_7,
    PerGlobalInfoNld.GENERIC_STRING_8,
    PerGlobalInfoNld.GENERIC_STRING_9,
    PerGlobalInfoNld.LAST_MODIFIED_BY,
    PerGlobalInfoNld.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoNld.LAST_MODIFIED_ON,
    PerGlobalInfoNld.OPERATION,
    PerGlobalInfoNld.PERSON_ID_EXTERNAL,
    PerGlobalInfoNld.START_DATE,
    PerGlobalInfoNld.COUNTRY_NAV,
    PerGlobalInfoNld.GENERIC_NUMBER_2_NAV,
    PerGlobalInfoNld.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoNld.GENERIC_STRING_1_NAV,
    PerGlobalInfoNld.GENERIC_STRING_2_NAV,
    PerGlobalInfoNld.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoNld> = new AllFields('*', PerGlobalInfoNld);
  /**
   * All key fields of the PerGlobalInfoNld entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoNld>> = [PerGlobalInfoNld.COUNTRY, PerGlobalInfoNld.PERSON_ID_EXTERNAL, PerGlobalInfoNld.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoNld.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoNld> } = PerGlobalInfoNld._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoNld> }, field: Selectable<PerGlobalInfoNld>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
