/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360Rater } from './Form360Rater';

/**
 * Request builder class for operations supported on the [[Form360Rater]] entity.
 */
export class Form360RaterRequestBuilder extends RequestBuilder<Form360Rater> {
  /**
   * Returns a request builder for retrieving one `Form360Rater` entity based on its keys.
   * @param formContentId Key property. See [[Form360Rater.formContentId]].
   * @param formDataId Key property. See [[Form360Rater.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360Rater` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360Rater> {
    return new GetByKeyRequestBuilder(Form360Rater, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360Rater` entities.
   * @returns A request builder for creating requests to retrieve all `Form360Rater` entities.
   */
  getAll(): GetAllRequestBuilder<Form360Rater> {
    return new GetAllRequestBuilder(Form360Rater);
  }
}
