/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TodoRequestBuilder } from './TodoRequestBuilder';
import { ToDoBean, ToDoBeanField } from './ToDoBean';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Todo" of service "SFOData".
 */
export class Todo extends Entity implements TodoType {
  /**
   * Technical entity name for Todo.
   */
  static _entityName = 'Todo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Todo.
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
  static builder(): EntityBuilderType<Todo, TodoTypeForceMandatory> {
    return Entity.entityBuilder(Todo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Todo` entity type.
   * @returns A `Todo` request builder.
   */
  static requestBuilder(): TodoRequestBuilder {
    return new TodoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Todo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Todo`.
   */
  static customField(fieldName: string): CustomField<Todo> {
    return Entity.customFieldSelector(fieldName, Todo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Todo {
  /**
   * Static representation of the [[categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ID: StringField<Todo> = new StringField('categoryId', Todo, 'Edm.String');
  /**
   * Static representation of the [[categoryLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LABEL: StringField<Todo> = new StringField('categoryLabel', Todo, 'Edm.String');
  /**
   * Static representation of the [[displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER: NumberField<Todo> = new NumberField('displayOrder', Todo, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<Todo> = new NumberField('status', Todo, 'Edm.Int32');
  /**
   * Static representation of the [[todos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TODOS: ToDoBeanField<Todo> = new ToDoBeanField('todos', Todo);
  /**
   * All fields of the Todo entity.
   */
  export const _allFields: Array<StringField<Todo> | NumberField<Todo> | ToDoBeanField<Todo>> = [
    Todo.CATEGORY_ID,
    Todo.CATEGORY_LABEL,
    Todo.DISPLAY_ORDER,
    Todo.STATUS,
    Todo.TODOS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Todo> = new AllFields('*', Todo);
  /**
   * All key fields of the Todo entity.
   */
  export const _keyFields: Array<Selectable<Todo>> = [Todo.CATEGORY_ID];
  /**
   * Mapping of all key field names to the respective static field property Todo.
   */
  export const _keys: { [keys: string]: Selectable<Todo> } = Todo._keyFields.reduce((acc: { [keys: string]: Selectable<Todo> }, field: Selectable<Todo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
