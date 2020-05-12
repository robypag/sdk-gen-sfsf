/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentCategoryDetails, DocumentCategoryDetailsField } from './DocumentCategoryDetails';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * DocumentCategories
 */
export interface DocumentCategories {
  /**
   * attachmemtCategories.
   * @nullable
   */
  attachmemtCategories?: DocumentCategoryDetails;
}

/**
 * @deprecated since v1.6.0. Use [[DocumentCategories.build]] instead.
 */
export function createDocumentCategories(json: any): DocumentCategories {
  return DocumentCategories.build(json);
}

/**
 * DocumentCategoriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentCategoriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentCategories.attachmemtCategories]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attachmemtCategories: DocumentCategoryDetailsField<EntityT> = new DocumentCategoryDetailsField('attachmemtCategories', this);
}

export namespace DocumentCategories {
  export function build(json: { [keys: string]: FieldType }): DocumentCategories {
    return createComplexType(json, {
      attachmemtCategories: (attachmemtCategories: DocumentCategoryDetails) => ({ attachmemtCategories: DocumentCategoryDetails.build(attachmemtCategories) })
    });
  }
}
