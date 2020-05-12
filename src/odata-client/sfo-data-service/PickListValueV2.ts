/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickListValueV2RequestBuilder } from './PickListValueV2RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PickListValueV2" of service "SFOData".
 */
export class PickListValueV2 extends Entity implements PickListValueV2Type {
  /**
   * Technical entity name for PickListValueV2.
   */
  static _entityName = 'PickListValueV2';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PickListValueV2.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Picklist_Effective Start Date.
   */
  pickListV2EffectiveStartDate!: Moment;
  /**
   * Picklist_Code.
   * Maximum length: 128.
   */
  pickListV2Id!: string;
  /**
   * createdBy.
   * Maximum length: 255.
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
   * Sort Order (L Value).
   * @nullable
   */
  lValue?: BigNumber;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelDeDe?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelDefaultValue?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEnDebug?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEnGb?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEnUs?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEsEs?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEsMx?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelFrCa?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelFrFr?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelItIt?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelLocalized?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelNlNl?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelPtBr?: string;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelZhCn?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Status(legacy).
   * @nullable
   */
  legacyStatus?: BigNumber;
  /**
   * Max value.
   * @nullable
   */
  maxVal?: BigNumber;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Min value.
   * @nullable
   */
  minVal?: BigNumber;
  /**
   * Non-unique External Code.
   * Maximum length: 255.
   * @nullable
   */
  nonUniqueExternalCode?: string;
  /**
   * Value.
   * @nullable
   */
  optValue?: BigNumber;
  /**
   * Option ID.
   * @nullable
   */
  optionId?: BigNumber;
  /**
   * Parent Picklist Value.
   * Maximum length: 128.
   * @nullable
   */
  parentPickListValue?: string;
  /**
   * R Value.
   * @nullable
   */
  rValue?: BigNumber;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  labelTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  parentPickListValueNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `PickListValueV2`.
   * @returns A builder that constructs instances of entity type `PickListValueV2`.
   */
  static builder(): EntityBuilderType<PickListValueV2, PickListValueV2TypeForceMandatory> {
    return Entity.entityBuilder(PickListValueV2);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PickListValueV2` entity type.
   * @returns A `PickListValueV2` request builder.
   */
  static requestBuilder(): PickListValueV2RequestBuilder {
    return new PickListValueV2RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListValueV2`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PickListValueV2`.
   */
  static customField(fieldName: string): CustomField<PickListValueV2> {
    return Entity.customFieldSelector(fieldName, PickListValueV2);
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

export interface PickListValueV2Type {
  pickListV2EffectiveStartDate: Moment;
  pickListV2Id: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lValue?: BigNumber;
  labelDeDe?: string;
  labelDefaultValue?: string;
  labelEnDebug?: string;
  labelEnGb?: string;
  labelEnUs?: string;
  labelEsEs?: string;
  labelEsMx?: string;
  labelFrCa?: string;
  labelFrFr?: string;
  labelItIt?: string;
  labelLocalized?: string;
  labelNlNl?: string;
  labelPtBr?: string;
  labelZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  legacyStatus?: BigNumber;
  maxVal?: BigNumber;
  mdfSystemRecordStatus?: string;
  minVal?: BigNumber;
  nonUniqueExternalCode?: string;
  optValue?: BigNumber;
  optionId?: BigNumber;
  parentPickListValue?: string;
  rValue?: BigNumber;
  status?: string;
  createdByNav: UserType;
  labelTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPickListValueNav: PickListValueV2Type[];
  statusNav: MdfEnumValueType;
}

export interface PickListValueV2TypeForceMandatory {
  pickListV2EffectiveStartDate: Moment;
  pickListV2Id: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lValue: BigNumber;
  labelDeDe: string;
  labelDefaultValue: string;
  labelEnDebug: string;
  labelEnGb: string;
  labelEnUs: string;
  labelEsEs: string;
  labelEsMx: string;
  labelFrCa: string;
  labelFrFr: string;
  labelItIt: string;
  labelLocalized: string;
  labelNlNl: string;
  labelPtBr: string;
  labelZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  legacyStatus: BigNumber;
  maxVal: BigNumber;
  mdfSystemRecordStatus: string;
  minVal: BigNumber;
  nonUniqueExternalCode: string;
  optValue: BigNumber;
  optionId: BigNumber;
  parentPickListValue: string;
  rValue: BigNumber;
  status: string;
  createdByNav: UserType;
  labelTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPickListValueNav: PickListValueV2Type[];
  statusNav: MdfEnumValueType;
}

export namespace PickListValueV2 {
  /**
   * Static representation of the [[pickListV2EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_LIST_V_2_EFFECTIVE_START_DATE: DateField<PickListValueV2> = new DateField('PickListV2_effectiveStartDate', PickListValueV2, 'Edm.DateTime');
  /**
   * Static representation of the [[pickListV2Id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_LIST_V_2_ID: StringField<PickListValueV2> = new StringField('PickListV2_id', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PickListValueV2> = new StringField('createdBy', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PickListValueV2> = new DateField('createdDateTime', PickListValueV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PickListValueV2> = new StringField('externalCode', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[lValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const L_VALUE: BigNumberField<PickListValueV2> = new BigNumberField('lValue', PickListValueV2, 'Edm.Int64');
  /**
   * Static representation of the [[labelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_DE_DE: StringField<PickListValueV2> = new StringField('label_de_DE', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_DEFAULT_VALUE: StringField<PickListValueV2> = new StringField('label_defaultValue', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_EN_DEBUG: StringField<PickListValueV2> = new StringField('label_en_DEBUG', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_EN_GB: StringField<PickListValueV2> = new StringField('label_en_GB', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_EN_US: StringField<PickListValueV2> = new StringField('label_en_US', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_ES_ES: StringField<PickListValueV2> = new StringField('label_es_ES', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_ES_MX: StringField<PickListValueV2> = new StringField('label_es_MX', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_FR_CA: StringField<PickListValueV2> = new StringField('label_fr_CA', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_FR_FR: StringField<PickListValueV2> = new StringField('label_fr_FR', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_IT_IT: StringField<PickListValueV2> = new StringField('label_it_IT', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_LOCALIZED: StringField<PickListValueV2> = new StringField('label_localized', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_NL_NL: StringField<PickListValueV2> = new StringField('label_nl_NL', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_PT_BR: StringField<PickListValueV2> = new StringField('label_pt_BR', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[labelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_ZH_CN: StringField<PickListValueV2> = new StringField('label_zh_CN', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PickListValueV2> = new StringField('lastModifiedBy', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PickListValueV2> = new DateField('lastModifiedDateTime', PickListValueV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legacyStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGACY_STATUS: BigNumberField<PickListValueV2> = new BigNumberField('legacyStatus', PickListValueV2, 'Edm.Int64');
  /**
   * Static representation of the [[maxVal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_VAL: BigNumberField<PickListValueV2> = new BigNumberField('maxVal', PickListValueV2, 'Edm.Decimal');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PickListValueV2> = new StringField('mdfSystemRecordStatus', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[minVal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_VAL: BigNumberField<PickListValueV2> = new BigNumberField('minVal', PickListValueV2, 'Edm.Decimal');
  /**
   * Static representation of the [[nonUniqueExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_UNIQUE_EXTERNAL_CODE: StringField<PickListValueV2> = new StringField('nonUniqueExternalCode', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[optValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPT_VALUE: BigNumberField<PickListValueV2> = new BigNumberField('optValue', PickListValueV2, 'Edm.Decimal');
  /**
   * Static representation of the [[optionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTION_ID: BigNumberField<PickListValueV2> = new BigNumberField('optionId', PickListValueV2, 'Edm.Int64');
  /**
   * Static representation of the [[parentPickListValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PICK_LIST_VALUE: StringField<PickListValueV2> = new StringField('parentPickListValue', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the [[rValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const R_VALUE: BigNumberField<PickListValueV2> = new BigNumberField('rValue', PickListValueV2, 'Edm.Int64');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PickListValueV2> = new StringField('status', PickListValueV2, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PickListValueV2, User> = new OneToOneLink('createdByNav', PickListValueV2, User);
  /**
   * Static representation of the one-to-many navigation property [[labelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL_TRANSLATION_TEXT_NAV: Link<PickListValueV2, MdfLocalizedValue> = new Link('labelTranslationTextNav', PickListValueV2, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PickListValueV2, User> = new OneToOneLink('lastModifiedByNav', PickListValueV2, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PickListValueV2, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PickListValueV2, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[parentPickListValueNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PICK_LIST_VALUE_NAV: Link<PickListValueV2, PickListValueV2> = new Link('parentPickListValueNav', PickListValueV2, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PickListValueV2, MdfEnumValue> = new OneToOneLink('statusNav', PickListValueV2, MdfEnumValue);
  /**
   * All fields of the PickListValueV2 entity.
   */
  export const _allFields: Array<DateField<PickListValueV2> | StringField<PickListValueV2> | BigNumberField<PickListValueV2> | OneToOneLink<PickListValueV2, User> | Link<PickListValueV2, MdfLocalizedValue> | OneToOneLink<PickListValueV2, MdfEnumValue> | Link<PickListValueV2, PickListValueV2>> = [
    PickListValueV2.PICK_LIST_V_2_EFFECTIVE_START_DATE,
    PickListValueV2.PICK_LIST_V_2_ID,
    PickListValueV2.CREATED_BY,
    PickListValueV2.CREATED_DATE_TIME,
    PickListValueV2.EXTERNAL_CODE,
    PickListValueV2.L_VALUE,
    PickListValueV2.LABEL_DE_DE,
    PickListValueV2.LABEL_DEFAULT_VALUE,
    PickListValueV2.LABEL_EN_DEBUG,
    PickListValueV2.LABEL_EN_GB,
    PickListValueV2.LABEL_EN_US,
    PickListValueV2.LABEL_ES_ES,
    PickListValueV2.LABEL_ES_MX,
    PickListValueV2.LABEL_FR_CA,
    PickListValueV2.LABEL_FR_FR,
    PickListValueV2.LABEL_IT_IT,
    PickListValueV2.LABEL_LOCALIZED,
    PickListValueV2.LABEL_NL_NL,
    PickListValueV2.LABEL_PT_BR,
    PickListValueV2.LABEL_ZH_CN,
    PickListValueV2.LAST_MODIFIED_BY,
    PickListValueV2.LAST_MODIFIED_DATE_TIME,
    PickListValueV2.LEGACY_STATUS,
    PickListValueV2.MAX_VAL,
    PickListValueV2.MDF_SYSTEM_RECORD_STATUS,
    PickListValueV2.MIN_VAL,
    PickListValueV2.NON_UNIQUE_EXTERNAL_CODE,
    PickListValueV2.OPT_VALUE,
    PickListValueV2.OPTION_ID,
    PickListValueV2.PARENT_PICK_LIST_VALUE,
    PickListValueV2.R_VALUE,
    PickListValueV2.STATUS,
    PickListValueV2.CREATED_BY_NAV,
    PickListValueV2.LABEL_TRANSLATION_TEXT_NAV,
    PickListValueV2.LAST_MODIFIED_BY_NAV,
    PickListValueV2.MDF_SYSTEM_RECORD_STATUS_NAV,
    PickListValueV2.PARENT_PICK_LIST_VALUE_NAV,
    PickListValueV2.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PickListValueV2> = new AllFields('*', PickListValueV2);
  /**
   * All key fields of the PickListValueV2 entity.
   */
  export const _keyFields: Array<Selectable<PickListValueV2>> = [PickListValueV2.PICK_LIST_V_2_EFFECTIVE_START_DATE, PickListValueV2.PICK_LIST_V_2_ID, PickListValueV2.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PickListValueV2.
   */
  export const _keys: { [keys: string]: Selectable<PickListValueV2> } = PickListValueV2._keyFields.reduce((acc: { [keys: string]: Selectable<PickListValueV2> }, field: Selectable<PickListValueV2>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
