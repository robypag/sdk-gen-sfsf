/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationSubjectRank } from './CalibrationSubjectRank';

/**
 * Request builder class for operations supported on the [[CalibrationSubjectRank]] entity.
 */
export class CalibrationSubjectRankRequestBuilder extends RequestBuilder<CalibrationSubjectRank> {
  /**
   * Returns a request builder for retrieving one `CalibrationSubjectRank` entity based on its keys.
   * @param subjectRankId Key property. See [[CalibrationSubjectRank.subjectRankId]].
   * @returns A request builder for creating requests to retrieve one `CalibrationSubjectRank` entity based on its keys.
   */
  getByKey(subjectRankId: BigNumber): GetByKeyRequestBuilder<CalibrationSubjectRank> {
    return new GetByKeyRequestBuilder(CalibrationSubjectRank, { subjectRankId: subjectRankId });
  }

  /**
   * Returns a request builder for querying all `CalibrationSubjectRank` entities.
   * @returns A request builder for creating requests to retrieve all `CalibrationSubjectRank` entities.
   */
  getAll(): GetAllRequestBuilder<CalibrationSubjectRank> {
    return new GetAllRequestBuilder(CalibrationSubjectRank);
  }
}
