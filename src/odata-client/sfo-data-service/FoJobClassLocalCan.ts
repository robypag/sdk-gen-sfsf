/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalCanRequestBuilder } from './FoJobClassLocalCanRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalCAN" of service "SFOData".
 */
export class FoJobClassLocalCan extends Entity implements FoJobClassLocalCanType {
  /**
   * Technical entity name for FoJobClassLocalCan.
   */
  static _entityName = 'FOJobClassLocalCAN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalCan.
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
   * Occupational Classification.
   * Maximum length: 255.
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
   * Returns an entity builder to construct instances `FoJobClassLocalCan`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalCan, FoJobClassLocalCanTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalCan);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalCan` entity type.
   * @returns A `FoJobClassLocalCan` request builder.
   */
  static requestBuilder(): FoJobClassLocalCanRequestBuilder {
    return new FoJobClassLocalCanRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalCan`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalCan`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalCan> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalCan);
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

export interface FoJobClassLocalCanType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  externalCode: string;
  genericString1?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoJobClassLocalCanTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  externalCode: string;
  genericString1: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoJobClassLocalCan {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalCan> = new StringField('country', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalCan> = new StringField('createdBy', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalCan> = new DateField('createdDateTime', FoJobClassLocalCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalCan> = new DateField('createdOn', FoJobClassLocalCan, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalCan> = new DateField('endDate', FoJobClassLocalCan, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalCan> = new StringField('externalCode', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<FoJobClassLocalCan> = new StringField('genericString1', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalCan> = new StringField('lastModifiedBy', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalCan> = new DateField('lastModifiedDateTime', FoJobClassLocalCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalCan> = new DateField('lastModifiedOn', FoJobClassLocalCan, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalCan> = new DateField('startDate', FoJobClassLocalCan, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalCan> = new StringField('status', FoJobClassLocalCan, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalCan, Territory> = new OneToOneLink('countryNav', FoJobClassLocalCan, Territory);
  /**
   * All fields of the FoJobClassLocalCan entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalCan> | DateField<FoJobClassLocalCan> | OneToOneLink<FoJobClassLocalCan, Territory>> = [
    FoJobClassLocalCan.COUNTRY,
    FoJobClassLocalCan.CREATED_BY,
    FoJobClassLocalCan.CREATED_DATE_TIME,
    FoJobClassLocalCan.CREATED_ON,
    FoJobClassLocalCan.END_DATE,
    FoJobClassLocalCan.EXTERNAL_CODE,
    FoJobClassLocalCan.GENERIC_STRING_1,
    FoJobClassLocalCan.LAST_MODIFIED_BY,
    FoJobClassLocalCan.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalCan.LAST_MODIFIED_ON,
    FoJobClassLocalCan.START_DATE,
    FoJobClassLocalCan.STATUS,
    FoJobClassLocalCan.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalCan> = new AllFields('*', FoJobClassLocalCan);
  /**
   * All key fields of the FoJobClassLocalCan entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalCan>> = [FoJobClassLocalCan.COUNTRY, FoJobClassLocalCan.EXTERNAL_CODE, FoJobClassLocalCan.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalCan.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalCan> } = FoJobClassLocalCan._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalCan> }, field: Selectable<FoJobClassLocalCan>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
