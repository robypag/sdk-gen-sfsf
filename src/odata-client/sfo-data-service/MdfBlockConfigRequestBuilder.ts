/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MdfBlockConfig } from './MdfBlockConfig';

/**
 * Request builder class for operations supported on the [[MdfBlockConfig]] entity.
 */
export class MdfBlockConfigRequestBuilder extends RequestBuilder<MdfBlockConfig> {
  /**
   * Returns a request builder for retrieving one `MdfBlockConfig` entity based on its keys.
   * @param code Key property. See [[MdfBlockConfig.code]].
   * @returns A request builder for creating requests to retrieve one `MdfBlockConfig` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<MdfBlockConfig> {
    return new GetByKeyRequestBuilder(MdfBlockConfig, { code: code });
  }

  /**
   * Returns a request builder for querying all `MdfBlockConfig` entities.
   * @returns A request builder for creating requests to retrieve all `MdfBlockConfig` entities.
   */
  getAll(): GetAllRequestBuilder<MdfBlockConfig> {
    return new GetAllRequestBuilder(MdfBlockConfig);
  }
}
