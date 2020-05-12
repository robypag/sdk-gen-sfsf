/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeDataReplicationElementRequestBuilder } from './EmployeeDataReplicationElementRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeDataReplicationElement" of service "SFOData".
 */
export class EmployeeDataReplicationElement extends Entity implements EmployeeDataReplicationElementType {
  /**
   * Technical entity name for EmployeeDataReplicationElement.
   */
  static _entityName = 'EmployeeDataReplicationElement';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeDataReplicationElement.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Allow Replication in Correction Phase.
   * @nullable
   */
  allowReplicationInCorrectionPhase?: boolean;
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
   * firstReplicationStartTimeSinceLastSuccess.
   * @nullable
   */
  firstReplicationStartTimeSinceLastSuccess?: Moment;
  /**
   * Is waiting for Confirmation.
   * @nullable
   */
  isWaitingForConfirmation?: boolean;
  /**
   * Last Confirmation.
   * Maximum length: 128.
   * @nullable
   */
  lastConfirmation?: string;
  /**
   * Last Confirmation with Success.
   * Maximum length: 128.
   * @nullable
   */
  lastConfirmationWithSuccess?: string;
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
   * Last Replication Start Notification.
   * Maximum length: 128.
   * @nullable
   */
  lastReplicationStartNotification?: string;
  /**
   * Last Replication Start Time.
   * Maximum length: 255.
   * @nullable
   */
  lastReplicationStartTime?: string;
  /**
   * Optimistic Lock UUID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemOptimisticLockUuid?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Number of failed replications without any user actions.
   * @nullable
   */
  noOfFailedReplicationsWithoutManualInteraction?: BigNumber;
  /**
   * Person ID.
   * @nullable
   */
  personId?: BigNumber;
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
   * Scheduled Replication Time.
   * Maximum length: 255.
   * @nullable
   */
  scheduledReplicationTime?: string;
  /**
   * Search Field for Replication Status.
   * Maximum length: 255.
   * @nullable
   */
  searchFieldOverallStatus?: string;
  /**
   * Search Field for Person ID.
   * @nullable
   */
  searchFieldPersonId?: BigNumber;
  /**
   * Search Field for Replication Processing Time.
   * Maximum length: 255.
   * @nullable
   */
  searchFieldReplicationProcessingTime?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[EmployeeDataReplicationConfirmation]] entity.
   */
  lastConfirmationNav!: EmployeeDataReplicationConfirmation;
  /**
   * One-to-one navigation property to the [[EmployeeDataReplicationConfirmation]] entity.
   */
  lastConfirmationWithSuccessNav!: EmployeeDataReplicationConfirmation;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[EmployeeDataReplicationNotification]] entity.
   */
  lastReplicationStartNotificationNav!: EmployeeDataReplicationNotification;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  searchFieldOverallStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  usersSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmployeeDataReplicationElement`.
   * @returns A builder that constructs instances of entity type `EmployeeDataReplicationElement`.
   */
  static builder(): EntityBuilderType<EmployeeDataReplicationElement, EmployeeDataReplicationElementTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeDataReplicationElement);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeDataReplicationElement` entity type.
   * @returns A `EmployeeDataReplicationElement` request builder.
   */
  static requestBuilder(): EmployeeDataReplicationElementRequestBuilder {
    return new EmployeeDataReplicationElementRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeDataReplicationElement`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeDataReplicationElement`.
   */
  static customField(fieldName: string): CustomField<EmployeeDataReplicationElement> {
    return Entity.customFieldSelector(fieldName, EmployeeDataReplicationElement);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationType } from './EmployeeDataReplicationConfirmation';
import { EmployeeDataReplicationNotification, EmployeeDataReplicationNotificationType } from './EmployeeDataReplicationNotification';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PerPerson, PerPersonType } from './PerPerson';
import { ReplicationTargetSystem, ReplicationTargetSystemType } from './ReplicationTargetSystem';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeeDataReplicationElementType {
  allowReplicationInCorrectionPhase?: boolean;
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
  firstReplicationStartTimeSinceLastSuccess?: Moment;
  isWaitingForConfirmation?: boolean;
  lastConfirmation?: string;
  lastConfirmationWithSuccess?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastReplicationStartNotification?: string;
  lastReplicationStartTime?: string;
  mdfSystemOptimisticLockUuid?: string;
  mdfSystemRecordStatus?: string;
  noOfFailedReplicationsWithoutManualInteraction?: BigNumber;
  personId?: BigNumber;
  replicationContentType?: string;
  replicationProcessingTime?: string;
  replicationTargetSystem?: string;
  replicationUpdateStatus?: string;
  scheduledReplicationTime?: string;
  searchFieldOverallStatus?: string;
  searchFieldPersonId?: BigNumber;
  searchFieldReplicationProcessingTime?: string;
  usersSysId?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastConfirmationNav: EmployeeDataReplicationConfirmationType;
  lastConfirmationWithSuccessNav: EmployeeDataReplicationConfirmationType;
  lastModifiedByNav: UserType;
  lastReplicationStartNotificationNav: EmployeeDataReplicationNotificationType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  personNav: PerPersonType;
  replicationContentTypeNav: MdfEnumValueType;
  replicationTargetSystemNav: ReplicationTargetSystemType;
  replicationUpdateStatusNav: MdfEnumValueType;
  searchFieldOverallStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface EmployeeDataReplicationElementTypeForceMandatory {
  allowReplicationInCorrectionPhase: boolean;
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
  firstReplicationStartTimeSinceLastSuccess: Moment;
  isWaitingForConfirmation: boolean;
  lastConfirmation: string;
  lastConfirmationWithSuccess: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastReplicationStartNotification: string;
  lastReplicationStartTime: string;
  mdfSystemOptimisticLockUuid: string;
  mdfSystemRecordStatus: string;
  noOfFailedReplicationsWithoutManualInteraction: BigNumber;
  personId: BigNumber;
  replicationContentType: string;
  replicationProcessingTime: string;
  replicationTargetSystem: string;
  replicationUpdateStatus: string;
  scheduledReplicationTime: string;
  searchFieldOverallStatus: string;
  searchFieldPersonId: BigNumber;
  searchFieldReplicationProcessingTime: string;
  usersSysId: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastConfirmationNav: EmployeeDataReplicationConfirmationType;
  lastConfirmationWithSuccessNav: EmployeeDataReplicationConfirmationType;
  lastModifiedByNav: UserType;
  lastReplicationStartNotificationNav: EmployeeDataReplicationNotificationType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  personNav: PerPersonType;
  replicationContentTypeNav: MdfEnumValueType;
  replicationTargetSystemNav: ReplicationTargetSystemType;
  replicationUpdateStatusNav: MdfEnumValueType;
  searchFieldOverallStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace EmployeeDataReplicationElement {
  /**
   * Static representation of the [[allowReplicationInCorrectionPhase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_REPLICATION_IN_CORRECTION_PHASE: BooleanField<EmployeeDataReplicationElement> = new BooleanField('allowReplicationInCorrectionPhase', EmployeeDataReplicationElement, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<EmployeeDataReplicationElement> = new StringField('country', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeDataReplicationElement> = new StringField('createdBy', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeDataReplicationElement> = new DateField('createdDateTime', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeDataReplicationElement> = new StringField('externalCode', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<EmployeeDataReplicationElement> = new StringField('externalName_de_DE', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<EmployeeDataReplicationElement> = new StringField('externalName_defaultValue', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<EmployeeDataReplicationElement> = new StringField('externalName_en_DEBUG', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<EmployeeDataReplicationElement> = new StringField('externalName_en_GB', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<EmployeeDataReplicationElement> = new StringField('externalName_en_US', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<EmployeeDataReplicationElement> = new StringField('externalName_es_ES', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<EmployeeDataReplicationElement> = new StringField('externalName_es_MX', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<EmployeeDataReplicationElement> = new StringField('externalName_fr_CA', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<EmployeeDataReplicationElement> = new StringField('externalName_fr_FR', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<EmployeeDataReplicationElement> = new StringField('externalName_it_IT', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<EmployeeDataReplicationElement> = new StringField('externalName_localized', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<EmployeeDataReplicationElement> = new StringField('externalName_nl_NL', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<EmployeeDataReplicationElement> = new StringField('externalName_pt_BR', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<EmployeeDataReplicationElement> = new StringField('externalName_zh_CN', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[firstReplicationStartTimeSinceLastSuccess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_REPLICATION_START_TIME_SINCE_LAST_SUCCESS: DateField<EmployeeDataReplicationElement> = new DateField('firstReplicationStartTimeSinceLastSuccess', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isWaitingForConfirmation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_WAITING_FOR_CONFIRMATION: BooleanField<EmployeeDataReplicationElement> = new BooleanField('isWaitingForConfirmation', EmployeeDataReplicationElement, 'Edm.Boolean');
  /**
   * Static representation of the [[lastConfirmation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CONFIRMATION: StringField<EmployeeDataReplicationElement> = new StringField('lastConfirmation', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[lastConfirmationWithSuccess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CONFIRMATION_WITH_SUCCESS: StringField<EmployeeDataReplicationElement> = new StringField('lastConfirmationWithSuccess', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeDataReplicationElement> = new StringField('lastModifiedBy', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeDataReplicationElement> = new DateField('lastModifiedDateTime', EmployeeDataReplicationElement, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastReplicationStartNotification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_REPLICATION_START_NOTIFICATION: StringField<EmployeeDataReplicationElement> = new StringField('lastReplicationStartNotification', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[lastReplicationStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_REPLICATION_START_TIME: StringField<EmployeeDataReplicationElement> = new StringField('lastReplicationStartTime', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemOptimisticLockUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OPTIMISTIC_LOCK_UUID: StringField<EmployeeDataReplicationElement> = new StringField('mdfSystemOptimisticLockUUID', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeDataReplicationElement> = new StringField('mdfSystemRecordStatus', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[noOfFailedReplicationsWithoutManualInteraction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_FAILED_REPLICATIONS_WITHOUT_MANUAL_INTERACTION: BigNumberField<EmployeeDataReplicationElement> = new BigNumberField('noOfFailedReplicationsWithoutManualInteraction', EmployeeDataReplicationElement, 'Edm.Int64');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: BigNumberField<EmployeeDataReplicationElement> = new BigNumberField('personId', EmployeeDataReplicationElement, 'Edm.Int64');
  /**
   * Static representation of the [[replicationContentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE: StringField<EmployeeDataReplicationElement> = new StringField('replicationContentType', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[replicationProcessingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_PROCESSING_TIME: StringField<EmployeeDataReplicationElement> = new StringField('replicationProcessingTime', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[replicationTargetSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM: StringField<EmployeeDataReplicationElement> = new StringField('replicationTargetSystem', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[replicationUpdateStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_UPDATE_STATUS: StringField<EmployeeDataReplicationElement> = new StringField('replicationUpdateStatus', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[scheduledReplicationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_REPLICATION_TIME: StringField<EmployeeDataReplicationElement> = new StringField('scheduledReplicationTime', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[searchFieldOverallStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_FIELD_OVERALL_STATUS: StringField<EmployeeDataReplicationElement> = new StringField('searchFieldOverallStatus', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[searchFieldPersonId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_FIELD_PERSON_ID: BigNumberField<EmployeeDataReplicationElement> = new BigNumberField('searchFieldPersonId', EmployeeDataReplicationElement, 'Edm.Int64');
  /**
   * Static representation of the [[searchFieldReplicationProcessingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_FIELD_REPLICATION_PROCESSING_TIME: StringField<EmployeeDataReplicationElement> = new StringField('searchFieldReplicationProcessingTime', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<EmployeeDataReplicationElement> = new StringField('usersSysId', EmployeeDataReplicationElement, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<EmployeeDataReplicationElement, Country> = new Link('countryNav', EmployeeDataReplicationElement, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeDataReplicationElement, User> = new OneToOneLink('createdByNav', EmployeeDataReplicationElement, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<EmployeeDataReplicationElement, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', EmployeeDataReplicationElement, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastConfirmationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CONFIRMATION_NAV: OneToOneLink<EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation> = new OneToOneLink('lastConfirmationNav', EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation);
  /**
   * Static representation of the one-to-one navigation property [[lastConfirmationWithSuccessNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CONFIRMATION_WITH_SUCCESS_NAV: OneToOneLink<EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation> = new OneToOneLink('lastConfirmationWithSuccessNav', EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeDataReplicationElement, User> = new OneToOneLink('lastModifiedByNav', EmployeeDataReplicationElement, User);
  /**
   * Static representation of the one-to-one navigation property [[lastReplicationStartNotificationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_REPLICATION_START_NOTIFICATION_NAV: OneToOneLink<EmployeeDataReplicationElement, EmployeeDataReplicationNotification> = new OneToOneLink('lastReplicationStartNotificationNav', EmployeeDataReplicationElement, EmployeeDataReplicationNotification);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeDataReplicationElement, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeDataReplicationElement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<EmployeeDataReplicationElement, PerPerson> = new OneToOneLink('personNav', EmployeeDataReplicationElement, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[replicationContentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_CONTENT_TYPE_NAV: OneToOneLink<EmployeeDataReplicationElement, MdfEnumValue> = new OneToOneLink('replicationContentTypeNav', EmployeeDataReplicationElement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[replicationTargetSystemNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_TARGET_SYSTEM_NAV: OneToOneLink<EmployeeDataReplicationElement, ReplicationTargetSystem> = new OneToOneLink('replicationTargetSystemNav', EmployeeDataReplicationElement, ReplicationTargetSystem);
  /**
   * Static representation of the one-to-one navigation property [[replicationUpdateStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPLICATION_UPDATE_STATUS_NAV: OneToOneLink<EmployeeDataReplicationElement, MdfEnumValue> = new OneToOneLink('replicationUpdateStatusNav', EmployeeDataReplicationElement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[searchFieldOverallStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_FIELD_OVERALL_STATUS_NAV: OneToOneLink<EmployeeDataReplicationElement, MdfEnumValue> = new OneToOneLink('searchFieldOverallStatusNav', EmployeeDataReplicationElement, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_NAV: OneToOneLink<EmployeeDataReplicationElement, User> = new OneToOneLink('usersSysIdNav', EmployeeDataReplicationElement, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeeDataReplicationElement, WfRequest> = new Link('wfRequestNav', EmployeeDataReplicationElement, WfRequest);
  /**
   * All fields of the EmployeeDataReplicationElement entity.
   */
  export const _allFields: Array<BooleanField<EmployeeDataReplicationElement> | StringField<EmployeeDataReplicationElement> | DateField<EmployeeDataReplicationElement> | BigNumberField<EmployeeDataReplicationElement> | Link<EmployeeDataReplicationElement, Country> | OneToOneLink<EmployeeDataReplicationElement, User> | Link<EmployeeDataReplicationElement, MdfLocalizedValue> | OneToOneLink<EmployeeDataReplicationElement, EmployeeDataReplicationConfirmation> | OneToOneLink<EmployeeDataReplicationElement, EmployeeDataReplicationNotification> | OneToOneLink<EmployeeDataReplicationElement, MdfEnumValue> | OneToOneLink<EmployeeDataReplicationElement, PerPerson> | OneToOneLink<EmployeeDataReplicationElement, ReplicationTargetSystem> | Link<EmployeeDataReplicationElement, WfRequest>> = [
    EmployeeDataReplicationElement.ALLOW_REPLICATION_IN_CORRECTION_PHASE,
    EmployeeDataReplicationElement.COUNTRY,
    EmployeeDataReplicationElement.CREATED_BY,
    EmployeeDataReplicationElement.CREATED_DATE_TIME,
    EmployeeDataReplicationElement.EXTERNAL_CODE,
    EmployeeDataReplicationElement.EXTERNAL_NAME_DE_DE,
    EmployeeDataReplicationElement.EXTERNAL_NAME_DEFAULT_VALUE,
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_DEBUG,
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_GB,
    EmployeeDataReplicationElement.EXTERNAL_NAME_EN_US,
    EmployeeDataReplicationElement.EXTERNAL_NAME_ES_ES,
    EmployeeDataReplicationElement.EXTERNAL_NAME_ES_MX,
    EmployeeDataReplicationElement.EXTERNAL_NAME_FR_CA,
    EmployeeDataReplicationElement.EXTERNAL_NAME_FR_FR,
    EmployeeDataReplicationElement.EXTERNAL_NAME_IT_IT,
    EmployeeDataReplicationElement.EXTERNAL_NAME_LOCALIZED,
    EmployeeDataReplicationElement.EXTERNAL_NAME_NL_NL,
    EmployeeDataReplicationElement.EXTERNAL_NAME_PT_BR,
    EmployeeDataReplicationElement.EXTERNAL_NAME_ZH_CN,
    EmployeeDataReplicationElement.FIRST_REPLICATION_START_TIME_SINCE_LAST_SUCCESS,
    EmployeeDataReplicationElement.IS_WAITING_FOR_CONFIRMATION,
    EmployeeDataReplicationElement.LAST_CONFIRMATION,
    EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS,
    EmployeeDataReplicationElement.LAST_MODIFIED_BY,
    EmployeeDataReplicationElement.LAST_MODIFIED_DATE_TIME,
    EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION,
    EmployeeDataReplicationElement.LAST_REPLICATION_START_TIME,
    EmployeeDataReplicationElement.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID,
    EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS,
    EmployeeDataReplicationElement.NO_OF_FAILED_REPLICATIONS_WITHOUT_MANUAL_INTERACTION,
    EmployeeDataReplicationElement.PERSON_ID,
    EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE,
    EmployeeDataReplicationElement.REPLICATION_PROCESSING_TIME,
    EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM,
    EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS,
    EmployeeDataReplicationElement.SCHEDULED_REPLICATION_TIME,
    EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS,
    EmployeeDataReplicationElement.SEARCH_FIELD_PERSON_ID,
    EmployeeDataReplicationElement.SEARCH_FIELD_REPLICATION_PROCESSING_TIME,
    EmployeeDataReplicationElement.USERS_SYS_ID,
    EmployeeDataReplicationElement.COUNTRY_NAV,
    EmployeeDataReplicationElement.CREATED_BY_NAV,
    EmployeeDataReplicationElement.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    EmployeeDataReplicationElement.LAST_CONFIRMATION_NAV,
    EmployeeDataReplicationElement.LAST_CONFIRMATION_WITH_SUCCESS_NAV,
    EmployeeDataReplicationElement.LAST_MODIFIED_BY_NAV,
    EmployeeDataReplicationElement.LAST_REPLICATION_START_NOTIFICATION_NAV,
    EmployeeDataReplicationElement.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeDataReplicationElement.PERSON_NAV,
    EmployeeDataReplicationElement.REPLICATION_CONTENT_TYPE_NAV,
    EmployeeDataReplicationElement.REPLICATION_TARGET_SYSTEM_NAV,
    EmployeeDataReplicationElement.REPLICATION_UPDATE_STATUS_NAV,
    EmployeeDataReplicationElement.SEARCH_FIELD_OVERALL_STATUS_NAV,
    EmployeeDataReplicationElement.USERS_SYS_ID_NAV,
    EmployeeDataReplicationElement.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeDataReplicationElement> = new AllFields('*', EmployeeDataReplicationElement);
  /**
   * All key fields of the EmployeeDataReplicationElement entity.
   */
  export const _keyFields: Array<Selectable<EmployeeDataReplicationElement>> = [EmployeeDataReplicationElement.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeDataReplicationElement.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeDataReplicationElement> } = EmployeeDataReplicationElement._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeDataReplicationElement> }, field: Selectable<EmployeeDataReplicationElement>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
