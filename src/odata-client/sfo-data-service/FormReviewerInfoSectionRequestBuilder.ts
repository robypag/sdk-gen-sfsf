/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewerInfoSection } from './FormReviewerInfoSection';

/**
 * Request builder class for operations supported on the [[FormReviewerInfoSection]] entity.
 */
export class FormReviewerInfoSectionRequestBuilder extends RequestBuilder<FormReviewerInfoSection> {
  /**
   * Returns a request builder for retrieving one `FormReviewerInfoSection` entity based on its keys.
   * @param formContentId Key property. See [[FormReviewerInfoSection.formContentId]].
   * @param formDataId Key property. See [[FormReviewerInfoSection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormReviewerInfoSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormReviewerInfoSection> {
    return new GetByKeyRequestBuilder(FormReviewerInfoSection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormReviewerInfoSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormReviewerInfoSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormReviewerInfoSection> {
    return new GetAllRequestBuilder(FormReviewerInfoSection);
  }
}
