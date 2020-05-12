import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * RuleFieldMappingBean
 */
export interface RuleFieldMappingBean {
    /**
     * fieldName.
     * @nullable
     */
    fieldName?: string;
    /**
     * fieldValue.
     * @nullable
     */
    fieldValue?: string;
}
/**
 * @deprecated since v1.6.0. Use [[RuleFieldMappingBean.build]] instead.
 */
export declare function createRuleFieldMappingBean(json: any): RuleFieldMappingBean;
/**
 * RuleFieldMappingBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class RuleFieldMappingBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[RuleFieldMappingBean.fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[RuleFieldMappingBean.fieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldValue: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace RuleFieldMappingBean {
    function build(json: {
        [keys: string]: FieldType;
    }): RuleFieldMappingBean;
}
//# sourceMappingURL=RuleFieldMappingBean.d.ts.map