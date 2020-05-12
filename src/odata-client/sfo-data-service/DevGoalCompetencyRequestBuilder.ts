/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalCompetency } from './DevGoalCompetency';

/**
 * Request builder class for operations supported on the [[DevGoalCompetency]] entity.
 */
export class DevGoalCompetencyRequestBuilder extends RequestBuilder<DevGoalCompetency> {
  /**
   * Returns a request builder for retrieving one `DevGoalCompetency` entity based on its keys.
   * @param id Key property. See [[DevGoalCompetency.id]].
   * @returns A request builder for creating requests to retrieve one `DevGoalCompetency` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalCompetency> {
    return new GetByKeyRequestBuilder(DevGoalCompetency, { id: id });
  }

  /**
   * Returns a request builder for querying all `DevGoalCompetency` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalCompetency` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalCompetency> {
    return new GetAllRequestBuilder(DevGoalCompetency);
  }
}
