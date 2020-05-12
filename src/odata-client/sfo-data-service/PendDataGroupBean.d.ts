import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { PendDataInlineGroupBean, PendDataInlineGroupBeanField } from './PendDataInlineGroupBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createPendDataGroupBean(json: any): PendDataGroupBean;
/**
 * PendDataGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PendDataGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PendDataGroupBean.changeSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSet: EssMssWorkflowAttributeBeanField<EntityT>;
    /**
     * Representation of the [[PendDataGroupBean.inlineGroups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inlineGroups: PendDataInlineGroupBeanField<EntityT>;
    /**
     * Representation of the [[PendDataGroupBean.subChangeSetGroups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT>;
    /**
     * Representation of the [[PendDataGroupBean.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PendDataGroupBean {
    function build(json: {
        [keys: string]: FieldType;
    }): PendDataGroupBean;
}
//# sourceMappingURL=PendDataGroupBean.d.ts.map