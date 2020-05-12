import { TodoActionRequestBuilder } from './TodoActionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TodoAction" of service "SFOData".
 */
export declare class TodoAction extends Entity implements TodoActionType {
    /**
     * Technical entity name for TodoAction.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoAction.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * actionId.
     */
    actionId: number;
    /**
     * actionName.
     * @nullable
     */
    actionName?: string;
    /**
     * categoryId.
     */
    categoryId: string;
    /**
     * functionImportName.
     * @nullable
     */
    functionImportName?: string;
    /**
     * One-to-one navigation property to the [[TodoCategory]] entity.
     */
    categoryNav: TodoCategory;
    /**
     * Returns an entity builder to construct instances `TodoAction`.
     * @returns A builder that constructs instances of entity type `TodoAction`.
     */
    static builder(): EntityBuilderType<TodoAction, TodoActionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TodoAction` entity type.
     * @returns A `TodoAction` request builder.
     */
    static requestBuilder(): TodoActionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoAction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoAction`.
     */
    static customField(fieldName: string): CustomField<TodoAction>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TodoCategory, TodoCategoryType } from './TodoCategory';
export interface TodoActionType {
    actionId: number;
    actionName?: string;
    categoryId: string;
    functionImportName?: string;
    categoryNav: TodoCategoryType;
}
export interface TodoActionTypeForceMandatory {
    actionId: number;
    actionName: string;
    categoryId: string;
    functionImportName: string;
    categoryNav: TodoCategoryType;
}
export declare namespace TodoAction {
    /**
     * Static representation of the [[actionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_ID: NumberField<TodoAction>;
    /**
     * Static representation of the [[actionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTION_NAME: StringField<TodoAction>;
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ID: StringField<TodoAction>;
    /**
     * Static representation of the [[functionImportName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUNCTION_IMPORT_NAME: StringField<TodoAction>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<TodoAction, TodoCategory>;
    /**
     * All fields of the TodoAction entity.
     */
    const _allFields: Array<NumberField<TodoAction> | StringField<TodoAction> | OneToOneLink<TodoAction, TodoCategory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TodoAction>;
    /**
     * All key fields of the TodoAction entity.
     */
    const _keyFields: Array<Selectable<TodoAction>>;
    /**
     * Mapping of all key field names to the respective static field property TodoAction.
     */
    const _keys: {
        [keys: string]: Selectable<TodoAction>;
    };
}
//# sourceMappingURL=TodoAction.d.ts.map