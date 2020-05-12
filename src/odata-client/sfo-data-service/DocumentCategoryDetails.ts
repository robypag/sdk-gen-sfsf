/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * DocumentCategoryDetails
 */
export interface DocumentCategoryDetails {
  /**
   * active.
   * @nullable
   */
  active?: boolean;
  /**
   * categoryCode.
   * @nullable
   */
  categoryCode?: string;
  /**
   * categoryName.
   * @nullable
   */
  categoryName?: string;
  /**
   * entityName.
   * @nullable
   */
  entityName?: string;
  /**
   * entityTypeCode.
   * @nullable
   */
  entityTypeCode?: string;
  /**
   * systemDefined.
   * @nullable
   */
  systemDefined?: boolean;
}

/**
 * @deprecated since v1.6.0. Use [[DocumentCategoryDetails.build]] instead.
 */
export function createDocumentCategoryDetails(json: any): DocumentCategoryDetails {
  return DocumentCategoryDetails.build(json);
}

/**
 * DocumentCategoryDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentCategoryDetailsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentCategoryDetails.active]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('active', this, 'Edm.Boolean');
  /**
   * Representation of the [[DocumentCategoryDetails.categoryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('categoryCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentCategoryDetails.categoryName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('categoryName', this, 'Edm.String');
  /**
   * Representation of the [[DocumentCategoryDetails.entityName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entityName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('entityName', this, 'Edm.String');
  /**
   * Representation of the [[DocumentCategoryDetails.entityTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entityTypeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('entityTypeCode', this, 'Edm.String');
  /**
   * Representation of the [[DocumentCategoryDetails.systemDefined]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemDefined: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('systemDefined', this, 'Edm.Boolean');
}

export namespace DocumentCategoryDetails {
  export function build(json: { [keys: string]: FieldType }): DocumentCategoryDetails {
    return createComplexType(json, {
      active: (active: boolean) => ({ active: edmToTs(active, 'Edm.Boolean') }),
      categoryCode: (categoryCode: string) => ({ categoryCode: edmToTs(categoryCode, 'Edm.String') }),
      categoryName: (categoryName: string) => ({ categoryName: edmToTs(categoryName, 'Edm.String') }),
      entityName: (entityName: string) => ({ entityName: edmToTs(entityName, 'Edm.String') }),
      entityTypeCode: (entityTypeCode: string) => ({ entityTypeCode: edmToTs(entityTypeCode, 'Edm.String') }),
      systemDefined: (systemDefined: boolean) => ({ systemDefined: edmToTs(systemDefined, 'Edm.Boolean') })
    });
  }
}
