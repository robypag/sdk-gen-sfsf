/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityArgRequestBuilder } from './LegalEntityArgRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityARG" of service "SFOData".
 */
export class LegalEntityArg extends Entity implements LegalEntityArgType {
  /**
   * Technical entity name for LegalEntityArg.
   */
  static _entityName = 'LegalEntityARG';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityArg.
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
   * CUIT Code.
   * Maximum length: 11.
   * @nullable
   */
  cuit?: string;
  /**
   * CUIT Code.
   * @nullable
   */
  cuitCode?: BigNumber;
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
   * Returns an entity builder to construct instances `LegalEntityArg`.
   * @returns A builder that constructs instances of entity type `LegalEntityArg`.
   */
  static builder(): EntityBuilderType<LegalEntityArg, LegalEntityArgTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityArg);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityArg` entity type.
   * @returns A `LegalEntityArg` request builder.
   */
  static requestBuilder(): LegalEntityArgRequestBuilder {
    return new LegalEntityArgRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityArg`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityArg`.
   */
  static customField(fieldName: string): CustomField<LegalEntityArg> {
    return Entity.customFieldSelector(fieldName, LegalEntityArg);
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

export interface LegalEntityArgType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  cuit?: string;
  cuitCode?: BigNumber;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityArgTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  cuit: string;
  cuitCode: BigNumber;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityArg {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityArg> = new DateField('LegalEntity_effectiveStartDate', LegalEntityArg, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityArg> = new StringField('LegalEntity_externalCode', LegalEntityArg, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityArg> = new StringField('createdBy', LegalEntityArg, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityArg> = new DateField('createdDateTime', LegalEntityArg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[cuit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUIT: StringField<LegalEntityArg> = new StringField('cuit', LegalEntityArg, 'Edm.String');
  /**
   * Static representation of the [[cuitCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUIT_CODE: BigNumberField<LegalEntityArg> = new BigNumberField('cuitCode', LegalEntityArg, 'Edm.Int64');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityArg> = new BigNumberField('externalCode', LegalEntityArg, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityArg> = new StringField('lastModifiedBy', LegalEntityArg, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityArg> = new DateField('lastModifiedDateTime', LegalEntityArg, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityArg> = new StringField('mdfSystemRecordStatus', LegalEntityArg, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityArg, User> = new OneToOneLink('createdByNav', LegalEntityArg, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityArg, User> = new OneToOneLink('lastModifiedByNav', LegalEntityArg, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityArg, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityArg, MdfEnumValue);
  /**
   * All fields of the LegalEntityArg entity.
   */
  export const _allFields: Array<DateField<LegalEntityArg> | StringField<LegalEntityArg> | BigNumberField<LegalEntityArg> | OneToOneLink<LegalEntityArg, User> | OneToOneLink<LegalEntityArg, MdfEnumValue>> = [
    LegalEntityArg.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityArg.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityArg.CREATED_BY,
    LegalEntityArg.CREATED_DATE_TIME,
    LegalEntityArg.CUIT,
    LegalEntityArg.CUIT_CODE,
    LegalEntityArg.EXTERNAL_CODE,
    LegalEntityArg.LAST_MODIFIED_BY,
    LegalEntityArg.LAST_MODIFIED_DATE_TIME,
    LegalEntityArg.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityArg.CREATED_BY_NAV,
    LegalEntityArg.LAST_MODIFIED_BY_NAV,
    LegalEntityArg.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityArg> = new AllFields('*', LegalEntityArg);
  /**
   * All key fields of the LegalEntityArg entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityArg>> = [LegalEntityArg.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityArg.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityArg.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityArg.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityArg> } = LegalEntityArg._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityArg> }, field: Selectable<LegalEntityArg>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
