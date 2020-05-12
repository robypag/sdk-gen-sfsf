import { AssignTeamGoalRequestBuilder } from './AssignTeamGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AssignTeamGoal" of service "SFOData".
 */
export declare class AssignTeamGoal extends Entity implements AssignTeamGoalType {
    /**
     * Technical entity name for AssignTeamGoal.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssignTeamGoal.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * Returns an entity builder to construct instances `AssignTeamGoal`.
     * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
     */
    static builder(): EntityBuilderType<AssignTeamGoal, AssignTeamGoalTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AssignTeamGoal` entity type.
     * @returns A `AssignTeamGoal` request builder.
     */
    static requestBuilder(): AssignTeamGoalRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssignTeamGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssignTeamGoal`.
     */
    static customField(fieldName: string): CustomField<AssignTeamGoal>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AssignTeamGoalType {
    id: BigNumber;
    userId?: string;
}
export interface AssignTeamGoalTypeForceMandatory {
    id: BigNumber;
    userId: string;
}
export declare namespace AssignTeamGoal {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<AssignTeamGoal>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<AssignTeamGoal>;
    /**
     * All fields of the AssignTeamGoal entity.
     */
    const _allFields: Array<BigNumberField<AssignTeamGoal> | StringField<AssignTeamGoal>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AssignTeamGoal>;
    /**
     * All key fields of the AssignTeamGoal entity.
     */
    const _keyFields: Array<Selectable<AssignTeamGoal>>;
    /**
     * Mapping of all key field names to the respective static field property AssignTeamGoal.
     */
    const _keys: {
        [keys: string]: Selectable<AssignTeamGoal>;
    };
}
//# sourceMappingURL=AssignTeamGoal.d.ts.map