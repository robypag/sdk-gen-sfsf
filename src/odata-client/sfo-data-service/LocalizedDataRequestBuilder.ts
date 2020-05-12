/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { LocalizedData } from './LocalizedData';

/**
 * Request builder class for operations supported on the [[LocalizedData]] entity.
 */
export class LocalizedDataRequestBuilder extends RequestBuilder<LocalizedData> {
  /**
   * Returns a request builder for retrieving one `LocalizedData` entity based on its keys.
   * @param localizedDataCode Key property. See [[LocalizedData.localizedDataCode]].
   * @param localizedDataLocale Key property. See [[LocalizedData.localizedDataLocale]].
   * @returns A request builder for creating requests to retrieve one `LocalizedData` entity based on its keys.
   */
  getByKey(localizedDataCode: string, localizedDataLocale: string): GetByKeyRequestBuilder<LocalizedData> {
    return new GetByKeyRequestBuilder(LocalizedData, {
      localizedDataCode: localizedDataCode,
      localizedDataLocale: localizedDataLocale
    });
  }

  /**
   * Returns a request builder for querying all `LocalizedData` entities.
   * @returns A request builder for creating requests to retrieve all `LocalizedData` entities.
   */
  getAll(): GetAllRequestBuilder<LocalizedData> {
    return new GetAllRequestBuilder(LocalizedData);
  }
}
