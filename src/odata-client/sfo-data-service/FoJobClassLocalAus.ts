/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalAusRequestBuilder } from './FoJobClassLocalAusRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalAUS" of service "SFOData".
 */
export class FoJobClassLocalAus extends Entity implements FoJobClassLocalAusType {
  /**
   * Technical entity name for FoJobClassLocalAus.
   */
  static _entityName = 'FOJobClassLocalAUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalAus.
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
   * ASCO Code.
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
   * Returns an entity builder to construct instances `FoJobClassLocalAus`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalAus`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalAus, FoJobClassLocalAusTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalAus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalAus` entity type.
   * @returns A `FoJobClassLocalAus` request builder.
   */
  static requestBuilder(): FoJobClassLocalAusRequestBuilder {
    return new FoJobClassLocalAusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalAus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalAus`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalAus> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalAus);
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

export interface FoJobClassLocalAusType {
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

export interface FoJobClassLocalAusTypeForceMandatory {
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

export namespace FoJobClassLocalAus {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalAus> = new StringField('country', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalAus> = new StringField('createdBy', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalAus> = new DateField('createdDateTime', FoJobClassLocalAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalAus> = new DateField('createdOn', FoJobClassLocalAus, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalAus> = new DateField('endDate', FoJobClassLocalAus, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalAus> = new StringField('externalCode', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<FoJobClassLocalAus> = new StringField('genericString1', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalAus> = new StringField('lastModifiedBy', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalAus> = new DateField('lastModifiedDateTime', FoJobClassLocalAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalAus> = new DateField('lastModifiedOn', FoJobClassLocalAus, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalAus> = new DateField('startDate', FoJobClassLocalAus, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalAus> = new StringField('status', FoJobClassLocalAus, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalAus, Territory> = new OneToOneLink('countryNav', FoJobClassLocalAus, Territory);
  /**
   * All fields of the FoJobClassLocalAus entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalAus> | DateField<FoJobClassLocalAus> | OneToOneLink<FoJobClassLocalAus, Territory>> = [
    FoJobClassLocalAus.COUNTRY,
    FoJobClassLocalAus.CREATED_BY,
    FoJobClassLocalAus.CREATED_DATE_TIME,
    FoJobClassLocalAus.CREATED_ON,
    FoJobClassLocalAus.END_DATE,
    FoJobClassLocalAus.EXTERNAL_CODE,
    FoJobClassLocalAus.GENERIC_STRING_1,
    FoJobClassLocalAus.LAST_MODIFIED_BY,
    FoJobClassLocalAus.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalAus.LAST_MODIFIED_ON,
    FoJobClassLocalAus.START_DATE,
    FoJobClassLocalAus.STATUS,
    FoJobClassLocalAus.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalAus> = new AllFields('*', FoJobClassLocalAus);
  /**
   * All key fields of the FoJobClassLocalAus entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalAus>> = [FoJobClassLocalAus.COUNTRY, FoJobClassLocalAus.EXTERNAL_CODE, FoJobClassLocalAus.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalAus.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalAus> } = FoJobClassLocalAus._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalAus> }, field: Selectable<FoJobClassLocalAus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
