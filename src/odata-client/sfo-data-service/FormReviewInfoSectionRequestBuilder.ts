/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewInfoSection } from './FormReviewInfoSection';

/**
 * Request builder class for operations supported on the [[FormReviewInfoSection]] entity.
 */
export class FormReviewInfoSectionRequestBuilder extends RequestBuilder<FormReviewInfoSection> {
  /**
   * Returns a request builder for retrieving one `FormReviewInfoSection` entity based on its keys.
   * @param formContentId Key property. See [[FormReviewInfoSection.formContentId]].
   * @param formDataId Key property. See [[FormReviewInfoSection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormReviewInfoSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormReviewInfoSection> {
    return new GetByKeyRequestBuilder(FormReviewInfoSection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormReviewInfoSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormReviewInfoSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormReviewInfoSection> {
    return new GetAllRequestBuilder(FormReviewInfoSection);
  }
}
