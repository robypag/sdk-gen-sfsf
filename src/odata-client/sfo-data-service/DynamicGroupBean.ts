/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * DynamicGroupBean
 */
export interface DynamicGroupBean {
  /**
   * groupId.
   * @nullable
   */
  groupId?: BigNumber;
  /**
   * groupName.
   * @nullable
   */
  groupName?: string;
}

/**
 * @deprecated since v1.6.0. Use [[DynamicGroupBean.build]] instead.
 */
export function createDynamicGroupBean(json: any): DynamicGroupBean {
  return DynamicGroupBean.build(json);
}

/**
 * DynamicGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DynamicGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DynamicGroupBean.groupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('groupId', this, 'Edm.Int64');
  /**
   * Representation of the [[DynamicGroupBean.groupName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('groupName', this, 'Edm.String');
}

export namespace DynamicGroupBean {
  export function build(json: { [keys: string]: FieldType }): DynamicGroupBean {
    return createComplexType(json, {
      groupId: (groupId: BigNumber) => ({ groupId: edmToTs(groupId, 'Edm.Int64') }),
      groupName: (groupName: string) => ({ groupName: edmToTs(groupName, 'Edm.String') })
    });
  }
}
