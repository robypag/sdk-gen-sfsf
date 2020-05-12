/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpProfilePortlet } from './EpProfilePortlet';

/**
 * Request builder class for operations supported on the [[EpProfilePortlet]] entity.
 */
export class EpProfilePortletRequestBuilder extends RequestBuilder<EpProfilePortlet> {
  /**
   * Returns a request builder for retrieving one `EpProfilePortlet` entity based on its keys.
   * @param dashboardId Key property. See [[EpProfilePortlet.dashboardId]].
   * @param portletId Key property. See [[EpProfilePortlet.portletId]].
   * @param userId Key property. See [[EpProfilePortlet.userId]].
   * @returns A request builder for creating requests to retrieve one `EpProfilePortlet` entity based on its keys.
   */
  getByKey(dashboardId: string, portletId: string, userId: string): GetByKeyRequestBuilder<EpProfilePortlet> {
    return new GetByKeyRequestBuilder(EpProfilePortlet, {
      dashboardId: dashboardId,
      portletId: portletId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EpProfilePortlet` entities.
   * @returns A request builder for creating requests to retrieve all `EpProfilePortlet` entities.
   */
  getAll(): GetAllRequestBuilder<EpProfilePortlet> {
    return new GetAllRequestBuilder(EpProfilePortlet);
  }
}
