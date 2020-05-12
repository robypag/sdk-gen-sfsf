/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeManagementAlert } from './TimeManagementAlert';

/**
 * Request builder class for operations supported on the [[TimeManagementAlert]] entity.
 */
export class TimeManagementAlertRequestBuilder extends RequestBuilder<TimeManagementAlert> {
  /**
   * Returns a request builder for retrieving one `TimeManagementAlert` entity based on its keys.
   * @param externalCode Key property. See [[TimeManagementAlert.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeManagementAlert` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TimeManagementAlert> {
    return new GetByKeyRequestBuilder(TimeManagementAlert, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeManagementAlert` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementAlert` entities.
   */
  getAll(): GetAllRequestBuilder<TimeManagementAlert> {
    return new GetAllRequestBuilder(TimeManagementAlert);
  }
}
