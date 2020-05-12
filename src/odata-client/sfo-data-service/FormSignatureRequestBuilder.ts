/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSignature } from './FormSignature';

/**
 * Request builder class for operations supported on the [[FormSignature]] entity.
 */
export class FormSignatureRequestBuilder extends RequestBuilder<FormSignature> {
  /**
   * Returns a request builder for retrieving one `FormSignature` entity based on its keys.
   * @param formContentId Key property. See [[FormSignature.formContentId]].
   * @param formDataId Key property. See [[FormSignature.formDataId]].
   * @param sectionIndex Key property. See [[FormSignature.sectionIndex]].
   * @param stepId Key property. See [[FormSignature.stepId]].
   * @returns A request builder for creating requests to retrieve one `FormSignature` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number, stepId: string): GetByKeyRequestBuilder<FormSignature> {
    return new GetByKeyRequestBuilder(FormSignature, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex,
      stepId: stepId
    });
  }

  /**
   * Returns a request builder for querying all `FormSignature` entities.
   * @returns A request builder for creating requests to retrieve all `FormSignature` entities.
   */
  getAll(): GetAllRequestBuilder<FormSignature> {
    return new GetAllRequestBuilder(FormSignature);
  }
}
