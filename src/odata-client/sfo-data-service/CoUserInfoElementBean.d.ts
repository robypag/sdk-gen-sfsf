import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * CoUserInfoElementBean
 */
export interface CoUserInfoElementBean {
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
     * type.
     * @nullable
     */
    type?: string;
    /**
     * value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated since v1.6.0. Use [[CoUserInfoElementBean.build]] instead.
 */
export declare function createCoUserInfoElementBean(json: any): CoUserInfoElementBean;
/**
 * CoUserInfoElementBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CoUserInfoElementBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CoUserInfoElementBean.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoUserInfoElementBean.label]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    label: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoUserInfoElementBean.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoUserInfoElementBean.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CoUserInfoElementBean {
    function build(json: {
        [keys: string]: FieldType;
    }): CoUserInfoElementBean;
}
//# sourceMappingURL=CoUserInfoElementBean.d.ts.map