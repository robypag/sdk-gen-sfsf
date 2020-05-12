import { PendingDataAttributeBean, PendingDataAttributeBeanField } from './PendingDataAttributeBean';
import { ChangeDataBean, ChangeDataBeanField } from './ChangeDataBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * EssMssWorkflowAttributeBean
 */
export interface EssMssWorkflowAttributeBean {
    /**
     * changeSet.
     * @nullable
     */
    changeSet?: PendingDataAttributeBean;
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
 * @deprecated since v1.6.0. Use [[EssMssWorkflowAttributeBean.build]] instead.
 */
export declare function createEssMssWorkflowAttributeBean(json: any): EssMssWorkflowAttributeBean;
/**
 * EssMssWorkflowAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EssMssWorkflowAttributeBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.changeSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changeSet: PendingDataAttributeBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.entityName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entityName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.newValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    oldValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.payComponents]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    payComponents: ChangeDataBeanField<EntityT>;
    /**
     * Representation of the [[EssMssWorkflowAttributeBean.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EssMssWorkflowAttributeBean {
    function build(json: {
        [keys: string]: FieldType;
    }): EssMssWorkflowAttributeBean;
}
//# sourceMappingURL=EssMssWorkflowAttributeBean.d.ts.map