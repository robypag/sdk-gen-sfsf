/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ThemeTemplate } from './ThemeTemplate';

/**
 * Request builder class for operations supported on the [[ThemeTemplate]] entity.
 */
export class ThemeTemplateRequestBuilder extends RequestBuilder<ThemeTemplate> {
  /**
   * Returns a request builder for retrieving one `ThemeTemplate` entity based on its keys.
   * @param id Key property. See [[ThemeTemplate.id]].
   * @returns A request builder for creating requests to retrieve one `ThemeTemplate` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<ThemeTemplate> {
    return new GetByKeyRequestBuilder(ThemeTemplate, { id: id });
  }

  /**
   * Returns a request builder for querying all `ThemeTemplate` entities.
   * @returns A request builder for creating requests to retrieve all `ThemeTemplate` entities.
   */
  getAll(): GetAllRequestBuilder<ThemeTemplate> {
    return new GetAllRequestBuilder(ThemeTemplate);
  }
}
