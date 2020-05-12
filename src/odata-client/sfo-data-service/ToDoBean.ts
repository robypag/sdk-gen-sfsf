/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ToDoEntry, ToDoEntryField } from './ToDoEntry';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ToDoBean
 */
export interface ToDoBean {
  /**
   * categoryId.
   * @nullable
   */
  categoryId?: string;
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: Moment;
  /**
   * dueDate.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * dueDateOffSet.
   * @nullable
   */
  dueDateOffSet?: number;
  /**
   * entries.
   * @nullable
   */
  entries?: ToDoEntry;
  /**
   * entryId.
   */
  entryId: number;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * statusLabel.
   * @nullable
   */
  statusLabel?: string;
  /**
   * stepDescAlt.
   * @nullable
   */
  stepDescAlt?: string;
  /**
   * todoItemId.
   * @nullable
   */
  todoItemId?: string;
  /**
   * url.
   * @nullable
   */
  url?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ToDoBean.build]] instead.
 */
export function createToDoBean(json: any): ToDoBean {
  return ToDoBean.build(json);
}

/**
 * ToDoBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ToDoBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ToDoBean.categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('categoryId', this, 'Edm.String');
  /**
   * Representation of the [[ToDoBean.completedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  completedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('completedDate', this, 'Edm.DateTime');
  /**
   * Representation of the [[ToDoBean.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('dueDate', this, 'Edm.DateTime');
  /**
   * Representation of the [[ToDoBean.dueDateOffSet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDateOffSet: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('dueDateOffSet', this, 'Edm.Int32');
  /**
   * Representation of the [[ToDoBean.entries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entries: ToDoEntryField<EntityT> = new ToDoEntryField('entries', this);
  /**
   * Representation of the [[ToDoBean.entryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('entryId', this, 'Edm.Int32');
  /**
   * Representation of the [[ToDoBean.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[ToDoBean.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('status', this, 'Edm.Int32');
  /**
   * Representation of the [[ToDoBean.statusLabel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusLabel: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('statusLabel', this, 'Edm.String');
  /**
   * Representation of the [[ToDoBean.stepDescAlt]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stepDescAlt: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('stepDescAlt', this, 'Edm.String');
  /**
   * Representation of the [[ToDoBean.todoItemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  todoItemId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('todoItemId', this, 'Edm.String');
  /**
   * Representation of the [[ToDoBean.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('url', this, 'Edm.String');
}

export namespace ToDoBean {
  export function build(json: { [keys: string]: FieldType }): ToDoBean {
    return createComplexType(json, {
      categoryId: (categoryId: string) => ({ categoryId: edmToTs(categoryId, 'Edm.String') }),
      completedDate: (completedDate: Moment) => ({ completedDate: edmToTs(completedDate, 'Edm.DateTime') }),
      dueDate: (dueDate: Moment) => ({ dueDate: edmToTs(dueDate, 'Edm.DateTime') }),
      dueDateOffSet: (dueDateOffSet: number) => ({ dueDateOffSet: edmToTs(dueDateOffSet, 'Edm.Int32') }),
      entries: (entries: ToDoEntry) => ({ entries: ToDoEntry.build(entries) }),
      entryId: (entryId: number) => ({ entryId: edmToTs(entryId, 'Edm.Int32') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      status: (status: number) => ({ status: edmToTs(status, 'Edm.Int32') }),
      statusLabel: (statusLabel: string) => ({ statusLabel: edmToTs(statusLabel, 'Edm.String') }),
      stepDescAlt: (stepDescAlt: string) => ({ stepDescAlt: edmToTs(stepDescAlt, 'Edm.String') }),
      todoItemId: (todoItemId: string) => ({ todoItemId: edmToTs(todoItemId, 'Edm.String') }),
      url: (url: string) => ({ url: edmToTs(url, 'Edm.String') })
    });
  }
}
