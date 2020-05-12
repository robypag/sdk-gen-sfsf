/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRatingScaleValue } from './FormRatingScaleValue';

/**
 * Request builder class for operations supported on the [[FormRatingScaleValue]] entity.
 */
export class FormRatingScaleValueRequestBuilder extends RequestBuilder<FormRatingScaleValue> {
  /**
   * Returns a request builder for retrieving one `FormRatingScaleValue` entity based on its keys.
   * @param formContentId Key property. See [[FormRatingScaleValue.formContentId]].
   * @param formDataId Key property. See [[FormRatingScaleValue.formDataId]].
   * @param scaleId Key property. See [[FormRatingScaleValue.scaleId]].
   * @param sectionIndex Key property. See [[FormRatingScaleValue.sectionIndex]].
   * @param value Key property. See [[FormRatingScaleValue.value]].
   * @returns A request builder for creating requests to retrieve one `FormRatingScaleValue` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, scaleId: string, sectionIndex: number, value: string): GetByKeyRequestBuilder<FormRatingScaleValue> {
    return new GetByKeyRequestBuilder(FormRatingScaleValue, {
      formContentId: formContentId,
      formDataId: formDataId,
      scaleId: scaleId,
      sectionIndex: sectionIndex,
      value: value
    });
  }

  /**
   * Returns a request builder for querying all `FormRatingScaleValue` entities.
   * @returns A request builder for creating requests to retrieve all `FormRatingScaleValue` entities.
   */
  getAll(): GetAllRequestBuilder<FormRatingScaleValue> {
    return new GetAllRequestBuilder(FormRatingScaleValue);
  }
}
