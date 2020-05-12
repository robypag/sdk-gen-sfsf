import { ChangeDataBean, ChangeDataBeanField } from './ChangeDataBean';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createPendingDataAttributeBean(json: any): PendingDataAttributeBean;
/**
 * PendingDataAttributeBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PendingDataAttributeBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PendingDataAttributeBean.entityName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entityName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.newValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    oldValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.payComponents]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    payComponents: ChangeDataBeanField<EntityT>;
    /**
     * Representation of the [[PendingDataAttributeBean.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PendingDataAttributeBean {
    function build(json: {
        [keys: string]: FieldType;
    }): PendingDataAttributeBean;
}
//# sourceMappingURL=PendingDataAttributeBean.d.ts.map