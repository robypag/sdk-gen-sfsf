/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { UserBadges } from './UserBadges';

/**
 * Request builder class for operations supported on the [[UserBadges]] entity.
 */
export class UserBadgesRequestBuilder extends RequestBuilder<UserBadges> {
  /**
   * Returns a request builder for retrieving one `UserBadges` entity based on its keys.
   * @param badgeInstanceId Key property. See [[UserBadges.badgeInstanceId]].
   * @param userId Key property. See [[UserBadges.userId]].
   * @returns A request builder for creating requests to retrieve one `UserBadges` entity based on its keys.
   */
  getByKey(badgeInstanceId: number, userId: string): GetByKeyRequestBuilder<UserBadges> {
    return new GetByKeyRequestBuilder(UserBadges, {
      badgeInstanceId: badgeInstanceId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `UserBadges` entities.
   * @returns A request builder for creating requests to retrieve all `UserBadges` entities.
   */
  getAll(): GetAllRequestBuilder<UserBadges> {
    return new GetAllRequestBuilder(UserBadges);
  }

  /**
   * Returns a request builder for creating a `UserBadges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserBadges`.
   */
  create(entity: UserBadges): CreateRequestBuilder<UserBadges> {
    return new CreateRequestBuilder(UserBadges, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserBadges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserBadges`.
   */
  update(entity: UserBadges): UpdateRequestBuilder<UserBadges> {
    return new UpdateRequestBuilder(UserBadges, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserBadges`.
   * @param badgeInstanceId Key property. See [[UserBadges.badgeInstanceId]].
   * @param userId Key property. See [[UserBadges.userId]].
   * @returns A request builder for creating requests that delete an entity of type `UserBadges`.
   */
  delete(badgeInstanceId: number, userId: string): DeleteRequestBuilder<UserBadges>;
  /**
   * Returns a request builder for deleting an entity of type `UserBadges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserBadges` by taking the entity as a parameter.
   */
  delete(entity: UserBadges): DeleteRequestBuilder<UserBadges>;
  delete(badgeInstanceIdOrEntity: any, userId?: string): DeleteRequestBuilder<UserBadges> {
    return new DeleteRequestBuilder(UserBadges, badgeInstanceIdOrEntity instanceof UserBadges ? badgeInstanceIdOrEntity : {
      badgeInstanceId: badgeInstanceIdOrEntity!,
      userId: userId!
    });
  }
}
