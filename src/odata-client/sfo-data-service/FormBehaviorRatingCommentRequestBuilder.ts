/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormBehaviorRatingComment } from './FormBehaviorRatingComment';

/**
 * Request builder class for operations supported on the [[FormBehaviorRatingComment]] entity.
 */
export class FormBehaviorRatingCommentRequestBuilder extends RequestBuilder<FormBehaviorRatingComment> {
  /**
   * Returns a request builder for retrieving one `FormBehaviorRatingComment` entity based on its keys.
   * @param behaviorId Key property. See [[FormBehaviorRatingComment.behaviorId]].
   * @param formContentId Key property. See [[FormBehaviorRatingComment.formContentId]].
   * @param formDataId Key property. See [[FormBehaviorRatingComment.formDataId]].
   * @param itemId Key property. See [[FormBehaviorRatingComment.itemId]].
   * @param ratingType Key property. See [[FormBehaviorRatingComment.ratingType]].
   * @param sectionIndex Key property. See [[FormBehaviorRatingComment.sectionIndex]].
   * @param userId Key property. See [[FormBehaviorRatingComment.userId]].
   * @returns A request builder for creating requests to retrieve one `FormBehaviorRatingComment` entity based on its keys.
   */
  getByKey(behaviorId: BigNumber, formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, ratingType: string, sectionIndex: number, userId: string): GetByKeyRequestBuilder<FormBehaviorRatingComment> {
    return new GetByKeyRequestBuilder(FormBehaviorRatingComment, {
      behaviorId: behaviorId,
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      ratingType: ratingType,
      sectionIndex: sectionIndex,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `FormBehaviorRatingComment` entities.
   * @returns A request builder for creating requests to retrieve all `FormBehaviorRatingComment` entities.
   */
  getAll(): GetAllRequestBuilder<FormBehaviorRatingComment> {
    return new GetAllRequestBuilder(FormBehaviorRatingComment);
  }
}
