import { GoalPermission_1RequestBuilder } from './GoalPermission_1RequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalPermission_1" of service "SFOData".
 */
export declare class GoalPermission_1 extends Entity implements GoalPermission_1Type {
    /**
     * Technical entity name for GoalPermission_1.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalPermission_1.
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
    category?: number;
    /**
     * comments.
     * @nullable
     */
    comments?: number;
    /**
     * create.
     * @nullable
     */
    create?: boolean;
    /**
     * delete.
     * @nullable
     */
    delete?: boolean;
    /**
     * due.
     * @nullable
     */
    due?: number;
    /**
     * edit.
     * @nullable
     */
    edit?: boolean;
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
     * metric.
     * @nullable
     */
    metric?: number;
    /**
     * name.
     * @nullable
     */
    name?: number;
    /**
     * privateAccess.
     * @nullable
     */
    privateAccess?: boolean;
    /**
     * start.
     * @nullable
     */
    start?: number;
    /**
     * state.
     * @nullable
     */
    state?: number;
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
     * view.
     * @nullable
     */
    view?: boolean;
    /**
     * weight.
     * @nullable
     */
    weight?: number;
    /**
     * Returns an entity builder to construct instances `GoalPermission_1`.
     * @returns A builder that constructs instances of entity type `GoalPermission_1`.
     */
    static builder(): EntityBuilderType<GoalPermission_1, GoalPermission_1TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalPermission_1` entity type.
     * @returns A `GoalPermission_1` request builder.
     */
    static requestBuilder(): GoalPermission_1RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPermission_1`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalPermission_1`.
     */
    static customField(fieldName: string): CustomField<GoalPermission_1>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface GoalPermission_1Type {
    category?: number;
    comments?: number;
    create?: boolean;
    delete?: boolean;
    due?: number;
    edit?: boolean;
    flag?: number;
    id: BigNumber;
    metric?: number;
    name?: number;
    privateAccess?: boolean;
    start?: number;
    state?: number;
    type?: string;
    userId?: string;
    view?: boolean;
    weight?: number;
}
export interface GoalPermission_1TypeForceMandatory {
    category: number;
    comments: number;
    create: boolean;
    delete: boolean;
    due: number;
    edit: boolean;
    flag: number;
    id: BigNumber;
    metric: number;
    name: number;
    privateAccess: boolean;
    start: number;
    state: number;
    type: string;
    userId: string;
    view: boolean;
    weight: number;
}
export declare namespace GoalPermission_1 {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[create]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE: BooleanField<GoalPermission_1>;
    /**
     * Static representation of the [[delete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETE: BooleanField<GoalPermission_1>;
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[edit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDIT: BooleanField<GoalPermission_1>;
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<GoalPermission_1>;
    /**
     * Static representation of the [[metric]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const METRIC: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[privateAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVATE_ACCESS: BooleanField<GoalPermission_1>;
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: NumberField<GoalPermission_1>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<GoalPermission_1>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<GoalPermission_1>;
    /**
     * Static representation of the [[view]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEW: BooleanField<GoalPermission_1>;
    /**
     * Static representation of the [[weight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT: NumberField<GoalPermission_1>;
    /**
     * All fields of the GoalPermission_1 entity.
     */
    const _allFields: Array<NumberField<GoalPermission_1> | BooleanField<GoalPermission_1> | BigNumberField<GoalPermission_1> | StringField<GoalPermission_1>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalPermission_1>;
    /**
     * All key fields of the GoalPermission_1 entity.
     */
    const _keyFields: Array<Selectable<GoalPermission_1>>;
    /**
     * Mapping of all key field names to the respective static field property GoalPermission_1.
     */
    const _keys: {
        [keys: string]: Selectable<GoalPermission_1>;
    };
}
//# sourceMappingURL=GoalPermission_1.d.ts.map