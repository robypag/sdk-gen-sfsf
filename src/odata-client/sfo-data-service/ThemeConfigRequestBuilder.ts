/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ThemeConfig } from './ThemeConfig';

/**
 * Request builder class for operations supported on the [[ThemeConfig]] entity.
 */
export class ThemeConfigRequestBuilder extends RequestBuilder<ThemeConfig> {
  /**
   * Returns a request builder for retrieving one `ThemeConfig` entity based on its keys.
   * @param id Key property. See [[ThemeConfig.id]].
   * @returns A request builder for creating requests to retrieve one `ThemeConfig` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<ThemeConfig> {
    return new GetByKeyRequestBuilder(ThemeConfig, { id: id });
  }

  /**
   * Returns a request builder for querying all `ThemeConfig` entities.
   * @returns A request builder for creating requests to retrieve all `ThemeConfig` entities.
   */
  getAll(): GetAllRequestBuilder<ThemeConfig> {
    return new GetAllRequestBuilder(ThemeConfig);
  }
}
