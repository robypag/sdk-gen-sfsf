import { TodoRequestBuilder } from './TodoRequestBuilder';
import { ToDoBean, ToDoBeanField } from './ToDoBean';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Todo" of service "SFOData".
 */
export declare class Todo extends Entity implements TodoType {
    /**
     * Technical entity name for Todo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Todo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * categoryId.
     */
    categoryId: string;
    /**
     * categoryLabel.
     * @nullable
     */
    categoryLabel?: string;
    /**
     * displayOrder.
     * @nullable
     */
    displayOrder?: number;
    /**
     * status.
     * @nullable
     */
    status?: number;
    /**
     * todos.
     * @nullable
     */
    todos?: ToDoBean;
    /**
     * Returns an entity builder to construct instances `Todo`.
     * @returns A builder that constructs instances of entity type `Todo`.
     */
    static builder(): EntityBuilderType<Todo, TodoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Todo` entity type.
     * @returns A `Todo` request builder.
     */
    static requestBuilder(): TodoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Todo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Todo`.
     */
    static customField(fieldName: string): CustomField<Todo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TodoType {
    categoryId: string;
    categoryLabel?: string;
    displayOrder?: number;
    status?: number;
    todos?: ToDoBean;
}
export interface TodoTypeForceMandatory {
    categoryId: string;
    categoryLabel: string;
    displayOrder: number;
    status: number;
    todos: ToDoBean;
}
export declare namespace Todo {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ID: StringField<Todo>;
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_LABEL: StringField<Todo>;
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER: NumberField<Todo>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<Todo>;
    /**
     * Static representation of the [[todos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TODOS: ToDoBeanField<Todo>;
    /**
     * All fields of the Todo entity.
     */
    const _allFields: Array<StringField<Todo> | NumberField<Todo> | ToDoBeanField<Todo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Todo>;
    /**
     * All key fields of the Todo entity.
     */
    const _keyFields: Array<Selectable<Todo>>;
    /**
     * Mapping of all key field names to the respective static field property Todo.
     */
    const _keys: {
        [keys: string]: Selectable<Todo>;
    };
}
//# sourceMappingURL=Todo.d.ts.map