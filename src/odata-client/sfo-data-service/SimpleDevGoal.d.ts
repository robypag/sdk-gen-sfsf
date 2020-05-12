import { SimpleDevGoalRequestBuilder } from './SimpleDevGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SimpleDevGoal" of service "SFOData".
 */
export declare class SimpleDevGoal extends Entity implements SimpleDevGoalType {
    /**
     * Technical entity name for SimpleDevGoal.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SimpleDevGoal.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * flag.
     * @nullable
     */
    flag?: number;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * name.
     * @nullable
     */
    name?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    simpleDevGoalUserIdNavigation: User;
    /**
     * Returns an entity builder to construct instances `SimpleDevGoal`.
     * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
     */
    static builder(): EntityBuilderType<SimpleDevGoal, SimpleDevGoalTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SimpleDevGoal` entity type.
     * @returns A `SimpleDevGoal` request builder.
     */
    static requestBuilder(): SimpleDevGoalRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleDevGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
     */
    static customField(fieldName: string): CustomField<SimpleDevGoal>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface SimpleDevGoalType {
    flag?: number;
    id: BigNumber;
    name?: string;
    type?: string;
    userId?: string;
    simpleDevGoalUserIdNavigation: UserType;
}
export interface SimpleDevGoalTypeForceMandatory {
    flag: number;
    id: BigNumber;
    name: string;
    type: string;
    userId: string;
    simpleDevGoalUserIdNavigation: UserType;
}
export declare namespace SimpleDevGoal {
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG: NumberField<SimpleDevGoal>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<SimpleDevGoal>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SimpleDevGoal>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<SimpleDevGoal>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<SimpleDevGoal>;
    /**
     * Static representation of the one-to-one navigation property [[simpleDevGoalUserIdNavigation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIMPLE_DEV_GOAL_USER_ID_NAVIGATION: OneToOneLink<SimpleDevGoal, User>;
    /**
     * All fields of the SimpleDevGoal entity.
     */
    const _allFields: Array<NumberField<SimpleDevGoal> | BigNumberField<SimpleDevGoal> | StringField<SimpleDevGoal> | OneToOneLink<SimpleDevGoal, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SimpleDevGoal>;
    /**
     * All key fields of the SimpleDevGoal entity.
     */
    const _keyFields: Array<Selectable<SimpleDevGoal>>;
    /**
     * Mapping of all key field names to the respective static field property SimpleDevGoal.
     */
    const _keys: {
        [keys: string]: Selectable<SimpleDevGoal>;
    };
}
//# sourceMappingURL=SimpleDevGoal.d.ts.map