/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRatingScale } from './FormRatingScale';

/**
 * Request builder class for operations supported on the [[FormRatingScale]] entity.
 */
export class FormRatingScaleRequestBuilder extends RequestBuilder<FormRatingScale> {
  /**
   * Returns a request builder for retrieving one `FormRatingScale` entity based on its keys.
   * @param formContentId Key property. See [[FormRatingScale.formContentId]].
   * @param formDataId Key property. See [[FormRatingScale.formDataId]].
   * @param sectionIndex Key property. See [[FormRatingScale.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormRatingScale` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormRatingScale> {
    return new GetByKeyRequestBuilder(FormRatingScale, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormRatingScale` entities.
   * @returns A request builder for creating requests to retrieve all `FormRatingScale` entities.
   */
  getAll(): GetAllRequestBuilder<FormRatingScale> {
    return new GetAllRequestBuilder(FormRatingScale);
  }
}
