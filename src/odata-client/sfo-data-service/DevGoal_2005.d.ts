import { DevGoal_2005RequestBuilder } from './DevGoal_2005RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoal_2005" of service "SFOData".
 */
export declare class DevGoal_2005 extends Entity implements DevGoal_2005Type {
    /**
     * Technical entity name for DevGoal_2005.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoal_2005.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * category.
     * @nullable
     */
    category?: string;
    /**
     * End Date.
     * @nullable
     */
    due?: Moment;
    /**
     * flag.
     * @nullable
     */
    flag?: number;
    /**
     * guid.
     * @nullable
     */
    guid?: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * lastModified.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * modifier.
     * @nullable
     */
    modifier?: string;
    /**
     * Development Goal.
     * @nullable
     */
    name?: string;
    /**
     * numbering.
     * @nullable
     */
    numbering?: string;
    /**
     * planId.
     * @nullable
     */
    planId?: BigNumber;
    /**
     * Purpose.
     * @nullable
     */
    purpose?: string;
    /**
     * purposeLabel.
     * @nullable
     */
    purposeLabel?: string;
    /**
     * Start Date.
     * @nullable
     */
    start?: Moment;
    /**
     * Status.
     * @nullable
     */
    state?: string;
    /**
     * stateLabel.
     * @nullable
     */
    stateLabel?: string;
    /**
     * status.
     * @nullable
     */
    status?: BigNumber;
    /**
     * type.
     * @nullable
     */
    type?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-many navigation property to the [[DevGoalCompetency]] entity.
     */
    competencies: DevGoalCompetency[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    goalModifier: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    goalOwner: User;
    /**
     * One-to-many navigation property to the [[DevGoalTask_2005]] entity.
     */
    tasks: DevGoalTask_2005[];
    /**
     * Returns an entity builder to construct instances `DevGoal_2005`.
     * @returns A builder that constructs instances of entity type `DevGoal_2005`.
     */
    static builder(): EntityBuilderType<DevGoal_2005, DevGoal_2005TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoal_2005` entity type.
     * @returns A `DevGoal_2005` request builder.
     */
    static requestBuilder(): DevGoal_2005RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoal_2005`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoal_2005`.
     */
    static customField(fieldName: string): CustomField<DevGoal_2005>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DevGoalCompetency, DevGoalCompetencyType } from './DevGoalCompetency';
import { User, UserType } from './User';
import { DevGoalTask_2005, DevGoalTask_2005Type } from './DevGoalTask_2005';
export interface DevGoal_2005Type {
    category?: string;
    due?: Moment;
    flag?: number;
    guid?: string;
    id: BigNumber;
    lastModified?: Moment;
    modifier?: string;
    name?: string;
    numbering?: string;
    planId?: BigNumber;
    purpose?: string;
    purposeLabel?: string;
    start?: Moment;
    state?: string;
    stateLabel?: string;
    status?: BigNumber;
    type?: string;
    userId?: string;
    competencies: DevGoalCompetencyType[];
    goalModifier: UserType;
    goalOwner: UserType;
    tasks: DevGoalTask_2005Type[];
}
export interface DevGoal_2005TypeForceMandatory {
    category: string;
    due: Moment;
    flag: number;
    guid: string;
    id: BigNumber;
    lastModified: Moment;
    modifier: string;
    name: string;
    numbering: string;
    planId: BigNumber;
    purpose: string;
    purposeLabel: string;
    start: Moment;
    state: string;
    stateLabel: string;
    status: BigNumber;
    type: string;
    userId: string;
    competencies: DevGoalCompetencyType[];
    goalModifier: UserType;
    goalOwner: UserType;
    tasks: DevGoalTask_2005Type[];
}
export declare namespace DevGoal_2005 {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE: DateField<DevGoal_2005>;
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG: NumberField<DevGoal_2005>;
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUID: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<DevGoal_2005>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<DevGoal_2005>;
    /**
     * Static representation of the [[modifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIER: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[numbering]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBERING: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<DevGoal_2005>;
    /**
     * Static representation of the [[purpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[purposeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE_LABEL: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START: DateField<DevGoal_2005>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[stateLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_LABEL: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: BigNumberField<DevGoal_2005>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<DevGoal_2005>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<DevGoal_2005>;
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCIES: Link<DevGoal_2005, DevGoalCompetency>;
    /**
     * Static representation of the one-to-one navigation property [[goalModifier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_MODIFIER: OneToOneLink<DevGoal_2005, User>;
    /**
     * Static representation of the one-to-one navigation property [[goalOwner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_OWNER: OneToOneLink<DevGoal_2005, User>;
    /**
     * Static representation of the one-to-many navigation property [[tasks]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TASKS: Link<DevGoal_2005, DevGoalTask_2005>;
    /**
     * All fields of the DevGoal_2005 entity.
     */
    const _allFields: Array<StringField<DevGoal_2005> | DateField<DevGoal_2005> | NumberField<DevGoal_2005> | BigNumberField<DevGoal_2005> | Link<DevGoal_2005, DevGoalCompetency> | OneToOneLink<DevGoal_2005, User> | Link<DevGoal_2005, DevGoalTask_2005>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoal_2005>;
    /**
     * All key fields of the DevGoal_2005 entity.
     */
    const _keyFields: Array<Selectable<DevGoal_2005>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoal_2005.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoal_2005>;
    };
}
//# sourceMappingURL=DevGoal_2005.d.ts.map