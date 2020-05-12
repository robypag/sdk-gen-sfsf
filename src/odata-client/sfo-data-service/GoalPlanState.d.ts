import { GoalPlanStateRequestBuilder } from './GoalPlanStateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalPlanState" of service "SFOData".
 */
export declare class GoalPlanState extends Entity implements GoalPlanStateType {
    /**
     * Technical entity name for GoalPlanState.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPlanState.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    planId: BigNumber;
    /**
     * stateId.
     */
    stateId: string;
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
    userId: string;
    /**
     * Returns an entity builder to construct instances `GoalPlanState`.
     * @returns A builder that constructs instances of entity type `GoalPlanState`.
     */
    static builder(): EntityBuilderType<GoalPlanState, GoalPlanStateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalPlanState` entity type.
     * @returns A `GoalPlanState` request builder.
     */
    static requestBuilder(): GoalPlanStateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPlanState`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPlanState`.
     */
    static customField(fieldName: string): CustomField<GoalPlanState>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace GoalPlanState {
    /**
     * Static representation of the [[actionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_LABEL: StringField<GoalPlanState>;
    /**
     * Static representation of the [[auditComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUDIT_COMMENTS: StringField<GoalPlanState>;
    /**
     * Static representation of the [[currentState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_STATE: BooleanField<GoalPlanState>;
    /**
     * Static representation of the [[defaultState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_STATE: BooleanField<GoalPlanState>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<GoalPlanState>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<GoalPlanState>;
    /**
     * Static representation of the [[stateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_ID: StringField<GoalPlanState>;
    /**
     * Static representation of the [[stateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_LABEL: StringField<GoalPlanState>;
    /**
     * Static representation of the [[targetStates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_STATES: StringField<GoalPlanState>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<GoalPlanState>;
    /**
     * All fields of the GoalPlanState entity.
     */
    const _allFields: Array<StringField<GoalPlanState> | BooleanField<GoalPlanState> | DateField<GoalPlanState> | BigNumberField<GoalPlanState>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalPlanState>;
    /**
     * All key fields of the GoalPlanState entity.
     */
    const _keyFields: Array<Selectable<GoalPlanState>>;
    /**
     * Mapping of all key field names to the respective static field property GoalPlanState.
     */
    const _keys: {
        [keys: string]: Selectable<GoalPlanState>;
    };
}
//# sourceMappingURL=GoalPlanState.d.ts.map