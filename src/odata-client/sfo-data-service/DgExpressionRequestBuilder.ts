/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgExpression } from './DgExpression';

/**
 * Request builder class for operations supported on the [[DgExpression]] entity.
 */
export class DgExpressionRequestBuilder extends RequestBuilder<DgExpression> {
  /**
   * Returns a request builder for retrieving one `DgExpression` entity based on its keys.
   * @param expressionId Key property. See [[DgExpression.expressionId]].
   * @returns A request builder for creating requests to retrieve one `DgExpression` entity based on its keys.
   */
  getByKey(expressionId: string): GetByKeyRequestBuilder<DgExpression> {
    return new GetByKeyRequestBuilder(DgExpression, { expressionID: expressionId });
  }

  /**
   * Returns a request builder for querying all `DgExpression` entities.
   * @returns A request builder for creating requests to retrieve all `DgExpression` entities.
   */
  getAll(): GetAllRequestBuilder<DgExpression> {
    return new GetAllRequestBuilder(DgExpression);
  }
}
