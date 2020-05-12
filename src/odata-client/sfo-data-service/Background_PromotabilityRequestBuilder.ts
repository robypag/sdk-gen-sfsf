/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Promotability } from './Background_Promotability';

/**
 * Request builder class for operations supported on the [[Background_Promotability]] entity.
 */
export class Background_PromotabilityRequestBuilder extends RequestBuilder<Background_Promotability> {
  /**
   * Returns a request builder for retrieving one `Background_Promotability` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Promotability.backgroundElementId]].
   * @param userId Key property. See [[Background_Promotability.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Promotability` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Promotability> {
    return new GetByKeyRequestBuilder(Background_Promotability, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Promotability` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Promotability` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Promotability> {
    return new GetAllRequestBuilder(Background_Promotability);
  }

  /**
   * Returns a request builder for creating a `Background_Promotability` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Promotability`.
   */
  create(entity: Background_Promotability): CreateRequestBuilder<Background_Promotability> {
    return new CreateRequestBuilder(Background_Promotability, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Promotability`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Promotability`.
   */
  update(entity: Background_Promotability): UpdateRequestBuilder<Background_Promotability> {
    return new UpdateRequestBuilder(Background_Promotability, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Promotability`.
   * @param backgroundElementId Key property. See [[Background_Promotability.backgroundElementId]].
   * @param userId Key property. See [[Background_Promotability.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Promotability`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Promotability>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Promotability`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Promotability` by taking the entity as a parameter.
   */
  delete(entity: Background_Promotability): DeleteRequestBuilder<Background_Promotability>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Promotability> {
    return new DeleteRequestBuilder(Background_Promotability, backgroundElementIdOrEntity instanceof Background_Promotability ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
