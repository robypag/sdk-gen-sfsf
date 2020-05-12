/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityStatusRequestBuilder } from './ActivityStatusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActivityStatus" of service "SFOData".
 */
export class ActivityStatus extends Entity implements ActivityStatusType {
  /**
   * Technical entity name for ActivityStatus.
   */
  static _entityName = 'ActivityStatus';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ActivityStatus.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Activity Status ID.
   * Maximum length: 128.
   */
  activityStatusId!: string;
  /**
   * Activity Status Color Code.
   * Maximum length: 255.
   * @nullable
   */
  colorRgbCode?: string;
  /**
   * Prompt Achievement Creation.
   * @nullable
   */
  createAchievement?: boolean;
  /**
   * Activity Status Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Activity Status Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Default Status.
   * @nullable
   */
  defaultStatus?: boolean;
  /**
   * Deleted.
   * @nullable
   */
  deleted?: boolean;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Activity Status Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * Activity Status Icon Name.
   * Maximum length: 255.
   * @nullable
   */
  iconName?: string;
  /**
   * Activity Status Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Activity Status Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 128.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Activity Status Priority.
   * @nullable
   */
  priority?: BigNumber;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * Clear after Capturing Meeting.
   * @nullable
   */
  removeActivityFromMeeting?: boolean;
  /**
   * snapshot.
   * @nullable
   */
  snapshot?: boolean;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameDeDe?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameDefaultValue?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameEnDebug?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameEnGb?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameEnUs?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameEsEs?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameEsMx?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameFrCa?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameFrFr?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameItIt?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameLocalized?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameNlNl?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNamePtBr?: string;
  /**
   * Activity Status Name.
   * Maximum length: 4000.
   * @nullable
   */
  statusNameZhCn?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  statusNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `ActivityStatus`.
   * @returns A builder that constructs instances of entity type `ActivityStatus`.
   */
  static builder(): EntityBuilderType<ActivityStatus, ActivityStatusTypeForceMandatory> {
    return Entity.entityBuilder(ActivityStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActivityStatus` entity type.
   * @returns A `ActivityStatus` request builder.
   */
  static requestBuilder(): ActivityStatusRequestBuilder {
    return new ActivityStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActivityStatus`.
   */
  static customField(fieldName: string): CustomField<ActivityStatus> {
    return Entity.customFieldSelector(fieldName, ActivityStatus);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface ActivityStatusType {
  activityStatusId: string;
  colorRgbCode?: string;
  createAchievement?: boolean;
  createdBy?: string;
  createdDateTime?: Moment;
  defaultStatus?: boolean;
  deleted?: boolean;
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
  iconName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  priority?: BigNumber;
  recordId?: string;
  removeActivityFromMeeting?: boolean;
  snapshot?: boolean;
  statusNameDeDe?: string;
  statusNameDefaultValue?: string;
  statusNameEnDebug?: string;
  statusNameEnGb?: string;
  statusNameEnUs?: string;
  statusNameEsEs?: string;
  statusNameEsMx?: string;
  statusNameFrCa?: string;
  statusNameFrFr?: string;
  statusNameItIt?: string;
  statusNameLocalized?: string;
  statusNameNlNl?: string;
  statusNamePtBr?: string;
  statusNameZhCn?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface ActivityStatusTypeForceMandatory {
  activityStatusId: string;
  colorRgbCode: string;
  createAchievement: boolean;
  createdBy: string;
  createdDateTime: Moment;
  defaultStatus: boolean;
  deleted: boolean;
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
  iconName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  priority: BigNumber;
  recordId: string;
  removeActivityFromMeeting: boolean;
  snapshot: boolean;
  statusNameDeDe: string;
  statusNameDefaultValue: string;
  statusNameEnDebug: string;
  statusNameEnGb: string;
  statusNameEnUs: string;
  statusNameEsEs: string;
  statusNameEsMx: string;
  statusNameFrCa: string;
  statusNameFrFr: string;
  statusNameItIt: string;
  statusNameLocalized: string;
  statusNameNlNl: string;
  statusNamePtBr: string;
  statusNameZhCn: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace ActivityStatus {
  /**
   * Static representation of the [[activityStatusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVITY_STATUS_ID: StringField<ActivityStatus> = new StringField('activityStatusId', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[colorRgbCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLOR_RGB_CODE: StringField<ActivityStatus> = new StringField('colorRGBCode', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[createAchievement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_ACHIEVEMENT: BooleanField<ActivityStatus> = new BooleanField('createAchievement', ActivityStatus, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ActivityStatus> = new StringField('createdBy', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ActivityStatus> = new DateField('createdDateTime', ActivityStatus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_STATUS: BooleanField<ActivityStatus> = new BooleanField('defaultStatus', ActivityStatus, 'Edm.Boolean');
  /**
   * Static representation of the [[deleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETED: BooleanField<ActivityStatus> = new BooleanField('deleted', ActivityStatus, 'Edm.Boolean');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<ActivityStatus> = new StringField('description_de_DE', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<ActivityStatus> = new StringField('description_defaultValue', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<ActivityStatus> = new StringField('description_en_DEBUG', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<ActivityStatus> = new StringField('description_en_GB', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<ActivityStatus> = new StringField('description_en_US', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<ActivityStatus> = new StringField('description_es_ES', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<ActivityStatus> = new StringField('description_es_MX', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<ActivityStatus> = new StringField('description_fr_CA', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<ActivityStatus> = new StringField('description_fr_FR', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<ActivityStatus> = new StringField('description_it_IT', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<ActivityStatus> = new StringField('description_localized', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<ActivityStatus> = new StringField('description_nl_NL', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<ActivityStatus> = new StringField('description_pt_BR', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<ActivityStatus> = new StringField('description_zh_CN', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[iconName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ICON_NAME: StringField<ActivityStatus> = new StringField('iconName', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ActivityStatus> = new StringField('lastModifiedBy', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ActivityStatus> = new DateField('lastModifiedDateTime', ActivityStatus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ActivityStatus> = new StringField('mdfSystemRecordStatus', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[priority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIORITY: BigNumberField<ActivityStatus> = new BigNumberField('priority', ActivityStatus, 'Edm.Int64');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<ActivityStatus> = new StringField('recordId', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[removeActivityFromMeeting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMOVE_ACTIVITY_FROM_MEETING: BooleanField<ActivityStatus> = new BooleanField('removeActivityFromMeeting', ActivityStatus, 'Edm.Boolean');
  /**
   * Static representation of the [[snapshot]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOT: BooleanField<ActivityStatus> = new BooleanField('snapshot', ActivityStatus, 'Edm.Boolean');
  /**
   * Static representation of the [[statusNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_DE_DE: StringField<ActivityStatus> = new StringField('statusName_de_DE', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_DEFAULT_VALUE: StringField<ActivityStatus> = new StringField('statusName_defaultValue', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_EN_DEBUG: StringField<ActivityStatus> = new StringField('statusName_en_DEBUG', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_EN_GB: StringField<ActivityStatus> = new StringField('statusName_en_GB', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_EN_US: StringField<ActivityStatus> = new StringField('statusName_en_US', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_ES_ES: StringField<ActivityStatus> = new StringField('statusName_es_ES', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_ES_MX: StringField<ActivityStatus> = new StringField('statusName_es_MX', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_FR_CA: StringField<ActivityStatus> = new StringField('statusName_fr_CA', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_FR_FR: StringField<ActivityStatus> = new StringField('statusName_fr_FR', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_IT_IT: StringField<ActivityStatus> = new StringField('statusName_it_IT', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_LOCALIZED: StringField<ActivityStatus> = new StringField('statusName_localized', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_NL_NL: StringField<ActivityStatus> = new StringField('statusName_nl_NL', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_PT_BR: StringField<ActivityStatus> = new StringField('statusName_pt_BR', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the [[statusNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_ZH_CN: StringField<ActivityStatus> = new StringField('statusName_zh_CN', ActivityStatus, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ActivityStatus, User> = new OneToOneLink('createdByNav', ActivityStatus, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<ActivityStatus, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', ActivityStatus, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ActivityStatus, User> = new OneToOneLink('lastModifiedByNav', ActivityStatus, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ActivityStatus, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ActivityStatus, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[statusNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAME_TRANSLATION_TEXT_NAV: Link<ActivityStatus, MdfLocalizedValue> = new Link('statusNameTranslationTextNav', ActivityStatus, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<ActivityStatus, WfRequest> = new Link('wfRequestNav', ActivityStatus, WfRequest);
  /**
   * All fields of the ActivityStatus entity.
   */
  export const _allFields: Array<StringField<ActivityStatus> | BooleanField<ActivityStatus> | DateField<ActivityStatus> | BigNumberField<ActivityStatus> | OneToOneLink<ActivityStatus, User> | Link<ActivityStatus, MdfLocalizedValue> | OneToOneLink<ActivityStatus, MdfEnumValue> | Link<ActivityStatus, WfRequest>> = [
    ActivityStatus.ACTIVITY_STATUS_ID,
    ActivityStatus.COLOR_RGB_CODE,
    ActivityStatus.CREATE_ACHIEVEMENT,
    ActivityStatus.CREATED_BY,
    ActivityStatus.CREATED_DATE_TIME,
    ActivityStatus.DEFAULT_STATUS,
    ActivityStatus.DELETED,
    ActivityStatus.DESCRIPTION_DE_DE,
    ActivityStatus.DESCRIPTION_DEFAULT_VALUE,
    ActivityStatus.DESCRIPTION_EN_DEBUG,
    ActivityStatus.DESCRIPTION_EN_GB,
    ActivityStatus.DESCRIPTION_EN_US,
    ActivityStatus.DESCRIPTION_ES_ES,
    ActivityStatus.DESCRIPTION_ES_MX,
    ActivityStatus.DESCRIPTION_FR_CA,
    ActivityStatus.DESCRIPTION_FR_FR,
    ActivityStatus.DESCRIPTION_IT_IT,
    ActivityStatus.DESCRIPTION_LOCALIZED,
    ActivityStatus.DESCRIPTION_NL_NL,
    ActivityStatus.DESCRIPTION_PT_BR,
    ActivityStatus.DESCRIPTION_ZH_CN,
    ActivityStatus.ICON_NAME,
    ActivityStatus.LAST_MODIFIED_BY,
    ActivityStatus.LAST_MODIFIED_DATE_TIME,
    ActivityStatus.MDF_SYSTEM_RECORD_STATUS,
    ActivityStatus.PRIORITY,
    ActivityStatus.RECORD_ID,
    ActivityStatus.REMOVE_ACTIVITY_FROM_MEETING,
    ActivityStatus.SNAPSHOT,
    ActivityStatus.STATUS_NAME_DE_DE,
    ActivityStatus.STATUS_NAME_DEFAULT_VALUE,
    ActivityStatus.STATUS_NAME_EN_DEBUG,
    ActivityStatus.STATUS_NAME_EN_GB,
    ActivityStatus.STATUS_NAME_EN_US,
    ActivityStatus.STATUS_NAME_ES_ES,
    ActivityStatus.STATUS_NAME_ES_MX,
    ActivityStatus.STATUS_NAME_FR_CA,
    ActivityStatus.STATUS_NAME_FR_FR,
    ActivityStatus.STATUS_NAME_IT_IT,
    ActivityStatus.STATUS_NAME_LOCALIZED,
    ActivityStatus.STATUS_NAME_NL_NL,
    ActivityStatus.STATUS_NAME_PT_BR,
    ActivityStatus.STATUS_NAME_ZH_CN,
    ActivityStatus.CREATED_BY_NAV,
    ActivityStatus.DESCRIPTION_TRANSLATION_TEXT_NAV,
    ActivityStatus.LAST_MODIFIED_BY_NAV,
    ActivityStatus.MDF_SYSTEM_RECORD_STATUS_NAV,
    ActivityStatus.STATUS_NAME_TRANSLATION_TEXT_NAV,
    ActivityStatus.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActivityStatus> = new AllFields('*', ActivityStatus);
  /**
   * All key fields of the ActivityStatus entity.
   */
  export const _keyFields: Array<Selectable<ActivityStatus>> = [ActivityStatus.ACTIVITY_STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property ActivityStatus.
   */
  export const _keys: { [keys: string]: Selectable<ActivityStatus> } = ActivityStatus._keyFields.reduce((acc: { [keys: string]: Selectable<ActivityStatus> }, field: Selectable<ActivityStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
