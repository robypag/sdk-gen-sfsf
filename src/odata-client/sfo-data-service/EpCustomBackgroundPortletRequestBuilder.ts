/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpCustomBackgroundPortlet } from './EpCustomBackgroundPortlet';

/**
 * Request builder class for operations supported on the [[EpCustomBackgroundPortlet]] entity.
 */
export class EpCustomBackgroundPortletRequestBuilder extends RequestBuilder<EpCustomBackgroundPortlet> {
  /**
   * Returns a request builder for retrieving one `EpCustomBackgroundPortlet` entity based on its keys.
   * @param backgroundElementId Key property. See [[EpCustomBackgroundPortlet.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `EpCustomBackgroundPortlet` entity based on its keys.
   */
  getByKey(backgroundElementId: string): GetByKeyRequestBuilder<EpCustomBackgroundPortlet> {
    return new GetByKeyRequestBuilder(EpCustomBackgroundPortlet, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `EpCustomBackgroundPortlet` entities.
   * @returns A request builder for creating requests to retrieve all `EpCustomBackgroundPortlet` entities.
   */
  getAll(): GetAllRequestBuilder<EpCustomBackgroundPortlet> {
    return new GetAllRequestBuilder(EpCustomBackgroundPortlet);
  }
}
