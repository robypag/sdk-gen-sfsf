/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WfRequestStepRequestBuilder } from './WfRequestStepRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WfRequestStep" of service "SFOData".
 */
export class WfRequestStep extends Entity implements WfRequestStepType {
  /**
   * Technical entity name for WfRequestStep.
   */
  static _entityName = 'WfRequestStep';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WfRequestStep.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Action Type.
   * Maximum length: 32.
   * @nullable
   */
  actionType?: string;
  /**
   * Approver Type.
   * Maximum length: 32.
   * @nullable
   */
  approverType?: string;
  /**
   * Assigned To.
   * Maximum length: 100.
   * @nullable
   */
  assignedTo?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Owner Id.
   * Maximum length: 100.
   * @nullable
   */
  ownerId?: string;
  /**
   * Processed By.
   * Maximum length: 100.
   * @nullable
   */
  processedBy?: string;
  /**
   * Related To.
   * Maximum length: 32.
   * @nullable
   */
  relatedTo?: string;
  /**
   * Role.
   * Maximum length: 30.
   * @nullable
   */
  role?: string;
  /**
   * Status.
   * Maximum length: 30.
   * @nullable
   */
  status?: string;
  /**
   * Step Number.
   * @nullable
   */
  stepNum?: BigNumber;
  /**
   * WfRequest Id.
   * @nullable
   */
  wfRequestId?: BigNumber;
  /**
   * WfRequestStep Id.
   */
  wfRequestStepId!: BigNumber;
  /**
   * One-to-one navigation property to the [[FoDynamicRole]] entity.
   */
  dynamicRoleNav!: FoDynamicRole;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  ownerNav!: User;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  positionNav!: Position[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  processedByNav!: User;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `WfRequestStep`.
   * @returns A builder that constructs instances of entity type `WfRequestStep`.
   */
  static builder(): EntityBuilderType<WfRequestStep, WfRequestStepTypeForceMandatory> {
    return Entity.entityBuilder(WfRequestStep);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WfRequestStep` entity type.
   * @returns A `WfRequestStep` request builder.
   */
  static requestBuilder(): WfRequestStepRequestBuilder {
    return new WfRequestStepRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequestStep`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WfRequestStep`.
   */
  static customField(fieldName: string): CustomField<WfRequestStep> {
    return Entity.customFieldSelector(fieldName, WfRequestStep);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoDynamicRole, FoDynamicRoleType } from './FoDynamicRole';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';
import { WfRequest, WfRequestType } from './WfRequest';

export interface WfRequestStepType {
  actionType?: string;
  approverType?: string;
  assignedTo?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  ownerId?: string;
  processedBy?: string;
  relatedTo?: string;
  role?: string;
  status?: string;
  stepNum?: BigNumber;
  wfRequestId?: BigNumber;
  wfRequestStepId: BigNumber;
  dynamicRoleNav: FoDynamicRoleType;
  ownerNav: UserType;
  positionNav: PositionType[];
  processedByNav: UserType;
  wfRequestNav: WfRequestType;
}

export interface WfRequestStepTypeForceMandatory {
  actionType: string;
  approverType: string;
  assignedTo: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  ownerId: string;
  processedBy: string;
  relatedTo: string;
  role: string;
  status: string;
  stepNum: BigNumber;
  wfRequestId: BigNumber;
  wfRequestStepId: BigNumber;
  dynamicRoleNav: FoDynamicRoleType;
  ownerNav: UserType;
  positionNav: PositionType[];
  processedByNav: UserType;
  wfRequestNav: WfRequestType;
}

export namespace WfRequestStep {
  /**
   * Static representation of the [[actionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_TYPE: StringField<WfRequestStep> = new StringField('actionType', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[approverType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_TYPE: StringField<WfRequestStep> = new StringField('approverType', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[assignedTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNED_TO: StringField<WfRequestStep> = new StringField('assignedTo', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WfRequestStep> = new StringField('createdBy', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WfRequestStep> = new DateField('createdDateTime', WfRequestStep, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<WfRequestStep> = new DateField('createdOn', WfRequestStep, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WfRequestStep> = new StringField('lastModifiedBy', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WfRequestStep> = new DateField('lastModifiedDateTime', WfRequestStep, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<WfRequestStep> = new DateField('lastModifiedOn', WfRequestStep, 'Edm.DateTime');
  /**
   * Static representation of the [[ownerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_ID: StringField<WfRequestStep> = new StringField('ownerId', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[processedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSED_BY: StringField<WfRequestStep> = new StringField('processedBy', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[relatedTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_TO: StringField<WfRequestStep> = new StringField('relatedTo', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[role]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE: StringField<WfRequestStep> = new StringField('role', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<WfRequestStep> = new StringField('status', WfRequestStep, 'Edm.String');
  /**
   * Static representation of the [[stepNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_NUM: BigNumberField<WfRequestStep> = new BigNumberField('stepNum', WfRequestStep, 'Edm.Int64');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WfRequestStep> = new BigNumberField('wfRequestId', WfRequestStep, 'Edm.Int64');
  /**
   * Static representation of the [[wfRequestStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_STEP_ID: BigNumberField<WfRequestStep> = new BigNumberField('wfRequestStepId', WfRequestStep, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[dynamicRoleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DYNAMIC_ROLE_NAV: OneToOneLink<WfRequestStep, FoDynamicRole> = new OneToOneLink('dynamicRoleNav', WfRequestStep, FoDynamicRole);
  /**
   * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_NAV: OneToOneLink<WfRequestStep, User> = new OneToOneLink('ownerNav', WfRequestStep, User);
  /**
   * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: Link<WfRequestStep, Position> = new Link('positionNav', WfRequestStep, Position);
  /**
   * Static representation of the one-to-one navigation property [[processedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSED_BY_NAV: OneToOneLink<WfRequestStep, User> = new OneToOneLink('processedByNav', WfRequestStep, User);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<WfRequestStep, WfRequest> = new OneToOneLink('wfRequestNav', WfRequestStep, WfRequest);
  /**
   * All fields of the WfRequestStep entity.
   */
  export const _allFields: Array<StringField<WfRequestStep> | DateField<WfRequestStep> | BigNumberField<WfRequestStep> | OneToOneLink<WfRequestStep, FoDynamicRole> | OneToOneLink<WfRequestStep, User> | Link<WfRequestStep, Position> | OneToOneLink<WfRequestStep, WfRequest>> = [
    WfRequestStep.ACTION_TYPE,
    WfRequestStep.APPROVER_TYPE,
    WfRequestStep.ASSIGNED_TO,
    WfRequestStep.CREATED_BY,
    WfRequestStep.CREATED_DATE_TIME,
    WfRequestStep.CREATED_ON,
    WfRequestStep.LAST_MODIFIED_BY,
    WfRequestStep.LAST_MODIFIED_DATE_TIME,
    WfRequestStep.LAST_MODIFIED_ON,
    WfRequestStep.OWNER_ID,
    WfRequestStep.PROCESSED_BY,
    WfRequestStep.RELATED_TO,
    WfRequestStep.ROLE,
    WfRequestStep.STATUS,
    WfRequestStep.STEP_NUM,
    WfRequestStep.WF_REQUEST_ID,
    WfRequestStep.WF_REQUEST_STEP_ID,
    WfRequestStep.DYNAMIC_ROLE_NAV,
    WfRequestStep.OWNER_NAV,
    WfRequestStep.POSITION_NAV,
    WfRequestStep.PROCESSED_BY_NAV,
    WfRequestStep.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WfRequestStep> = new AllFields('*', WfRequestStep);
  /**
   * All key fields of the WfRequestStep entity.
   */
  export const _keyFields: Array<Selectable<WfRequestStep>> = [WfRequestStep.WF_REQUEST_STEP_ID];
  /**
   * Mapping of all key field names to the respective static field property WfRequestStep.
   */
  export const _keys: { [keys: string]: Selectable<WfRequestStep> } = WfRequestStep._keyFields.reduce((acc: { [keys: string]: Selectable<WfRequestStep> }, field: Selectable<WfRequestStep>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
