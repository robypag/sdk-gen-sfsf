/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TodoActionRequestBuilder } from './TodoActionRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TodoAction" of service "SFOData".
 */
export class TodoAction extends Entity implements TodoActionType {
  /**
   * Technical entity name for TodoAction.
   */
  static _entityName = 'TodoAction';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TodoAction.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * actionId.
   */
  actionId!: number;
  /**
   * actionName.
   * @nullable
   */
  actionName?: string;
  /**
   * categoryId.
   */
  categoryId!: string;
  /**
   * functionImportName.
   * @nullable
   */
  functionImportName?: string;
  /**
   * One-to-one navigation property to the [[TodoCategory]] entity.
   */
  categoryNav!: TodoCategory;

  /**
   * Returns an entity builder to construct instances `TodoAction`.
   * @returns A builder that constructs instances of entity type `TodoAction`.
   */
  static builder(): EntityBuilderType<TodoAction, TodoActionTypeForceMandatory> {
    return Entity.entityBuilder(TodoAction);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TodoAction` entity type.
   * @returns A `TodoAction` request builder.
   */
  static requestBuilder(): TodoActionRequestBuilder {
    return new TodoActionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoAction`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TodoAction`.
   */
  static customField(fieldName: string): CustomField<TodoAction> {
    return Entity.customFieldSelector(fieldName, TodoAction);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace TodoAction {
  /**
   * Static representation of the [[actionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_ID: NumberField<TodoAction> = new NumberField('actionId', TodoAction, 'Edm.Int32');
  /**
   * Static representation of the [[actionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTION_NAME: StringField<TodoAction> = new StringField('actionName', TodoAction, 'Edm.String');
  /**
   * Static representation of the [[categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ID: StringField<TodoAction> = new StringField('categoryId', TodoAction, 'Edm.String');
  /**
   * Static representation of the [[functionImportName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTION_IMPORT_NAME: StringField<TodoAction> = new StringField('functionImportName', TodoAction, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<TodoAction, TodoCategory> = new OneToOneLink('categoryNav', TodoAction, TodoCategory);
  /**
   * All fields of the TodoAction entity.
   */
  export const _allFields: Array<NumberField<TodoAction> | StringField<TodoAction> | OneToOneLink<TodoAction, TodoCategory>> = [
    TodoAction.ACTION_ID,
    TodoAction.ACTION_NAME,
    TodoAction.CATEGORY_ID,
    TodoAction.FUNCTION_IMPORT_NAME,
    TodoAction.CATEGORY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TodoAction> = new AllFields('*', TodoAction);
  /**
   * All key fields of the TodoAction entity.
   */
  export const _keyFields: Array<Selectable<TodoAction>> = [TodoAction.ACTION_ID, TodoAction.CATEGORY_ID];
  /**
   * Mapping of all key field names to the respective static field property TodoAction.
   */
  export const _keys: { [keys: string]: Selectable<TodoAction> } = TodoAction._keyFields.reduce((acc: { [keys: string]: Selectable<TodoAction> }, field: Selectable<TodoAction>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
