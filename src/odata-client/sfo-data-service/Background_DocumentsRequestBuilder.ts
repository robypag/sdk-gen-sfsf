/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Documents } from './Background_Documents';

/**
 * Request builder class for operations supported on the [[Background_Documents]] entity.
 */
export class Background_DocumentsRequestBuilder extends RequestBuilder<Background_Documents> {
  /**
   * Returns a request builder for retrieving one `Background_Documents` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Documents.backgroundElementId]].
   * @param userId Key property. See [[Background_Documents.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Documents` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Documents> {
    return new GetByKeyRequestBuilder(Background_Documents, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Documents` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Documents` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Documents> {
    return new GetAllRequestBuilder(Background_Documents);
  }

  /**
   * Returns a request builder for creating a `Background_Documents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Documents`.
   */
  create(entity: Background_Documents): CreateRequestBuilder<Background_Documents> {
    return new CreateRequestBuilder(Background_Documents, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Documents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Documents`.
   */
  update(entity: Background_Documents): UpdateRequestBuilder<Background_Documents> {
    return new UpdateRequestBuilder(Background_Documents, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Documents`.
   * @param backgroundElementId Key property. See [[Background_Documents.backgroundElementId]].
   * @param userId Key property. See [[Background_Documents.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Documents`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Documents>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Documents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Documents` by taking the entity as a parameter.
   */
  delete(entity: Background_Documents): DeleteRequestBuilder<Background_Documents>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Documents> {
    return new DeleteRequestBuilder(Background_Documents, backgroundElementIdOrEntity instanceof Background_Documents ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
