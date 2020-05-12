import { TodoCategoryRequestBuilder } from './TodoCategoryRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TodoCategory" of service "SFOData".
 */
export declare class TodoCategory extends Entity implements TodoCategoryType {
    /**
     * Technical entity name for TodoCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoCategory.
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
     * categoryName.
     * @nullable
     */
    categoryName?: string;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * domainEntityName.
     * @nullable
     */
    domainEntityName?: string;
    /**
     * expandable.
     * @nullable
     */
    expandable?: boolean;
    /**
     * external.
     * @nullable
     */
    external?: boolean;
    /**
     * functionalArea.
     * @nullable
     */
    functionalArea?: string;
    /**
     * module.
     * @nullable
     */
    module?: string;
    /**
     * One-to-many navigation property to the [[TodoAction]] entity.
     */
    actionsNav: TodoAction[];
    /**
     * Returns an entity builder to construct instances `TodoCategory`.
     * @returns A builder that constructs instances of entity type `TodoCategory`.
     */
    static builder(): EntityBuilderType<TodoCategory, TodoCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TodoCategory` entity type.
     * @returns A `TodoCategory` request builder.
     */
    static requestBuilder(): TodoCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoCategory`.
     */
    static customField(fieldName: string): CustomField<TodoCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TodoAction, TodoActionType } from './TodoAction';
export interface TodoCategoryType {
    categoryId: string;
    categoryName?: string;
    description?: string;
    domainEntityName?: string;
    expandable?: boolean;
    external?: boolean;
    functionalArea?: string;
    module?: string;
    actionsNav: TodoActionType[];
}
export interface TodoCategoryTypeForceMandatory {
    categoryId: string;
    categoryName: string;
    description: string;
    domainEntityName: string;
    expandable: boolean;
    external: boolean;
    functionalArea: string;
    module: string;
    actionsNav: TodoActionType[];
}
export declare namespace TodoCategory {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ID: StringField<TodoCategory>;
    /**
     * Static representation of the [[categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAME: StringField<TodoCategory>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TodoCategory>;
    /**
     * Static representation of the [[domainEntityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOMAIN_ENTITY_NAME: StringField<TodoCategory>;
    /**
     * Static representation of the [[expandable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPANDABLE: BooleanField<TodoCategory>;
    /**
     * Static representation of the [[external]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL: BooleanField<TodoCategory>;
    /**
     * Static representation of the [[functionalArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUNCTIONAL_AREA: StringField<TodoCategory>;
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE: StringField<TodoCategory>;
    /**
     * Static representation of the one-to-many navigation property [[actionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIONS_NAV: Link<TodoCategory, TodoAction>;
    /**
     * All fields of the TodoCategory entity.
     */
    const _allFields: Array<StringField<TodoCategory> | BooleanField<TodoCategory> | Link<TodoCategory, TodoAction>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TodoCategory>;
    /**
     * All key fields of the TodoCategory entity.
     */
    const _keyFields: Array<Selectable<TodoCategory>>;
    /**
     * Mapping of all key field names to the respective static field property TodoCategory.
     */
    const _keys: {
        [keys: string]: Selectable<TodoCategory>;
    };
}
//# sourceMappingURL=TodoCategory.d.ts.map