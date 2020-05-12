/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormJobDescSection } from './FormJobDescSection';

/**
 * Request builder class for operations supported on the [[FormJobDescSection]] entity.
 */
export class FormJobDescSectionRequestBuilder extends RequestBuilder<FormJobDescSection> {
  /**
   * Returns a request builder for retrieving one `FormJobDescSection` entity based on its keys.
   * @param formContentId Key property. See [[FormJobDescSection.formContentId]].
   * @param formDataId Key property. See [[FormJobDescSection.formDataId]].
   * @param sectionIndex Key property. See [[FormJobDescSection.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormJobDescSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormJobDescSection> {
    return new GetByKeyRequestBuilder(FormJobDescSection, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormJobDescSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormJobDescSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormJobDescSection> {
    return new GetAllRequestBuilder(FormJobDescSection);
  }
}
