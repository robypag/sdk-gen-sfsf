/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalFraRequestBuilder } from './FoJobClassLocalFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalFRA" of service "SFOData".
 */
export class FoJobClassLocalFra extends Entity implements FoJobClassLocalFraType {
  /**
   * Technical entity name for FoJobClassLocalFra.
   */
  static _entityName = 'FOJobClassLocalFRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalFra.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Classification Country/Region_Country/Region.
   * Maximum length: 128.
   */
  country!: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * createdDate.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * PCScode.
   * Maximum length: 255.
   * @nullable
   */
  custPcScode?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Job Classification _Job Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Employment Category.
   * @nullable
   */
  genericNumber2?: BigNumber;
  /**
   * Insee Code.
   * Maximum length: 32.
   * @nullable
   */
  genericString1?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Job Classification _Effective as of.
   */
  startDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;

  /**
   * Returns an entity builder to construct instances `FoJobClassLocalFra`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalFra, FoJobClassLocalFraTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalFra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalFra` entity type.
   * @returns A `FoJobClassLocalFra` request builder.
   */
  static requestBuilder(): FoJobClassLocalFraRequestBuilder {
    return new FoJobClassLocalFraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalFra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalFra`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalFra> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalFra);
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

export interface FoJobClassLocalFraType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custPcScode?: string;
  endDate?: Moment;
  externalCode: string;
  genericNumber2?: BigNumber;
  genericString1?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoJobClassLocalFraTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custPcScode: string;
  endDate: Moment;
  externalCode: string;
  genericNumber2: BigNumber;
  genericString1: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoJobClassLocalFra {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalFra> = new StringField('country', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalFra> = new StringField('createdBy', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalFra> = new DateField('createdDateTime', FoJobClassLocalFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalFra> = new DateField('createdOn', FoJobClassLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[custPcScode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_PC_SCODE: StringField<FoJobClassLocalFra> = new StringField('cust_PCScode', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalFra> = new DateField('endDate', FoJobClassLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalFra> = new StringField('externalCode', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[genericNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_2: BigNumberField<FoJobClassLocalFra> = new BigNumberField('genericNumber2', FoJobClassLocalFra, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<FoJobClassLocalFra> = new StringField('genericString1', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalFra> = new StringField('lastModifiedBy', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalFra> = new DateField('lastModifiedDateTime', FoJobClassLocalFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalFra> = new DateField('lastModifiedOn', FoJobClassLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalFra> = new DateField('startDate', FoJobClassLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalFra> = new StringField('status', FoJobClassLocalFra, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalFra, Territory> = new OneToOneLink('countryNav', FoJobClassLocalFra, Territory);
  /**
   * All fields of the FoJobClassLocalFra entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalFra> | DateField<FoJobClassLocalFra> | BigNumberField<FoJobClassLocalFra> | OneToOneLink<FoJobClassLocalFra, Territory>> = [
    FoJobClassLocalFra.COUNTRY,
    FoJobClassLocalFra.CREATED_BY,
    FoJobClassLocalFra.CREATED_DATE_TIME,
    FoJobClassLocalFra.CREATED_ON,
    FoJobClassLocalFra.CUST_PC_SCODE,
    FoJobClassLocalFra.END_DATE,
    FoJobClassLocalFra.EXTERNAL_CODE,
    FoJobClassLocalFra.GENERIC_NUMBER_2,
    FoJobClassLocalFra.GENERIC_STRING_1,
    FoJobClassLocalFra.LAST_MODIFIED_BY,
    FoJobClassLocalFra.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalFra.LAST_MODIFIED_ON,
    FoJobClassLocalFra.START_DATE,
    FoJobClassLocalFra.STATUS,
    FoJobClassLocalFra.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalFra> = new AllFields('*', FoJobClassLocalFra);
  /**
   * All key fields of the FoJobClassLocalFra entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalFra>> = [FoJobClassLocalFra.COUNTRY, FoJobClassLocalFra.EXTERNAL_CODE, FoJobClassLocalFra.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalFra.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalFra> } = FoJobClassLocalFra._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalFra> }, field: Selectable<FoJobClassLocalFra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
