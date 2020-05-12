/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Achievement } from './Achievement';

/**
 * Request builder class for operations supported on the [[Achievement]] entity.
 */
export class AchievementRequestBuilder extends RequestBuilder<Achievement> {
  /**
   * Returns a request builder for retrieving one `Achievement` entity based on its keys.
   * @param achievementId Key property. See [[Achievement.achievementId]].
   * @returns A request builder for creating requests to retrieve one `Achievement` entity based on its keys.
   */
  getByKey(achievementId: BigNumber): GetByKeyRequestBuilder<Achievement> {
    return new GetByKeyRequestBuilder(Achievement, { achievementId: achievementId });
  }

  /**
   * Returns a request builder for querying all `Achievement` entities.
   * @returns A request builder for creating requests to retrieve all `Achievement` entities.
   */
  getAll(): GetAllRequestBuilder<Achievement> {
    return new GetAllRequestBuilder(Achievement);
  }

  /**
   * Returns a request builder for creating a `Achievement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Achievement`.
   */
  create(entity: Achievement): CreateRequestBuilder<Achievement> {
    return new CreateRequestBuilder(Achievement, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Achievement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Achievement`.
   */
  update(entity: Achievement): UpdateRequestBuilder<Achievement> {
    return new UpdateRequestBuilder(Achievement, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Achievement`.
   * @param achievementId Key property. See [[Achievement.achievementId]].
   * @returns A request builder for creating requests that delete an entity of type `Achievement`.
   */
  delete(achievementId: BigNumber): DeleteRequestBuilder<Achievement>;
  /**
   * Returns a request builder for deleting an entity of type `Achievement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Achievement` by taking the entity as a parameter.
   */
  delete(entity: Achievement): DeleteRequestBuilder<Achievement>;
  delete(achievementIdOrEntity: any): DeleteRequestBuilder<Achievement> {
    return new DeleteRequestBuilder(Achievement, achievementIdOrEntity instanceof Achievement ? achievementIdOrEntity : { achievementId: achievementIdOrEntity! });
  }
}
