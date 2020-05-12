/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoCorporateAddressDefltRequestBuilder } from './FoCorporateAddressDefltRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOCorporateAddressDEFLT" of service "SFOData".
 */
export class FoCorporateAddressDeflt extends Entity implements FoCorporateAddressDefltType {
  /**
   * Technical entity name for FoCorporateAddressDeflt.
   */
  static _entityName = 'FOCorporateAddressDEFLT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoCorporateAddressDeflt.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Address Line 1.
   * Maximum length: 256.
   * @nullable
   */
  address1?: string;
  /**
   * Apartment.
   * Maximum length: 256.
   * @nullable
   */
  address10?: string;
  /**
   * Bed Number.
   * Maximum length: 256.
   * @nullable
   */
  address11?: string;
  /**
   * Address Line 2.
   * Maximum length: 256.
   * @nullable
   */
  address2?: string;
  /**
   * Department.
   * Maximum length: 256.
   * @nullable
   */
  address3?: string;
  /**
   * Governorate.
   * Maximum length: 256.
   * @nullable
   */
  address4?: string;
  /**
   * Department.
   * Maximum length: 256.
   * @nullable
   */
  address5?: string;
  /**
   * Locality Type.
   * Maximum length: 256.
   * @nullable
   */
  address6?: string;
  /**
   * District.
   * Maximum length: 256.
   * @nullable
   */
  address7?: string;
  /**
   * Building Number.
   * Maximum length: 256.
   * @nullable
   */
  address8?: string;
  /**
   * Building.
   * Maximum length: 256.
   * @nullable
   */
  address9?: string;
  /**
   * Address ID.
   */
  addressId!: BigNumber;
  /**
   * District.
   * Maximum length: 256.
   * @nullable
   */
  city?: string;
  /**
   * Country.
   * Maximum length: 256.
   * @nullable
   */
  country?: string;
  /**
   * District.
   * Maximum length: 256.
   * @nullable
   */
  county?: string;
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
   * Province.
   * Maximum length: 256.
   * @nullable
   */
  province?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * State.
   * Maximum length: 256.
   * @nullable
   */
  state?: string;
  /**
   * ZIP.
   * Maximum length: 256.
   * @nullable
   */
  zipCode?: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address3Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address5Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  cityNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countyNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  provinceNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  stateNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `FoCorporateAddressDeflt`.
   * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
   */
  static builder(): EntityBuilderType<FoCorporateAddressDeflt, FoCorporateAddressDefltTypeForceMandatory> {
    return Entity.entityBuilder(FoCorporateAddressDeflt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoCorporateAddressDeflt` entity type.
   * @returns A `FoCorporateAddressDeflt` request builder.
   */
  static requestBuilder(): FoCorporateAddressDefltRequestBuilder {
    return new FoCorporateAddressDefltRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCorporateAddressDeflt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoCorporateAddressDeflt`.
   */
  static customField(fieldName: string): CustomField<FoCorporateAddressDeflt> {
    return Entity.customFieldSelector(fieldName, FoCorporateAddressDeflt);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface FoCorporateAddressDefltType {
  address1?: string;
  address10?: string;
  address11?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  address7?: string;
  address8?: string;
  address9?: string;
  addressId: BigNumber;
  city?: string;
  country?: string;
  county?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  province?: string;
  startDate?: Moment;
  state?: string;
  zipCode?: string;
  address3Nav: PicklistOptionType;
  address4Nav: PicklistOptionType;
  address5Nav: PicklistOptionType;
  address6Nav: PicklistOptionType;
  address7Nav: PicklistOptionType;
  cityNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  countyNav: PicklistOptionType;
  provinceNav: PicklistOptionType;
  stateNav: PicklistOptionType;
}

export interface FoCorporateAddressDefltTypeForceMandatory {
  address1: string;
  address10: string;
  address11: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  address9: string;
  addressId: BigNumber;
  city: string;
  country: string;
  county: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  province: string;
  startDate: Moment;
  state: string;
  zipCode: string;
  address3Nav: PicklistOptionType;
  address4Nav: PicklistOptionType;
  address5Nav: PicklistOptionType;
  address6Nav: PicklistOptionType;
  address7Nav: PicklistOptionType;
  cityNav: PicklistOptionType;
  countryNav: PicklistOptionType;
  countyNav: PicklistOptionType;
  provinceNav: PicklistOptionType;
  stateNav: PicklistOptionType;
}

export namespace FoCorporateAddressDeflt {
  /**
   * Static representation of the [[address1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_1: StringField<FoCorporateAddressDeflt> = new StringField('address1', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_10: StringField<FoCorporateAddressDeflt> = new StringField('address10', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_11: StringField<FoCorporateAddressDeflt> = new StringField('address11', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<FoCorporateAddressDeflt> = new StringField('address2', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_3: StringField<FoCorporateAddressDeflt> = new StringField('address3', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_4: StringField<FoCorporateAddressDeflt> = new StringField('address4', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_5: StringField<FoCorporateAddressDeflt> = new StringField('address5', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_6: StringField<FoCorporateAddressDeflt> = new StringField('address6', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_7: StringField<FoCorporateAddressDeflt> = new StringField('address7', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_8: StringField<FoCorporateAddressDeflt> = new StringField('address8', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_9: StringField<FoCorporateAddressDeflt> = new StringField('address9', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: BigNumberField<FoCorporateAddressDeflt> = new BigNumberField('addressId', FoCorporateAddressDeflt, 'Edm.Decimal');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<FoCorporateAddressDeflt> = new StringField('city', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoCorporateAddressDeflt> = new StringField('country', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<FoCorporateAddressDeflt> = new StringField('county', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoCorporateAddressDeflt> = new StringField('createdBy', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoCorporateAddressDeflt> = new DateField('createdDateTime', FoCorporateAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoCorporateAddressDeflt> = new DateField('createdOn', FoCorporateAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoCorporateAddressDeflt> = new DateField('endDate', FoCorporateAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoCorporateAddressDeflt> = new StringField('lastModifiedBy', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoCorporateAddressDeflt> = new DateField('lastModifiedDateTime', FoCorporateAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoCorporateAddressDeflt> = new DateField('lastModifiedOn', FoCorporateAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[province]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVINCE: StringField<FoCorporateAddressDeflt> = new StringField('province', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoCorporateAddressDeflt> = new DateField('startDate', FoCorporateAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<FoCorporateAddressDeflt> = new StringField('state', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<FoCorporateAddressDeflt> = new StringField('zipCode', FoCorporateAddressDeflt, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[address3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_3_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('address3Nav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_4_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('address4Nav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_5_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('address5Nav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_6_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('address6Nav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_7_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('address7Nav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[cityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('cityNav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('countryNav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[countyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('countyNav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[provinceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVINCE_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('provinceNav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[stateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_NAV: OneToOneLink<FoCorporateAddressDeflt, PicklistOption> = new OneToOneLink('stateNav', FoCorporateAddressDeflt, PicklistOption);
  /**
   * All fields of the FoCorporateAddressDeflt entity.
   */
  export const _allFields: Array<StringField<FoCorporateAddressDeflt> | BigNumberField<FoCorporateAddressDeflt> | DateField<FoCorporateAddressDeflt> | OneToOneLink<FoCorporateAddressDeflt, PicklistOption>> = [
    FoCorporateAddressDeflt.ADDRESS_1,
    FoCorporateAddressDeflt.ADDRESS_10,
    FoCorporateAddressDeflt.ADDRESS_11,
    FoCorporateAddressDeflt.ADDRESS_2,
    FoCorporateAddressDeflt.ADDRESS_3,
    FoCorporateAddressDeflt.ADDRESS_4,
    FoCorporateAddressDeflt.ADDRESS_5,
    FoCorporateAddressDeflt.ADDRESS_6,
    FoCorporateAddressDeflt.ADDRESS_7,
    FoCorporateAddressDeflt.ADDRESS_8,
    FoCorporateAddressDeflt.ADDRESS_9,
    FoCorporateAddressDeflt.ADDRESS_ID,
    FoCorporateAddressDeflt.CITY,
    FoCorporateAddressDeflt.COUNTRY,
    FoCorporateAddressDeflt.COUNTY,
    FoCorporateAddressDeflt.CREATED_BY,
    FoCorporateAddressDeflt.CREATED_DATE_TIME,
    FoCorporateAddressDeflt.CREATED_ON,
    FoCorporateAddressDeflt.END_DATE,
    FoCorporateAddressDeflt.LAST_MODIFIED_BY,
    FoCorporateAddressDeflt.LAST_MODIFIED_DATE_TIME,
    FoCorporateAddressDeflt.LAST_MODIFIED_ON,
    FoCorporateAddressDeflt.PROVINCE,
    FoCorporateAddressDeflt.START_DATE,
    FoCorporateAddressDeflt.STATE,
    FoCorporateAddressDeflt.ZIP_CODE,
    FoCorporateAddressDeflt.ADDRESS_3_NAV,
    FoCorporateAddressDeflt.ADDRESS_4_NAV,
    FoCorporateAddressDeflt.ADDRESS_5_NAV,
    FoCorporateAddressDeflt.ADDRESS_6_NAV,
    FoCorporateAddressDeflt.ADDRESS_7_NAV,
    FoCorporateAddressDeflt.CITY_NAV,
    FoCorporateAddressDeflt.COUNTRY_NAV,
    FoCorporateAddressDeflt.COUNTY_NAV,
    FoCorporateAddressDeflt.PROVINCE_NAV,
    FoCorporateAddressDeflt.STATE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoCorporateAddressDeflt> = new AllFields('*', FoCorporateAddressDeflt);
  /**
   * All key fields of the FoCorporateAddressDeflt entity.
   */
  export const _keyFields: Array<Selectable<FoCorporateAddressDeflt>> = [FoCorporateAddressDeflt.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property FoCorporateAddressDeflt.
   */
  export const _keys: { [keys: string]: Selectable<FoCorporateAddressDeflt> } = FoCorporateAddressDeflt._keyFields.reduce((acc: { [keys: string]: Selectable<FoCorporateAddressDeflt> }, field: Selectable<FoCorporateAddressDeflt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
