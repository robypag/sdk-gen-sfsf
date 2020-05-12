/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayScaleLevelRequestBuilder } from './PayScaleLevelRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayScaleLevel" of service "SFOData".
 */
export class PayScaleLevel extends Entity implements PayScaleLevelType {
  /**
   * Technical entity name for PayScaleLevel.
   */
  static _entityName = 'PayScaleLevel';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayScaleLevel.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * Maximum length: 128.
   */
  code!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
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
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * Next Pay Scale Level.
   * Maximum length: 128.
   * @nullable
   */
  nextPayScaleLevel?: string;
  /**
   * Pay Scale Level.
   * Maximum length: 128.
   * @nullable
   */
  payScaleLevel?: string;
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
   * One-to-one navigation property to the [[PayScaleLevel]] entity.
   */
  nextPayScaleLevelNav!: PayScaleLevel;
  /**
   * One-to-one navigation property to the [[PayScaleGroup]] entity.
   */
  payScaleGroup!: PayScaleGroup;
  /**
   * One-to-many navigation property to the [[PayScalePayComponent]] entity.
   */
  toPayScalePayComponents!: PayScalePayComponent[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PayScaleLevel`.
   * @returns A builder that constructs instances of entity type `PayScaleLevel`.
   */
  static builder(): EntityBuilderType<PayScaleLevel, PayScaleLevelTypeForceMandatory> {
    return Entity.entityBuilder(PayScaleLevel);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayScaleLevel` entity type.
   * @returns A `PayScaleLevel` request builder.
   */
  static requestBuilder(): PayScaleLevelRequestBuilder {
    return new PayScaleLevelRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleLevel`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayScaleLevel`.
   */
  static customField(fieldName: string): CustomField<PayScaleLevel> {
    return Entity.customFieldSelector(fieldName, PayScaleLevel);
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
import { PayScaleGroup, PayScaleGroupType } from './PayScaleGroup';
import { PayScalePayComponent, PayScalePayComponentType } from './PayScalePayComponent';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PayScaleLevelType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
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
  nextPayScaleLevel?: string;
  payScaleLevel?: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nextPayScaleLevelNav: PayScaleLevelType;
  payScaleGroup: PayScaleGroupType;
  toPayScalePayComponents: PayScalePayComponentType[];
  wfRequestNav: WfRequestType[];
}

export interface PayScaleLevelTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
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
  nextPayScaleLevel: string;
  payScaleLevel: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nextPayScaleLevelNav: PayScaleLevelType;
  payScaleGroup: PayScaleGroupType;
  toPayScalePayComponents: PayScalePayComponentType[];
  wfRequestNav: WfRequestType[];
}

export namespace PayScaleLevel {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<PayScaleLevel> = new StringField('code', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayScaleLevel> = new StringField('createdBy', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayScaleLevel> = new DateField('createdDateTime', PayScaleLevel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<PayScaleLevel> = new DateField('effectiveEndDate', PayScaleLevel, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<PayScaleLevel> = new DateField('effectiveStartDate', PayScaleLevel, 'Edm.DateTime');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<PayScaleLevel> = new StringField('externalName_de_DE', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleLevel> = new StringField('externalName_defaultValue', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleLevel> = new StringField('externalName_en_DEBUG', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<PayScaleLevel> = new StringField('externalName_en_GB', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<PayScaleLevel> = new StringField('externalName_en_US', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<PayScaleLevel> = new StringField('externalName_es_ES', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<PayScaleLevel> = new StringField('externalName_es_MX', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<PayScaleLevel> = new StringField('externalName_fr_CA', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<PayScaleLevel> = new StringField('externalName_fr_FR', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<PayScaleLevel> = new StringField('externalName_it_IT', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleLevel> = new StringField('externalName_localized', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<PayScaleLevel> = new StringField('externalName_nl_NL', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<PayScaleLevel> = new StringField('externalName_pt_BR', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<PayScaleLevel> = new StringField('externalName_zh_CN', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayScaleLevel> = new StringField('lastModifiedBy', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayScaleLevel> = new DateField('lastModifiedDateTime', PayScaleLevel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleLevel> = new StringField('mdfSystemRecordStatus', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[nextPayScaleLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_PAY_SCALE_LEVEL: StringField<PayScaleLevel> = new StringField('nextPayScaleLevel', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the [[payScaleLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL: StringField<PayScaleLevel> = new StringField('payScaleLevel', PayScaleLevel, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayScaleLevel, User> = new OneToOneLink('createdByNav', PayScaleLevel, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleLevel, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', PayScaleLevel, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleLevel, User> = new OneToOneLink('lastModifiedByNav', PayScaleLevel, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleLevel, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayScaleLevel, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[nextPayScaleLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEXT_PAY_SCALE_LEVEL_NAV: OneToOneLink<PayScaleLevel, PayScaleLevel> = new OneToOneLink('nextPayScaleLevelNav', PayScaleLevel, PayScaleLevel);
  /**
   * Static representation of the one-to-one navigation property [[payScaleGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_GROUP: OneToOneLink<PayScaleLevel, PayScaleGroup> = new OneToOneLink('payScaleGroup', PayScaleLevel, PayScaleGroup);
  /**
   * Static representation of the one-to-many navigation property [[toPayScalePayComponents]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAY_SCALE_PAY_COMPONENTS: Link<PayScaleLevel, PayScalePayComponent> = new Link('toPayScalePayComponents', PayScaleLevel, PayScalePayComponent);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayScaleLevel, WfRequest> = new Link('wfRequestNav', PayScaleLevel, WfRequest);
  /**
   * All fields of the PayScaleLevel entity.
   */
  export const _allFields: Array<StringField<PayScaleLevel> | DateField<PayScaleLevel> | OneToOneLink<PayScaleLevel, User> | Link<PayScaleLevel, MdfLocalizedValue> | OneToOneLink<PayScaleLevel, MdfEnumValue> | OneToOneLink<PayScaleLevel, PayScaleLevel> | OneToOneLink<PayScaleLevel, PayScaleGroup> | Link<PayScaleLevel, PayScalePayComponent> | Link<PayScaleLevel, WfRequest>> = [
    PayScaleLevel.CODE,
    PayScaleLevel.CREATED_BY,
    PayScaleLevel.CREATED_DATE_TIME,
    PayScaleLevel.EFFECTIVE_END_DATE,
    PayScaleLevel.EFFECTIVE_START_DATE,
    PayScaleLevel.EXTERNAL_NAME_DE_DE,
    PayScaleLevel.EXTERNAL_NAME_DEFAULT_VALUE,
    PayScaleLevel.EXTERNAL_NAME_EN_DEBUG,
    PayScaleLevel.EXTERNAL_NAME_EN_GB,
    PayScaleLevel.EXTERNAL_NAME_EN_US,
    PayScaleLevel.EXTERNAL_NAME_ES_ES,
    PayScaleLevel.EXTERNAL_NAME_ES_MX,
    PayScaleLevel.EXTERNAL_NAME_FR_CA,
    PayScaleLevel.EXTERNAL_NAME_FR_FR,
    PayScaleLevel.EXTERNAL_NAME_IT_IT,
    PayScaleLevel.EXTERNAL_NAME_LOCALIZED,
    PayScaleLevel.EXTERNAL_NAME_NL_NL,
    PayScaleLevel.EXTERNAL_NAME_PT_BR,
    PayScaleLevel.EXTERNAL_NAME_ZH_CN,
    PayScaleLevel.LAST_MODIFIED_BY,
    PayScaleLevel.LAST_MODIFIED_DATE_TIME,
    PayScaleLevel.MDF_SYSTEM_RECORD_STATUS,
    PayScaleLevel.NEXT_PAY_SCALE_LEVEL,
    PayScaleLevel.PAY_SCALE_LEVEL,
    PayScaleLevel.CREATED_BY_NAV,
    PayScaleLevel.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    PayScaleLevel.LAST_MODIFIED_BY_NAV,
    PayScaleLevel.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayScaleLevel.NEXT_PAY_SCALE_LEVEL_NAV,
    PayScaleLevel.PAY_SCALE_GROUP,
    PayScaleLevel.TO_PAY_SCALE_PAY_COMPONENTS,
    PayScaleLevel.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayScaleLevel> = new AllFields('*', PayScaleLevel);
  /**
   * All key fields of the PayScaleLevel entity.
   */
  export const _keyFields: Array<Selectable<PayScaleLevel>> = [PayScaleLevel.CODE, PayScaleLevel.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PayScaleLevel.
   */
  export const _keys: { [keys: string]: Selectable<PayScaleLevel> } = PayScaleLevel._keyFields.reduce((acc: { [keys: string]: Selectable<PayScaleLevel> }, field: Selectable<PayScaleLevel>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
