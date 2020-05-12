/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HireDateChange } from './HireDateChange';

/**
 * Request builder class for operations supported on the [[HireDateChange]] entity.
 */
export class HireDateChangeRequestBuilder extends RequestBuilder<HireDateChange> {
  /**
   * Returns a request builder for retrieving one `HireDateChange` entity based on its keys.
   * @param code Key property. See [[HireDateChange.code]].
   * @returns A request builder for creating requests to retrieve one `HireDateChange` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<HireDateChange> {
    return new GetByKeyRequestBuilder(HireDateChange, { code: code });
  }

  /**
   * Returns a request builder for querying all `HireDateChange` entities.
   * @returns A request builder for creating requests to retrieve all `HireDateChange` entities.
   */
  getAll(): GetAllRequestBuilder<HireDateChange> {
    return new GetAllRequestBuilder(HireDateChange);
  }
}
