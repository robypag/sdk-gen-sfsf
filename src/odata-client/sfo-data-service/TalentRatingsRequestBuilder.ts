/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TalentRatings } from './TalentRatings';

/**
 * Request builder class for operations supported on the [[TalentRatings]] entity.
 */
export class TalentRatingsRequestBuilder extends RequestBuilder<TalentRatings> {
  /**
   * Returns a request builder for retrieving one `TalentRatings` entity based on its keys.
   * @param feedbackId Key property. See [[TalentRatings.feedbackId]].
   * @returns A request builder for creating requests to retrieve one `TalentRatings` entity based on its keys.
   */
  getByKey(feedbackId: BigNumber): GetByKeyRequestBuilder<TalentRatings> {
    return new GetByKeyRequestBuilder(TalentRatings, { feedbackId: feedbackId });
  }

  /**
   * Returns a request builder for querying all `TalentRatings` entities.
   * @returns A request builder for creating requests to retrieve all `TalentRatings` entities.
   */
  getAll(): GetAllRequestBuilder<TalentRatings> {
    return new GetAllRequestBuilder(TalentRatings);
  }
}
