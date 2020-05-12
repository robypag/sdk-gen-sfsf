/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeManagementAlertMessage } from './TimeManagementAlertMessage';

/**
 * Request builder class for operations supported on the [[TimeManagementAlertMessage]] entity.
 */
export class TimeManagementAlertMessageRequestBuilder extends RequestBuilder<TimeManagementAlertMessage> {
  /**
   * Returns a request builder for retrieving one `TimeManagementAlertMessage` entity based on its keys.
   * @param timeManagementAlertExternalCode Key property. See [[TimeManagementAlertMessage.timeManagementAlertExternalCode]].
   * @param externalCode Key property. See [[TimeManagementAlertMessage.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeManagementAlertMessage` entity based on its keys.
   */
  getByKey(timeManagementAlertExternalCode: string, externalCode: string): GetByKeyRequestBuilder<TimeManagementAlertMessage> {
    return new GetByKeyRequestBuilder(TimeManagementAlertMessage, {
      TimeManagementAlert_externalCode: timeManagementAlertExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeManagementAlertMessage` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementAlertMessage` entities.
   */
  getAll(): GetAllRequestBuilder<TimeManagementAlertMessage> {
    return new GetAllRequestBuilder(TimeManagementAlertMessage);
  }
}
