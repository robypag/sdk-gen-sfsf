/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityFraRequestBuilder } from './LegalEntityFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityFRA" of service "SFOData".
 */
export class LegalEntityFra extends Entity implements LegalEntityFraType {
  /**
   * Technical entity name for LegalEntityFra.
   */
  static _entityName = 'LegalEntityFRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityFra.
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
   * Returns an entity builder to construct instances `LegalEntityFra`.
   * @returns A builder that constructs instances of entity type `LegalEntityFra`.
   */
  static builder(): EntityBuilderType<LegalEntityFra, LegalEntityFraTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityFra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityFra` entity type.
   * @returns A `LegalEntityFra` request builder.
   */
  static requestBuilder(): LegalEntityFraRequestBuilder {
    return new LegalEntityFraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityFra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityFra`.
   */
  static customField(fieldName: string): CustomField<LegalEntityFra> {
    return Entity.customFieldSelector(fieldName, LegalEntityFra);
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

export interface LegalEntityFraType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  nafCode?: BigNumber;
  nafCodePost2008?: string;
  sirenCode?: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityFraTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  nafCode: BigNumber;
  nafCodePost2008: string;
  sirenCode: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityFra {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityFra> = new DateField('LegalEntity_effectiveStartDate', LegalEntityFra, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityFra> = new StringField('LegalEntity_externalCode', LegalEntityFra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityFra> = new StringField('createdBy', LegalEntityFra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityFra> = new DateField('createdDateTime', LegalEntityFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityFra> = new BigNumberField('externalCode', LegalEntityFra, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityFra> = new StringField('lastModifiedBy', LegalEntityFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityFra> = new DateField('lastModifiedDateTime', LegalEntityFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityFra> = new StringField('mdfSystemRecordStatus', LegalEntityFra, 'Edm.String');
  /**
   * Static representation of the [[nafCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAF_CODE: BigNumberField<LegalEntityFra> = new BigNumberField('nafCode', LegalEntityFra, 'Edm.Int64');
  /**
   * Static representation of the [[nafCodePost2008]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAF_CODE_POST_2008: StringField<LegalEntityFra> = new StringField('nafCodePost2008', LegalEntityFra, 'Edm.String');
  /**
   * Static representation of the [[sirenCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIREN_CODE: BigNumberField<LegalEntityFra> = new BigNumberField('sirenCode', LegalEntityFra, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityFra, User> = new OneToOneLink('createdByNav', LegalEntityFra, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityFra, User> = new OneToOneLink('lastModifiedByNav', LegalEntityFra, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityFra, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityFra, MdfEnumValue);
  /**
   * All fields of the LegalEntityFra entity.
   */
  export const _allFields: Array<DateField<LegalEntityFra> | StringField<LegalEntityFra> | BigNumberField<LegalEntityFra> | OneToOneLink<LegalEntityFra, User> | OneToOneLink<LegalEntityFra, MdfEnumValue>> = [
    LegalEntityFra.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityFra.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityFra.CREATED_BY,
    LegalEntityFra.CREATED_DATE_TIME,
    LegalEntityFra.EXTERNAL_CODE,
    LegalEntityFra.LAST_MODIFIED_BY,
    LegalEntityFra.LAST_MODIFIED_DATE_TIME,
    LegalEntityFra.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityFra.NAF_CODE,
    LegalEntityFra.NAF_CODE_POST_2008,
    LegalEntityFra.SIREN_CODE,
    LegalEntityFra.CREATED_BY_NAV,
    LegalEntityFra.LAST_MODIFIED_BY_NAV,
    LegalEntityFra.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityFra> = new AllFields('*', LegalEntityFra);
  /**
   * All key fields of the LegalEntityFra entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityFra>> = [LegalEntityFra.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityFra.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityFra.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityFra.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityFra> } = LegalEntityFra._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityFra> }, field: Selectable<LegalEntityFra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
