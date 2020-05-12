/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Onb2ExternalHrisHiringUpdate
 */
export interface Onb2ExternalHrisHiringUpdate {
  /**
   * assignmentIdExternal.
   * @nullable
   */
  assignmentIdExternal?: string;
  /**
   * personIdExternal.
   * @nullable
   */
  personIdExternal?: string;
  /**
   * processId.
   */
  processId: string;
  /**
   * sourceOfRecord.
   */
  sourceOfRecord: string;
  /**
   * userName.
   * @nullable
   */
  userName?: string;
  /**
   * userStatus.
   */
  userStatus: string;
}

/**
 * @deprecated since v1.6.0. Use [[Onb2ExternalHrisHiringUpdate.build]] instead.
 */
export function createOnb2ExternalHrisHiringUpdate(json: any): Onb2ExternalHrisHiringUpdate {
  return Onb2ExternalHrisHiringUpdate.build(json);
}

/**
 * Onb2ExternalHrisHiringUpdateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Onb2ExternalHrisHiringUpdateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.assignmentIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignmentIdExternal: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('assignmentIdExternal', this, 'Edm.String');
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  personIdExternal: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('personIdExternal', this, 'Edm.String');
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.processId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  processId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('processId', this, 'Edm.String');
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.sourceOfRecord]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceOfRecord: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('sourceOfRecord', this, 'Edm.String');
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userName', this, 'Edm.String');
  /**
   * Representation of the [[Onb2ExternalHrisHiringUpdate.userStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userStatus: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userStatus', this, 'Edm.String');
}

export namespace Onb2ExternalHrisHiringUpdate {
  export function build(json: { [keys: string]: FieldType }): Onb2ExternalHrisHiringUpdate {
    return createComplexType(json, {
      assignmentIdExternal: (assignmentIdExternal: string) => ({ assignmentIdExternal: edmToTs(assignmentIdExternal, 'Edm.String') }),
      personIdExternal: (personIdExternal: string) => ({ personIdExternal: edmToTs(personIdExternal, 'Edm.String') }),
      processId: (processId: string) => ({ processId: edmToTs(processId, 'Edm.String') }),
      sourceOfRecord: (sourceOfRecord: string) => ({ sourceOfRecord: edmToTs(sourceOfRecord, 'Edm.String') }),
      userName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') }),
      userStatus: (userStatus: string) => ({ userStatus: edmToTs(userStatus, 'Edm.String') })
    });
  }
}
