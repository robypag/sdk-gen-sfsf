/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevLearning_4201 } from './DevLearning_4201';

/**
 * Request builder class for operations supported on the [[DevLearning_4201]] entity.
 */
export class DevLearning_4201RequestBuilder extends RequestBuilder<DevLearning_4201> {
  /**
   * Returns a request builder for retrieving one `DevLearning_4201` entity based on its keys.
   * @param learningId Key property. See [[DevLearning_4201.learningId]].
   * @returns A request builder for creating requests to retrieve one `DevLearning_4201` entity based on its keys.
   */
  getByKey(learningId: BigNumber): GetByKeyRequestBuilder<DevLearning_4201> {
    return new GetByKeyRequestBuilder(DevLearning_4201, { learningId: learningId });
  }

  /**
   * Returns a request builder for querying all `DevLearning_4201` entities.
   * @returns A request builder for creating requests to retrieve all `DevLearning_4201` entities.
   */
  getAll(): GetAllRequestBuilder<DevLearning_4201> {
    return new GetAllRequestBuilder(DevLearning_4201);
  }
}
