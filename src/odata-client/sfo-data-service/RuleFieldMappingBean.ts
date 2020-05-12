/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

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
export function createRuleFieldMappingBean(json: any): RuleFieldMappingBean {
  return RuleFieldMappingBean.build(json);
}

/**
 * RuleFieldMappingBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RuleFieldMappingBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RuleFieldMappingBean.fieldName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldName', this, 'Edm.String');
  /**
   * Representation of the [[RuleFieldMappingBean.fieldValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('fieldValue', this, 'Edm.String');
}

export namespace RuleFieldMappingBean {
  export function build(json: { [keys: string]: FieldType }): RuleFieldMappingBean {
    return createComplexType(json, {
      fieldName: (fieldName: string) => ({ fieldName: edmToTs(fieldName, 'Edm.String') }),
      fieldValue: (fieldValue: string) => ({ fieldValue: edmToTs(fieldValue, 'Edm.String') })
    });
  }
}
