/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSummarySection } from './FormSummarySection';

/**
 * Request builder class for operations supported on the [[FormSummarySection]] entity.
 */
export class FormSummarySectionRequestBuilder extends RequestBuilder<FormSummarySection> {
  /**
   * Returns a request builder for retrieving one `FormSummarySection` entity based on its keys.
   * @param formContentId Key property. See [[FormSummarySection.formContentId]].
   * @param formDataId Key property. See [[FormSummarySection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormSummarySection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormSummarySection> {
    return new GetByKeyRequestBuilder(FormSummarySection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormSummarySection` entities.
   * @returns A request builder for creating requests to retrieve all `FormSummarySection` entities.
   */
  getAll(): GetAllRequestBuilder<FormSummarySection> {
    return new GetAllRequestBuilder(FormSummarySection);
  }
}
