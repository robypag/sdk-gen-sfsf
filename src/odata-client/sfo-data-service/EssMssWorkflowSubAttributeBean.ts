/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * EssMssWorkflowSubAttributeBean
 */
export interface EssMssWorkflowSubAttributeBean {
  /**
   * changeSet.
   * @nullable
   */
  changeSet?: EssMssWorkflowAttributeBean;
  /**
   * changeSetGroupSubTitle.
   * @nullable
   */
  changeSetGroupSubTitle?: string;
}

/**
 * @deprecated since v1.6.0. Use [[EssMssWorkflowSubAttributeBean.build]] instead.
 */
export function createEssMssWorkflowSubAttributeBean(json: any): EssMssWorkflowSubAttributeBean {
  return EssMssWorkflowSubAttributeBean.build(json);
}

/**
 * EssMssWorkflowSubAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EssMssWorkflowSubAttributeBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EssMssWorkflowSubAttributeBean.changeSet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeSet: EssMssWorkflowAttributeBeanField<EntityT> = new EssMssWorkflowAttributeBeanField('changeSet', this);
  /**
   * Representation of the [[EssMssWorkflowSubAttributeBean.changeSetGroupSubTitle]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeSetGroupSubTitle: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('changeSetGroupSubTitle', this, 'Edm.String');
}

export namespace EssMssWorkflowSubAttributeBean {
  export function build(json: { [keys: string]: FieldType }): EssMssWorkflowSubAttributeBean {
    return createComplexType(json, {
      changeSet: (changeSet: EssMssWorkflowAttributeBean) => ({ changeSet: EssMssWorkflowAttributeBean.build(changeSet) }),
      changeSetGroupSubTitle: (changeSetGroupSubTitle: string) => ({ changeSetGroupSubTitle: edmToTs(changeSetGroupSubTitle, 'Edm.String') })
    });
  }
}
