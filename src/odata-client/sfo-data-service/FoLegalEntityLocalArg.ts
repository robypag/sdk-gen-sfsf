/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalArgRequestBuilder } from './FoLegalEntityLocalArgRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalARG" of service "SFOData".
 */
export class FoLegalEntityLocalArg extends Entity implements FoLegalEntityLocalArgType {
  /**
   * Technical entity name for FoLegalEntityLocalArg.
   */
  static _entityName = 'FOLegalEntityLocalARG';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalArg.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * countryOfRegistration.
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
   * CUIT Code.
   * @nullable
   */
  cuitCode?: BigNumber;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Legal Entity_Code.
   * Maximum length: 32.
   */
  externalCode!: string;
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
   * Legal Entity_Effective as of.
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
   * Returns an entity builder to construct instances `FoLegalEntityLocalArg`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalArg, FoLegalEntityLocalArgTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalArg);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalArg` entity type.
   * @returns A `FoLegalEntityLocalArg` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalArgRequestBuilder {
    return new FoLegalEntityLocalArgRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalArg`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalArg> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalArg);
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

export interface FoLegalEntityLocalArgType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  cuitCode?: BigNumber;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoLegalEntityLocalArgTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  cuitCode: BigNumber;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoLegalEntityLocalArg {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalArg> = new StringField('country', FoLegalEntityLocalArg, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalArg> = new StringField('createdBy', FoLegalEntityLocalArg, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalArg> = new DateField('createdDateTime', FoLegalEntityLocalArg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalArg> = new DateField('createdOn', FoLegalEntityLocalArg, 'Edm.DateTime');
  /**
   * Static representation of the [[cuitCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUIT_CODE: BigNumberField<FoLegalEntityLocalArg> = new BigNumberField('cuitCode', FoLegalEntityLocalArg, 'Edm.Int64');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalArg> = new DateField('endDate', FoLegalEntityLocalArg, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalArg> = new StringField('externalCode', FoLegalEntityLocalArg, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalArg> = new StringField('lastModifiedBy', FoLegalEntityLocalArg, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalArg> = new DateField('lastModifiedDateTime', FoLegalEntityLocalArg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalArg> = new DateField('lastModifiedOn', FoLegalEntityLocalArg, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalArg> = new DateField('startDate', FoLegalEntityLocalArg, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalArg> = new StringField('status', FoLegalEntityLocalArg, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalArg, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalArg, Territory);
  /**
   * All fields of the FoLegalEntityLocalArg entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalArg> | DateField<FoLegalEntityLocalArg> | BigNumberField<FoLegalEntityLocalArg> | OneToOneLink<FoLegalEntityLocalArg, Territory>> = [
    FoLegalEntityLocalArg.COUNTRY,
    FoLegalEntityLocalArg.CREATED_BY,
    FoLegalEntityLocalArg.CREATED_DATE_TIME,
    FoLegalEntityLocalArg.CREATED_ON,
    FoLegalEntityLocalArg.CUIT_CODE,
    FoLegalEntityLocalArg.END_DATE,
    FoLegalEntityLocalArg.EXTERNAL_CODE,
    FoLegalEntityLocalArg.LAST_MODIFIED_BY,
    FoLegalEntityLocalArg.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalArg.LAST_MODIFIED_ON,
    FoLegalEntityLocalArg.START_DATE,
    FoLegalEntityLocalArg.STATUS,
    FoLegalEntityLocalArg.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalArg> = new AllFields('*', FoLegalEntityLocalArg);
  /**
   * All key fields of the FoLegalEntityLocalArg entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalArg>> = [FoLegalEntityLocalArg.COUNTRY, FoLegalEntityLocalArg.EXTERNAL_CODE, FoLegalEntityLocalArg.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalArg.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalArg> } = FoLegalEntityLocalArg._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalArg> }, field: Selectable<FoLegalEntityLocalArg>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
