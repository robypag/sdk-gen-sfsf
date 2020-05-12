/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Memberships } from './Background_Memberships';

/**
 * Request builder class for operations supported on the [[Background_Memberships]] entity.
 */
export class Background_MembershipsRequestBuilder extends RequestBuilder<Background_Memberships> {
  /**
   * Returns a request builder for retrieving one `Background_Memberships` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Memberships.backgroundElementId]].
   * @param userId Key property. See [[Background_Memberships.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Memberships` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Memberships> {
    return new GetByKeyRequestBuilder(Background_Memberships, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Memberships` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Memberships` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Memberships> {
    return new GetAllRequestBuilder(Background_Memberships);
  }

  /**
   * Returns a request builder for creating a `Background_Memberships` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Memberships`.
   */
  create(entity: Background_Memberships): CreateRequestBuilder<Background_Memberships> {
    return new CreateRequestBuilder(Background_Memberships, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Memberships`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Memberships`.
   */
  update(entity: Background_Memberships): UpdateRequestBuilder<Background_Memberships> {
    return new UpdateRequestBuilder(Background_Memberships, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Memberships`.
   * @param backgroundElementId Key property. See [[Background_Memberships.backgroundElementId]].
   * @param userId Key property. See [[Background_Memberships.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Memberships`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Memberships>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Memberships`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Memberships` by taking the entity as a parameter.
   */
  delete(entity: Background_Memberships): DeleteRequestBuilder<Background_Memberships>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Memberships> {
    return new DeleteRequestBuilder(Background_Memberships, backgroundElementIdOrEntity instanceof Background_Memberships ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
