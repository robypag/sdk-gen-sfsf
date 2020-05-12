/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveDetails } from './FormObjectiveDetails';

/**
 * Request builder class for operations supported on the [[FormObjectiveDetails]] entity.
 */
export class FormObjectiveDetailsRequestBuilder extends RequestBuilder<FormObjectiveDetails> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveDetails` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveDetails.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveDetails.formDataId]].
   * @param itemId Key property. See [[FormObjectiveDetails.itemId]].
   * @param sectionIndex Key property. See [[FormObjectiveDetails.sectionIndex]].
   * @param type Key property. See [[FormObjectiveDetails.type]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveDetails` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveDetails> {
    return new GetByKeyRequestBuilder(FormObjectiveDetails, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex,
      type: type
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveDetails` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveDetails` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveDetails> {
    return new GetAllRequestBuilder(FormObjectiveDetails);
  }
}
