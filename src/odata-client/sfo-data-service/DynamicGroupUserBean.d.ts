import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * DynamicGroupUserBean
 */
export interface DynamicGroupUserBean {
    /**
     * firstName.
     * @nullable
     */
    firstName?: string;
    /**
     * lastName.
     * @nullable
     */
    lastName?: string;
    /**
     * middleName.
     * @nullable
     */
    middleName?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * userName.
     * @nullable
     */
    userName?: string;
}
/**
 * @deprecated since v1.6.0. Use [[DynamicGroupUserBean.build]] instead.
 */
export declare function createDynamicGroupUserBean(json: any): DynamicGroupUserBean;
/**
 * DynamicGroupUserBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DynamicGroupUserBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DynamicGroupUserBean.firstName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicGroupUserBean.lastName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicGroupUserBean.middleName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    middleName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicGroupUserBean.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicGroupUserBean.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DynamicGroupUserBean {
    function build(json: {
        [keys: string]: FieldType;
    }): DynamicGroupUserBean;
}
//# sourceMappingURL=DynamicGroupUserBean.d.ts.map