/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgFieldOperator } from './DgFieldOperator';

/**
 * Request builder class for operations supported on the [[DgFieldOperator]] entity.
 */
export class DgFieldOperatorRequestBuilder extends RequestBuilder<DgFieldOperator> {
  /**
   * Returns a request builder for retrieving one `DgFieldOperator` entity based on its keys.
   * @param token Key property. See [[DgFieldOperator.token]].
   * @returns A request builder for creating requests to retrieve one `DgFieldOperator` entity based on its keys.
   */
  getByKey(token: string): GetByKeyRequestBuilder<DgFieldOperator> {
    return new GetByKeyRequestBuilder(DgFieldOperator, { token: token });
  }

  /**
   * Returns a request builder for querying all `DgFieldOperator` entities.
   * @returns A request builder for creating requests to retrieve all `DgFieldOperator` entities.
   */
  getAll(): GetAllRequestBuilder<DgFieldOperator> {
    return new GetAllRequestBuilder(DgFieldOperator);
  }
}
