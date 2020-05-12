/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SuccessStoreContentBlob } from './SuccessStoreContentBlob';

/**
 * Request builder class for operations supported on the [[SuccessStoreContentBlob]] entity.
 */
export class SuccessStoreContentBlobRequestBuilder extends RequestBuilder<SuccessStoreContentBlob> {
  /**
   * Returns a request builder for retrieving one `SuccessStoreContentBlob` entity based on its keys.
   * @param contentId Key property. See [[SuccessStoreContentBlob.contentId]].
   * @returns A request builder for creating requests to retrieve one `SuccessStoreContentBlob` entity based on its keys.
   */
  getByKey(contentId: string): GetByKeyRequestBuilder<SuccessStoreContentBlob> {
    return new GetByKeyRequestBuilder(SuccessStoreContentBlob, { contentId: contentId });
  }

  /**
   * Returns a request builder for querying all `SuccessStoreContentBlob` entities.
   * @returns A request builder for creating requests to retrieve all `SuccessStoreContentBlob` entities.
   */
  getAll(): GetAllRequestBuilder<SuccessStoreContentBlob> {
    return new GetAllRequestBuilder(SuccessStoreContentBlob);
  }
}
