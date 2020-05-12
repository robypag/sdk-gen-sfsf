/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalEntityRusRequestBuilder } from './LegalEntityRusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalEntityRUS" of service "SFOData".
 */
export class LegalEntityRus extends Entity implements LegalEntityRusType {
  /**
   * Technical entity name for LegalEntityRus.
   */
  static _entityName = 'LegalEntityRUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegalEntityRus.
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
   * OKPO Number.
   * Maximum length: 10.
   * @nullable
   */
  okpoNumber?: string;
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
   * Returns an entity builder to construct instances `LegalEntityRus`.
   * @returns A builder that constructs instances of entity type `LegalEntityRus`.
   */
  static builder(): EntityBuilderType<LegalEntityRus, LegalEntityRusTypeForceMandatory> {
    return Entity.entityBuilder(LegalEntityRus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalEntityRus` entity type.
   * @returns A `LegalEntityRus` request builder.
   */
  static requestBuilder(): LegalEntityRusRequestBuilder {
    return new LegalEntityRusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityRus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalEntityRus`.
   */
  static customField(fieldName: string): CustomField<LegalEntityRus> {
    return Entity.customFieldSelector(fieldName, LegalEntityRus);
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

export interface LegalEntityRusType {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  okpoNumber?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface LegalEntityRusTypeForceMandatory {
  legalEntityEffectiveStartDate: Moment;
  legalEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  okpoNumber: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace LegalEntityRus {
  /**
   * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityRus> = new DateField('LegalEntity_effectiveStartDate', LegalEntityRus, 'Edm.DateTime');
  /**
   * Static representation of the [[legalEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityRus> = new StringField('LegalEntity_externalCode', LegalEntityRus, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<LegalEntityRus> = new StringField('createdBy', LegalEntityRus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<LegalEntityRus> = new DateField('createdDateTime', LegalEntityRus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<LegalEntityRus> = new BigNumberField('externalCode', LegalEntityRus, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<LegalEntityRus> = new StringField('lastModifiedBy', LegalEntityRus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityRus> = new DateField('lastModifiedDateTime', LegalEntityRus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityRus> = new StringField('mdfSystemRecordStatus', LegalEntityRus, 'Edm.String');
  /**
   * Static representation of the [[okpoNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OKPO_NUMBER: StringField<LegalEntityRus> = new StringField('okpoNumber', LegalEntityRus, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<LegalEntityRus, User> = new OneToOneLink('createdByNav', LegalEntityRus, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityRus, User> = new OneToOneLink('lastModifiedByNav', LegalEntityRus, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityRus, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', LegalEntityRus, MdfEnumValue);
  /**
   * All fields of the LegalEntityRus entity.
   */
  export const _allFields: Array<DateField<LegalEntityRus> | StringField<LegalEntityRus> | BigNumberField<LegalEntityRus> | OneToOneLink<LegalEntityRus, User> | OneToOneLink<LegalEntityRus, MdfEnumValue>> = [
    LegalEntityRus.LEGAL_ENTITY_EFFECTIVE_START_DATE,
    LegalEntityRus.LEGAL_ENTITY_EXTERNAL_CODE,
    LegalEntityRus.CREATED_BY,
    LegalEntityRus.CREATED_DATE_TIME,
    LegalEntityRus.EXTERNAL_CODE,
    LegalEntityRus.LAST_MODIFIED_BY,
    LegalEntityRus.LAST_MODIFIED_DATE_TIME,
    LegalEntityRus.MDF_SYSTEM_RECORD_STATUS,
    LegalEntityRus.OKPO_NUMBER,
    LegalEntityRus.CREATED_BY_NAV,
    LegalEntityRus.LAST_MODIFIED_BY_NAV,
    LegalEntityRus.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalEntityRus> = new AllFields('*', LegalEntityRus);
  /**
   * All key fields of the LegalEntityRus entity.
   */
  export const _keyFields: Array<Selectable<LegalEntityRus>> = [LegalEntityRus.LEGAL_ENTITY_EFFECTIVE_START_DATE, LegalEntityRus.LEGAL_ENTITY_EXTERNAL_CODE, LegalEntityRus.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property LegalEntityRus.
   */
  export const _keys: { [keys: string]: Selectable<LegalEntityRus> } = LegalEntityRus._keyFields.reduce((acc: { [keys: string]: Selectable<LegalEntityRus> }, field: Selectable<LegalEntityRus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
