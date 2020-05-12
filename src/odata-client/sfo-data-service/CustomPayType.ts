/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomPayTypeRequestBuilder } from './CustomPayTypeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CustomPayType" of service "SFOData".
 */
export class CustomPayType extends Entity implements CustomPayTypeType {
  /**
   * Technical entity name for CustomPayType.
   */
  static _entityName = 'CustomPayType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomPayType.
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
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Name.
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
   * Standard Pay Type.
   * Maximum length: 255.
   * @nullable
   */
  standardPayType?: string;
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  standardPayTypeNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[CustomPayTypeAssignment]] entity.
   */
  toCustomPayTypeAssignment!: CustomPayTypeAssignment[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `CustomPayType`.
   * @returns A builder that constructs instances of entity type `CustomPayType`.
   */
  static builder(): EntityBuilderType<CustomPayType, CustomPayTypeTypeForceMandatory> {
    return Entity.entityBuilder(CustomPayType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomPayType` entity type.
   * @returns A `CustomPayType` request builder.
   */
  static requestBuilder(): CustomPayTypeRequestBuilder {
    return new CustomPayTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomPayType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomPayType`.
   */
  static customField(fieldName: string): CustomField<CustomPayType> {
    return Entity.customFieldSelector(fieldName, CustomPayType);
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
import { CustomPayTypeAssignment, CustomPayTypeAssignmentType } from './CustomPayTypeAssignment';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CustomPayTypeType {
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
  standardPayType?: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  standardPayTypeNav: MdfEnumValueType;
  toCustomPayTypeAssignment: CustomPayTypeAssignmentType[];
  wfRequestNav: WfRequestType[];
}

export interface CustomPayTypeTypeForceMandatory {
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
  standardPayType: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  standardPayTypeNav: MdfEnumValueType;
  toCustomPayTypeAssignment: CustomPayTypeAssignmentType[];
  wfRequestNav: WfRequestType[];
}

export namespace CustomPayType {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CustomPayType> = new StringField('createdBy', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CustomPayType> = new DateField('createdDateTime', CustomPayType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CustomPayType> = new StringField('externalCode', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<CustomPayType> = new StringField('externalName_de_DE', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<CustomPayType> = new StringField('externalName_defaultValue', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<CustomPayType> = new StringField('externalName_en_DEBUG', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<CustomPayType> = new StringField('externalName_en_GB', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<CustomPayType> = new StringField('externalName_en_US', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<CustomPayType> = new StringField('externalName_es_ES', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<CustomPayType> = new StringField('externalName_es_MX', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<CustomPayType> = new StringField('externalName_fr_CA', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<CustomPayType> = new StringField('externalName_fr_FR', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<CustomPayType> = new StringField('externalName_it_IT', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<CustomPayType> = new StringField('externalName_localized', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<CustomPayType> = new StringField('externalName_nl_NL', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<CustomPayType> = new StringField('externalName_pt_BR', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<CustomPayType> = new StringField('externalName_zh_CN', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CustomPayType> = new StringField('lastModifiedBy', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CustomPayType> = new DateField('lastModifiedDateTime', CustomPayType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CustomPayType> = new StringField('mdfSystemRecordStatus', CustomPayType, 'Edm.String');
  /**
   * Static representation of the [[standardPayType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_PAY_TYPE: StringField<CustomPayType> = new StringField('standardPayType', CustomPayType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CustomPayType, User> = new OneToOneLink('createdByNav', CustomPayType, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<CustomPayType, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', CustomPayType, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CustomPayType, User> = new OneToOneLink('lastModifiedByNav', CustomPayType, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CustomPayType, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CustomPayType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[standardPayTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_PAY_TYPE_NAV: OneToOneLink<CustomPayType, MdfEnumValue> = new OneToOneLink('standardPayTypeNav', CustomPayType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[toCustomPayTypeAssignment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CUSTOM_PAY_TYPE_ASSIGNMENT: Link<CustomPayType, CustomPayTypeAssignment> = new Link('toCustomPayTypeAssignment', CustomPayType, CustomPayTypeAssignment);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<CustomPayType, WfRequest> = new Link('wfRequestNav', CustomPayType, WfRequest);
  /**
   * All fields of the CustomPayType entity.
   */
  export const _allFields: Array<StringField<CustomPayType> | DateField<CustomPayType> | OneToOneLink<CustomPayType, User> | Link<CustomPayType, MdfLocalizedValue> | OneToOneLink<CustomPayType, MdfEnumValue> | Link<CustomPayType, CustomPayTypeAssignment> | Link<CustomPayType, WfRequest>> = [
    CustomPayType.CREATED_BY,
    CustomPayType.CREATED_DATE_TIME,
    CustomPayType.EXTERNAL_CODE,
    CustomPayType.EXTERNAL_NAME_DE_DE,
    CustomPayType.EXTERNAL_NAME_DEFAULT_VALUE,
    CustomPayType.EXTERNAL_NAME_EN_DEBUG,
    CustomPayType.EXTERNAL_NAME_EN_GB,
    CustomPayType.EXTERNAL_NAME_EN_US,
    CustomPayType.EXTERNAL_NAME_ES_ES,
    CustomPayType.EXTERNAL_NAME_ES_MX,
    CustomPayType.EXTERNAL_NAME_FR_CA,
    CustomPayType.EXTERNAL_NAME_FR_FR,
    CustomPayType.EXTERNAL_NAME_IT_IT,
    CustomPayType.EXTERNAL_NAME_LOCALIZED,
    CustomPayType.EXTERNAL_NAME_NL_NL,
    CustomPayType.EXTERNAL_NAME_PT_BR,
    CustomPayType.EXTERNAL_NAME_ZH_CN,
    CustomPayType.LAST_MODIFIED_BY,
    CustomPayType.LAST_MODIFIED_DATE_TIME,
    CustomPayType.MDF_SYSTEM_RECORD_STATUS,
    CustomPayType.STANDARD_PAY_TYPE,
    CustomPayType.CREATED_BY_NAV,
    CustomPayType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    CustomPayType.LAST_MODIFIED_BY_NAV,
    CustomPayType.MDF_SYSTEM_RECORD_STATUS_NAV,
    CustomPayType.STANDARD_PAY_TYPE_NAV,
    CustomPayType.TO_CUSTOM_PAY_TYPE_ASSIGNMENT,
    CustomPayType.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomPayType> = new AllFields('*', CustomPayType);
  /**
   * All key fields of the CustomPayType entity.
   */
  export const _keyFields: Array<Selectable<CustomPayType>> = [CustomPayType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomPayType.
   */
  export const _keys: { [keys: string]: Selectable<CustomPayType> } = CustomPayType._keyFields.reduce((acc: { [keys: string]: Selectable<CustomPayType> }, field: Selectable<CustomPayType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
