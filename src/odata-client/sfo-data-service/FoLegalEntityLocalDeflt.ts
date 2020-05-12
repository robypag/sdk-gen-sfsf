/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalDefltRequestBuilder } from './FoLegalEntityLocalDefltRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalDEFLT" of service "SFOData".
 */
export class FoLegalEntityLocalDeflt extends Entity implements FoLegalEntityLocalDefltType {
  /**
   * Technical entity name for FoLegalEntityLocalDeflt.
   */
  static _entityName = 'FOLegalEntityLocalDEFLT';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalDeflt.
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
   * Returns an entity builder to construct instances `FoLegalEntityLocalDeflt`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeflt`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalDeflt, FoLegalEntityLocalDefltTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalDeflt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalDeflt` entity type.
   * @returns A `FoLegalEntityLocalDeflt` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalDefltRequestBuilder {
    return new FoLegalEntityLocalDefltRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalDeflt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalDeflt`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalDeflt> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalDeflt);
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

export interface FoLegalEntityLocalDefltType {
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

export interface FoLegalEntityLocalDefltTypeForceMandatory {
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

export namespace FoLegalEntityLocalDeflt {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalDeflt> = new StringField('country', FoLegalEntityLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalDeflt> = new StringField('createdBy', FoLegalEntityLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalDeflt> = new DateField('createdDateTime', FoLegalEntityLocalDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalDeflt> = new DateField('createdOn', FoLegalEntityLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalDeflt> = new DateField('endDate', FoLegalEntityLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalDeflt> = new StringField('externalCode', FoLegalEntityLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalDeflt> = new StringField('lastModifiedBy', FoLegalEntityLocalDeflt, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalDeflt> = new DateField('lastModifiedDateTime', FoLegalEntityLocalDeflt, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalDeflt> = new DateField('lastModifiedOn', FoLegalEntityLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalDeflt> = new DateField('startDate', FoLegalEntityLocalDeflt, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalDeflt> = new StringField('status', FoLegalEntityLocalDeflt, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalDeflt, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalDeflt, Territory);
  /**
   * All fields of the FoLegalEntityLocalDeflt entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalDeflt> | DateField<FoLegalEntityLocalDeflt> | OneToOneLink<FoLegalEntityLocalDeflt, Territory>> = [
    FoLegalEntityLocalDeflt.COUNTRY,
    FoLegalEntityLocalDeflt.CREATED_BY,
    FoLegalEntityLocalDeflt.CREATED_DATE_TIME,
    FoLegalEntityLocalDeflt.CREATED_ON,
    FoLegalEntityLocalDeflt.END_DATE,
    FoLegalEntityLocalDeflt.EXTERNAL_CODE,
    FoLegalEntityLocalDeflt.LAST_MODIFIED_BY,
    FoLegalEntityLocalDeflt.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalDeflt.LAST_MODIFIED_ON,
    FoLegalEntityLocalDeflt.START_DATE,
    FoLegalEntityLocalDeflt.STATUS,
    FoLegalEntityLocalDeflt.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalDeflt> = new AllFields('*', FoLegalEntityLocalDeflt);
  /**
   * All key fields of the FoLegalEntityLocalDeflt entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalDeflt>> = [FoLegalEntityLocalDeflt.COUNTRY, FoLegalEntityLocalDeflt.EXTERNAL_CODE, FoLegalEntityLocalDeflt.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalDeflt.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalDeflt> } = FoLegalEntityLocalDeflt._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalDeflt> }, field: Selectable<FoLegalEntityLocalDeflt>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
