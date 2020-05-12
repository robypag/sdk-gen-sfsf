/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Fsaelection } from './Background_Fsaelection';

/**
 * Request builder class for operations supported on the [[Background_Fsaelection]] entity.
 */
export class Background_FsaelectionRequestBuilder extends RequestBuilder<Background_Fsaelection> {
  /**
   * Returns a request builder for retrieving one `Background_Fsaelection` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Fsaelection.backgroundElementId]].
   * @param userId Key property. See [[Background_Fsaelection.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Fsaelection` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Fsaelection> {
    return new GetByKeyRequestBuilder(Background_Fsaelection, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Fsaelection` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Fsaelection` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Fsaelection> {
    return new GetAllRequestBuilder(Background_Fsaelection);
  }

  /**
   * Returns a request builder for creating a `Background_Fsaelection` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Fsaelection`.
   */
  create(entity: Background_Fsaelection): CreateRequestBuilder<Background_Fsaelection> {
    return new CreateRequestBuilder(Background_Fsaelection, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Fsaelection`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Fsaelection`.
   */
  update(entity: Background_Fsaelection): UpdateRequestBuilder<Background_Fsaelection> {
    return new UpdateRequestBuilder(Background_Fsaelection, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Fsaelection`.
   * @param backgroundElementId Key property. See [[Background_Fsaelection.backgroundElementId]].
   * @param userId Key property. See [[Background_Fsaelection.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Fsaelection`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Fsaelection>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Fsaelection`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Fsaelection` by taking the entity as a parameter.
   */
  delete(entity: Background_Fsaelection): DeleteRequestBuilder<Background_Fsaelection>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Fsaelection> {
    return new DeleteRequestBuilder(Background_Fsaelection, backgroundElementIdOrEntity instanceof Background_Fsaelection ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
