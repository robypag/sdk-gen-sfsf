/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * DynamicGroupUserBean
 */
export interface DynamicGroupUserBean {
  /**
   * firstName.
   * @nullable
   */
  firstName?: string;
  /**
   * lastName.
   * @nullable
   */
  lastName?: string;
  /**
   * middleName.
   * @nullable
   */
  middleName?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
  /**
   * userName.
   * @nullable
   */
  userName?: string;
}

/**
 * @deprecated since v1.6.0. Use [[DynamicGroupUserBean.build]] instead.
 */
export function createDynamicGroupUserBean(json: any): DynamicGroupUserBean {
  return DynamicGroupUserBean.build(json);
}

/**
 * DynamicGroupUserBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DynamicGroupUserBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DynamicGroupUserBean.firstName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('firstName', this, 'Edm.String');
  /**
   * Representation of the [[DynamicGroupUserBean.lastName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('lastName', this, 'Edm.String');
  /**
   * Representation of the [[DynamicGroupUserBean.middleName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  middleName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('middleName', this, 'Edm.String');
  /**
   * Representation of the [[DynamicGroupUserBean.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userId', this, 'Edm.String');
  /**
   * Representation of the [[DynamicGroupUserBean.userName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userName', this, 'Edm.String');
}

export namespace DynamicGroupUserBean {
  export function build(json: { [keys: string]: FieldType }): DynamicGroupUserBean {
    return createComplexType(json, {
      firstName: (firstName: string) => ({ firstName: edmToTs(firstName, 'Edm.String') }),
      lastName: (lastName: string) => ({ lastName: edmToTs(lastName, 'Edm.String') }),
      middleName: (middleName: string) => ({ middleName: edmToTs(middleName, 'Edm.String') }),
      userId: (userId: string) => ({ userId: edmToTs(userId, 'Edm.String') }),
      userName: (userName: string) => ({ userName: edmToTs(userName, 'Edm.String') })
    });
  }
}
