/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360SummaryViewRater } from './Form360SummaryViewRater';

/**
 * Request builder class for operations supported on the [[Form360SummaryViewRater]] entity.
 */
export class Form360SummaryViewRaterRequestBuilder extends RequestBuilder<Form360SummaryViewRater> {
  /**
   * Returns a request builder for retrieving one `Form360SummaryViewRater` entity based on its keys.
   * @param formContentId Key property. See [[Form360SummaryViewRater.formContentId]].
   * @param formDataId Key property. See [[Form360SummaryViewRater.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360SummaryViewRater` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360SummaryViewRater> {
    return new GetByKeyRequestBuilder(Form360SummaryViewRater, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360SummaryViewRater` entities.
   * @returns A request builder for creating requests to retrieve all `Form360SummaryViewRater` entities.
   */
  getAll(): GetAllRequestBuilder<Form360SummaryViewRater> {
    return new GetAllRequestBuilder(Form360SummaryViewRater);
  }
}
