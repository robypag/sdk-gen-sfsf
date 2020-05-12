import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * CoRouteFormStatusBean
 */
export interface CoRouteFormStatusBean {
    /**
     * redirectUrl.
     * @nullable
     */
    redirectUrl?: string;
    /**
     * status.
     * @nullable
     */
    status?: string;
}
/**
 * @deprecated since v1.6.0. Use [[CoRouteFormStatusBean.build]] instead.
 */
export declare function createCoRouteFormStatusBean(json: any): CoRouteFormStatusBean;
/**
 * CoRouteFormStatusBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CoRouteFormStatusBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CoRouteFormStatusBean.redirectUrl]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    redirectUrl: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoRouteFormStatusBean.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CoRouteFormStatusBean {
    function build(json: {
        [keys: string]: FieldType;
    }): CoRouteFormStatusBean;
}
//# sourceMappingURL=CoRouteFormStatusBean.d.ts.map