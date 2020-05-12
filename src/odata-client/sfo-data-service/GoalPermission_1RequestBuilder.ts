/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalPermission_1 } from './GoalPermission_1';

/**
 * Request builder class for operations supported on the [[GoalPermission_1]] entity.
 */
export class GoalPermission_1RequestBuilder extends RequestBuilder<GoalPermission_1> {
  /**
   * Returns a request builder for retrieving one `GoalPermission_1` entity based on its keys.
   * @param id Key property. See [[GoalPermission_1.id]].
   * @returns A request builder for creating requests to retrieve one `GoalPermission_1` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<GoalPermission_1> {
    return new GetByKeyRequestBuilder(GoalPermission_1, { id: id });
  }

  /**
   * Returns a request builder for querying all `GoalPermission_1` entities.
   * @returns A request builder for creating requests to retrieve all `GoalPermission_1` entities.
   */
  getAll(): GetAllRequestBuilder<GoalPermission_1> {
    return new GetAllRequestBuilder(GoalPermission_1);
  }
}
