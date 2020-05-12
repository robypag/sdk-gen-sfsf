/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveComment } from './FormObjectiveComment';

/**
 * Request builder class for operations supported on the [[FormObjectiveComment]] entity.
 */
export class FormObjectiveCommentRequestBuilder extends RequestBuilder<FormObjectiveComment> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveComment` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveComment.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveComment.formDataId]].
   * @param itemId Key property. See [[FormObjectiveComment.itemId]].
   * @param sectionIndex Key property. See [[FormObjectiveComment.sectionIndex]].
   * @param type Key property. See [[FormObjectiveComment.type]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveComment` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveComment> {
    return new GetByKeyRequestBuilder(FormObjectiveComment, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex,
      type: type
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveComment` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveComment` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveComment> {
    return new GetAllRequestBuilder(FormObjectiveComment);
  }
}
