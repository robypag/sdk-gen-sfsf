/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EpPublicProfile } from './EpPublicProfile';

/**
 * Request builder class for operations supported on the [[EpPublicProfile]] entity.
 */
export class EpPublicProfileRequestBuilder extends RequestBuilder<EpPublicProfile> {
  /**
   * Returns a request builder for retrieving one `EpPublicProfile` entity based on its keys.
   * @param userId Key property. See [[EpPublicProfile.userId]].
   * @returns A request builder for creating requests to retrieve one `EpPublicProfile` entity based on its keys.
   */
  getByKey(userId: string): GetByKeyRequestBuilder<EpPublicProfile> {
    return new GetByKeyRequestBuilder(EpPublicProfile, { userId: userId });
  }

  /**
   * Returns a request builder for querying all `EpPublicProfile` entities.
   * @returns A request builder for creating requests to retrieve all `EpPublicProfile` entities.
   */
  getAll(): GetAllRequestBuilder<EpPublicProfile> {
    return new GetAllRequestBuilder(EpPublicProfile);
  }

  /**
   * Returns a request builder for creating a `EpPublicProfile` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EpPublicProfile`.
   */
  create(entity: EpPublicProfile): CreateRequestBuilder<EpPublicProfile> {
    return new CreateRequestBuilder(EpPublicProfile, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EpPublicProfile`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EpPublicProfile`.
   */
  update(entity: EpPublicProfile): UpdateRequestBuilder<EpPublicProfile> {
    return new UpdateRequestBuilder(EpPublicProfile, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EpPublicProfile`.
   * @param userId Key property. See [[EpPublicProfile.userId]].
   * @returns A request builder for creating requests that delete an entity of type `EpPublicProfile`.
   */
  delete(userId: string): DeleteRequestBuilder<EpPublicProfile>;
  /**
   * Returns a request builder for deleting an entity of type `EpPublicProfile`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EpPublicProfile` by taking the entity as a parameter.
   */
  delete(entity: EpPublicProfile): DeleteRequestBuilder<EpPublicProfile>;
  delete(userIdOrEntity: any): DeleteRequestBuilder<EpPublicProfile> {
    return new DeleteRequestBuilder(EpPublicProfile, userIdOrEntity instanceof EpPublicProfile ? userIdOrEntity : { userId: userIdOrEntity! });
  }
}
