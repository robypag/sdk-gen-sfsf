/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RuleFieldMappingBean, RuleFieldMappingBeanField } from './RuleFieldMappingBean';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * RuleFieldMappingBeanList
 */
export interface RuleFieldMappingBeanList {
  /**
   * ruleFieldMappings.
   * @nullable
   */
  ruleFieldMappings?: RuleFieldMappingBean;
}

/**
 * @deprecated since v1.6.0. Use [[RuleFieldMappingBeanList.build]] instead.
 */
export function createRuleFieldMappingBeanList(json: any): RuleFieldMappingBeanList {
  return RuleFieldMappingBeanList.build(json);
}

/**
 * RuleFieldMappingBeanListField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RuleFieldMappingBeanListField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RuleFieldMappingBeanList.ruleFieldMappings]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ruleFieldMappings: RuleFieldMappingBeanField<EntityT> = new RuleFieldMappingBeanField('ruleFieldMappings', this);
}

export namespace RuleFieldMappingBeanList {
  export function build(json: { [keys: string]: FieldType }): RuleFieldMappingBeanList {
    return createComplexType(json, {
      ruleFieldMappings: (ruleFieldMappings: RuleFieldMappingBean) => ({ ruleFieldMappings: RuleFieldMappingBean.build(ruleFieldMappings) })
    });
  }
}
