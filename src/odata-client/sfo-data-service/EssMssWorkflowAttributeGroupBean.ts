/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { PendDataGroupBean, PendDataGroupBeanField } from './PendDataGroupBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * EssMssWorkflowAttributeGroupBean
 */
export interface EssMssWorkflowAttributeGroupBean {
  /**
   * changeSet.
   * @nullable
   */
  changeSet?: EssMssWorkflowAttributeBean;
  /**
   * groups.
   * @nullable
   */
  groups?: PendDataGroupBean;
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
 * @deprecated since v1.6.0. Use [[EssMssWorkflowAttributeGroupBean.build]] instead.
 */
export function createEssMssWorkflowAttributeGroupBean(json: any): EssMssWorkflowAttributeGroupBean {
  return EssMssWorkflowAttributeGroupBean.build(json);
}

/**
 * EssMssWorkflowAttributeGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EssMssWorkflowAttributeGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EssMssWorkflowAttributeGroupBean.changeSet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeSet: EssMssWorkflowAttributeBeanField<EntityT> = new EssMssWorkflowAttributeBeanField('changeSet', this);
  /**
   * Representation of the [[EssMssWorkflowAttributeGroupBean.groups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groups: PendDataGroupBeanField<EntityT> = new PendDataGroupBeanField('groups', this);
  /**
   * Representation of the [[EssMssWorkflowAttributeGroupBean.subChangeSetGroups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT> = new EssMssWorkflowSubAttributeBeanField('subChangeSetGroups', this);
  /**
   * Representation of the [[EssMssWorkflowAttributeGroupBean.title]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  title: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('title', this, 'Edm.String');
}

export namespace EssMssWorkflowAttributeGroupBean {
  export function build(json: { [keys: string]: FieldType }): EssMssWorkflowAttributeGroupBean {
    return createComplexType(json, {
      changeSet: (changeSet: EssMssWorkflowAttributeBean) => ({ changeSet: EssMssWorkflowAttributeBean.build(changeSet) }),
      groups: (groups: PendDataGroupBean) => ({ groups: PendDataGroupBean.build(groups) }),
      subChangeSetGroups: (subChangeSetGroups: EssMssWorkflowSubAttributeBean) => ({ subChangeSetGroups: EssMssWorkflowSubAttributeBean.build(subChangeSetGroups) }),
      title: (title: string) => ({ title: edmToTs(title, 'Edm.String') })
    });
  }
}
