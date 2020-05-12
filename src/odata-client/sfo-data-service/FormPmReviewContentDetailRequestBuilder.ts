/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormPmReviewContentDetail } from './FormPmReviewContentDetail';

/**
 * Request builder class for operations supported on the [[FormPmReviewContentDetail]] entity.
 */
export class FormPmReviewContentDetailRequestBuilder extends RequestBuilder<FormPmReviewContentDetail> {
  /**
   * Returns a request builder for retrieving one `FormPmReviewContentDetail` entity based on its keys.
   * @param formContentId Key property. See [[FormPmReviewContentDetail.formContentId]].
   * @param formDataId Key property. See [[FormPmReviewContentDetail.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormPmReviewContentDetail` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormPmReviewContentDetail> {
    return new GetByKeyRequestBuilder(FormPmReviewContentDetail, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormPmReviewContentDetail` entities.
   * @returns A request builder for creating requests to retrieve all `FormPmReviewContentDetail` entities.
   */
  getAll(): GetAllRequestBuilder<FormPmReviewContentDetail> {
    return new GetAllRequestBuilder(FormPmReviewContentDetail);
  }
}
