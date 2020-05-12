/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoLegalEntityLocalEspRequestBuilder } from './FoLegalEntityLocalEspRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOLegalEntityLocalESP" of service "SFOData".
 */
export class FoLegalEntityLocalEsp extends Entity implements FoLegalEntityLocalEspType {
  /**
   * Technical entity name for FoLegalEntityLocalEsp.
   */
  static _entityName = 'FOLegalEntityLocalESP';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoLegalEntityLocalEsp.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Certificado de Identificación Fiscal.
   * Maximum length: 45.
   * @nullable
   */
  certificadoDeIdentificacionFiscal?: string;
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
   * Returns an entity builder to construct instances `FoLegalEntityLocalEsp`.
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
   */
  static builder(): EntityBuilderType<FoLegalEntityLocalEsp, FoLegalEntityLocalEspTypeForceMandatory> {
    return Entity.entityBuilder(FoLegalEntityLocalEsp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalEsp` entity type.
   * @returns A `FoLegalEntityLocalEsp` request builder.
   */
  static requestBuilder(): FoLegalEntityLocalEspRequestBuilder {
    return new FoLegalEntityLocalEspRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalEsp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
   */
  static customField(fieldName: string): CustomField<FoLegalEntityLocalEsp> {
    return Entity.customFieldSelector(fieldName, FoLegalEntityLocalEsp);
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

export interface FoLegalEntityLocalEspType {
  certificadoDeIdentificacionFiscal?: string;
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

export interface FoLegalEntityLocalEspTypeForceMandatory {
  certificadoDeIdentificacionFiscal: string;
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

export namespace FoLegalEntityLocalEsp {
  /**
   * Static representation of the [[certificadoDeIdentificacionFiscal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICADO_DE_IDENTIFICACION_FISCAL: StringField<FoLegalEntityLocalEsp> = new StringField('certificadoDeIdentificacionFiscal', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoLegalEntityLocalEsp> = new StringField('country', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoLegalEntityLocalEsp> = new StringField('createdBy', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoLegalEntityLocalEsp> = new DateField('createdDateTime', FoLegalEntityLocalEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoLegalEntityLocalEsp> = new DateField('createdOn', FoLegalEntityLocalEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoLegalEntityLocalEsp> = new DateField('endDate', FoLegalEntityLocalEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoLegalEntityLocalEsp> = new StringField('externalCode', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalEsp> = new StringField('lastModifiedBy', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalEsp> = new DateField('lastModifiedDateTime', FoLegalEntityLocalEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalEsp> = new DateField('lastModifiedOn', FoLegalEntityLocalEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoLegalEntityLocalEsp> = new DateField('startDate', FoLegalEntityLocalEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoLegalEntityLocalEsp> = new StringField('status', FoLegalEntityLocalEsp, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalEsp, Territory> = new OneToOneLink('countryNav', FoLegalEntityLocalEsp, Territory);
  /**
   * All fields of the FoLegalEntityLocalEsp entity.
   */
  export const _allFields: Array<StringField<FoLegalEntityLocalEsp> | DateField<FoLegalEntityLocalEsp> | OneToOneLink<FoLegalEntityLocalEsp, Territory>> = [
    FoLegalEntityLocalEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL,
    FoLegalEntityLocalEsp.COUNTRY,
    FoLegalEntityLocalEsp.CREATED_BY,
    FoLegalEntityLocalEsp.CREATED_DATE_TIME,
    FoLegalEntityLocalEsp.CREATED_ON,
    FoLegalEntityLocalEsp.END_DATE,
    FoLegalEntityLocalEsp.EXTERNAL_CODE,
    FoLegalEntityLocalEsp.LAST_MODIFIED_BY,
    FoLegalEntityLocalEsp.LAST_MODIFIED_DATE_TIME,
    FoLegalEntityLocalEsp.LAST_MODIFIED_ON,
    FoLegalEntityLocalEsp.START_DATE,
    FoLegalEntityLocalEsp.STATUS,
    FoLegalEntityLocalEsp.COUNTRY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoLegalEntityLocalEsp> = new AllFields('*', FoLegalEntityLocalEsp);
  /**
   * All key fields of the FoLegalEntityLocalEsp entity.
   */
  export const _keyFields: Array<Selectable<FoLegalEntityLocalEsp>> = [FoLegalEntityLocalEsp.COUNTRY, FoLegalEntityLocalEsp.EXTERNAL_CODE, FoLegalEntityLocalEsp.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoLegalEntityLocalEsp.
   */
  export const _keys: { [keys: string]: Selectable<FoLegalEntityLocalEsp> } = FoLegalEntityLocalEsp._keyFields.reduce((acc: { [keys: string]: Selectable<FoLegalEntityLocalEsp> }, field: Selectable<FoLegalEntityLocalEsp>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
