/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ToDoEntry
 */
export interface ToDoEntry {
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: Moment;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: BigNumber;
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
   * subjectFullName.
   * @nullable
   */
  subjectFullName?: string;
  /**
   * subjectId.
   * @nullable
   */
  subjectId?: string;
  /**
   * url.
   * @nullable
   */
  url?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ToDoEntry.build]] instead.
 */
export function createToDoEntry(json: any): ToDoEntry {
  return ToDoEntry.build(json);
}

/**
 * ToDoEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ToDoEntryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ToDoEntry.completedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  completedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('completedDate', this, 'Edm.DateTime');
  /**
   * Representation of the [[ToDoEntry.formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formDataId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('formDataId', this, 'Edm.Int64');
  /**
   * Representation of the [[ToDoEntry.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('status', this, 'Edm.Int32');
  /**
   * Representation of the [[ToDoEntry.statusLabel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusLabel: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('statusLabel', this, 'Edm.String');
  /**
   * Representation of the [[ToDoEntry.subjectFullName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectFullName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('subjectFullName', this, 'Edm.String');
  /**
   * Representation of the [[ToDoEntry.subjectId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('subjectId', this, 'Edm.String');
  /**
   * Representation of the [[ToDoEntry.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('url', this, 'Edm.String');
}

export namespace ToDoEntry {
  export function build(json: { [keys: string]: FieldType }): ToDoEntry {
    return createComplexType(json, {
      completedDate: (completedDate: Moment) => ({ completedDate: edmToTs(completedDate, 'Edm.DateTime') }),
      formDataId: (formDataId: BigNumber) => ({ formDataId: edmToTs(formDataId, 'Edm.Int64') }),
      status: (status: number) => ({ status: edmToTs(status, 'Edm.Int32') }),
      statusLabel: (statusLabel: string) => ({ statusLabel: edmToTs(statusLabel, 'Edm.String') }),
      subjectFullName: (subjectFullName: string) => ({ subjectFullName: edmToTs(subjectFullName, 'Edm.String') }),
      subjectId: (subjectId: string) => ({ subjectId: edmToTs(subjectId, 'Edm.String') }),
      url: (url: string) => ({ url: edmToTs(url, 'Edm.String') })
    });
  }
}
