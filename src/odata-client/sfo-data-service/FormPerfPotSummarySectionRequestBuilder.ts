/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormPerfPotSummarySection } from './FormPerfPotSummarySection';

/**
 * Request builder class for operations supported on the [[FormPerfPotSummarySection]] entity.
 */
export class FormPerfPotSummarySectionRequestBuilder extends RequestBuilder<FormPerfPotSummarySection> {
  /**
   * Returns a request builder for retrieving one `FormPerfPotSummarySection` entity based on its keys.
   * @param formContentId Key property. See [[FormPerfPotSummarySection.formContentId]].
   * @param formDataId Key property. See [[FormPerfPotSummarySection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormPerfPotSummarySection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormPerfPotSummarySection> {
    return new GetByKeyRequestBuilder(FormPerfPotSummarySection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormPerfPotSummarySection` entities.
   * @returns A request builder for creating requests to retrieve all `FormPerfPotSummarySection` entities.
   */
  getAll(): GetAllRequestBuilder<FormPerfPotSummarySection> {
    return new GetAllRequestBuilder(FormPerfPotSummarySection);
  }
}
