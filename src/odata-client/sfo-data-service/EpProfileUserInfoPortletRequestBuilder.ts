/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpProfileUserInfoPortlet } from './EpProfileUserInfoPortlet';

/**
 * Request builder class for operations supported on the [[EpProfileUserInfoPortlet]] entity.
 */
export class EpProfileUserInfoPortletRequestBuilder extends RequestBuilder<EpProfileUserInfoPortlet> {
  /**
   * Returns a request builder for retrieving one `EpProfileUserInfoPortlet` entity based on its keys.
   * @param dashboardId Key property. See [[EpProfileUserInfoPortlet.dashboardId]].
   * @param portletId Key property. See [[EpProfileUserInfoPortlet.portletId]].
   * @param userId Key property. See [[EpProfileUserInfoPortlet.userId]].
   * @returns A request builder for creating requests to retrieve one `EpProfileUserInfoPortlet` entity based on its keys.
   */
  getByKey(dashboardId: string, portletId: string, userId: string): GetByKeyRequestBuilder<EpProfileUserInfoPortlet> {
    return new GetByKeyRequestBuilder(EpProfileUserInfoPortlet, {
      dashboardId: dashboardId,
      portletId: portletId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EpProfileUserInfoPortlet` entities.
   * @returns A request builder for creating requests to retrieve all `EpProfileUserInfoPortlet` entities.
   */
  getAll(): GetAllRequestBuilder<EpProfileUserInfoPortlet> {
    return new GetAllRequestBuilder(EpProfileUserInfoPortlet);
  }
}
