import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * DynamicGroupBean
 */
export interface DynamicGroupBean {
    /**
     * groupId.
     * @nullable
     */
    groupId?: BigNumber;
    /**
     * groupName.
     * @nullable
     */
    groupName?: string;
}
/**
 * @deprecated since v1.6.0. Use [[DynamicGroupBean.build]] instead.
 */
export declare function createDynamicGroupBean(json: any): DynamicGroupBean;
/**
 * DynamicGroupBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DynamicGroupBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DynamicGroupBean.groupId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DynamicGroupBean.groupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DynamicGroupBean {
    function build(json: {
        [keys: string]: FieldType;
    }): DynamicGroupBean;
}
//# sourceMappingURL=DynamicGroupBean.d.ts.map