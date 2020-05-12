/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoWfConfig } from './FoWfConfig';

/**
 * Request builder class for operations supported on the [[FoWfConfig]] entity.
 */
export class FoWfConfigRequestBuilder extends RequestBuilder<FoWfConfig> {
  /**
   * Returns a request builder for retrieving one `FoWfConfig` entity based on its keys.
   * @param externalCode Key property. See [[FoWfConfig.externalCode]].
   * @returns A request builder for creating requests to retrieve one `FoWfConfig` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<FoWfConfig> {
    return new GetByKeyRequestBuilder(FoWfConfig, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `FoWfConfig` entities.
   * @returns A request builder for creating requests to retrieve all `FoWfConfig` entities.
   */
  getAll(): GetAllRequestBuilder<FoWfConfig> {
    return new GetAllRequestBuilder(FoWfConfig);
  }
}
