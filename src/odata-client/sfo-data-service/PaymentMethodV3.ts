/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentMethodV3RequestBuilder } from './PaymentMethodV3RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentMethodV3" of service "SFOData".
 */
export class PaymentMethodV3 extends Entity implements PaymentMethodV3Type {
  /**
   * Technical entity name for PaymentMethodV3.
   */
  static _entityName = 'PaymentMethodV3';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentMethodV3.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[PaymentMethodAssignmentV3]] entity.
   */
  toPaymentMethodAssignmentV3!: PaymentMethodAssignmentV3[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PaymentMethodV3`.
   * @returns A builder that constructs instances of entity type `PaymentMethodV3`.
   */
  static builder(): EntityBuilderType<PaymentMethodV3, PaymentMethodV3TypeForceMandatory> {
    return Entity.entityBuilder(PaymentMethodV3);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentMethodV3` entity type.
   * @returns A `PaymentMethodV3` request builder.
   */
  static requestBuilder(): PaymentMethodV3RequestBuilder {
    return new PaymentMethodV3RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentMethodV3`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentMethodV3`.
   */
  static customField(fieldName: string): CustomField<PaymentMethodV3> {
    return Entity.customFieldSelector(fieldName, PaymentMethodV3);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PaymentMethodAssignmentV3, PaymentMethodAssignmentV3Type } from './PaymentMethodAssignmentV3';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PaymentMethodV3Type {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameEsMx?: string;
  externalNameFrCa?: string;
  externalNameFrFr?: string;
  externalNameItIt?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNameZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toPaymentMethodAssignmentV3: PaymentMethodAssignmentV3Type[];
  wfRequestNav: WfRequestType[];
}

export interface PaymentMethodV3TypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameEsMx: string;
  externalNameFrCa: string;
  externalNameFrFr: string;
  externalNameItIt: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNameZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toPaymentMethodAssignmentV3: PaymentMethodAssignmentV3Type[];
  wfRequestNav: WfRequestType[];
}

export namespace PaymentMethodV3 {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentMethodV3> = new StringField('createdBy', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentMethodV3> = new DateField('createdDateTime', PaymentMethodV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PaymentMethodV3> = new StringField('externalCode', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<PaymentMethodV3> = new StringField('externalName_de_DE', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PaymentMethodV3> = new StringField('externalName_defaultValue', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<PaymentMethodV3> = new StringField('externalName_en_DEBUG', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<PaymentMethodV3> = new StringField('externalName_en_GB', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<PaymentMethodV3> = new StringField('externalName_en_US', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<PaymentMethodV3> = new StringField('externalName_es_ES', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<PaymentMethodV3> = new StringField('externalName_es_MX', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<PaymentMethodV3> = new StringField('externalName_fr_CA', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<PaymentMethodV3> = new StringField('externalName_fr_FR', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<PaymentMethodV3> = new StringField('externalName_it_IT', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<PaymentMethodV3> = new StringField('externalName_localized', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<PaymentMethodV3> = new StringField('externalName_nl_NL', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<PaymentMethodV3> = new StringField('externalName_pt_BR', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<PaymentMethodV3> = new StringField('externalName_zh_CN', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentMethodV3> = new StringField('lastModifiedBy', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentMethodV3> = new DateField('lastModifiedDateTime', PaymentMethodV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentMethodV3> = new StringField('mdfSystemRecordStatus', PaymentMethodV3, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentMethodV3, User> = new OneToOneLink('createdByNav', PaymentMethodV3, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PaymentMethodV3, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', PaymentMethodV3, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentMethodV3, User> = new OneToOneLink('lastModifiedByNav', PaymentMethodV3, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentMethodV3, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentMethodV3, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[toPaymentMethodAssignmentV3]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_METHOD_ASSIGNMENT_V_3: Link<PaymentMethodV3, PaymentMethodAssignmentV3> = new Link('toPaymentMethodAssignmentV3', PaymentMethodV3, PaymentMethodAssignmentV3);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PaymentMethodV3, WfRequest> = new Link('wfRequestNav', PaymentMethodV3, WfRequest);
  /**
   * All fields of the PaymentMethodV3 entity.
   */
  export const _allFields: Array<StringField<PaymentMethodV3> | DateField<PaymentMethodV3> | OneToOneLink<PaymentMethodV3, User> | Link<PaymentMethodV3, MdfLocalizedValue> | OneToOneLink<PaymentMethodV3, MdfEnumValue> | Link<PaymentMethodV3, PaymentMethodAssignmentV3> | Link<PaymentMethodV3, WfRequest>> = [
    PaymentMethodV3.CREATED_BY,
    PaymentMethodV3.CREATED_DATE_TIME,
    PaymentMethodV3.EXTERNAL_CODE,
    PaymentMethodV3.EXTERNAL_NAME_DE_DE,
    PaymentMethodV3.EXTERNAL_NAME_DEFAULT_VALUE,
    PaymentMethodV3.EXTERNAL_NAME_EN_DEBUG,
    PaymentMethodV3.EXTERNAL_NAME_EN_GB,
    PaymentMethodV3.EXTERNAL_NAME_EN_US,
    PaymentMethodV3.EXTERNAL_NAME_ES_ES,
    PaymentMethodV3.EXTERNAL_NAME_ES_MX,
    PaymentMethodV3.EXTERNAL_NAME_FR_CA,
    PaymentMethodV3.EXTERNAL_NAME_FR_FR,
    PaymentMethodV3.EXTERNAL_NAME_IT_IT,
    PaymentMethodV3.EXTERNAL_NAME_LOCALIZED,
    PaymentMethodV3.EXTERNAL_NAME_NL_NL,
    PaymentMethodV3.EXTERNAL_NAME_PT_BR,
    PaymentMethodV3.EXTERNAL_NAME_ZH_CN,
    PaymentMethodV3.LAST_MODIFIED_BY,
    PaymentMethodV3.LAST_MODIFIED_DATE_TIME,
    PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS,
    PaymentMethodV3.CREATED_BY_NAV,
    PaymentMethodV3.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    PaymentMethodV3.LAST_MODIFIED_BY_NAV,
    PaymentMethodV3.MDF_SYSTEM_RECORD_STATUS_NAV,
    PaymentMethodV3.TO_PAYMENT_METHOD_ASSIGNMENT_V_3,
    PaymentMethodV3.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentMethodV3> = new AllFields('*', PaymentMethodV3);
  /**
   * All key fields of the PaymentMethodV3 entity.
   */
  export const _keyFields: Array<Selectable<PaymentMethodV3>> = [PaymentMethodV3.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentMethodV3.
   */
  export const _keys: { [keys: string]: Selectable<PaymentMethodV3> } = PaymentMethodV3._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentMethodV3> }, field: Selectable<PaymentMethodV3>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
