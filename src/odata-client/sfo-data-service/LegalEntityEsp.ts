/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityEspRequestBuilder } from './LegalEntityEspRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityESP" of service "SFOData".
 */
export class LegalEntityEsp extends Entity implements LegalEntityEspType {
  /**
   * Technical entity name for LegalEntityEsp.
   */
  static _entityName = 'LegalEntityESP';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityEsp.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Legal Entity_Effective as of.
   */
  legalEntityEffectiveStartDate!: Moment;
  /**
   * Legal Entity_Code.
   * Maximum length: 32.
   */
  legalEntityExternalCode!: string;
  /**
   * Certificado de Identificación Fiscal.
   * Maximum length: 45.
   * @nullable
   */
  certificadoDeIdentificacionFiscal?: string;
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
   * externalCode.
   */
  externalCode!: BigNumber;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `LegalEntityEsp`.
   * @returns A builder that constructs instances of entity type `LegalEntityEsp`.
   */
  static builder(): EntityBuilderType<LegalEntityEsp, LegalEntityEspTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityEsp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityEsp` entity type.
   * @returns A `LegalEntityEsp` request builder.
   */
  static requestBuilder(): LegalEntityEspRequestBuilder {
    return new LegalEntityEspRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityEsp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityEsp`.
   */
  static customField(fieldName: string): CustomField<LegalEntityEsp> {
    return Entity.customFieldSelector(fieldName, LegalEntityEsp);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface LegalEntityEspType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  certificadoDeIdentificacionFiscal?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityEspTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  certificadoDeIdentificacionFiscal: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityEsp {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityEsp> = new DateField('LegalEntity_effectiveStartDate', LegalEntityEsp, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityEsp> = new StringField('LegalEntity_externalCode', LegalEntityEsp, 'Edm.String');
  /**
   * Static representation of the [[certificadoDeIdentificacionFiscal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICADO_DE_IDENTIFICACION_FISCAL: StringField<LegalEntityEsp> = new StringField('certificadoDeIdentificacionFiscal', LegalEntityEsp, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityEsp> = new StringField('createdBy', LegalEntityEsp, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityEsp> = new DateField('createdDateTime', LegalEntityEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityEsp> = new BigNumberField('externalCode', LegalEntityEsp, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityEsp> = new StringField('lastModifiedBy', LegalEntityEsp, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityEsp> = new DateField('lastModifiedDateTime', LegalEntityEsp, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityEsp> = new StringField('mdfSystemRecordStatus', LegalEntityEsp, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityEsp, User> = new OneToOneLink('createdByNav', LegalEntityEsp, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityEsp, User> = new OneToOneLink('lastModifiedByNav', LegalEntityEsp, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityEsp, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityEsp, MdfEnumValue);
  /**
   * All fields of the LegalEntityEsp entity.
   */
  export const _allFields: Array<DateField<LegalEntityEsp> | StringField<LegalEntityEsp> | BigNumberField<LegalEntityEsp> | OneToOneLink<LegalEntityEsp, User> | OneToOneLink<LegalEntityEsp, MdfEnumValue>> = [
    LegalEntityEsp.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityEsp.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityEsp.CERTIFICADO_DE_IDENTIFICACION_FISCAL,
    LegalEntityEsp.CREATED_BY,
    LegalEntityEsp.CREATED_DATE_TIME,
    LegalEntityEsp.EXTERNAL_CODE,
    LegalEntityEsp.LAST_MODIFIED_BY,
    LegalEntityEsp.LAST_MODIFIED_DATE_TIME,
    LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityEsp.CREATED_BY_NAV,
    LegalEntityEsp.LAST_MODIFIED_BY_NAV,
    LegalEntityEsp.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityEsp> = new AllFields('*', LegalEntityEsp);
  /**
   * All key fields of the LegalEntityEsp entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityEsp>> = [LegalEntityEsp.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityEsp.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityEsp.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityEsp.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityEsp> } = LegalEntityEsp._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityEsp> }, field: Selectable<LegalEntityEsp>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
