/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * PendDataInlineGroupBean
 */
export interface PendDataInlineGroupBean {
  /**
   * changeSet.
   * @nullable
   */
  changeSet?: EssMssWorkflowAttributeBean;
  /**
   * subChangeSetGroups.
   * @nullable
   */
  subChangeSetGroups?: EssMssWorkflowSubAttributeBean;
  /**
   * title.
   * @nullable
   */
  title?: string;
}

/**
 * @deprecated since v1.6.0. Use [[PendDataInlineGroupBean.build]] instead.
 */
export function createPendDataInlineGroupBean(json: any): PendDataInlineGroupBean {
  return PendDataInlineGroupBean.build(json);
}

/**
 * PendDataInlineGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PendDataInlineGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PendDataInlineGroupBean.changeSet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeSet: EssMssWorkflowAttributeBeanField<EntityT> = new EssMssWorkflowAttributeBeanField('changeSet', this);
  /**
   * Representation of the [[PendDataInlineGroupBean.subChangeSetGroups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT> = new EssMssWorkflowSubAttributeBeanField('subChangeSetGroups', this);
  /**
   * Representation of the [[PendDataInlineGroupBean.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('title', this, 'Edm.String');
}

export namespace PendDataInlineGroupBean {
  export function build(json: { [keys: string]: FieldType }): PendDataInlineGroupBean {
    return createComplexType(json, {
      changeSet: (changeSet: EssMssWorkflowAttributeBean) => ({ changeSet: EssMssWorkflowAttributeBean.build(changeSet) }),
      subChangeSetGroups: (subChangeSetGroups: EssMssWorkflowSubAttributeBean) => ({ subChangeSetGroups: EssMssWorkflowSubAttributeBean.build(subChangeSetGroups) }),
      title: (title: string) => ({ title: edmToTs(title, 'Edm.String') })
    });
  }
}
