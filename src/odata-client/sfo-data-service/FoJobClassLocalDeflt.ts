/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalDefltRequestBuilder } from './FoJobClassLocalDefltRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalDEFLT" of service "SFOData".
 */
export class FoJobClassLocalDeflt extends Entity implements FoJobClassLocalDefltType {
  /**
   * Technical entity name for FoJobClassLocalDeflt.
   */
  static _entityName = 'FOJobClassLocalDEFLT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalDeflt.
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
   * externalCode.
   * Maximum length: 32.
   */
  externalCode!: string;
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
   * Start Date.
   */
  startDate!: Moment;
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;

  /**
   * Returns an entity builder to construct instances `FoJobClassLocalDeflt`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalDeflt, FoJobClassLocalDefltTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalDeflt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalDeflt` entity type.
   * @returns A `FoJobClassLocalDeflt` request builder.
   */
  static requestBuilder(): FoJobClassLocalDefltRequestBuilder {
    return new FoJobClassLocalDefltRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalDeflt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalDeflt`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalDeflt> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalDeflt);
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

export interface FoJobClassLocalDefltType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoJobClassLocalDefltTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoJobClassLocalDeflt {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalDeflt> = new StringField('country', FoJobClassLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalDeflt> = new StringField('createdBy', FoJobClassLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalDeflt> = new DateField('createdDateTime', FoJobClassLocalDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalDeflt> = new DateField('createdOn', FoJobClassLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalDeflt> = new DateField('endDate', FoJobClassLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalDeflt> = new StringField('externalCode', FoJobClassLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalDeflt> = new StringField('lastModifiedBy', FoJobClassLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalDeflt> = new DateField('lastModifiedDateTime', FoJobClassLocalDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalDeflt> = new DateField('lastModifiedOn', FoJobClassLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalDeflt> = new DateField('startDate', FoJobClassLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalDeflt> = new StringField('status', FoJobClassLocalDeflt, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalDeflt, Territory> = new OneToOneLink('countryNav', FoJobClassLocalDeflt, Territory);
  /**
   * All fields of the FoJobClassLocalDeflt entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalDeflt> | DateField<FoJobClassLocalDeflt> | OneToOneLink<FoJobClassLocalDeflt, Territory>> = [
    FoJobClassLocalDeflt.COUNTRY,
    FoJobClassLocalDeflt.CREATED_BY,
    FoJobClassLocalDeflt.CREATED_DATE_TIME,
    FoJobClassLocalDeflt.CREATED_ON,
    FoJobClassLocalDeflt.END_DATE,
    FoJobClassLocalDeflt.EXTERNAL_CODE,
    FoJobClassLocalDeflt.LAST_MODIFIED_BY,
    FoJobClassLocalDeflt.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalDeflt.LAST_MODIFIED_ON,
    FoJobClassLocalDeflt.START_DATE,
    FoJobClassLocalDeflt.STATUS,
    FoJobClassLocalDeflt.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalDeflt> = new AllFields('*', FoJobClassLocalDeflt);
  /**
   * All key fields of the FoJobClassLocalDeflt entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalDeflt>> = [FoJobClassLocalDeflt.COUNTRY, FoJobClassLocalDeflt.EXTERNAL_CODE, FoJobClassLocalDeflt.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalDeflt.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalDeflt> } = FoJobClassLocalDeflt._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalDeflt> }, field: Selectable<FoJobClassLocalDeflt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
