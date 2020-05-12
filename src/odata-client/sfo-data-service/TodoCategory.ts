/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TodoCategoryRequestBuilder } from './TodoCategoryRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TodoCategory" of service "SFOData".
 */
export class TodoCategory extends Entity implements TodoCategoryType {
  /**
   * Technical entity name for TodoCategory.
   */
  static _entityName = 'TodoCategory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TodoCategory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * categoryId.
   */
  categoryId!: string;
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
  actionsNav!: TodoAction[];

  /**
   * Returns an entity builder to construct instances `TodoCategory`.
   * @returns A builder that constructs instances of entity type `TodoCategory`.
   */
  static builder(): EntityBuilderType<TodoCategory, TodoCategoryTypeForceMandatory> {
    return Entity.entityBuilder(TodoCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TodoCategory` entity type.
   * @returns A `TodoCategory` request builder.
   */
  static requestBuilder(): TodoCategoryRequestBuilder {
    return new TodoCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TodoCategory`.
   */
  static customField(fieldName: string): CustomField<TodoCategory> {
    return Entity.customFieldSelector(fieldName, TodoCategory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace TodoCategory {
  /**
   * Static representation of the [[categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ID: StringField<TodoCategory> = new StringField('categoryId', TodoCategory, 'Edm.String');
  /**
   * Static representation of the [[categoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAME: StringField<TodoCategory> = new StringField('categoryName', TodoCategory, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<TodoCategory> = new StringField('description', TodoCategory, 'Edm.String');
  /**
   * Static representation of the [[domainEntityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOMAIN_ENTITY_NAME: StringField<TodoCategory> = new StringField('domainEntityName', TodoCategory, 'Edm.String');
  /**
   * Static representation of the [[expandable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPANDABLE: BooleanField<TodoCategory> = new BooleanField('expandable', TodoCategory, 'Edm.Boolean');
  /**
   * Static representation of the [[external]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL: BooleanField<TodoCategory> = new BooleanField('external', TodoCategory, 'Edm.Boolean');
  /**
   * Static representation of the [[functionalArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTIONAL_AREA: StringField<TodoCategory> = new StringField('functionalArea', TodoCategory, 'Edm.String');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<TodoCategory> = new StringField('module', TodoCategory, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[actionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIONS_NAV: Link<TodoCategory, TodoAction> = new Link('actionsNav', TodoCategory, TodoAction);
  /**
   * All fields of the TodoCategory entity.
   */
  export const _allFields: Array<StringField<TodoCategory> | BooleanField<TodoCategory> | Link<TodoCategory, TodoAction>> = [
    TodoCategory.CATEGORY_ID,
    TodoCategory.CATEGORY_NAME,
    TodoCategory.DESCRIPTION,
    TodoCategory.DOMAIN_ENTITY_NAME,
    TodoCategory.EXPANDABLE,
    TodoCategory.EXTERNAL,
    TodoCategory.FUNCTIONAL_AREA,
    TodoCategory.MODULE,
    TodoCategory.ACTIONS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TodoCategory> = new AllFields('*', TodoCategory);
  /**
   * All key fields of the TodoCategory entity.
   */
  export const _keyFields: Array<Selectable<TodoCategory>> = [TodoCategory.CATEGORY_ID];
  /**
   * Mapping of all key field names to the respective static field property TodoCategory.
   */
  export const _keys: { [keys: string]: Selectable<TodoCategory> } = TodoCategory._keyFields.reduce((acc: { [keys: string]: Selectable<TodoCategory> }, field: Selectable<TodoCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
