/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AssignTeamGoal } from './AssignTeamGoal';

/**
 * Request builder class for operations supported on the [[AssignTeamGoal]] entity.
 */
export class AssignTeamGoalRequestBuilder extends RequestBuilder<AssignTeamGoal> {
  /**
   * Returns a request builder for retrieving one `AssignTeamGoal` entity based on its keys.
   * @param id Key property. See [[AssignTeamGoal.id]].
   * @returns A request builder for creating requests to retrieve one `AssignTeamGoal` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<AssignTeamGoal> {
    return new GetByKeyRequestBuilder(AssignTeamGoal, { id: id });
  }

  /**
   * Returns a request builder for querying all `AssignTeamGoal` entities.
   * @returns A request builder for creating requests to retrieve all `AssignTeamGoal` entities.
   */
  getAll(): GetAllRequestBuilder<AssignTeamGoal> {
    return new GetAllRequestBuilder(AssignTeamGoal);
  }

  /**
   * Returns a request builder for creating a `AssignTeamGoal` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssignTeamGoal`.
   */
  create(entity: AssignTeamGoal): CreateRequestBuilder<AssignTeamGoal> {
    return new CreateRequestBuilder(AssignTeamGoal, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AssignTeamGoal`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssignTeamGoal`.
   */
  update(entity: AssignTeamGoal): UpdateRequestBuilder<AssignTeamGoal> {
    return new UpdateRequestBuilder(AssignTeamGoal, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssignTeamGoal`.
   * @param id Key property. See [[AssignTeamGoal.id]].
   * @returns A request builder for creating requests that delete an entity of type `AssignTeamGoal`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<AssignTeamGoal>;
  /**
   * Returns a request builder for deleting an entity of type `AssignTeamGoal`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssignTeamGoal` by taking the entity as a parameter.
   */
  delete(entity: AssignTeamGoal): DeleteRequestBuilder<AssignTeamGoal>;
  delete(idOrEntity: any): DeleteRequestBuilder<AssignTeamGoal> {
    return new DeleteRequestBuilder(AssignTeamGoal, idOrEntity instanceof AssignTeamGoal ? idOrEntity : { id: idOrEntity! });
  }
}
