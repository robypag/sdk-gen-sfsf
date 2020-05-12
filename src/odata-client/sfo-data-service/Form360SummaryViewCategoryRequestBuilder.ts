/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360SummaryViewCategory } from './Form360SummaryViewCategory';

/**
 * Request builder class for operations supported on the [[Form360SummaryViewCategory]] entity.
 */
export class Form360SummaryViewCategoryRequestBuilder extends RequestBuilder<Form360SummaryViewCategory> {
  /**
   * Returns a request builder for retrieving one `Form360SummaryViewCategory` entity based on its keys.
   * @param category Key property. See [[Form360SummaryViewCategory.category]].
   * @param formContentId Key property. See [[Form360SummaryViewCategory.formContentId]].
   * @param formDataId Key property. See [[Form360SummaryViewCategory.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360SummaryViewCategory` entity based on its keys.
   */
  getByKey(category: string, formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360SummaryViewCategory> {
    return new GetByKeyRequestBuilder(Form360SummaryViewCategory, {
      category: category,
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360SummaryViewCategory` entities.
   * @returns A request builder for creating requests to retrieve all `Form360SummaryViewCategory` entities.
   */
  getAll(): GetAllRequestBuilder<Form360SummaryViewCategory> {
    return new GetAllRequestBuilder(Form360SummaryViewCategory);
  }
}
