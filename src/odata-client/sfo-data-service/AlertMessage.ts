/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AlertMessageRequestBuilder } from './AlertMessageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AlertMessage" of service "SFOData".
 */
export class AlertMessage extends Entity implements AlertMessageType {
  /**
   * Technical entity name for AlertMessage.
   */
  static _entityName = 'AlertMessage';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AlertMessage.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Alert Description.
   * Maximum length: 4000.
   * @nullable
   */
  alertDescription?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedDeDe?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedDefaultValue?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedEnDebug?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedEnGb?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedEnUs?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedEsEs?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedEsMx?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedFrCa?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedFrFr?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedItIt?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedLocalized?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedNlNl?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedPtBr?: string;
  /**
   * Localized Description.
   * Maximum length: 255.
   * @nullable
   */
  alertDescriptionLocalizedZhCn?: string;
  /**
   * Alert Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeader?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedDeDe?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedDefaultValue?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedEnDebug?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedEnGb?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedEnUs?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedEsEs?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedEsMx?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedFrCa?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedFrFr?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedItIt?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedLocalized?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedNlNl?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedPtBr?: string;
  /**
   * Localized Header.
   * Maximum length: 255.
   * @nullable
   */
  alertHeaderLocalizedZhCn?: string;
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
   * Effective Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  alertDescriptionLocalizedTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  alertHeaderLocalizedTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `AlertMessage`.
   * @returns A builder that constructs instances of entity type `AlertMessage`.
   */
  static builder(): EntityBuilderType<AlertMessage, AlertMessageTypeForceMandatory> {
    return Entity.entityBuilder(AlertMessage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AlertMessage` entity type.
   * @returns A `AlertMessage` request builder.
   */
  static requestBuilder(): AlertMessageRequestBuilder {
    return new AlertMessageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlertMessage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AlertMessage`.
   */
  static customField(fieldName: string): CustomField<AlertMessage> {
    return Entity.customFieldSelector(fieldName, AlertMessage);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AlertMessageType {
  alertDescription?: string;
  alertDescriptionLocalizedDeDe?: string;
  alertDescriptionLocalizedDefaultValue?: string;
  alertDescriptionLocalizedEnDebug?: string;
  alertDescriptionLocalizedEnGb?: string;
  alertDescriptionLocalizedEnUs?: string;
  alertDescriptionLocalizedEsEs?: string;
  alertDescriptionLocalizedEsMx?: string;
  alertDescriptionLocalizedFrCa?: string;
  alertDescriptionLocalizedFrFr?: string;
  alertDescriptionLocalizedItIt?: string;
  alertDescriptionLocalizedLocalized?: string;
  alertDescriptionLocalizedNlNl?: string;
  alertDescriptionLocalizedPtBr?: string;
  alertDescriptionLocalizedZhCn?: string;
  alertHeader?: string;
  alertHeaderLocalizedDeDe?: string;
  alertHeaderLocalizedDefaultValue?: string;
  alertHeaderLocalizedEnDebug?: string;
  alertHeaderLocalizedEnGb?: string;
  alertHeaderLocalizedEnUs?: string;
  alertHeaderLocalizedEsEs?: string;
  alertHeaderLocalizedEsMx?: string;
  alertHeaderLocalizedFrCa?: string;
  alertHeaderLocalizedFrFr?: string;
  alertHeaderLocalizedItIt?: string;
  alertHeaderLocalizedLocalized?: string;
  alertHeaderLocalizedNlNl?: string;
  alertHeaderLocalizedPtBr?: string;
  alertHeaderLocalizedZhCn?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveStatus?: string;
  externalCode: string;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  alertDescriptionLocalizedTranslationTextNav: MdfLocalizedValueType[];
  alertHeaderLocalizedTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface AlertMessageTypeForceMandatory {
  alertDescription: string;
  alertDescriptionLocalizedDeDe: string;
  alertDescriptionLocalizedDefaultValue: string;
  alertDescriptionLocalizedEnDebug: string;
  alertDescriptionLocalizedEnGb: string;
  alertDescriptionLocalizedEnUs: string;
  alertDescriptionLocalizedEsEs: string;
  alertDescriptionLocalizedEsMx: string;
  alertDescriptionLocalizedFrCa: string;
  alertDescriptionLocalizedFrFr: string;
  alertDescriptionLocalizedItIt: string;
  alertDescriptionLocalizedLocalized: string;
  alertDescriptionLocalizedNlNl: string;
  alertDescriptionLocalizedPtBr: string;
  alertDescriptionLocalizedZhCn: string;
  alertHeader: string;
  alertHeaderLocalizedDeDe: string;
  alertHeaderLocalizedDefaultValue: string;
  alertHeaderLocalizedEnDebug: string;
  alertHeaderLocalizedEnGb: string;
  alertHeaderLocalizedEnUs: string;
  alertHeaderLocalizedEsEs: string;
  alertHeaderLocalizedEsMx: string;
  alertHeaderLocalizedFrCa: string;
  alertHeaderLocalizedFrFr: string;
  alertHeaderLocalizedItIt: string;
  alertHeaderLocalizedLocalized: string;
  alertHeaderLocalizedNlNl: string;
  alertHeaderLocalizedPtBr: string;
  alertHeaderLocalizedZhCn: string;
  createdBy: string;
  createdDateTime: Moment;
  effectiveStatus: string;
  externalCode: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  alertDescriptionLocalizedTranslationTextNav: MdfLocalizedValueType[];
  alertHeaderLocalizedTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace AlertMessage {
  /**
   * Static representation of the [[alertDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION: StringField<AlertMessage> = new StringField('alertDescription', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_DE_DE: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_de_DE', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_DEFAULT_VALUE: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_defaultValue', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_EN_DEBUG: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_en_DEBUG', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_EN_GB: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_en_GB', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_EN_US: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_en_US', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_ES_ES: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_es_ES', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_ES_MX: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_es_MX', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_FR_CA: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_fr_CA', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_FR_FR: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_fr_FR', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_IT_IT: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_it_IT', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_LOCALIZED: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_localized', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_NL_NL: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_nl_NL', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_PT_BR: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_pt_BR', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertDescriptionLocalizedZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_ZH_CN: StringField<AlertMessage> = new StringField('alertDescriptionLocalized_zh_CN', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER: StringField<AlertMessage> = new StringField('alertHeader', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_DE_DE: StringField<AlertMessage> = new StringField('alertHeaderLocalized_de_DE', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_DEFAULT_VALUE: StringField<AlertMessage> = new StringField('alertHeaderLocalized_defaultValue', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_EN_DEBUG: StringField<AlertMessage> = new StringField('alertHeaderLocalized_en_DEBUG', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_EN_GB: StringField<AlertMessage> = new StringField('alertHeaderLocalized_en_GB', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_EN_US: StringField<AlertMessage> = new StringField('alertHeaderLocalized_en_US', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_ES_ES: StringField<AlertMessage> = new StringField('alertHeaderLocalized_es_ES', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_ES_MX: StringField<AlertMessage> = new StringField('alertHeaderLocalized_es_MX', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_FR_CA: StringField<AlertMessage> = new StringField('alertHeaderLocalized_fr_CA', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_FR_FR: StringField<AlertMessage> = new StringField('alertHeaderLocalized_fr_FR', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_IT_IT: StringField<AlertMessage> = new StringField('alertHeaderLocalized_it_IT', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_LOCALIZED: StringField<AlertMessage> = new StringField('alertHeaderLocalized_localized', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_NL_NL: StringField<AlertMessage> = new StringField('alertHeaderLocalized_nl_NL', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_PT_BR: StringField<AlertMessage> = new StringField('alertHeaderLocalized_pt_BR', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[alertHeaderLocalizedZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_ZH_CN: StringField<AlertMessage> = new StringField('alertHeaderLocalized_zh_CN', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AlertMessage> = new StringField('createdBy', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AlertMessage> = new DateField('createdDateTime', AlertMessage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<AlertMessage> = new StringField('effectiveStatus', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AlertMessage> = new StringField('externalCode', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<AlertMessage> = new StringField('externalName', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AlertMessage> = new StringField('lastModifiedBy', AlertMessage, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AlertMessage> = new DateField('lastModifiedDateTime', AlertMessage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AlertMessage> = new StringField('mdfSystemRecordStatus', AlertMessage, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[alertDescriptionLocalizedTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_DESCRIPTION_LOCALIZED_TRANSLATION_TEXT_NAV: Link<AlertMessage, MdfLocalizedValue> = new Link('alertDescriptionLocalizedTranslationTextNav', AlertMessage, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[alertHeaderLocalizedTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALERT_HEADER_LOCALIZED_TRANSLATION_TEXT_NAV: Link<AlertMessage, MdfLocalizedValue> = new Link('alertHeaderLocalizedTranslationTextNav', AlertMessage, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AlertMessage, User> = new OneToOneLink('createdByNav', AlertMessage, User);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<AlertMessage, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', AlertMessage, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AlertMessage, User> = new OneToOneLink('lastModifiedByNav', AlertMessage, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AlertMessage, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AlertMessage, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<AlertMessage, WfRequest> = new Link('wfRequestNav', AlertMessage, WfRequest);
  /**
   * All fields of the AlertMessage entity.
   */
  export const _allFields: Array<StringField<AlertMessage> | DateField<AlertMessage> | Link<AlertMessage, MdfLocalizedValue> | OneToOneLink<AlertMessage, User> | OneToOneLink<AlertMessage, MdfEnumValue> | Link<AlertMessage, WfRequest>> = [
    AlertMessage.ALERT_DESCRIPTION,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DE_DE,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_DEFAULT_VALUE,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_DEBUG,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_GB,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_EN_US,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_ES,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ES_MX,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_CA,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_FR_FR,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_IT_IT,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_LOCALIZED,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_NL_NL,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_PT_BR,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_ZH_CN,
    AlertMessage.ALERT_HEADER,
    AlertMessage.ALERT_HEADER_LOCALIZED_DE_DE,
    AlertMessage.ALERT_HEADER_LOCALIZED_DEFAULT_VALUE,
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_DEBUG,
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_GB,
    AlertMessage.ALERT_HEADER_LOCALIZED_EN_US,
    AlertMessage.ALERT_HEADER_LOCALIZED_ES_ES,
    AlertMessage.ALERT_HEADER_LOCALIZED_ES_MX,
    AlertMessage.ALERT_HEADER_LOCALIZED_FR_CA,
    AlertMessage.ALERT_HEADER_LOCALIZED_FR_FR,
    AlertMessage.ALERT_HEADER_LOCALIZED_IT_IT,
    AlertMessage.ALERT_HEADER_LOCALIZED_LOCALIZED,
    AlertMessage.ALERT_HEADER_LOCALIZED_NL_NL,
    AlertMessage.ALERT_HEADER_LOCALIZED_PT_BR,
    AlertMessage.ALERT_HEADER_LOCALIZED_ZH_CN,
    AlertMessage.CREATED_BY,
    AlertMessage.CREATED_DATE_TIME,
    AlertMessage.EFFECTIVE_STATUS,
    AlertMessage.EXTERNAL_CODE,
    AlertMessage.EXTERNAL_NAME,
    AlertMessage.LAST_MODIFIED_BY,
    AlertMessage.LAST_MODIFIED_DATE_TIME,
    AlertMessage.MDF_SYSTEM_RECORD_STATUS,
    AlertMessage.ALERT_DESCRIPTION_LOCALIZED_TRANSLATION_TEXT_NAV,
    AlertMessage.ALERT_HEADER_LOCALIZED_TRANSLATION_TEXT_NAV,
    AlertMessage.CREATED_BY_NAV,
    AlertMessage.EFFECTIVE_STATUS_NAV,
    AlertMessage.LAST_MODIFIED_BY_NAV,
    AlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV,
    AlertMessage.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AlertMessage> = new AllFields('*', AlertMessage);
  /**
   * All key fields of the AlertMessage entity.
   */
  export const _keyFields: Array<Selectable<AlertMessage>> = [AlertMessage.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AlertMessage.
   */
  export const _keys: { [keys: string]: Selectable<AlertMessage> } = AlertMessage._keyFields.reduce((acc: { [keys: string]: Selectable<AlertMessage> }, field: Selectable<AlertMessage>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
