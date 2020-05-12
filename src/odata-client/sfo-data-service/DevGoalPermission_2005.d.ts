import { DevGoalPermission_2005RequestBuilder } from './DevGoalPermission_2005RequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalPermission_2005" of service "SFOData".
 */
export declare class DevGoalPermission_2005 extends Entity implements DevGoalPermission_2005Type {
    /**
     * Technical entity name for DevGoalPermission_2005.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalPermission_2005.
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
     * competency.
     * @nullable
     */
    competency?: number;
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
     * purpose.
     * @nullable
     */
    purpose?: number;
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
     * tasks.
     * @nullable
     */
    tasks?: number;
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
     * Returns an entity builder to construct instances `DevGoalPermission_2005`.
     * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
     */
    static builder(): EntityBuilderType<DevGoalPermission_2005, DevGoalPermission_2005TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalPermission_2005` entity type.
     * @returns A `DevGoalPermission_2005` request builder.
     */
    static requestBuilder(): DevGoalPermission_2005RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPermission_2005`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
     */
    static customField(fieldName: string): CustomField<DevGoalPermission_2005>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DevGoalPermission_2005Type {
    category?: number;
    competency?: number;
    create?: boolean;
    delete?: boolean;
    due?: number;
    edit?: boolean;
    flag?: number;
    id: BigNumber;
    name?: number;
    privateAccess?: boolean;
    purpose?: number;
    start?: number;
    state?: number;
    tasks?: number;
    type?: string;
    userId?: string;
    view?: boolean;
}
export interface DevGoalPermission_2005TypeForceMandatory {
    category: number;
    competency: number;
    create: boolean;
    delete: boolean;
    due: number;
    edit: boolean;
    flag: number;
    id: BigNumber;
    name: number;
    privateAccess: boolean;
    purpose: number;
    start: number;
    state: number;
    tasks: number;
    type: string;
    userId: string;
    view: boolean;
}
export declare namespace DevGoalPermission_2005 {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[create]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE: BooleanField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[delete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETE: BooleanField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[due]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[edit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDIT: BooleanField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[privateAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIVATE_ACCESS: BooleanField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[purpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[tasks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TASKS: NumberField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<DevGoalPermission_2005>;
    /**
     * Static representation of the [[view]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEW: BooleanField<DevGoalPermission_2005>;
    /**
     * All fields of the DevGoalPermission_2005 entity.
     */
    const _allFields: Array<NumberField<DevGoalPermission_2005> | BooleanField<DevGoalPermission_2005> | BigNumberField<DevGoalPermission_2005> | StringField<DevGoalPermission_2005>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalPermission_2005>;
    /**
     * All key fields of the DevGoalPermission_2005 entity.
     */
    const _keyFields: Array<Selectable<DevGoalPermission_2005>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalPermission_2005.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalPermission_2005>;
    };
}
//# sourceMappingURL=DevGoalPermission_2005.d.ts.map