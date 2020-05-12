/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormHeader } from './FormHeader';

/**
 * Request builder class for operations supported on the [[FormHeader]] entity.
 */
export class FormHeaderRequestBuilder extends RequestBuilder<FormHeader> {
  /**
   * Returns a request builder for retrieving one `FormHeader` entity based on its keys.
   * @param formDataId Key property. See [[FormHeader.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormHeader` entity based on its keys.
   */
  getByKey(formDataId: BigNumber): GetByKeyRequestBuilder<FormHeader> {
    return new GetByKeyRequestBuilder(FormHeader, { formDataId: formDataId });
  }

  /**
   * Returns a request builder for querying all `FormHeader` entities.
   * @returns A request builder for creating requests to retrieve all `FormHeader` entities.
   */
  getAll(): GetAllRequestBuilder<FormHeader> {
    return new GetAllRequestBuilder(FormHeader);
  }
}
