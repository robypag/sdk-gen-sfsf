import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ChangeDataBean
 */
export interface ChangeDataBean {
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
}
/**
 * @deprecated since v1.6.0. Use [[ChangeDataBean.build]] instead.
 */
export declare function createChangeDataBean(json: any): ChangeDataBean;
/**
 * ChangeDataBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChangeDataBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChangeDataBean.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeDataBean.newValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeDataBean.oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    oldValue: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ChangeDataBean {
    function build(json: {
        [keys: string]: FieldType;
    }): ChangeDataBean;
}
//# sourceMappingURL=ChangeDataBean.d.ts.map