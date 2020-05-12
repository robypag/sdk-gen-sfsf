/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WfRequestUiDataRequestBuilder } from './WfRequestUiDataRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WfRequestUIData" of service "SFOData".
 */
export class WfRequestUiData extends Entity implements WfRequestUiDataType {
  /**
   * Technical entity name for WfRequestUiData.
   */
  static _entityName = 'WfRequestUIData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WfRequestUiData.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Action Type.
   * @nullable
   */
  actionType?: string;
  /**
   * Actions.
   * @nullable
   */
  actions?: string;
  /**
   * Assignee User Id.
   * @nullable
   */
  assigneeUserId?: string;
  /**
   * Assignee User Name.
   * @nullable
   */
  assigneeUserName?: string;
  /**
   * Business Unit.
   * @nullable
   */
  businessUnit?: string;
  /**
   * Changed Data.
   * @nullable
   */
  changedData?: string;
  /**
   * Cost Center.
   * @nullable
   */
  costCenter?: string;
  /**
   * Deep Link.
   * @nullable
   */
  deeplink?: string;
  /**
   * Department.
   * @nullable
   */
  department?: string;
  /**
   * Division.
   * @nullable
   */
  division?: string;
  /**
   * Effective Date.
   * @nullable
   */
  effectiveDate?: string;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: string;
  /**
   * isAssigned.
   * @nullable
   */
  isAssigned?: boolean;
  /**
   * Is Effective Date Type.
   * @nullable
   */
  isEffectiveDateType?: boolean;
  /**
   * Is Object Base.
   * @nullable
   */
  isObjectBase?: boolean;
  /**
   * Job Title.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Legal Entity.
   * @nullable
   */
  legalEntity?: string;
  /**
   * Location.
   * @nullable
   */
  location?: string;
  /**
   * Object Name.
   * @nullable
   */
  objectName?: string;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: string;
  /**
   * Operate Date.
   * @nullable
   */
  operateDate?: string;
  /**
   * Operate Type.
   * @nullable
   */
  operateType?: string;
  /**
   * Operate User Id.
   * @nullable
   */
  operateUserId?: string;
  /**
   * Operate User Name.
   * @nullable
   */
  operateUserName?: string;
  /**
   * Received On.
   * @nullable
   */
  receivedOn?: string;
  /**
   * Subject User Id.
   * @nullable
   */
  subjectUserId?: string;
  /**
   * Subject User Name.
   * @nullable
   */
  subjectUserName?: string;
  /**
   * ToDo Subject Line.
   * @nullable
   */
  todoSubjectLine?: string;
  /**
   * Workflow Request Id.
   */
  wfRequestId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `WfRequestUiData`.
   * @returns A builder that constructs instances of entity type `WfRequestUiData`.
   */
  static builder(): EntityBuilderType<WfRequestUiData, WfRequestUiDataTypeForceMandatory> {
    return Entity.entityBuilder(WfRequestUiData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WfRequestUiData` entity type.
   * @returns A `WfRequestUiData` request builder.
   */
  static requestBuilder(): WfRequestUiDataRequestBuilder {
    return new WfRequestUiDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestUiData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WfRequestUiData`.
   */
  static customField(fieldName: string): CustomField<WfRequestUiData> {
    return Entity.customFieldSelector(fieldName, WfRequestUiData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WfRequestUiDataType {
  actionType?: string;
  actions?: string;
  assigneeUserId?: string;
  assigneeUserName?: string;
  businessUnit?: string;
  changedData?: string;
  costCenter?: string;
  deeplink?: string;
  department?: string;
  division?: string;
  effectiveDate?: string;
  eventReason?: string;
  isAssigned?: boolean;
  isEffectiveDateType?: boolean;
  isObjectBase?: boolean;
  jobTitle?: string;
  legalEntity?: string;
  location?: string;
  objectName?: string;
  objectType?: string;
  operateDate?: string;
  operateType?: string;
  operateUserId?: string;
  operateUserName?: string;
  receivedOn?: string;
  subjectUserId?: string;
  subjectUserName?: string;
  todoSubjectLine?: string;
  wfRequestId: BigNumber;
}

export interface WfRequestUiDataTypeForceMandatory {
  actionType: string;
  actions: string;
  assigneeUserId: string;
  assigneeUserName: string;
  businessUnit: string;
  changedData: string;
  costCenter: string;
  deeplink: string;
  department: string;
  division: string;
  effectiveDate: string;
  eventReason: string;
  isAssigned: boolean;
  isEffectiveDateType: boolean;
  isObjectBase: boolean;
  jobTitle: string;
  legalEntity: string;
  location: string;
  objectName: string;
  objectType: string;
  operateDate: string;
  operateType: string;
  operateUserId: string;
  operateUserName: string;
  receivedOn: string;
  subjectUserId: string;
  subjectUserName: string;
  todoSubjectLine: string;
  wfRequestId: BigNumber;
}

export namespace WfRequestUiData {
  /**
   * Static representation of the [[actionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_TYPE: StringField<WfRequestUiData> = new StringField('actionType', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[actions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIONS: StringField<WfRequestUiData> = new StringField('actions', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[assigneeUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNEE_USER_ID: StringField<WfRequestUiData> = new StringField('assigneeUserId', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[assigneeUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNEE_USER_NAME: StringField<WfRequestUiData> = new StringField('assigneeUserName', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[businessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT: StringField<WfRequestUiData> = new StringField('businessUnit', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[changedData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_DATA: StringField<WfRequestUiData> = new StringField('changedData', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<WfRequestUiData> = new StringField('costCenter', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[deeplink]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEEPLINK: StringField<WfRequestUiData> = new StringField('deeplink', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<WfRequestUiData> = new StringField('department', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<WfRequestUiData> = new StringField('division', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[effectiveDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_DATE: StringField<WfRequestUiData> = new StringField('effectiveDate', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<WfRequestUiData> = new StringField('eventReason', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[isAssigned]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ASSIGNED: BooleanField<WfRequestUiData> = new BooleanField('isAssigned', WfRequestUiData, 'Edm.Boolean');
  /**
   * Static representation of the [[isEffectiveDateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EFFECTIVE_DATE_TYPE: BooleanField<WfRequestUiData> = new BooleanField('isEffectiveDateType', WfRequestUiData, 'Edm.Boolean');
  /**
   * Static representation of the [[isObjectBase]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_OBJECT_BASE: BooleanField<WfRequestUiData> = new BooleanField('isObjectBase', WfRequestUiData, 'Edm.Boolean');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<WfRequestUiData> = new StringField('jobTitle', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[legalEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY: StringField<WfRequestUiData> = new StringField('legalEntity', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<WfRequestUiData> = new StringField('location', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[objectName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_NAME: StringField<WfRequestUiData> = new StringField('objectName', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[objectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_TYPE: StringField<WfRequestUiData> = new StringField('objectType', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[operateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATE_DATE: StringField<WfRequestUiData> = new StringField('operateDate', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[operateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATE_TYPE: StringField<WfRequestUiData> = new StringField('operateType', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[operateUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATE_USER_ID: StringField<WfRequestUiData> = new StringField('operateUserId', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[operateUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATE_USER_NAME: StringField<WfRequestUiData> = new StringField('operateUserName', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[receivedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECEIVED_ON: StringField<WfRequestUiData> = new StringField('receivedOn', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<WfRequestUiData> = new StringField('subjectUserId', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[subjectUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_NAME: StringField<WfRequestUiData> = new StringField('subjectUserName', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[todoSubjectLine]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODO_SUBJECT_LINE: StringField<WfRequestUiData> = new StringField('todoSubjectLine', WfRequestUiData, 'Edm.String');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WfRequestUiData> = new BigNumberField('wfRequestId', WfRequestUiData, 'Edm.Int64');
  /**
   * All fields of the WfRequestUiData entity.
   */
  export const _allFields: Array<StringField<WfRequestUiData> | BooleanField<WfRequestUiData> | BigNumberField<WfRequestUiData>> = [
    WfRequestUiData.ACTION_TYPE,
    WfRequestUiData.ACTIONS,
    WfRequestUiData.ASSIGNEE_USER_ID,
    WfRequestUiData.ASSIGNEE_USER_NAME,
    WfRequestUiData.BUSINESS_UNIT,
    WfRequestUiData.CHANGED_DATA,
    WfRequestUiData.COST_CENTER,
    WfRequestUiData.DEEPLINK,
    WfRequestUiData.DEPARTMENT,
    WfRequestUiData.DIVISION,
    WfRequestUiData.EFFECTIVE_DATE,
    WfRequestUiData.EVENT_REASON,
    WfRequestUiData.IS_ASSIGNED,
    WfRequestUiData.IS_EFFECTIVE_DATE_TYPE,
    WfRequestUiData.IS_OBJECT_BASE,
    WfRequestUiData.JOB_TITLE,
    WfRequestUiData.LEGAL_ENTITY,
    WfRequestUiData.LOCATION,
    WfRequestUiData.OBJECT_NAME,
    WfRequestUiData.OBJECT_TYPE,
    WfRequestUiData.OPERATE_DATE,
    WfRequestUiData.OPERATE_TYPE,
    WfRequestUiData.OPERATE_USER_ID,
    WfRequestUiData.OPERATE_USER_NAME,
    WfRequestUiData.RECEIVED_ON,
    WfRequestUiData.SUBJECT_USER_ID,
    WfRequestUiData.SUBJECT_USER_NAME,
    WfRequestUiData.TODO_SUBJECT_LINE,
    WfRequestUiData.WF_REQUEST_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WfRequestUiData> = new AllFields('*', WfRequestUiData);
  /**
   * All key fields of the WfRequestUiData entity.
   */
  export const _keyFields: Array<Selectable<WfRequestUiData>> = [WfRequestUiData.WF_REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property WfRequestUiData.
   */
  export const _keys: { [keys: string]: Selectable<WfRequestUiData> } = WfRequestUiData._keyFields.reduce((acc: { [keys: string]: Selectable<WfRequestUiData> }, field: Selectable<WfRequestUiData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
