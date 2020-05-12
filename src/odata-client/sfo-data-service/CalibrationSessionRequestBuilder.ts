/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationSession } from './CalibrationSession';

/**
 * Request builder class for operations supported on the [[CalibrationSession]] entity.
 */
export class CalibrationSessionRequestBuilder extends RequestBuilder<CalibrationSession> {
  /**
   * Returns a request builder for retrieving one `CalibrationSession` entity based on its keys.
   * @param sessionId Key property. See [[CalibrationSession.sessionId]].
   * @returns A request builder for creating requests to retrieve one `CalibrationSession` entity based on its keys.
   */
  getByKey(sessionId: BigNumber): GetByKeyRequestBuilder<CalibrationSession> {
    return new GetByKeyRequestBuilder(CalibrationSession, { sessionId: sessionId });
  }

  /**
   * Returns a request builder for querying all `CalibrationSession` entities.
   * @returns A request builder for creating requests to retrieve all `CalibrationSession` entities.
   */
  getAll(): GetAllRequestBuilder<CalibrationSession> {
    return new GetAllRequestBuilder(CalibrationSession);
  }
}
