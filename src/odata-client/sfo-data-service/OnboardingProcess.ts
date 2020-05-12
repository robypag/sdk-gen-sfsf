/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingProcessRequestBuilder } from './OnboardingProcessRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingProcess" of service "SFOData".
 */
export class OnboardingProcess extends Entity implements OnboardingProcessType {
  /**
   * Technical entity name for OnboardingProcess.
   */
  static _entityName = 'OnboardingProcess';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingProcess.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * candidateInfo.
   * Maximum length: 128.
   * @nullable
   */
  candidateInfo?: string;
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
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
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
   * onboardingProcessId.
   */
  onboardingProcessId!: BigNumber;
  /**
   * processConfig.
   * Maximum length: 128.
   * @nullable
   */
  processConfig?: string;
  /**
   * processStatus.
   * Maximum length: 255.
   * @nullable
   */
  processStatus?: string;
  /**
   * One-to-one navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  candidateInfoNav!: OnboardingCandidateInfo;
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
   * One-to-one navigation property to the [[OnboardingNewHireActivitiesStep]] entity.
   */
  newHireActivitiesStep!: OnboardingNewHireActivitiesStep;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  processStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `OnboardingProcess`.
   * @returns A builder that constructs instances of entity type `OnboardingProcess`.
   */
  static builder(): EntityBuilderType<OnboardingProcess, OnboardingProcessTypeForceMandatory> {
    return Entity.entityBuilder(OnboardingProcess);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingProcess` entity type.
   * @returns A `OnboardingProcess` request builder.
   */
  static requestBuilder(): OnboardingProcessRequestBuilder {
    return new OnboardingProcessRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingProcess`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingProcess`.
   */
  static customField(fieldName: string): CustomField<OnboardingProcess> {
    return Entity.customFieldSelector(fieldName, OnboardingProcess);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { OnboardingCandidateInfo, OnboardingCandidateInfoType } from './OnboardingCandidateInfo';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { OnboardingNewHireActivitiesStep, OnboardingNewHireActivitiesStepType } from './OnboardingNewHireActivitiesStep';
import { WfRequest, WfRequestType } from './WfRequest';

export interface OnboardingProcessType {
  candidateInfo?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  onboardingProcessId: BigNumber;
  processConfig?: string;
  processStatus?: string;
  candidateInfoNav: OnboardingCandidateInfoType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  newHireActivitiesStep: OnboardingNewHireActivitiesStepType;
  processStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface OnboardingProcessTypeForceMandatory {
  candidateInfo: string;
  createdBy: string;
  createdDateTime: Moment;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  onboardingProcessId: BigNumber;
  processConfig: string;
  processStatus: string;
  candidateInfoNav: OnboardingCandidateInfoType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  newHireActivitiesStep: OnboardingNewHireActivitiesStepType;
  processStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace OnboardingProcess {
  /**
   * Static representation of the [[candidateInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_INFO: StringField<OnboardingProcess> = new StringField('candidateInfo', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingProcess> = new StringField('createdBy', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingProcess> = new DateField('createdDateTime', OnboardingProcess, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<OnboardingProcess> = new StringField('externalName', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingProcess> = new StringField('lastModifiedBy', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingProcess> = new DateField('lastModifiedDateTime', OnboardingProcess, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingProcess> = new StringField('mdfSystemRecordStatus', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[onboardingProcessId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_PROCESS_ID: BigNumberField<OnboardingProcess> = new BigNumberField('onboardingProcessId', OnboardingProcess, 'Edm.Int64');
  /**
   * Static representation of the [[processConfig]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_CONFIG: StringField<OnboardingProcess> = new StringField('processConfig', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the [[processStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_STATUS: StringField<OnboardingProcess> = new StringField('processStatus', OnboardingProcess, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[candidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_INFO_NAV: OneToOneLink<OnboardingProcess, OnboardingCandidateInfo> = new OneToOneLink('candidateInfoNav', OnboardingProcess, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingProcess, User> = new OneToOneLink('createdByNav', OnboardingProcess, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingProcess, User> = new OneToOneLink('lastModifiedByNav', OnboardingProcess, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingProcess, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingProcess, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[newHireActivitiesStep]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_HIRE_ACTIVITIES_STEP: OneToOneLink<OnboardingProcess, OnboardingNewHireActivitiesStep> = new OneToOneLink('newHireActivitiesStep', OnboardingProcess, OnboardingNewHireActivitiesStep);
  /**
   * Static representation of the one-to-one navigation property [[processStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_STATUS_NAV: OneToOneLink<OnboardingProcess, MdfEnumValue> = new OneToOneLink('processStatusNav', OnboardingProcess, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<OnboardingProcess, WfRequest> = new Link('wfRequestNav', OnboardingProcess, WfRequest);
  /**
   * All fields of the OnboardingProcess entity.
   */
  export const _allFields: Array<StringField<OnboardingProcess> | DateField<OnboardingProcess> | BigNumberField<OnboardingProcess> | OneToOneLink<OnboardingProcess, OnboardingCandidateInfo> | OneToOneLink<OnboardingProcess, User> | OneToOneLink<OnboardingProcess, MdfEnumValue> | OneToOneLink<OnboardingProcess, OnboardingNewHireActivitiesStep> | Link<OnboardingProcess, WfRequest>> = [
    OnboardingProcess.CANDIDATE_INFO,
    OnboardingProcess.CREATED_BY,
    OnboardingProcess.CREATED_DATE_TIME,
    OnboardingProcess.EXTERNAL_NAME,
    OnboardingProcess.LAST_MODIFIED_BY,
    OnboardingProcess.LAST_MODIFIED_DATE_TIME,
    OnboardingProcess.MDF_SYSTEM_RECORD_STATUS,
    OnboardingProcess.ONBOARDING_PROCESS_ID,
    OnboardingProcess.PROCESS_CONFIG,
    OnboardingProcess.PROCESS_STATUS,
    OnboardingProcess.CANDIDATE_INFO_NAV,
    OnboardingProcess.CREATED_BY_NAV,
    OnboardingProcess.LAST_MODIFIED_BY_NAV,
    OnboardingProcess.MDF_SYSTEM_RECORD_STATUS_NAV,
    OnboardingProcess.NEW_HIRE_ACTIVITIES_STEP,
    OnboardingProcess.PROCESS_STATUS_NAV,
    OnboardingProcess.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingProcess> = new AllFields('*', OnboardingProcess);
  /**
   * All key fields of the OnboardingProcess entity.
   */
  export const _keyFields: Array<Selectable<OnboardingProcess>> = [OnboardingProcess.ONBOARDING_PROCESS_ID];
  /**
   * Mapping of all key field names to the respective static field property OnboardingProcess.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingProcess> } = OnboardingProcess._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingProcess> }, field: Selectable<OnboardingProcess>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
