/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalComment_1 } from './GoalComment_1';

/**
 * Request builder class for operations supported on the [[GoalComment_1]] entity.
 */
export class GoalComment_1RequestBuilder extends RequestBuilder<GoalComment_1> {
  /**
   * Returns a request builder for retrieving one `GoalComment_1` entity based on its keys.
   * @param id Key property. See [[GoalComment_1.id]].
   * @returns A request builder for creating requests to retrieve one `GoalComment_1` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<GoalComment_1> {
    return new GetByKeyRequestBuilder(GoalComment_1, { id: id });
  }

  /**
   * Returns a request builder for querying all `GoalComment_1` entities.
   * @returns A request builder for creating requests to retrieve all `GoalComment_1` entities.
   */
  getAll(): GetAllRequestBuilder<GoalComment_1> {
    return new GetAllRequestBuilder(GoalComment_1);
  }

  /**
   * Returns a request builder for creating a `GoalComment_1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalComment_1`.
   */
  create(entity: GoalComment_1): CreateRequestBuilder<GoalComment_1> {
    return new CreateRequestBuilder(GoalComment_1, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GoalComment_1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalComment_1`.
   */
  update(entity: GoalComment_1): UpdateRequestBuilder<GoalComment_1> {
    return new UpdateRequestBuilder(GoalComment_1, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalComment_1`.
   * @param id Key property. See [[GoalComment_1.id]].
   * @returns A request builder for creating requests that delete an entity of type `GoalComment_1`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<GoalComment_1>;
  /**
   * Returns a request builder for deleting an entity of type `GoalComment_1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalComment_1` by taking the entity as a parameter.
   */
  delete(entity: GoalComment_1): DeleteRequestBuilder<GoalComment_1>;
  delete(idOrEntity: any): DeleteRequestBuilder<GoalComment_1> {
    return new DeleteRequestBuilder(GoalComment_1, idOrEntity instanceof GoalComment_1 ? idOrEntity : { id: idOrEntity! });
  }
}
