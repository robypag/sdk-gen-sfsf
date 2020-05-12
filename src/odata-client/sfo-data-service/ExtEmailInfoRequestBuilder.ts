/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExtEmailInfo } from './ExtEmailInfo';

/**
 * Request builder class for operations supported on the [[ExtEmailInfo]] entity.
 */
export class ExtEmailInfoRequestBuilder extends RequestBuilder<ExtEmailInfo> {
  /**
   * Returns a request builder for retrieving one `ExtEmailInfo` entity based on its keys.
   * @param emailInfoId Key property. See [[ExtEmailInfo.emailInfoId]].
   * @returns A request builder for creating requests to retrieve one `ExtEmailInfo` entity based on its keys.
   */
  getByKey(emailInfoId: BigNumber): GetByKeyRequestBuilder<ExtEmailInfo> {
    return new GetByKeyRequestBuilder(ExtEmailInfo, { emailInfoId: emailInfoId });
  }

  /**
   * Returns a request builder for querying all `ExtEmailInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtEmailInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtEmailInfo> {
    return new GetAllRequestBuilder(ExtEmailInfo);
  }

  /**
   * Returns a request builder for creating a `ExtEmailInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtEmailInfo`.
   */
  create(entity: ExtEmailInfo): CreateRequestBuilder<ExtEmailInfo> {
    return new CreateRequestBuilder(ExtEmailInfo, entity);
  }
}
