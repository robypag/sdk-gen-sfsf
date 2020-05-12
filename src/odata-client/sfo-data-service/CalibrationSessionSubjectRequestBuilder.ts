/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationSessionSubject } from './CalibrationSessionSubject';

/**
 * Request builder class for operations supported on the [[CalibrationSessionSubject]] entity.
 */
export class CalibrationSessionSubjectRequestBuilder extends RequestBuilder<CalibrationSessionSubject> {
  /**
   * Returns a request builder for retrieving one `CalibrationSessionSubject` entity based on its keys.
   * @param sessionSubjectId Key property. See [[CalibrationSessionSubject.sessionSubjectId]].
   * @returns A request builder for creating requests to retrieve one `CalibrationSessionSubject` entity based on its keys.
   */
  getByKey(sessionSubjectId: BigNumber): GetByKeyRequestBuilder<CalibrationSessionSubject> {
    return new GetByKeyRequestBuilder(CalibrationSessionSubject, { sessionSubjectId: sessionSubjectId });
  }

  /**
   * Returns a request builder for querying all `CalibrationSessionSubject` entities.
   * @returns A request builder for creating requests to retrieve all `CalibrationSessionSubject` entities.
   */
  getAll(): GetAllRequestBuilder<CalibrationSessionSubject> {
    return new GetAllRequestBuilder(CalibrationSessionSubject);
  }
}
