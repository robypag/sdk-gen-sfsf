/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalPlanState } from './GoalPlanState';

/**
 * Request builder class for operations supported on the [[GoalPlanState]] entity.
 */
export class GoalPlanStateRequestBuilder extends RequestBuilder<GoalPlanState> {
  /**
   * Returns a request builder for retrieving one `GoalPlanState` entity based on its keys.
   * @param planId Key property. See [[GoalPlanState.planId]].
   * @param stateId Key property. See [[GoalPlanState.stateId]].
   * @param userId Key property. See [[GoalPlanState.userId]].
   * @returns A request builder for creating requests to retrieve one `GoalPlanState` entity based on its keys.
   */
  getByKey(planId: BigNumber, stateId: string, userId: string): GetByKeyRequestBuilder<GoalPlanState> {
    return new GetByKeyRequestBuilder(GoalPlanState, {
      planId: planId,
      stateId: stateId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `GoalPlanState` entities.
   * @returns A request builder for creating requests to retrieve all `GoalPlanState` entities.
   */
  getAll(): GetAllRequestBuilder<GoalPlanState> {
    return new GetAllRequestBuilder(GoalPlanState);
  }

  /**
   * Returns a request builder for updating an entity of type `GoalPlanState`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalPlanState`.
   */
  update(entity: GoalPlanState): UpdateRequestBuilder<GoalPlanState> {
    return new UpdateRequestBuilder(GoalPlanState, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalPlanState`.
   * @param planId Key property. See [[GoalPlanState.planId]].
   * @param stateId Key property. See [[GoalPlanState.stateId]].
   * @param userId Key property. See [[GoalPlanState.userId]].
   * @returns A request builder for creating requests that delete an entity of type `GoalPlanState`.
   */
  delete(planId: BigNumber, stateId: string, userId: string): DeleteRequestBuilder<GoalPlanState>;
  /**
   * Returns a request builder for deleting an entity of type `GoalPlanState`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalPlanState` by taking the entity as a parameter.
   */
  delete(entity: GoalPlanState): DeleteRequestBuilder<GoalPlanState>;
  delete(planIdOrEntity: any, stateId?: string, userId?: string): DeleteRequestBuilder<GoalPlanState> {
    return new DeleteRequestBuilder(GoalPlanState, planIdOrEntity instanceof GoalPlanState ? planIdOrEntity : {
      planId: planIdOrEntity!,
      stateId: stateId!,
      userId: userId!
    });
  }
}
