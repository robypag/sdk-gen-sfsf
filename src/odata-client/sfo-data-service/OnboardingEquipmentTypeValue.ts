/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingEquipmentTypeValueRequestBuilder } from './OnboardingEquipmentTypeValueRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingEquipmentTypeValue" of service "SFOData".
 */
export class OnboardingEquipmentTypeValue extends Entity implements OnboardingEquipmentTypeValueType {
  /**
   * Technical entity name for OnboardingEquipmentTypeValue.
   */
  static _entityName = 'OnboardingEquipmentTypeValue';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingEquipmentTypeValue.
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
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * Suppress workflow?.
   * @nullable
   */
  equipmentNotRequired?: boolean;
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
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  type?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[OnboardingEquipmentType_1]] entity.
   */
  typeNav!: OnboardingEquipmentType_1;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `OnboardingEquipmentTypeValue`.
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
   */
  static builder(): EntityBuilderType<OnboardingEquipmentTypeValue, OnboardingEquipmentTypeValueTypeForceMandatory> {
    return Entity.entityBuilder(OnboardingEquipmentTypeValue);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingEquipmentTypeValue` entity type.
   * @returns A `OnboardingEquipmentTypeValue` request builder.
   */
  static requestBuilder(): OnboardingEquipmentTypeValueRequestBuilder {
    return new OnboardingEquipmentTypeValueRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentTypeValue`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentTypeValue`.
   */
  static customField(fieldName: string): CustomField<OnboardingEquipmentTypeValue> {
    return Entity.customFieldSelector(fieldName, OnboardingEquipmentTypeValue);
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
import { OnboardingEquipmentType_1, OnboardingEquipmentType_1Type } from './OnboardingEquipmentType_1';
import { WfRequest, WfRequestType } from './WfRequest';

export interface OnboardingEquipmentTypeValueType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  descriptionDeDe?: string;
  descriptionDefaultValue?: string;
  descriptionEnDebug?: string;
  descriptionEnGb?: string;
  descriptionEnUs?: string;
  descriptionEsEs?: string;
  descriptionEsMx?: string;
  descriptionFrCa?: string;
  descriptionFrFr?: string;
  descriptionItIt?: string;
  descriptionLocalized?: string;
  descriptionNlNl?: string;
  descriptionPtBr?: string;
  descriptionZhCn?: string;
  equipmentNotRequired?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  type?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  typeNav: OnboardingEquipmentType_1Type;
  wfRequestNav: WfRequestType[];
}

export interface OnboardingEquipmentTypeValueTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  descriptionDeDe: string;
  descriptionDefaultValue: string;
  descriptionEnDebug: string;
  descriptionEnGb: string;
  descriptionEnUs: string;
  descriptionEsEs: string;
  descriptionEsMx: string;
  descriptionFrCa: string;
  descriptionFrFr: string;
  descriptionItIt: string;
  descriptionLocalized: string;
  descriptionNlNl: string;
  descriptionPtBr: string;
  descriptionZhCn: string;
  equipmentNotRequired: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  type: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  typeNav: OnboardingEquipmentType_1Type;
  wfRequestNav: WfRequestType[];
}

export namespace OnboardingEquipmentTypeValue {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<OnboardingEquipmentTypeValue> = new StringField('code', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingEquipmentTypeValue> = new StringField('createdBy', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingEquipmentTypeValue> = new DateField('createdDateTime', OnboardingEquipmentTypeValue, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<OnboardingEquipmentTypeValue> = new StringField('description_de_DE', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<OnboardingEquipmentTypeValue> = new StringField('description_defaultValue', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<OnboardingEquipmentTypeValue> = new StringField('description_en_DEBUG', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<OnboardingEquipmentTypeValue> = new StringField('description_en_GB', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<OnboardingEquipmentTypeValue> = new StringField('description_en_US', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<OnboardingEquipmentTypeValue> = new StringField('description_es_ES', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<OnboardingEquipmentTypeValue> = new StringField('description_es_MX', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<OnboardingEquipmentTypeValue> = new StringField('description_fr_CA', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<OnboardingEquipmentTypeValue> = new StringField('description_fr_FR', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<OnboardingEquipmentTypeValue> = new StringField('description_it_IT', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<OnboardingEquipmentTypeValue> = new StringField('description_localized', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<OnboardingEquipmentTypeValue> = new StringField('description_nl_NL', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<OnboardingEquipmentTypeValue> = new StringField('description_pt_BR', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<OnboardingEquipmentTypeValue> = new StringField('description_zh_CN', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[equipmentNotRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT_NOT_REQUIRED: BooleanField<OnboardingEquipmentTypeValue> = new BooleanField('equipmentNotRequired', OnboardingEquipmentTypeValue, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingEquipmentTypeValue> = new StringField('lastModifiedBy', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipmentTypeValue> = new DateField('lastModifiedDateTime', OnboardingEquipmentTypeValue, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipmentTypeValue> = new StringField('mdfSystemRecordStatus', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<OnboardingEquipmentTypeValue> = new StringField('type', OnboardingEquipmentTypeValue, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingEquipmentTypeValue, User> = new OneToOneLink('createdByNav', OnboardingEquipmentTypeValue, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<OnboardingEquipmentTypeValue, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', OnboardingEquipmentTypeValue, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipmentTypeValue, User> = new OneToOneLink('lastModifiedByNav', OnboardingEquipmentTypeValue, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipmentTypeValue, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentTypeValue, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<OnboardingEquipmentTypeValue, OnboardingEquipmentType_1> = new OneToOneLink('typeNav', OnboardingEquipmentTypeValue, OnboardingEquipmentType_1);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<OnboardingEquipmentTypeValue, WfRequest> = new Link('wfRequestNav', OnboardingEquipmentTypeValue, WfRequest);
  /**
   * All fields of the OnboardingEquipmentTypeValue entity.
   */
  export const _allFields: Array<StringField<OnboardingEquipmentTypeValue> | DateField<OnboardingEquipmentTypeValue> | BooleanField<OnboardingEquipmentTypeValue> | OneToOneLink<OnboardingEquipmentTypeValue, User> | Link<OnboardingEquipmentTypeValue, MdfLocalizedValue> | OneToOneLink<OnboardingEquipmentTypeValue, MdfEnumValue> | OneToOneLink<OnboardingEquipmentTypeValue, OnboardingEquipmentType_1> | Link<OnboardingEquipmentTypeValue, WfRequest>> = [
    OnboardingEquipmentTypeValue.CODE,
    OnboardingEquipmentTypeValue.CREATED_BY,
    OnboardingEquipmentTypeValue.CREATED_DATE_TIME,
    OnboardingEquipmentTypeValue.DESCRIPTION_DE_DE,
    OnboardingEquipmentTypeValue.DESCRIPTION_DEFAULT_VALUE,
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_DEBUG,
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_GB,
    OnboardingEquipmentTypeValue.DESCRIPTION_EN_US,
    OnboardingEquipmentTypeValue.DESCRIPTION_ES_ES,
    OnboardingEquipmentTypeValue.DESCRIPTION_ES_MX,
    OnboardingEquipmentTypeValue.DESCRIPTION_FR_CA,
    OnboardingEquipmentTypeValue.DESCRIPTION_FR_FR,
    OnboardingEquipmentTypeValue.DESCRIPTION_IT_IT,
    OnboardingEquipmentTypeValue.DESCRIPTION_LOCALIZED,
    OnboardingEquipmentTypeValue.DESCRIPTION_NL_NL,
    OnboardingEquipmentTypeValue.DESCRIPTION_PT_BR,
    OnboardingEquipmentTypeValue.DESCRIPTION_ZH_CN,
    OnboardingEquipmentTypeValue.EQUIPMENT_NOT_REQUIRED,
    OnboardingEquipmentTypeValue.LAST_MODIFIED_BY,
    OnboardingEquipmentTypeValue.LAST_MODIFIED_DATE_TIME,
    OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS,
    OnboardingEquipmentTypeValue.TYPE,
    OnboardingEquipmentTypeValue.CREATED_BY_NAV,
    OnboardingEquipmentTypeValue.DESCRIPTION_TRANSLATION_TEXT_NAV,
    OnboardingEquipmentTypeValue.LAST_MODIFIED_BY_NAV,
    OnboardingEquipmentTypeValue.MDF_SYSTEM_RECORD_STATUS_NAV,
    OnboardingEquipmentTypeValue.TYPE_NAV,
    OnboardingEquipmentTypeValue.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingEquipmentTypeValue> = new AllFields('*', OnboardingEquipmentTypeValue);
  /**
   * All key fields of the OnboardingEquipmentTypeValue entity.
   */
  export const _keyFields: Array<Selectable<OnboardingEquipmentTypeValue>> = [OnboardingEquipmentTypeValue.CODE];
  /**
   * Mapping of all key field names to the respective static field property OnboardingEquipmentTypeValue.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingEquipmentTypeValue> } = OnboardingEquipmentTypeValue._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingEquipmentTypeValue> }, field: Selectable<OnboardingEquipmentTypeValue>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
