/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpProfileView } from './EpProfileView';

/**
 * Request builder class for operations supported on the [[EpProfileView]] entity.
 */
export class EpProfileViewRequestBuilder extends RequestBuilder<EpProfileView> {
  /**
   * Returns a request builder for retrieving one `EpProfileView` entity based on its keys.
   * @param dashboardId Key property. See [[EpProfileView.dashboardId]].
   * @param userId Key property. See [[EpProfileView.userId]].
   * @returns A request builder for creating requests to retrieve one `EpProfileView` entity based on its keys.
   */
  getByKey(dashboardId: string, userId: string): GetByKeyRequestBuilder<EpProfileView> {
    return new GetByKeyRequestBuilder(EpProfileView, {
      dashboardId: dashboardId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EpProfileView` entities.
   * @returns A request builder for creating requests to retrieve all `EpProfileView` entities.
   */
  getAll(): GetAllRequestBuilder<EpProfileView> {
    return new GetAllRequestBuilder(EpProfileView);
  }
}
