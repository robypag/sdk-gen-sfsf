/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeDataReplicationConfirmationRequestBuilder } from './EmployeeDataReplicationConfirmationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeDataReplicationConfirmation" of service "SFOData".
 */
export class EmployeeDataReplicationConfirmation extends Entity implements EmployeeDataReplicationConfirmationType {
  /**
   * Technical entity name for EmployeeDataReplicationConfirmation.
   */
  static _entityName = 'EmployeeDataReplicationConfirmation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeDataReplicationConfirmation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Additional Time Information.
   * @nullable
   */
  additionalTimeInformation?: string;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Person ID.
   * @nullable
   */
  personId?: BigNumber;
  /**
   * List Of External Codes Of Proxy Objects.
   * @nullable
   */
  proxyExternalCodeList?: string;
  /**
   * Replication Content Type.
   * Maximum length: 255.
   * @nullable
   */
  replicationContentType?: string;
  /**
   * Replication Processing Time in Target System.
   * Maximum length: 255.
   * @nullable
   */
  replicationProcessingTime?: string;
  /**
   * Replication Start Time.
   * Maximum length: 255.
   * @nullable
   */
  replicationStartTime?: string;
  /**
   * Replication Target System.
   * Maximum length: 128.
   * @nullable
   */
  replicationTargetSystem?: string;
  /**
   * Replication Update Status.
   * Maximum length: 255.
   * @nullable
   */
  replicationUpdateStatus?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  usersSysId?: string;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[EmployeeDataReplicationConfirmationErrorMessage]] entity.
   */
  employeeDataReplicationConfirmationErrorMessages!: EmployeeDataReplicationConfirmationErrorMessage[];
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
  replicationContentTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[ReplicationTargetSystem]] entity.
   */
  replicationTargetSystemNav!: ReplicationTargetSystem;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  replicationUpdateStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  usersSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmployeeDataReplicationConfirmation`.
   * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
   */
  static builder(): EntityBuilderType<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeDataReplicationConfirmation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationConfirmation` entity type.
   * @returns A `EmployeeDataReplicationConfirmation` request builder.
   */
  static requestBuilder(): EmployeeDataReplicationConfirmationRequestBuilder {
    return new EmployeeDataReplicationConfirmationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationConfirmation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeDataReplicationConfirmation`.
   */
  static customField(fieldName: string): CustomField<EmployeeDataReplicationConfirmation> {
    return Entity.customFieldSelector(fieldName, EmployeeDataReplicationConfirmation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { EmployeeDataReplicationConfirmationErrorMessage, EmployeeDataReplicationConfirmationErrorMessageType } from './EmployeeDataReplicationConfirmationErrorMessage';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { ReplicationTargetSystem, ReplicationTargetSystemType } from './ReplicationTargetSystem';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeeDataReplicationConfirmationType {
  additionalTimeInformation?: string;
  country?: string;
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
  personId?: BigNumber;
  proxyExternalCodeList?: string;
  replicationContentType?: string;
  replicationProcessingTime?: string;
  replicationStartTime?: string;
  replicationTargetSystem?: string;
  replicationUpdateStatus?: string;
  usersSysId?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  employeeDataReplicationConfirmationErrorMessages: EmployeeDataReplicationConfirmationErrorMessageType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  replicationContentTypeNav: MdfEnumValueType;
  replicationTargetSystemNav: ReplicationTargetSystemType;
  replicationUpdateStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface EmployeeDataReplicationConfirmationTypeForceMandatory {
  additionalTimeInformation: string;
  country: string;
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
  personId: BigNumber;
  proxyExternalCodeList: string;
  replicationContentType: string;
  replicationProcessingTime: string;
  replicationStartTime: string;
  replicationTargetSystem: string;
  replicationUpdateStatus: string;
  usersSysId: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  employeeDataReplicationConfirmationErrorMessages: EmployeeDataReplicationConfirmationErrorMessageType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  replicationContentTypeNav: MdfEnumValueType;
  replicationTargetSystemNav: ReplicationTargetSystemType;
  replicationUpdateStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace EmployeeDataReplicationConfirmation {
  /**
   * Static representation of the [[additionalTimeInformation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_TIME_INFORMATION: StringField<EmployeeDataReplicationConfirmation> = new StringField('additionalTimeInformation', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<EmployeeDataReplicationConfirmation> = new StringField('country', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeDataReplicationConfirmation> = new StringField('createdBy', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeDataReplicationConfirmation> = new DateField('createdDateTime', EmployeeDataReplicationConfirmation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalCode', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_de_DE', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_defaultValue', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_en_DEBUG', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_en_GB', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_en_US', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_es_ES', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_es_MX', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_fr_CA', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_fr_FR', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_it_IT', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_localized', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_nl_NL', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_pt_BR', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<EmployeeDataReplicationConfirmation> = new StringField('externalName_zh_CN', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeDataReplicationConfirmation> = new StringField('lastModifiedBy', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeDataReplicationConfirmation> = new DateField('lastModifiedDateTime', EmployeeDataReplicationConfirmation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeDataReplicationConfirmation> = new StringField('mdfSystemRecordStatus', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: BigNumberField<EmployeeDataReplicationConfirmation> = new BigNumberField('personId', EmployeeDataReplicationConfirmation, 'Edm.Int64');
  /**
   * Static representation of the [[proxyExternalCodeList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROXY_EXTERNAL_CODE_LIST: StringField<EmployeeDataReplicationConfirmation> = new StringField('proxyExternalCodeList', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[replicationContentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE: StringField<EmployeeDataReplicationConfirmation> = new StringField('replicationContentType', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[replicationProcessingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_PROCESSING_TIME: StringField<EmployeeDataReplicationConfirmation> = new StringField('replicationProcessingTime', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[replicationStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_START_TIME: StringField<EmployeeDataReplicationConfirmation> = new StringField('replicationStartTime', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[replicationTargetSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM: StringField<EmployeeDataReplicationConfirmation> = new StringField('replicationTargetSystem', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[replicationUpdateStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_UPDATE_STATUS: StringField<EmployeeDataReplicationConfirmation> = new StringField('replicationUpdateStatus', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<EmployeeDataReplicationConfirmation> = new StringField('usersSysId', EmployeeDataReplicationConfirmation, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<EmployeeDataReplicationConfirmation, Country> = new Link('countryNav', EmployeeDataReplicationConfirmation, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User> = new OneToOneLink('createdByNav', EmployeeDataReplicationConfirmation, User);
  /**
   * Static representation of the one-to-many navigation property [[employeeDataReplicationConfirmationErrorMessages]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_DATA_REPLICATION_CONFIRMATION_ERROR_MESSAGES: Link<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage> = new Link('employeeDataReplicationConfirmationErrorMessages', EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<EmployeeDataReplicationConfirmation, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', EmployeeDataReplicationConfirmation, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User> = new OneToOneLink('lastModifiedByNav', EmployeeDataReplicationConfirmation, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationConfirmation, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue> = new OneToOneLink('replicationContentTypeNav', EmployeeDataReplicationConfirmation, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, ReplicationTargetSystem> = new OneToOneLink('replicationTargetSystemNav', EmployeeDataReplicationConfirmation, ReplicationTargetSystem);
  /**
   * Static representation of the one-to-one navigation property [[replicationUpdateStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_UPDATE_STATUS_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue> = new OneToOneLink('replicationUpdateStatusNav', EmployeeDataReplicationConfirmation, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_NAV: OneToOneLink<EmployeeDataReplicationConfirmation, User> = new OneToOneLink('usersSysIdNav', EmployeeDataReplicationConfirmation, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeeDataReplicationConfirmation, WfRequest> = new Link('wfRequestNav', EmployeeDataReplicationConfirmation, WfRequest);
  /**
   * All fields of the EmployeeDataReplicationConfirmation entity.
   */
  export const _allFields: Array<StringField<EmployeeDataReplicationConfirmation> | DateField<EmployeeDataReplicationConfirmation> | BigNumberField<EmployeeDataReplicationConfirmation> | Link<EmployeeDataReplicationConfirmation, Country> | OneToOneLink<EmployeeDataReplicationConfirmation, User> | Link<EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationErrorMessage> | Link<EmployeeDataReplicationConfirmation, MdfLocalizedValue> | OneToOneLink<EmployeeDataReplicationConfirmation, MdfEnumValue> | OneToOneLink<EmployeeDataReplicationConfirmation, ReplicationTargetSystem> | Link<EmployeeDataReplicationConfirmation, WfRequest>> = [
    EmployeeDataReplicationConfirmation.ADDITIONAL_TIME_INFORMATION,
    EmployeeDataReplicationConfirmation.COUNTRY,
    EmployeeDataReplicationConfirmation.CREATED_BY,
    EmployeeDataReplicationConfirmation.CREATED_DATE_TIME,
    EmployeeDataReplicationConfirmation.EXTERNAL_CODE,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DE_DE,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_DEFAULT_VALUE,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_DEBUG,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_GB,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_EN_US,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_ES,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ES_MX,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_CA,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_FR_FR,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_IT_IT,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_LOCALIZED,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_NL_NL,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_PT_BR,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_ZH_CN,
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY,
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_DATE_TIME,
    EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS,
    EmployeeDataReplicationConfirmation.PERSON_ID,
    EmployeeDataReplicationConfirmation.PROXY_EXTERNAL_CODE_LIST,
    EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE,
    EmployeeDataReplicationConfirmation.REPLICATION_PROCESSING_TIME,
    EmployeeDataReplicationConfirmation.REPLICATION_START_TIME,
    EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM,
    EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS,
    EmployeeDataReplicationConfirmation.USERS_SYS_ID,
    EmployeeDataReplicationConfirmation.COUNTRY_NAV,
    EmployeeDataReplicationConfirmation.CREATED_BY_NAV,
    EmployeeDataReplicationConfirmation.EMPLOYEE_DATA_REPLICATION_CONFIRMATION_ERROR_MESSAGES,
    EmployeeDataReplicationConfirmation.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    EmployeeDataReplicationConfirmation.LAST_MODIFIED_BY_NAV,
    EmployeeDataReplicationConfirmation.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeDataReplicationConfirmation.REPLICATION_CONTENT_TYPE_NAV,
    EmployeeDataReplicationConfirmation.REPLICATION_TARGET_SYSTEM_NAV,
    EmployeeDataReplicationConfirmation.REPLICATION_UPDATE_STATUS_NAV,
    EmployeeDataReplicationConfirmation.USERS_SYS_ID_NAV,
    EmployeeDataReplicationConfirmation.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeDataReplicationConfirmation> = new AllFields('*', EmployeeDataReplicationConfirmation);
  /**
   * All key fields of the EmployeeDataReplicationConfirmation entity.
   */
  export const _keyFields: Array<Selectable<EmployeeDataReplicationConfirmation>> = [EmployeeDataReplicationConfirmation.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeDataReplicationConfirmation.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeDataReplicationConfirmation> } = EmployeeDataReplicationConfirmation._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeDataReplicationConfirmation> }, field: Selectable<EmployeeDataReplicationConfirmation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
