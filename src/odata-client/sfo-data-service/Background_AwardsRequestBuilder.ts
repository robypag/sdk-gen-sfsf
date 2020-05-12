/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Awards } from './Background_Awards';

/**
 * Request builder class for operations supported on the [[Background_Awards]] entity.
 */
export class Background_AwardsRequestBuilder extends RequestBuilder<Background_Awards> {
  /**
   * Returns a request builder for retrieving one `Background_Awards` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Awards.backgroundElementId]].
   * @param userId Key property. See [[Background_Awards.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Awards` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Awards> {
    return new GetByKeyRequestBuilder(Background_Awards, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Awards` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Awards` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Awards> {
    return new GetAllRequestBuilder(Background_Awards);
  }

  /**
   * Returns a request builder for creating a `Background_Awards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Awards`.
   */
  create(entity: Background_Awards): CreateRequestBuilder<Background_Awards> {
    return new CreateRequestBuilder(Background_Awards, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Awards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Awards`.
   */
  update(entity: Background_Awards): UpdateRequestBuilder<Background_Awards> {
    return new UpdateRequestBuilder(Background_Awards, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Awards`.
   * @param backgroundElementId Key property. See [[Background_Awards.backgroundElementId]].
   * @param userId Key property. See [[Background_Awards.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Awards`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Awards>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Awards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Awards` by taking the entity as a parameter.
   */
  delete(entity: Background_Awards): DeleteRequestBuilder<Background_Awards>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Awards> {
    return new DeleteRequestBuilder(Background_Awards, backgroundElementIdOrEntity instanceof Background_Awards ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
