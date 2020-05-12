/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSignatureSection } from './FormSignatureSection';

/**
 * Request builder class for operations supported on the [[FormSignatureSection]] entity.
 */
export class FormSignatureSectionRequestBuilder extends RequestBuilder<FormSignatureSection> {
  /**
   * Returns a request builder for retrieving one `FormSignatureSection` entity based on its keys.
   * @param formContentId Key property. See [[FormSignatureSection.formContentId]].
   * @param formDataId Key property. See [[FormSignatureSection.formDataId]].
   * @param sectionIndex Key property. See [[FormSignatureSection.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormSignatureSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormSignatureSection> {
    return new GetByKeyRequestBuilder(FormSignatureSection, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormSignatureSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormSignatureSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormSignatureSection> {
    return new GetAllRequestBuilder(FormSignatureSection);
  }
}
