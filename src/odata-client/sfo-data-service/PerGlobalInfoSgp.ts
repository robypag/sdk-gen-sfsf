/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoSgpRequestBuilder } from './PerGlobalInfoSgpRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoSGP" of service "SFOData".
 */
export class PerGlobalInfoSgp extends Entity implements PerGlobalInfoSgpType {
  /**
   * Technical entity name for PerGlobalInfoSgp.
   */
  static _entityName = 'PerGlobalInfoSGP';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoSgp.
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
   * Ethnicity.
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
   * Degree of Challenge.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Confinement Number.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Birth Certificate Number.
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
   * Religion.
   * Maximum length: 10.
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
   * School Name.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Employment Status.
   * Maximum length: 256.
   * @nullable
   */
  genericString7?: string;
  /**
   * CCSL Validity For Last Valid Year.
   * Maximum length: 10.
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
  genericString7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericString8Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoSgp`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoSgp`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoSgp, PerGlobalInfoSgpTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoSgp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoSgp` entity type.
   * @returns A `PerGlobalInfoSgp` request builder.
   */
  static requestBuilder(): PerGlobalInfoSgpRequestBuilder {
    return new PerGlobalInfoSgpRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoSgp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoSgp`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoSgp> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoSgp);
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

export interface PerGlobalInfoSgpType {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoSgpTypeForceMandatory {
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
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoSgp {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoSgp> = new StringField('country', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoSgp> = new StringField('createdBy', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoSgp> = new DateField('createdDateTime', PerGlobalInfoSgp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoSgp> = new DateField('createdOn', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoSgp> = new DateField('endDate', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoSgp> = new DateField('genericDate1', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoSgp> = new DateField('genericDate2', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoSgp> = new DateField('genericDate3', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoSgp> = new DateField('genericDate4', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoSgp> = new DateField('genericDate5', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoSgp> = new DateField('genericDate6', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoSgp> = new DateField('genericDate7', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoSgp> = new DateField('genericDate8', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber1', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber10', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber11', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber12', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber13', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber2', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber3', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber4', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber5', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber6', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber7', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber8', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoSgp> = new BigNumberField('genericNumber9', PerGlobalInfoSgp, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoSgp> = new StringField('genericString1', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoSgp> = new StringField('genericString10', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoSgp> = new StringField('genericString11', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoSgp> = new StringField('genericString12', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoSgp> = new StringField('genericString13', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoSgp> = new StringField('genericString14', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoSgp> = new StringField('genericString15', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoSgp> = new StringField('genericString16', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoSgp> = new StringField('genericString17', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoSgp> = new StringField('genericString18', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoSgp> = new StringField('genericString19', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoSgp> = new StringField('genericString2', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoSgp> = new StringField('genericString20', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoSgp> = new StringField('genericString3', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoSgp> = new StringField('genericString4', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoSgp> = new StringField('genericString5', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoSgp> = new StringField('genericString6', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoSgp> = new StringField('genericString7', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoSgp> = new StringField('genericString8', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoSgp> = new StringField('genericString9', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoSgp> = new StringField('lastModifiedBy', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoSgp> = new DateField('lastModifiedDateTime', PerGlobalInfoSgp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoSgp> = new DateField('lastModifiedOn', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoSgp> = new StringField('operation', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoSgp> = new StringField('personIdExternal', PerGlobalInfoSgp, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoSgp> = new DateField('startDate', PerGlobalInfoSgp, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoSgp, Territory> = new OneToOneLink('countryNav', PerGlobalInfoSgp, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericNumber1Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8_NAV: OneToOneLink<PerGlobalInfoSgp, PicklistOption> = new OneToOneLink('genericString8Nav', PerGlobalInfoSgp, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoSgp, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoSgp, PerPerson);
  /**
   * All fields of the PerGlobalInfoSgp entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoSgp> | DateField<PerGlobalInfoSgp> | BigNumberField<PerGlobalInfoSgp> | OneToOneLink<PerGlobalInfoSgp, Territory> | OneToOneLink<PerGlobalInfoSgp, PicklistOption> | OneToOneLink<PerGlobalInfoSgp, PerPerson>> = [
    PerGlobalInfoSgp.COUNTRY,
    PerGlobalInfoSgp.CREATED_BY,
    PerGlobalInfoSgp.CREATED_DATE_TIME,
    PerGlobalInfoSgp.CREATED_ON,
    PerGlobalInfoSgp.END_DATE,
    PerGlobalInfoSgp.GENERIC_DATE_1,
    PerGlobalInfoSgp.GENERIC_DATE_2,
    PerGlobalInfoSgp.GENERIC_DATE_3,
    PerGlobalInfoSgp.GENERIC_DATE_4,
    PerGlobalInfoSgp.GENERIC_DATE_5,
    PerGlobalInfoSgp.GENERIC_DATE_6,
    PerGlobalInfoSgp.GENERIC_DATE_7,
    PerGlobalInfoSgp.GENERIC_DATE_8,
    PerGlobalInfoSgp.GENERIC_NUMBER_1,
    PerGlobalInfoSgp.GENERIC_NUMBER_10,
    PerGlobalInfoSgp.GENERIC_NUMBER_11,
    PerGlobalInfoSgp.GENERIC_NUMBER_12,
    PerGlobalInfoSgp.GENERIC_NUMBER_13,
    PerGlobalInfoSgp.GENERIC_NUMBER_2,
    PerGlobalInfoSgp.GENERIC_NUMBER_3,
    PerGlobalInfoSgp.GENERIC_NUMBER_4,
    PerGlobalInfoSgp.GENERIC_NUMBER_5,
    PerGlobalInfoSgp.GENERIC_NUMBER_6,
    PerGlobalInfoSgp.GENERIC_NUMBER_7,
    PerGlobalInfoSgp.GENERIC_NUMBER_8,
    PerGlobalInfoSgp.GENERIC_NUMBER_9,
    PerGlobalInfoSgp.GENERIC_STRING_1,
    PerGlobalInfoSgp.GENERIC_STRING_10,
    PerGlobalInfoSgp.GENERIC_STRING_11,
    PerGlobalInfoSgp.GENERIC_STRING_12,
    PerGlobalInfoSgp.GENERIC_STRING_13,
    PerGlobalInfoSgp.GENERIC_STRING_14,
    PerGlobalInfoSgp.GENERIC_STRING_15,
    PerGlobalInfoSgp.GENERIC_STRING_16,
    PerGlobalInfoSgp.GENERIC_STRING_17,
    PerGlobalInfoSgp.GENERIC_STRING_18,
    PerGlobalInfoSgp.GENERIC_STRING_19,
    PerGlobalInfoSgp.GENERIC_STRING_2,
    PerGlobalInfoSgp.GENERIC_STRING_20,
    PerGlobalInfoSgp.GENERIC_STRING_3,
    PerGlobalInfoSgp.GENERIC_STRING_4,
    PerGlobalInfoSgp.GENERIC_STRING_5,
    PerGlobalInfoSgp.GENERIC_STRING_6,
    PerGlobalInfoSgp.GENERIC_STRING_7,
    PerGlobalInfoSgp.GENERIC_STRING_8,
    PerGlobalInfoSgp.GENERIC_STRING_9,
    PerGlobalInfoSgp.LAST_MODIFIED_BY,
    PerGlobalInfoSgp.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoSgp.LAST_MODIFIED_ON,
    PerGlobalInfoSgp.OPERATION,
    PerGlobalInfoSgp.PERSON_ID_EXTERNAL,
    PerGlobalInfoSgp.START_DATE,
    PerGlobalInfoSgp.COUNTRY_NAV,
    PerGlobalInfoSgp.GENERIC_NUMBER_1_NAV,
    PerGlobalInfoSgp.GENERIC_STRING_1_NAV,
    PerGlobalInfoSgp.GENERIC_STRING_2_NAV,
    PerGlobalInfoSgp.GENERIC_STRING_3_NAV,
    PerGlobalInfoSgp.GENERIC_STRING_7_NAV,
    PerGlobalInfoSgp.GENERIC_STRING_8_NAV,
    PerGlobalInfoSgp.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoSgp> = new AllFields('*', PerGlobalInfoSgp);
  /**
   * All key fields of the PerGlobalInfoSgp entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoSgp>> = [PerGlobalInfoSgp.COUNTRY, PerGlobalInfoSgp.PERSON_ID_EXTERNAL, PerGlobalInfoSgp.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoSgp.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoSgp> } = PerGlobalInfoSgp._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoSgp> }, field: Selectable<PerGlobalInfoSgp>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
