/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * CreatePerformanceReviewFormResponse
 */
export interface CreatePerformanceReviewFormResponse {
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: BigNumber;
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * statusCode.
   * @nullable
   */
  statusCode?: BigNumber;
}

/**
 * @deprecated since v1.6.0. Use [[CreatePerformanceReviewFormResponse.build]] instead.
 */
export function createCreatePerformanceReviewFormResponse(json: any): CreatePerformanceReviewFormResponse {
  return CreatePerformanceReviewFormResponse.build(json);
}

/**
 * CreatePerformanceReviewFormResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreatePerformanceReviewFormResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreatePerformanceReviewFormResponse.formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formDataId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('formDataId', this, 'Edm.Int64');
  /**
   * Representation of the [[CreatePerformanceReviewFormResponse.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
  /**
   * Representation of the [[CreatePerformanceReviewFormResponse.statusCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusCode: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('statusCode', this, 'Edm.Int64');
}

export namespace CreatePerformanceReviewFormResponse {
  export function build(json: { [keys: string]: FieldType }): CreatePerformanceReviewFormResponse {
    return createComplexType(json, {
      formDataId: (formDataId: BigNumber) => ({ formDataId: edmToTs(formDataId, 'Edm.Int64') }),
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') }),
      statusCode: (statusCode: BigNumber) => ({ statusCode: edmToTs(statusCode, 'Edm.Int64') })
    });
  }
}
