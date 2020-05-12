/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalItaRequestBuilder } from './FoJobClassLocalItaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalITA" of service "SFOData".
 */
export class FoJobClassLocalIta extends Entity implements FoJobClassLocalItaType {
  /**
   * Technical entity name for FoJobClassLocalIta.
   */
  static _entityName = 'FOJobClassLocalITA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalIta.
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
   * INAIL Code.
   * @nullable
   */
  genericNumber1?: BigNumber;
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
   * Returns an entity builder to construct instances `FoJobClassLocalIta`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalIta`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalIta, FoJobClassLocalItaTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalIta);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalIta` entity type.
   * @returns A `FoJobClassLocalIta` request builder.
   */
  static requestBuilder(): FoJobClassLocalItaRequestBuilder {
    return new FoJobClassLocalItaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalIta`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalIta`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalIta> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalIta);
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

export interface FoJobClassLocalItaType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  externalCode: string;
  genericNumber1?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoJobClassLocalItaTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  externalCode: string;
  genericNumber1: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoJobClassLocalIta {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalIta> = new StringField('country', FoJobClassLocalIta, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalIta> = new StringField('createdBy', FoJobClassLocalIta, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalIta> = new DateField('createdDateTime', FoJobClassLocalIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalIta> = new DateField('createdOn', FoJobClassLocalIta, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalIta> = new DateField('endDate', FoJobClassLocalIta, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalIta> = new StringField('externalCode', FoJobClassLocalIta, 'Edm.String');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<FoJobClassLocalIta> = new BigNumberField('genericNumber1', FoJobClassLocalIta, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalIta> = new StringField('lastModifiedBy', FoJobClassLocalIta, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalIta> = new DateField('lastModifiedDateTime', FoJobClassLocalIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalIta> = new DateField('lastModifiedOn', FoJobClassLocalIta, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalIta> = new DateField('startDate', FoJobClassLocalIta, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalIta> = new StringField('status', FoJobClassLocalIta, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalIta, Territory> = new OneToOneLink('countryNav', FoJobClassLocalIta, Territory);
  /**
   * All fields of the FoJobClassLocalIta entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalIta> | DateField<FoJobClassLocalIta> | BigNumberField<FoJobClassLocalIta> | OneToOneLink<FoJobClassLocalIta, Territory>> = [
    FoJobClassLocalIta.COUNTRY,
    FoJobClassLocalIta.CREATED_BY,
    FoJobClassLocalIta.CREATED_DATE_TIME,
    FoJobClassLocalIta.CREATED_ON,
    FoJobClassLocalIta.END_DATE,
    FoJobClassLocalIta.EXTERNAL_CODE,
    FoJobClassLocalIta.GENERIC_NUMBER_1,
    FoJobClassLocalIta.LAST_MODIFIED_BY,
    FoJobClassLocalIta.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalIta.LAST_MODIFIED_ON,
    FoJobClassLocalIta.START_DATE,
    FoJobClassLocalIta.STATUS,
    FoJobClassLocalIta.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalIta> = new AllFields('*', FoJobClassLocalIta);
  /**
   * All key fields of the FoJobClassLocalIta entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalIta>> = [FoJobClassLocalIta.COUNTRY, FoJobClassLocalIta.EXTERNAL_CODE, FoJobClassLocalIta.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalIta.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalIta> } = FoJobClassLocalIta._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalIta> }, field: Selectable<FoJobClassLocalIta>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
