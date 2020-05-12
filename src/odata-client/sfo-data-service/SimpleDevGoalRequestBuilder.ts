/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SimpleDevGoal } from './SimpleDevGoal';

/**
 * Request builder class for operations supported on the [[SimpleDevGoal]] entity.
 */
export class SimpleDevGoalRequestBuilder extends RequestBuilder<SimpleDevGoal> {
  /**
   * Returns a request builder for retrieving one `SimpleDevGoal` entity based on its keys.
   * @param id Key property. See [[SimpleDevGoal.id]].
   * @returns A request builder for creating requests to retrieve one `SimpleDevGoal` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<SimpleDevGoal> {
    return new GetByKeyRequestBuilder(SimpleDevGoal, { id: id });
  }

  /**
   * Returns a request builder for querying all `SimpleDevGoal` entities.
   * @returns A request builder for creating requests to retrieve all `SimpleDevGoal` entities.
   */
  getAll(): GetAllRequestBuilder<SimpleDevGoal> {
    return new GetAllRequestBuilder(SimpleDevGoal);
  }
}
