/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpWfRequestRequestBuilder } from './EmpWfRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpWfRequest" of service "SFOData".
 */
export class EmpWfRequest extends Entity implements EmpWfRequestType {
  /**
   * Technical entity name for EmpWfRequest.
   */
  static _entityName = 'EmpWfRequest';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpWfRequest.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Action Type.
   * Maximum length: 128.
   * @nullable
   */
  actionType?: string;
  /**
   * Effective Date.
   * @nullable
   */
  effectiveDate?: Moment;
  /**
   * EmpWfRequest Id.
   */
  empWfRequestId!: BigNumber;
  /**
   * Entity Type.
   * Maximum length: 128.
   * @nullable
   */
  entityType?: string;
  /**
   * Event Reason.
   * Maximum length: 32.
   * @nullable
   */
  eventReason?: string;
  /**
   * Request Type.
   * Maximum length: 128.
   * @nullable
   */
  requestType?: string;
  /**
   * Subject Id.
   * Maximum length: 1024.
   * @nullable
   */
  subjectId?: string;
  /**
   * WfConfig.
   * Maximum length: 32.
   * @nullable
   */
  wfConfig?: string;
  /**
   * WfRequest Id.
   * @nullable
   */
  wfRequestId?: BigNumber;
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  eventReasonNav!: FoEventReason[];
  /**
   * One-to-many navigation property to the [[EmpJob]] entity.
   */
  jobInfoNav!: EmpJob[];
  /**
   * One-to-one navigation property to the [[FoWfConfig]] entity.
   */
  wfConfigNav!: FoWfConfig;

  /**
   * Returns an entity builder to construct instances `EmpWfRequest`.
   * @returns A builder that constructs instances of entity type `EmpWfRequest`.
   */
  static builder(): EntityBuilderType<EmpWfRequest, EmpWfRequestTypeForceMandatory> {
    return Entity.entityBuilder(EmpWfRequest);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpWfRequest` entity type.
   * @returns A `EmpWfRequest` request builder.
   */
  static requestBuilder(): EmpWfRequestRequestBuilder {
    return new EmpWfRequestRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpWfRequest`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpWfRequest`.
   */
  static customField(fieldName: string): CustomField<EmpWfRequest> {
    return Entity.customFieldSelector(fieldName, EmpWfRequest);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { EmpJob, EmpJobType } from './EmpJob';
import { FoWfConfig, FoWfConfigType } from './FoWfConfig';

export interface EmpWfRequestType {
  actionType?: string;
  effectiveDate?: Moment;
  empWfRequestId: BigNumber;
  entityType?: string;
  eventReason?: string;
  requestType?: string;
  subjectId?: string;
  wfConfig?: string;
  wfRequestId?: BigNumber;
  eventReasonNav: FoEventReasonType[];
  jobInfoNav: EmpJobType[];
  wfConfigNav: FoWfConfigType;
}

export interface EmpWfRequestTypeForceMandatory {
  actionType: string;
  effectiveDate: Moment;
  empWfRequestId: BigNumber;
  entityType: string;
  eventReason: string;
  requestType: string;
  subjectId: string;
  wfConfig: string;
  wfRequestId: BigNumber;
  eventReasonNav: FoEventReasonType[];
  jobInfoNav: EmpJobType[];
  wfConfigNav: FoWfConfigType;
}

export namespace EmpWfRequest {
  /**
   * Static representation of the [[actionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_TYPE: StringField<EmpWfRequest> = new StringField('actionType', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[effectiveDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_DATE: DateField<EmpWfRequest> = new DateField('effectiveDate', EmpWfRequest, 'Edm.DateTime');
  /**
   * Static representation of the [[empWfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_WF_REQUEST_ID: BigNumberField<EmpWfRequest> = new BigNumberField('empWfRequestId', EmpWfRequest, 'Edm.Int64');
  /**
   * Static representation of the [[entityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_TYPE: StringField<EmpWfRequest> = new StringField('entityType', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<EmpWfRequest> = new StringField('eventReason', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[requestType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_TYPE: StringField<EmpWfRequest> = new StringField('requestType', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[subjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_ID: StringField<EmpWfRequest> = new StringField('subjectId', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[wfConfig]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_CONFIG: StringField<EmpWfRequest> = new StringField('wfConfig', EmpWfRequest, 'Edm.String');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<EmpWfRequest> = new BigNumberField('wfRequestId', EmpWfRequest, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON_NAV: Link<EmpWfRequest, FoEventReason> = new Link('eventReasonNav', EmpWfRequest, FoEventReason);
  /**
   * Static representation of the one-to-many navigation property [[jobInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_INFO_NAV: Link<EmpWfRequest, EmpJob> = new Link('jobInfoNav', EmpWfRequest, EmpJob);
  /**
   * Static representation of the one-to-one navigation property [[wfConfigNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_CONFIG_NAV: OneToOneLink<EmpWfRequest, FoWfConfig> = new OneToOneLink('wfConfigNav', EmpWfRequest, FoWfConfig);
  /**
   * All fields of the EmpWfRequest entity.
   */
  export const _allFields: Array<StringField<EmpWfRequest> | DateField<EmpWfRequest> | BigNumberField<EmpWfRequest> | Link<EmpWfRequest, FoEventReason> | Link<EmpWfRequest, EmpJob> | OneToOneLink<EmpWfRequest, FoWfConfig>> = [
    EmpWfRequest.ACTION_TYPE,
    EmpWfRequest.EFFECTIVE_DATE,
    EmpWfRequest.EMP_WF_REQUEST_ID,
    EmpWfRequest.ENTITY_TYPE,
    EmpWfRequest.EVENT_REASON,
    EmpWfRequest.REQUEST_TYPE,
    EmpWfRequest.SUBJECT_ID,
    EmpWfRequest.WF_CONFIG,
    EmpWfRequest.WF_REQUEST_ID,
    EmpWfRequest.EVENT_REASON_NAV,
    EmpWfRequest.JOB_INFO_NAV,
    EmpWfRequest.WF_CONFIG_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpWfRequest> = new AllFields('*', EmpWfRequest);
  /**
   * All key fields of the EmpWfRequest entity.
   */
  export const _keyFields: Array<Selectable<EmpWfRequest>> = [EmpWfRequest.EMP_WF_REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpWfRequest.
   */
  export const _keys: { [keys: string]: Selectable<EmpWfRequest> } = EmpWfRequest._keyFields.reduce((acc: { [keys: string]: Selectable<EmpWfRequest> }, field: Selectable<EmpWfRequest>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
