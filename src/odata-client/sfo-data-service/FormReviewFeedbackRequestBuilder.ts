/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewFeedback } from './FormReviewFeedback';

/**
 * Request builder class for operations supported on the [[FormReviewFeedback]] entity.
 */
export class FormReviewFeedbackRequestBuilder extends RequestBuilder<FormReviewFeedback> {
  /**
   * Returns a request builder for retrieving one `FormReviewFeedback` entity based on its keys.
   * @param feedbackId Key property. See [[FormReviewFeedback.feedbackId]].
   * @returns A request builder for creating requests to retrieve one `FormReviewFeedback` entity based on its keys.
   */
  getByKey(feedbackId: BigNumber): GetByKeyRequestBuilder<FormReviewFeedback> {
    return new GetByKeyRequestBuilder(FormReviewFeedback, { feedbackId: feedbackId });
  }

  /**
   * Returns a request builder for querying all `FormReviewFeedback` entities.
   * @returns A request builder for creating requests to retrieve all `FormReviewFeedback` entities.
   */
  getAll(): GetAllRequestBuilder<FormReviewFeedback> {
    return new GetAllRequestBuilder(FormReviewFeedback);
  }
}
