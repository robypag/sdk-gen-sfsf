/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerGlobalInfoCheRequestBuilder } from './PerGlobalInfoCheRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerGlobalInfoCHE" of service "SFOData".
 */
export class PerGlobalInfoChe extends Entity implements PerGlobalInfoCheType {
  /**
   * Technical entity name for PerGlobalInfoChe.
   */
  static _entityName = 'PerGlobalInfoCHE';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerGlobalInfoChe.
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
   * Start Of Entitlement Period For Family Related Bonus.
   * @nullable
   */
  genericDate2?: Moment;
  /**
   * End Of Entitlement Period For Family Related Bonus.
   * @nullable
   */
  genericDate3?: Moment;
  /**
   * End Of Family Member's Education/Trainig.
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
   * Professional Category ASM.
   * @nullable
   */
  genericNumber1?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber10?: BigNumber;
  /**
   * Bonus For Person With First Claim.
   * @nullable
   */
  genericNumber11?: BigNumber;
  /**
   * Payment Factor For Child.
   * @nullable
   */
  genericNumber12?: BigNumber;
  /**
   * Child Bonus Group for Family Related Bonuses.
   * @nullable
   */
  genericNumber13?: BigNumber;
  /**
   * Function Number.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Tax Status.
   * @nullable
   */
  genericNumber3?: BigNumber;
  /**
   * Academic Title.
   * @nullable
   */
  genericNumber4?: BigNumber;
  /**
   * Number of Children.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * Degree of Challenge.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Child Income.
   * @nullable
   */
  genericNumber7?: BigNumber;
  /**
   * Other Disabled Veteran.
   * @nullable
   */
  genericNumber8?: BigNumber;
  /**
   * SI Number.
   * @nullable
   */
  genericNumber9?: BigNumber;
  /**
   * Religion.
   * Maximum length: 256.
   * @nullable
   */
  genericString1?: string;
  /**
   * Educational Institute.
   * Maximum length: 256.
   * @nullable
   */
  genericString10?: string;
  /**
   * Partner's Country Of Work.
   * Maximum length: 256.
   * @nullable
   */
  genericString11?: string;
  /**
   * Partner's Canton Of Work.
   * Maximum length: 256.
   * @nullable
   */
  genericString12?: string;
  /**
   * Canton Of Origin.
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
   * Child's Canton Of Residence.
   * Maximum length: 256.
   * @nullable
   */
  genericString6?: string;
  /**
   * Tax For Family Related Bonus.
   * Maximum length: 15.
   * @nullable
   */
  genericString7?: string;
  /**
   * Authorization.
   * Maximum length: 256.
   * @nullable
   */
  genericString8?: string;
  /**
   * Schooling Type.
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
  genericNumber3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber4Nav!: PicklistOption;
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
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;

  /**
   * Returns an entity builder to construct instances `PerGlobalInfoChe`.
   * @returns A builder that constructs instances of entity type `PerGlobalInfoChe`.
   */
  static builder(): EntityBuilderType<PerGlobalInfoChe, PerGlobalInfoCheTypeForceMandatory> {
    return Entity.entityBuilder(PerGlobalInfoChe);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerGlobalInfoChe` entity type.
   * @returns A `PerGlobalInfoChe` request builder.
   */
  static requestBuilder(): PerGlobalInfoCheRequestBuilder {
    return new PerGlobalInfoCheRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerGlobalInfoChe`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerGlobalInfoChe`.
   */
  static customField(fieldName: string): CustomField<PerGlobalInfoChe> {
    return Entity.customFieldSelector(fieldName, PerGlobalInfoChe);
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

export interface PerGlobalInfoCheType {
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
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export interface PerGlobalInfoCheTypeForceMandatory {
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
  genericNumber3Nav: PicklistOptionType;
  genericNumber4Nav: PicklistOptionType;
  genericString11Nav: PicklistOptionType;
  genericString12Nav: PicklistOptionType;
  genericString13Nav: PicklistOptionType;
  genericString1Nav: PicklistOptionType;
  genericString2Nav: PicklistOptionType;
  genericString3Nav: PicklistOptionType;
  genericString6Nav: PicklistOptionType;
  genericString7Nav: PicklistOptionType;
  genericString8Nav: PicklistOptionType;
  personNav: PerPersonType;
}

export namespace PerGlobalInfoChe {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerGlobalInfoChe> = new StringField('country', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerGlobalInfoChe> = new StringField('createdBy', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerGlobalInfoChe> = new DateField('createdDateTime', PerGlobalInfoChe, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerGlobalInfoChe> = new DateField('createdOn', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerGlobalInfoChe> = new DateField('endDate', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_1: DateField<PerGlobalInfoChe> = new DateField('genericDate1', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_2: DateField<PerGlobalInfoChe> = new DateField('genericDate2', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_3: DateField<PerGlobalInfoChe> = new DateField('genericDate3', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_4: DateField<PerGlobalInfoChe> = new DateField('genericDate4', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_5: DateField<PerGlobalInfoChe> = new DateField('genericDate5', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_6: DateField<PerGlobalInfoChe> = new DateField('genericDate6', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_7: DateField<PerGlobalInfoChe> = new DateField('genericDate7', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericDate8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_DATE_8: DateField<PerGlobalInfoChe> = new DateField('genericDate8', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber1', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_10: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber10', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_11: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber11', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_12: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber12', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_13: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber13', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber2', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber3', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber4', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber5', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber6', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_7: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber7', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_8: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber8', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_9: BigNumberField<PerGlobalInfoChe> = new BigNumberField('genericNumber9', PerGlobalInfoChe, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<PerGlobalInfoChe> = new StringField('genericString1', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_10: StringField<PerGlobalInfoChe> = new StringField('genericString10', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11: StringField<PerGlobalInfoChe> = new StringField('genericString11', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12: StringField<PerGlobalInfoChe> = new StringField('genericString12', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13: StringField<PerGlobalInfoChe> = new StringField('genericString13', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_14: StringField<PerGlobalInfoChe> = new StringField('genericString14', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_15: StringField<PerGlobalInfoChe> = new StringField('genericString15', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString16]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_16: StringField<PerGlobalInfoChe> = new StringField('genericString16', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString17]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_17: StringField<PerGlobalInfoChe> = new StringField('genericString17', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString18]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_18: StringField<PerGlobalInfoChe> = new StringField('genericString18', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString19]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_19: StringField<PerGlobalInfoChe> = new StringField('genericString19', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2: StringField<PerGlobalInfoChe> = new StringField('genericString2', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString20]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_20: StringField<PerGlobalInfoChe> = new StringField('genericString20', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3: StringField<PerGlobalInfoChe> = new StringField('genericString3', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_4: StringField<PerGlobalInfoChe> = new StringField('genericString4', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_5: StringField<PerGlobalInfoChe> = new StringField('genericString5', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6: StringField<PerGlobalInfoChe> = new StringField('genericString6', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7: StringField<PerGlobalInfoChe> = new StringField('genericString7', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8: StringField<PerGlobalInfoChe> = new StringField('genericString8', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[genericString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_9: StringField<PerGlobalInfoChe> = new StringField('genericString9', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerGlobalInfoChe> = new StringField('lastModifiedBy', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerGlobalInfoChe> = new DateField('lastModifiedDateTime', PerGlobalInfoChe, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerGlobalInfoChe> = new DateField('lastModifiedOn', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerGlobalInfoChe> = new StringField('operation', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerGlobalInfoChe> = new StringField('personIdExternal', PerGlobalInfoChe, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerGlobalInfoChe> = new DateField('startDate', PerGlobalInfoChe, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerGlobalInfoChe, Territory> = new OneToOneLink('countryNav', PerGlobalInfoChe, Territory);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_3_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericNumber3Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_4_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericNumber4Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_11_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString11Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString12Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_12_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString12Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString13Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_13_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString13Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString1Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString2Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_2_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString2Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_3_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString3Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_6_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString6Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_7_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString7Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericString8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_8_NAV: OneToOneLink<PerGlobalInfoChe, PicklistOption> = new OneToOneLink('genericString8Nav', PerGlobalInfoChe, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerGlobalInfoChe, PerPerson> = new OneToOneLink('personNav', PerGlobalInfoChe, PerPerson);
  /**
   * All fields of the PerGlobalInfoChe entity.
   */
  export const _allFields: Array<StringField<PerGlobalInfoChe> | DateField<PerGlobalInfoChe> | BigNumberField<PerGlobalInfoChe> | OneToOneLink<PerGlobalInfoChe, Territory> | OneToOneLink<PerGlobalInfoChe, PicklistOption> | OneToOneLink<PerGlobalInfoChe, PerPerson>> = [
    PerGlobalInfoChe.COUNTRY,
    PerGlobalInfoChe.CREATED_BY,
    PerGlobalInfoChe.CREATED_DATE_TIME,
    PerGlobalInfoChe.CREATED_ON,
    PerGlobalInfoChe.END_DATE,
    PerGlobalInfoChe.GENERIC_DATE_1,
    PerGlobalInfoChe.GENERIC_DATE_2,
    PerGlobalInfoChe.GENERIC_DATE_3,
    PerGlobalInfoChe.GENERIC_DATE_4,
    PerGlobalInfoChe.GENERIC_DATE_5,
    PerGlobalInfoChe.GENERIC_DATE_6,
    PerGlobalInfoChe.GENERIC_DATE_7,
    PerGlobalInfoChe.GENERIC_DATE_8,
    PerGlobalInfoChe.GENERIC_NUMBER_1,
    PerGlobalInfoChe.GENERIC_NUMBER_10,
    PerGlobalInfoChe.GENERIC_NUMBER_11,
    PerGlobalInfoChe.GENERIC_NUMBER_12,
    PerGlobalInfoChe.GENERIC_NUMBER_13,
    PerGlobalInfoChe.GENERIC_NUMBER_2,
    PerGlobalInfoChe.GENERIC_NUMBER_3,
    PerGlobalInfoChe.GENERIC_NUMBER_4,
    PerGlobalInfoChe.GENERIC_NUMBER_5,
    PerGlobalInfoChe.GENERIC_NUMBER_6,
    PerGlobalInfoChe.GENERIC_NUMBER_7,
    PerGlobalInfoChe.GENERIC_NUMBER_8,
    PerGlobalInfoChe.GENERIC_NUMBER_9,
    PerGlobalInfoChe.GENERIC_STRING_1,
    PerGlobalInfoChe.GENERIC_STRING_10,
    PerGlobalInfoChe.GENERIC_STRING_11,
    PerGlobalInfoChe.GENERIC_STRING_12,
    PerGlobalInfoChe.GENERIC_STRING_13,
    PerGlobalInfoChe.GENERIC_STRING_14,
    PerGlobalInfoChe.GENERIC_STRING_15,
    PerGlobalInfoChe.GENERIC_STRING_16,
    PerGlobalInfoChe.GENERIC_STRING_17,
    PerGlobalInfoChe.GENERIC_STRING_18,
    PerGlobalInfoChe.GENERIC_STRING_19,
    PerGlobalInfoChe.GENERIC_STRING_2,
    PerGlobalInfoChe.GENERIC_STRING_20,
    PerGlobalInfoChe.GENERIC_STRING_3,
    PerGlobalInfoChe.GENERIC_STRING_4,
    PerGlobalInfoChe.GENERIC_STRING_5,
    PerGlobalInfoChe.GENERIC_STRING_6,
    PerGlobalInfoChe.GENERIC_STRING_7,
    PerGlobalInfoChe.GENERIC_STRING_8,
    PerGlobalInfoChe.GENERIC_STRING_9,
    PerGlobalInfoChe.LAST_MODIFIED_BY,
    PerGlobalInfoChe.LAST_MODIFIED_DATE_TIME,
    PerGlobalInfoChe.LAST_MODIFIED_ON,
    PerGlobalInfoChe.OPERATION,
    PerGlobalInfoChe.PERSON_ID_EXTERNAL,
    PerGlobalInfoChe.START_DATE,
    PerGlobalInfoChe.COUNTRY_NAV,
    PerGlobalInfoChe.GENERIC_NUMBER_3_NAV,
    PerGlobalInfoChe.GENERIC_NUMBER_4_NAV,
    PerGlobalInfoChe.GENERIC_STRING_11_NAV,
    PerGlobalInfoChe.GENERIC_STRING_12_NAV,
    PerGlobalInfoChe.GENERIC_STRING_13_NAV,
    PerGlobalInfoChe.GENERIC_STRING_1_NAV,
    PerGlobalInfoChe.GENERIC_STRING_2_NAV,
    PerGlobalInfoChe.GENERIC_STRING_3_NAV,
    PerGlobalInfoChe.GENERIC_STRING_6_NAV,
    PerGlobalInfoChe.GENERIC_STRING_7_NAV,
    PerGlobalInfoChe.GENERIC_STRING_8_NAV,
    PerGlobalInfoChe.PERSON_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerGlobalInfoChe> = new AllFields('*', PerGlobalInfoChe);
  /**
   * All key fields of the PerGlobalInfoChe entity.
   */
  export const _keyFields: Array<Selectable<PerGlobalInfoChe>> = [PerGlobalInfoChe.COUNTRY, PerGlobalInfoChe.PERSON_ID_EXTERNAL, PerGlobalInfoChe.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerGlobalInfoChe.
   */
  export const _keys: { [keys: string]: Selectable<PerGlobalInfoChe> } = PerGlobalInfoChe._keyFields.reduce((acc: { [keys: string]: Selectable<PerGlobalInfoChe> }, field: Selectable<PerGlobalInfoChe>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
