/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerAddressDefltRequestBuilder } from './PerAddressDefltRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerAddressDEFLT" of service "SFOData".
 */
export class PerAddressDeflt extends Entity implements PerAddressDefltType {
  /**
   * Technical entity name for PerAddressDeflt.
   */
  static _entityName = 'PerAddressDEFLT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerAddressDeflt.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * address1.
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
   * City.
   * Maximum length: 256.
   * @nullable
   */
  address12?: string;
  /**
   * address2.
   * Maximum length: 256.
   * @nullable
   */
  address2?: string;
  /**
   * Company Housing.
   * Maximum length: 256.
   * @nullable
   */
  address3?: string;
  /**
   * Municipality.
   * Maximum length: 256.
   * @nullable
   */
  address4?: string;
  /**
   * Second Address Line.
   * Maximum length: 256.
   * @nullable
   */
  address5?: string;
  /**
   * Address Category.
   * Maximum length: 256.
   * @nullable
   */
  address6?: string;
  /**
   * Camp.
   * Maximum length: 256.
   * @nullable
   */
  address7?: string;
  /**
   * Camp.
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
   * Address Type.
   * Maximum length: 30.
   */
  addressType!: string;
  /**
   * city.
   * Maximum length: 256.
   * @nullable
   */
  city?: string;
  /**
   * country.
   * Maximum length: 256.
   * @nullable
   */
  country?: string;
  /**
   * County.
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
   * Include All Records.
   * @nullable
   */
  includeAllRecords?: boolean;
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
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: string;
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
   * province.
   * Maximum length: 256.
   * @nullable
   */
  province?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * State.
   * Maximum length: 256.
   * @nullable
   */
  state?: string;
  /**
   * zipCode.
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
  address6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address7Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  address8Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countyNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  stateNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `PerAddressDeflt`.
   * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
   */
  static builder(): EntityBuilderType<PerAddressDeflt, PerAddressDefltTypeForceMandatory> {
    return Entity.entityBuilder(PerAddressDeflt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerAddressDeflt` entity type.
   * @returns A `PerAddressDeflt` request builder.
   */
  static requestBuilder(): PerAddressDefltRequestBuilder {
    return new PerAddressDefltRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerAddressDeflt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerAddressDeflt`.
   */
  static customField(fieldName: string): CustomField<PerAddressDeflt> {
    return Entity.customFieldSelector(fieldName, PerAddressDeflt);
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
import { Territory, TerritoryType } from './Territory';
import { PerPerson, PerPersonType } from './PerPerson';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PerAddressDefltType {
  address1?: string;
  address10?: string;
  address11?: string;
  address12?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  address7?: string;
  address8?: string;
  address9?: string;
  addressType: string;
  city?: string;
  country?: string;
  county?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  includeAllRecords?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  notes?: string;
  operation?: string;
  personIdExternal: string;
  province?: string;
  startDate: Moment;
  state?: string;
  zipCode?: string;
  address3Nav: PicklistOptionType;
  address4Nav: PicklistOptionType;
  address6Nav: PicklistOptionType;
  address7Nav: PicklistOptionType;
  address8Nav: PicklistOptionType;
  countryNav: TerritoryType;
  countyNav: PicklistOptionType;
  personNav: PerPersonType;
  stateNav: PicklistOptionType;
  wfRequestNav: WfRequestType;
}

export interface PerAddressDefltTypeForceMandatory {
  address1: string;
  address10: string;
  address11: string;
  address12: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  address9: string;
  addressType: string;
  city: string;
  country: string;
  county: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  notes: string;
  operation: string;
  personIdExternal: string;
  province: string;
  startDate: Moment;
  state: string;
  zipCode: string;
  address3Nav: PicklistOptionType;
  address4Nav: PicklistOptionType;
  address6Nav: PicklistOptionType;
  address7Nav: PicklistOptionType;
  address8Nav: PicklistOptionType;
  countryNav: TerritoryType;
  countyNav: PicklistOptionType;
  personNav: PerPersonType;
  stateNav: PicklistOptionType;
  wfRequestNav: WfRequestType;
}

export namespace PerAddressDeflt {
  /**
   * Static representation of the [[address1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_1: StringField<PerAddressDeflt> = new StringField('address1', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_10: StringField<PerAddressDeflt> = new StringField('address10', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_11: StringField<PerAddressDeflt> = new StringField('address11', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_12: StringField<PerAddressDeflt> = new StringField('address12', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<PerAddressDeflt> = new StringField('address2', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_3: StringField<PerAddressDeflt> = new StringField('address3', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_4: StringField<PerAddressDeflt> = new StringField('address4', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_5: StringField<PerAddressDeflt> = new StringField('address5', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_6: StringField<PerAddressDeflt> = new StringField('address6', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_7: StringField<PerAddressDeflt> = new StringField('address7', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_8: StringField<PerAddressDeflt> = new StringField('address8', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[address9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_9: StringField<PerAddressDeflt> = new StringField('address9', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<PerAddressDeflt> = new StringField('addressType', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<PerAddressDeflt> = new StringField('city', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PerAddressDeflt> = new StringField('country', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<PerAddressDeflt> = new StringField('county', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerAddressDeflt> = new StringField('createdBy', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerAddressDeflt> = new DateField('createdDateTime', PerAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerAddressDeflt> = new DateField('createdOn', PerAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerAddressDeflt> = new DateField('endDate', PerAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<PerAddressDeflt> = new BooleanField('includeAllRecords', PerAddressDeflt, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerAddressDeflt> = new StringField('lastModifiedBy', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerAddressDeflt> = new DateField('lastModifiedDateTime', PerAddressDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerAddressDeflt> = new DateField('lastModifiedOn', PerAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<PerAddressDeflt> = new StringField('notes', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerAddressDeflt> = new StringField('operation', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerAddressDeflt> = new StringField('personIdExternal', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[province]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVINCE: StringField<PerAddressDeflt> = new StringField('province', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerAddressDeflt> = new DateField('startDate', PerAddressDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<PerAddressDeflt> = new StringField('state', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<PerAddressDeflt> = new StringField('zipCode', PerAddressDeflt, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[address3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_3_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('address3Nav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_4_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('address4Nav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_6_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('address6Nav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address7Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_7_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('address7Nav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[address8Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_8_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('address8Nav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<PerAddressDeflt, Territory> = new OneToOneLink('countryNav', PerAddressDeflt, Territory);
  /**
   * Static representation of the one-to-one navigation property [[countyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('countyNav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerAddressDeflt, PerPerson> = new OneToOneLink('personNav', PerAddressDeflt, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[stateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_NAV: OneToOneLink<PerAddressDeflt, PicklistOption> = new OneToOneLink('stateNav', PerAddressDeflt, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<PerAddressDeflt, WfRequest> = new OneToOneLink('wfRequestNav', PerAddressDeflt, WfRequest);
  /**
   * All fields of the PerAddressDeflt entity.
   */
  export const _allFields: Array<StringField<PerAddressDeflt> | DateField<PerAddressDeflt> | BooleanField<PerAddressDeflt> | OneToOneLink<PerAddressDeflt, PicklistOption> | OneToOneLink<PerAddressDeflt, Territory> | OneToOneLink<PerAddressDeflt, PerPerson> | OneToOneLink<PerAddressDeflt, WfRequest>> = [
    PerAddressDeflt.ADDRESS_1,
    PerAddressDeflt.ADDRESS_10,
    PerAddressDeflt.ADDRESS_11,
    PerAddressDeflt.ADDRESS_12,
    PerAddressDeflt.ADDRESS_2,
    PerAddressDeflt.ADDRESS_3,
    PerAddressDeflt.ADDRESS_4,
    PerAddressDeflt.ADDRESS_5,
    PerAddressDeflt.ADDRESS_6,
    PerAddressDeflt.ADDRESS_7,
    PerAddressDeflt.ADDRESS_8,
    PerAddressDeflt.ADDRESS_9,
    PerAddressDeflt.ADDRESS_TYPE,
    PerAddressDeflt.CITY,
    PerAddressDeflt.COUNTRY,
    PerAddressDeflt.COUNTY,
    PerAddressDeflt.CREATED_BY,
    PerAddressDeflt.CREATED_DATE_TIME,
    PerAddressDeflt.CREATED_ON,
    PerAddressDeflt.END_DATE,
    PerAddressDeflt.INCLUDE_ALL_RECORDS,
    PerAddressDeflt.LAST_MODIFIED_BY,
    PerAddressDeflt.LAST_MODIFIED_DATE_TIME,
    PerAddressDeflt.LAST_MODIFIED_ON,
    PerAddressDeflt.NOTES,
    PerAddressDeflt.OPERATION,
    PerAddressDeflt.PERSON_ID_EXTERNAL,
    PerAddressDeflt.PROVINCE,
    PerAddressDeflt.START_DATE,
    PerAddressDeflt.STATE,
    PerAddressDeflt.ZIP_CODE,
    PerAddressDeflt.ADDRESS_3_NAV,
    PerAddressDeflt.ADDRESS_4_NAV,
    PerAddressDeflt.ADDRESS_6_NAV,
    PerAddressDeflt.ADDRESS_7_NAV,
    PerAddressDeflt.ADDRESS_8_NAV,
    PerAddressDeflt.COUNTRY_NAV,
    PerAddressDeflt.COUNTY_NAV,
    PerAddressDeflt.PERSON_NAV,
    PerAddressDeflt.STATE_NAV,
    PerAddressDeflt.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerAddressDeflt> = new AllFields('*', PerAddressDeflt);
  /**
   * All key fields of the PerAddressDeflt entity.
   */
  export const _keyFields: Array<Selectable<PerAddressDeflt>> = [PerAddressDeflt.ADDRESS_TYPE, PerAddressDeflt.PERSON_ID_EXTERNAL, PerAddressDeflt.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerAddressDeflt.
   */
  export const _keys: { [keys: string]: Selectable<PerAddressDeflt> } = PerAddressDeflt._keyFields.reduce((acc: { [keys: string]: Selectable<PerAddressDeflt> }, field: Selectable<PerAddressDeflt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
