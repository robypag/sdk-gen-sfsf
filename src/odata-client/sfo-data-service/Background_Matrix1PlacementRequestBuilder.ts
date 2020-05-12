/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Matrix1Placement } from './Background_Matrix1Placement';

/**
 * Request builder class for operations supported on the [[Background_Matrix1Placement]] entity.
 */
export class Background_Matrix1PlacementRequestBuilder extends RequestBuilder<Background_Matrix1Placement> {
  /**
   * Returns a request builder for retrieving one `Background_Matrix1Placement` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Matrix1Placement.backgroundElementId]].
   * @param userId Key property. See [[Background_Matrix1Placement.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Matrix1Placement` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Matrix1Placement> {
    return new GetByKeyRequestBuilder(Background_Matrix1Placement, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Matrix1Placement` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Matrix1Placement` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Matrix1Placement> {
    return new GetAllRequestBuilder(Background_Matrix1Placement);
  }

  /**
   * Returns a request builder for creating a `Background_Matrix1Placement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Matrix1Placement`.
   */
  create(entity: Background_Matrix1Placement): CreateRequestBuilder<Background_Matrix1Placement> {
    return new CreateRequestBuilder(Background_Matrix1Placement, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Matrix1Placement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Matrix1Placement`.
   */
  update(entity: Background_Matrix1Placement): UpdateRequestBuilder<Background_Matrix1Placement> {
    return new UpdateRequestBuilder(Background_Matrix1Placement, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Matrix1Placement`.
   * @param backgroundElementId Key property. See [[Background_Matrix1Placement.backgroundElementId]].
   * @param userId Key property. See [[Background_Matrix1Placement.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Matrix1Placement`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Matrix1Placement>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Matrix1Placement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Matrix1Placement` by taking the entity as a parameter.
   */
  delete(entity: Background_Matrix1Placement): DeleteRequestBuilder<Background_Matrix1Placement>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Matrix1Placement> {
    return new DeleteRequestBuilder(Background_Matrix1Placement, backgroundElementIdOrEntity instanceof Background_Matrix1Placement ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
