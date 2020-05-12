/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoFrequency } from './FoFrequency';

/**
 * Request builder class for operations supported on the [[FoFrequency]] entity.
 */
export class FoFrequencyRequestBuilder extends RequestBuilder<FoFrequency> {
  /**
   * Returns a request builder for retrieving one `FoFrequency` entity based on its keys.
   * @param externalCode Key property. See [[FoFrequency.externalCode]].
   * @returns A request builder for creating requests to retrieve one `FoFrequency` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<FoFrequency> {
    return new GetByKeyRequestBuilder(FoFrequency, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `FoFrequency` entities.
   * @returns A request builder for creating requests to retrieve all `FoFrequency` entities.
   */
  getAll(): GetAllRequestBuilder<FoFrequency> {
    return new GetAllRequestBuilder(FoFrequency);
  }
}
