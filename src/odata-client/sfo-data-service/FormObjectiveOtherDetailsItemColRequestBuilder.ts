/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetailsItemCol } from './FormObjectiveOtherDetailsItemCol';

/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItemCol]] entity.
 */
export class FormObjectiveOtherDetailsItemColRequestBuilder extends RequestBuilder<FormObjectiveOtherDetailsItemCol> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItemCol` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveOtherDetailsItemCol.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveOtherDetailsItemCol.formDataId]].
   * @param itemId Key property. See [[FormObjectiveOtherDetailsItemCol.itemId]].
   * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItemCol.sectionIndex]].
   * @param type Key property. See [[FormObjectiveOtherDetailsItemCol.type]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItemCol` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveOtherDetailsItemCol> {
    return new GetByKeyRequestBuilder(FormObjectiveOtherDetailsItemCol, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex,
      type: type
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveOtherDetailsItemCol` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItemCol` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveOtherDetailsItemCol> {
    return new GetAllRequestBuilder(FormObjectiveOtherDetailsItemCol);
  }
}
