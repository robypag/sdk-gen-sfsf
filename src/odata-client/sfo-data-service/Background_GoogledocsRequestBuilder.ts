/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Googledocs } from './Background_Googledocs';

/**
 * Request builder class for operations supported on the [[Background_Googledocs]] entity.
 */
export class Background_GoogledocsRequestBuilder extends RequestBuilder<Background_Googledocs> {
  /**
   * Returns a request builder for retrieving one `Background_Googledocs` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Googledocs.backgroundElementId]].
   * @param userId Key property. See [[Background_Googledocs.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Googledocs` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Googledocs> {
    return new GetByKeyRequestBuilder(Background_Googledocs, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Googledocs` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Googledocs` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Googledocs> {
    return new GetAllRequestBuilder(Background_Googledocs);
  }

  /**
   * Returns a request builder for creating a `Background_Googledocs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Googledocs`.
   */
  create(entity: Background_Googledocs): CreateRequestBuilder<Background_Googledocs> {
    return new CreateRequestBuilder(Background_Googledocs, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Googledocs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Googledocs`.
   */
  update(entity: Background_Googledocs): UpdateRequestBuilder<Background_Googledocs> {
    return new UpdateRequestBuilder(Background_Googledocs, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Googledocs`.
   * @param backgroundElementId Key property. See [[Background_Googledocs.backgroundElementId]].
   * @param userId Key property. See [[Background_Googledocs.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Googledocs`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Googledocs>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Googledocs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Googledocs` by taking the entity as a parameter.
   */
  delete(entity: Background_Googledocs): DeleteRequestBuilder<Background_Googledocs>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Googledocs> {
    return new DeleteRequestBuilder(Background_Googledocs, backgroundElementIdOrEntity instanceof Background_Googledocs ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
