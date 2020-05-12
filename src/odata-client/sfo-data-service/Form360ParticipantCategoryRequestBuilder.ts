/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ParticipantCategory } from './Form360ParticipantCategory';

/**
 * Request builder class for operations supported on the [[Form360ParticipantCategory]] entity.
 */
export class Form360ParticipantCategoryRequestBuilder extends RequestBuilder<Form360ParticipantCategory> {
  /**
   * Returns a request builder for retrieving one `Form360ParticipantCategory` entity based on its keys.
   * @param categoryValue Key property. See [[Form360ParticipantCategory.categoryValue]].
   * @param formContentId Key property. See [[Form360ParticipantCategory.formContentId]].
   * @param formDataId Key property. See [[Form360ParticipantCategory.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360ParticipantCategory` entity based on its keys.
   */
  getByKey(categoryValue: string, formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360ParticipantCategory> {
    return new GetByKeyRequestBuilder(Form360ParticipantCategory, {
      categoryValue: categoryValue,
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360ParticipantCategory` entities.
   * @returns A request builder for creating requests to retrieve all `Form360ParticipantCategory` entities.
   */
  getAll(): GetAllRequestBuilder<Form360ParticipantCategory> {
    return new GetAllRequestBuilder(Form360ParticipantCategory);
  }
}
