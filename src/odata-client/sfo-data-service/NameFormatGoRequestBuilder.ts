/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NameFormatGo } from './NameFormatGo';

/**
 * Request builder class for operations supported on the [[NameFormatGo]] entity.
 */
export class NameFormatGoRequestBuilder extends RequestBuilder<NameFormatGo> {
  /**
   * Returns a request builder for retrieving one `NameFormatGo` entity based on its keys.
   * @param externalCode Key property. See [[NameFormatGo.externalCode]].
   * @returns A request builder for creating requests to retrieve one `NameFormatGo` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<NameFormatGo> {
    return new GetByKeyRequestBuilder(NameFormatGo, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `NameFormatGo` entities.
   * @returns A request builder for creating requests to retrieve all `NameFormatGo` entities.
   */
  getAll(): GetAllRequestBuilder<NameFormatGo> {
    return new GetAllRequestBuilder(NameFormatGo);
  }
}
