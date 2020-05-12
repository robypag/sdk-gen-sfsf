/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChangeDataBean, ChangeDataBeanField } from './ChangeDataBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * PendingDataAttributeBean
 */
export interface PendingDataAttributeBean {
  /**
   * entityName.
   * @nullable
   */
  entityName?: string;
  /**
   * fieldId.
   * @nullable
   */
  fieldId?: string;
  /**
   * fieldName.
   * @nullable
   */
  fieldName?: string;
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
   * newValue.
   * @nullable
   */
  newValue?: string;
  /**
   * oldValue.
   * @nullable
   */
  oldValue?: string;
  /**
   * payComponents.
   * @nullable
   */
  payComponents?: ChangeDataBean;
  /**
   * type.
   * @nullable
   */
  type?: string;
}

/**
 * @deprecated since v1.6.0. Use [[PendingDataAttributeBean.build]] instead.
 */
export function createPendingDataAttributeBean(json: any): PendingDataAttributeBean {
  return PendingDataAttributeBean.build(json);
}

/**
 * PendingDataAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PendingDataAttributeBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PendingDataAttributeBean.entityName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entityName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('entityName', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldId', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.fieldName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldName', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('id', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.label]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('label', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.newValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('newValue', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.oldValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  oldValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('oldValue', this, 'Edm.String');
  /**
   * Representation of the [[PendingDataAttributeBean.payComponents]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  payComponents: ChangeDataBeanField<EntityT> = new ChangeDataBeanField('payComponents', this);
  /**
   * Representation of the [[PendingDataAttributeBean.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('type', this, 'Edm.String');
}

export namespace PendingDataAttributeBean {
  export function build(json: { [keys: string]: FieldType }): PendingDataAttributeBean {
    return createComplexType(json, {
      entityName: (entityName: string) => ({ entityName: edmToTs(entityName, 'Edm.String') }),
      fieldId: (fieldId: string) => ({ fieldId: edmToTs(fieldId, 'Edm.String') }),
      fieldName: (fieldName: string) => ({ fieldName: edmToTs(fieldName, 'Edm.String') }),
      id: (id: string) => ({ id: edmToTs(id, 'Edm.String') }),
      label: (label: string) => ({ label: edmToTs(label, 'Edm.String') }),
      newValue: (newValue: string) => ({ newValue: edmToTs(newValue, 'Edm.String') }),
      oldValue: (oldValue: string) => ({ oldValue: edmToTs(oldValue, 'Edm.String') }),
      payComponents: (payComponents: ChangeDataBean) => ({ payComponents: ChangeDataBean.build(payComponents) }),
      type: (type: string) => ({ type: edmToTs(type, 'Edm.String') })
    });
  }
}
