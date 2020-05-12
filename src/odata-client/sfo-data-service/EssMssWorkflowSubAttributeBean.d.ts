import { EssMssWorkflowAttributeBean, EssMssWorkflowAttributeBeanField } from './EssMssWorkflowAttributeBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createEssMssWorkflowSubAttributeBean(json: any): EssMssWorkflowSubAttributeBean;
/**
 * EssMssWorkflowSubAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EssMssWorkflowSubAttributeBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EssMssWorkflowSubAttributeBean.changeSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSet: EssMssWorkflowAttributeBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowSubAttributeBean.changeSetGroupSubTitle]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSetGroupSubTitle: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EssMssWorkflowSubAttributeBean {
    function build(json: {
        [keys: string]: FieldType;
    }): EssMssWorkflowSubAttributeBean;
}
//# sourceMappingURL=EssMssWorkflowSubAttributeBean.d.ts.map