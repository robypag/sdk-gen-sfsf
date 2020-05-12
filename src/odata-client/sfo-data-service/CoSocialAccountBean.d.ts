import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * CoSocialAccountBean
 */
export interface CoSocialAccountBean {
    /**
     * domain.
     * @nullable
     */
    domain?: string;
    /**
     * instantMessagingId.
     * @nullable
     */
    instantMessagingId?: string;
    /**
     * url.
     * @nullable
     */
    url?: string;
}
/**
 * @deprecated since v1.6.0. Use [[CoSocialAccountBean.build]] instead.
 */
export declare function createCoSocialAccountBean(json: any): CoSocialAccountBean;
/**
 * CoSocialAccountBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CoSocialAccountBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CoSocialAccountBean.domain]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    domain: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoSocialAccountBean.instantMessagingId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instantMessagingId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CoSocialAccountBean.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CoSocialAccountBean {
    function build(json: {
        [keys: string]: FieldType;
    }): CoSocialAccountBean;
}
//# sourceMappingURL=CoSocialAccountBean.d.ts.map