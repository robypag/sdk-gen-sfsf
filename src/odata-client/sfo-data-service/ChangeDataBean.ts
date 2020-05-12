/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ChangeDataBean
 */
export interface ChangeDataBean {
  /**
   * label.
   * @nullable
   */
  label?: string;
  /**
   * newValue.
   * @nullable
   */
  newValue?: string;
  /**
   * oldValue.
   * @nullable
   */
  oldValue?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ChangeDataBean.build]] instead.
 */
export function createChangeDataBean(json: any): ChangeDataBean {
  return ChangeDataBean.build(json);
}

/**
 * ChangeDataBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeDataBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ChangeDataBean.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('label', this, 'Edm.String');
  /**
   * Representation of the [[ChangeDataBean.newValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('newValue', this, 'Edm.String');
  /**
   * Representation of the [[ChangeDataBean.oldValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  oldValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('oldValue', this, 'Edm.String');
}

export namespace ChangeDataBean {
  export function build(json: { [keys: string]: FieldType }): ChangeDataBean {
    return createComplexType(json, {
      label: (label: string) => ({ label: edmToTs(label, 'Edm.String') }),
      newValue: (newValue: string) => ({ newValue: edmToTs(newValue, 'Edm.String') }),
      oldValue: (oldValue: string) => ({ oldValue: edmToTs(oldValue, 'Edm.String') })
    });
  }
}
