/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetails } from './FormObjectiveOtherDetails';

/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetails]] entity.
 */
export class FormObjectiveOtherDetailsRequestBuilder extends RequestBuilder<FormObjectiveOtherDetails> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveOtherDetails` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveOtherDetails.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveOtherDetails.formDataId]].
   * @param itemId Key property. See [[FormObjectiveOtherDetails.itemId]].
   * @param sectionIndex Key property. See [[FormObjectiveOtherDetails.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetails` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormObjectiveOtherDetails> {
    return new GetByKeyRequestBuilder(FormObjectiveOtherDetails, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveOtherDetails` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetails` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveOtherDetails> {
    return new GetAllRequestBuilder(FormObjectiveOtherDetails);
  }
}
