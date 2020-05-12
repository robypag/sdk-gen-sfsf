/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * CoUserInfoElementBean
 */
export interface CoUserInfoElementBean {
  /**
   * id.
   * @nullable
   */
  id?: string;
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * type.
   * @nullable
   */
  type?: string;
  /**
   * value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated since v1.6.0. Use [[CoUserInfoElementBean.build]] instead.
 */
export function createCoUserInfoElementBean(json: any): CoUserInfoElementBean {
  return CoUserInfoElementBean.build(json);
}

/**
 * CoUserInfoElementBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CoUserInfoElementBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CoUserInfoElementBean.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('id', this, 'Edm.String');
  /**
   * Representation of the [[CoUserInfoElementBean.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('label', this, 'Edm.String');
  /**
   * Representation of the [[CoUserInfoElementBean.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('type', this, 'Edm.String');
  /**
   * Representation of the [[CoUserInfoElementBean.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('value', this, 'Edm.String');
}

export namespace CoUserInfoElementBean {
  export function build(json: { [keys: string]: FieldType }): CoUserInfoElementBean {
    return createComplexType(json, {
      id: (id: string) => ({ id: edmToTs(id, 'Edm.String') }),
      label: (label: string) => ({ label: edmToTs(label, 'Edm.String') }),
      type: (type: string) => ({ type: edmToTs(type, 'Edm.String') }),
      value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
