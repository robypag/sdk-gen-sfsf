/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360RaterSection } from './Form360RaterSection';

/**
 * Request builder class for operations supported on the [[Form360RaterSection]] entity.
 */
export class Form360RaterSectionRequestBuilder extends RequestBuilder<Form360RaterSection> {
  /**
   * Returns a request builder for retrieving one `Form360RaterSection` entity based on its keys.
   * @param formContentId Key property. See [[Form360RaterSection.formContentId]].
   * @param formDataId Key property. See [[Form360RaterSection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360RaterSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360RaterSection> {
    return new GetByKeyRequestBuilder(Form360RaterSection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360RaterSection` entities.
   * @returns A request builder for creating requests to retrieve all `Form360RaterSection` entities.
   */
  getAll(): GetAllRequestBuilder<Form360RaterSection> {
    return new GetAllRequestBuilder(Form360RaterSection);
  }
}
