/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { PendDataInlineGroupBean, PendDataInlineGroupBeanField } from './PendDataInlineGroupBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * PendDataGroupBean
 */
export interface PendDataGroupBean {
  /**
   * changeSet.
   * @nullable
   */
  changeSet?: EssMssWorkflowAttributeBean;
  /**
   * inlineGroups.
   * @nullable
   */
  inlineGroups?: PendDataInlineGroupBean;
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
 * @deprecated since v1.6.0. Use [[PendDataGroupBean.build]] instead.
 */
export function createPendDataGroupBean(json: any): PendDataGroupBean {
  return PendDataGroupBean.build(json);
}

/**
 * PendDataGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PendDataGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PendDataGroupBean.changeSet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeSet: EssMssWorkflowAttributeBeanField<EntityT> = new EssMssWorkflowAttributeBeanField('changeSet', this);
  /**
   * Representation of the [[PendDataGroupBean.inlineGroups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inlineGroups: PendDataInlineGroupBeanField<EntityT> = new PendDataInlineGroupBeanField('inlineGroups', this);
  /**
   * Representation of the [[PendDataGroupBean.subChangeSetGroups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT> = new EssMssWorkflowSubAttributeBeanField('subChangeSetGroups', this);
  /**
   * Representation of the [[PendDataGroupBean.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('title', this, 'Edm.String');
}

export namespace PendDataGroupBean {
  export function build(json: { [keys: string]: FieldType }): PendDataGroupBean {
    return createComplexType(json, {
      changeSet: (changeSet: EssMssWorkflowAttributeBean) => ({ changeSet: EssMssWorkflowAttributeBean.build(changeSet) }),
      inlineGroups: (inlineGroups: PendDataInlineGroupBean) => ({ inlineGroups: PendDataInlineGroupBean.build(inlineGroups) }),
      subChangeSetGroups: (subChangeSetGroups: EssMssWorkflowSubAttributeBean) => ({ subChangeSetGroups: EssMssWorkflowSubAttributeBean.build(subChangeSetGroups) }),
      title: (title: string) => ({ title: edmToTs(title, 'Edm.String') })
    });
  }
}
