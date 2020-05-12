/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewFeedbackList } from './FormReviewFeedbackList';

/**
 * Request builder class for operations supported on the [[FormReviewFeedbackList]] entity.
 */
export class FormReviewFeedbackListRequestBuilder extends RequestBuilder<FormReviewFeedbackList> {
  /**
   * Returns a request builder for retrieving one `FormReviewFeedbackList` entity based on its keys.
   * @param formDataId Key property. See [[FormReviewFeedbackList.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormReviewFeedbackList` entity based on its keys.
   */
  getByKey(formDataId: BigNumber): GetByKeyRequestBuilder<FormReviewFeedbackList> {
    return new GetByKeyRequestBuilder(FormReviewFeedbackList, { formDataId: formDataId });
  }

  /**
   * Returns a request builder for querying all `FormReviewFeedbackList` entities.
   * @returns A request builder for creating requests to retrieve all `FormReviewFeedbackList` entities.
   */
  getAll(): GetAllRequestBuilder<FormReviewFeedbackList> {
    return new GetAllRequestBuilder(FormReviewFeedbackList);
  }
}
