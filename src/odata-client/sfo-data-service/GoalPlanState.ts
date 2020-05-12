/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalPlanStateRequestBuilder } from './GoalPlanStateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalPlanState" of service "SFOData".
 */
export class GoalPlanState extends Entity implements GoalPlanStateType {
  /**
   * Technical entity name for GoalPlanState.
   */
  static _entityName = 'GoalPlanState';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalPlanState.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * actionLabel.
   * @nullable
   */
  actionLabel?: string;
  /**
   * auditComments.
   * @nullable
   */
  auditComments?: string;
  /**
   * currentState.
   * @nullable
   */
  currentState?: boolean;
  /**
   * defaultState.
   * @nullable
   */
  defaultState?: boolean;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * planId.
   */
  planId!: BigNumber;
  /**
   * stateId.
   */
  stateId!: string;
  /**
   * stateLabel.
   * @nullable
   */
  stateLabel?: string;
  /**
   * targetStates.
   * @nullable
   */
  targetStates?: string;
  /**
   * userId.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `GoalPlanState`.
   * @returns A builder that constructs instances of entity type `GoalPlanState`.
   */
  static builder(): EntityBuilderType<GoalPlanState, GoalPlanStateTypeForceMandatory> {
    return Entity.entityBuilder(GoalPlanState);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalPlanState` entity type.
   * @returns A `GoalPlanState` request builder.
   */
  static requestBuilder(): GoalPlanStateRequestBuilder {
    return new GoalPlanStateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanState`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalPlanState`.
   */
  static customField(fieldName: string): CustomField<GoalPlanState> {
    return Entity.customFieldSelector(fieldName, GoalPlanState);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalPlanStateType {
  actionLabel?: string;
  auditComments?: string;
  currentState?: boolean;
  defaultState?: boolean;
  lastModified?: Moment;
  planId: BigNumber;
  stateId: string;
  stateLabel?: string;
  targetStates?: string;
  userId: string;
}

export interface GoalPlanStateTypeForceMandatory {
  actionLabel: string;
  auditComments: string;
  currentState: boolean;
  defaultState: boolean;
  lastModified: Moment;
  planId: BigNumber;
  stateId: string;
  stateLabel: string;
  targetStates: string;
  userId: string;
}

export namespace GoalPlanState {
  /**
   * Static representation of the [[actionLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_LABEL: StringField<GoalPlanState> = new StringField('actionLabel', GoalPlanState, 'Edm.String');
  /**
   * Static representation of the [[auditComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_COMMENTS: StringField<GoalPlanState> = new StringField('auditComments', GoalPlanState, 'Edm.String');
  /**
   * Static representation of the [[currentState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STATE: BooleanField<GoalPlanState> = new BooleanField('currentState', GoalPlanState, 'Edm.Boolean');
  /**
   * Static representation of the [[defaultState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_STATE: BooleanField<GoalPlanState> = new BooleanField('defaultState', GoalPlanState, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<GoalPlanState> = new DateField('lastModified', GoalPlanState, 'Edm.DateTime');
  /**
   * Static representation of the [[planId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLAN_ID: BigNumberField<GoalPlanState> = new BigNumberField('planId', GoalPlanState, 'Edm.Int64');
  /**
   * Static representation of the [[stateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_ID: StringField<GoalPlanState> = new StringField('stateId', GoalPlanState, 'Edm.String');
  /**
   * Static representation of the [[stateLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE_LABEL: StringField<GoalPlanState> = new StringField('stateLabel', GoalPlanState, 'Edm.String');
  /**
   * Static representation of the [[targetStates]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_STATES: StringField<GoalPlanState> = new StringField('targetStates', GoalPlanState, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<GoalPlanState> = new StringField('userId', GoalPlanState, 'Edm.String');
  /**
   * All fields of the GoalPlanState entity.
   */
  export const _allFields: Array<StringField<GoalPlanState> | BooleanField<GoalPlanState> | DateField<GoalPlanState> | BigNumberField<GoalPlanState>> = [
    GoalPlanState.ACTION_LABEL,
    GoalPlanState.AUDIT_COMMENTS,
    GoalPlanState.CURRENT_STATE,
    GoalPlanState.DEFAULT_STATE,
    GoalPlanState.LAST_MODIFIED,
    GoalPlanState.PLAN_ID,
    GoalPlanState.STATE_ID,
    GoalPlanState.STATE_LABEL,
    GoalPlanState.TARGET_STATES,
    GoalPlanState.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalPlanState> = new AllFields('*', GoalPlanState);
  /**
   * All key fields of the GoalPlanState entity.
   */
  export const _keyFields: Array<Selectable<GoalPlanState>> = [GoalPlanState.PLAN_ID, GoalPlanState.STATE_ID, GoalPlanState.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property GoalPlanState.
   */
  export const _keys: { [keys: string]: Selectable<GoalPlanState> } = GoalPlanState._keyFields.reduce((acc: { [keys: string]: Selectable<GoalPlanState> }, field: Selectable<GoalPlanState>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
