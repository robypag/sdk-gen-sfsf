import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { EssMssWorkflowSubAttributeBean, EssMssWorkflowSubAttributeBeanField } from './EssMssWorkflowSubAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createPendDataInlineGroupBean(json: any): PendDataInlineGroupBean;
/**
 * PendDataInlineGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PendDataInlineGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PendDataInlineGroupBean.changeSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSet: EssMssWorkflowAttributeBeanField<EntityT>;
    /**
     * Representation of the [[PendDataInlineGroupBean.subChangeSetGroups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subChangeSetGroups: EssMssWorkflowSubAttributeBeanField<EntityT>;
    /**
     * Representation of the [[PendDataInlineGroupBean.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PendDataInlineGroupBean {
    function build(json: {
        [keys: string]: FieldType;
    }): PendDataInlineGroupBean;
}
//# sourceMappingURL=PendDataInlineGroupBean.d.ts.map