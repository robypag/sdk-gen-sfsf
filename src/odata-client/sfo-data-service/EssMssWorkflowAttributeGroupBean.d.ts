import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { PendDataGroupBean, PendDataGroupBeanField } from './PendDataGroupBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createEssMssWorkflowAttributeGroupBean(json: any): EssMssWorkflowAttributeGroupBean;
/**
 * EssMssWorkflowAttributeGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EssMssWorkflowAttributeGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EssMssWorkflowAttributeGroupBean.changeSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSet: EssMssWorkflowAttributeBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeGroupBean.groups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groups: PendDataGroupBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeGroupBean.subChangeSetGroups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeGroupBean.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EssMssWorkflowAttributeGroupBean {
    function build(json: {
        [keys: string]: FieldType;
    }): EssMssWorkflowAttributeGroupBean;
}
//# sourceMappingURL=EssMssWorkflowAttributeGroupBean.d.ts.map