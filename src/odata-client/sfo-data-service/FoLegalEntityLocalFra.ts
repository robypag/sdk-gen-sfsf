/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalFraRequestBuilder } from './FoLegalEntityLocalFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalFRA" of service "SFOData".
 */
export class FoLegalEntityLocalFra extends Entity implements FoLegalEntityLocalFraType {
  /**
   * Technical entity name for FoLegalEntityLocalFra.
   */
  static _entityName = 'FOLegalEntityLocalFRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalFra.
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
   * NAF Code Pre-2008.
   * @nullable
   */
  nafCode?: BigNumber;
  /**
   * NAF Code Post-2008.
   * Maximum length: 45.
   * @nullable
   */
  nafCodePost2008?: string;
  /**
   * Siren Code.
   * @nullable
   */
  sirenCode?: BigNumber;
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
   * Returns an entity builder to construct instances `FoLegalEntityLocalFra`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalFra, FoLegalEntityLocalFraTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalFra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalFra` entity type.
   * @returns A `FoLegalEntityLocalFra` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalFraRequestBuilder {
    return new FoLegalEntityLocalFraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalFra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalFra`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalFra> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalFra);
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

export interface FoLegalEntityLocalFraType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  nafCode?: BigNumber;
  nafCodePost2008?: string;
  sirenCode?: BigNumber;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
}

export interface FoLegalEntityLocalFraTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  nafCode: BigNumber;
  nafCodePost2008: string;
  sirenCode: BigNumber;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
}

export namespace FoLegalEntityLocalFra {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalFra> = new StringField('country', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalFra> = new StringField('createdBy', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalFra> = new DateField('createdDateTime', FoLegalEntityLocalFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalFra> = new DateField('createdOn', FoLegalEntityLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalFra> = new DateField('endDate', FoLegalEntityLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalFra> = new StringField('externalCode', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalFra> = new StringField('lastModifiedBy', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalFra> = new DateField('lastModifiedDateTime', FoLegalEntityLocalFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalFra> = new DateField('lastModifiedOn', FoLegalEntityLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[nafCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAF_CODE: BigNumberField<FoLegalEntityLocalFra> = new BigNumberField('nafCode', FoLegalEntityLocalFra, 'Edm.Int64');
  /**
   * Static representation of the [[nafCodePost2008]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAF_CODE_POST_2008: StringField<FoLegalEntityLocalFra> = new StringField('nafCodePost2008', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the [[sirenCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIREN_CODE: BigNumberField<FoLegalEntityLocalFra> = new BigNumberField('sirenCode', FoLegalEntityLocalFra, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalFra> = new DateField('startDate', FoLegalEntityLocalFra, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalFra> = new StringField('status', FoLegalEntityLocalFra, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalFra, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalFra, Territory);
  /**
   * All fields of the FoLegalEntityLocalFra entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalFra> | DateField<FoLegalEntityLocalFra> | BigNumberField<FoLegalEntityLocalFra> | OneToOneLink<FoLegalEntityLocalFra, Territory>> = [
    FoLegalEntityLocalFra.COUNTRY,
    FoLegalEntityLocalFra.CREATED_BY,
    FoLegalEntityLocalFra.CREATED_DATE_TIME,
    FoLegalEntityLocalFra.CREATED_ON,
    FoLegalEntityLocalFra.END_DATE,
    FoLegalEntityLocalFra.EXTERNAL_CODE,
    FoLegalEntityLocalFra.LAST_MODIFIED_BY,
    FoLegalEntityLocalFra.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalFra.LAST_MODIFIED_ON,
    FoLegalEntityLocalFra.NAF_CODE,
    FoLegalEntityLocalFra.NAF_CODE_POST_2008,
    FoLegalEntityLocalFra.SIREN_CODE,
    FoLegalEntityLocalFra.START_DATE,
    FoLegalEntityLocalFra.STATUS,
    FoLegalEntityLocalFra.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalFra> = new AllFields('*', FoLegalEntityLocalFra);
  /**
   * All key fields of the FoLegalEntityLocalFra entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalFra>> = [FoLegalEntityLocalFra.COUNTRY, FoLegalEntityLocalFra.EXTERNAL_CODE, FoLegalEntityLocalFra.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalFra.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalFra> } = FoLegalEntityLocalFra._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalFra> }, field: Selectable<FoLegalEntityLocalFra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
