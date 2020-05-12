/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Languages } from './Background_Languages';

/**
 * Request builder class for operations supported on the [[Background_Languages]] entity.
 */
export class Background_LanguagesRequestBuilder extends RequestBuilder<Background_Languages> {
  /**
   * Returns a request builder for retrieving one `Background_Languages` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Languages.backgroundElementId]].
   * @param userId Key property. See [[Background_Languages.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Languages` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Languages> {
    return new GetByKeyRequestBuilder(Background_Languages, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Languages` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Languages` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Languages> {
    return new GetAllRequestBuilder(Background_Languages);
  }

  /**
   * Returns a request builder for creating a `Background_Languages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Languages`.
   */
  create(entity: Background_Languages): CreateRequestBuilder<Background_Languages> {
    return new CreateRequestBuilder(Background_Languages, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Languages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Languages`.
   */
  update(entity: Background_Languages): UpdateRequestBuilder<Background_Languages> {
    return new UpdateRequestBuilder(Background_Languages, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Languages`.
   * @param backgroundElementId Key property. See [[Background_Languages.backgroundElementId]].
   * @param userId Key property. See [[Background_Languages.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Languages`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Languages>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Languages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Languages` by taking the entity as a parameter.
   */
  delete(entity: Background_Languages): DeleteRequestBuilder<Background_Languages>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Languages> {
    return new DeleteRequestBuilder(Background_Languages, backgroundElementIdOrEntity instanceof Background_Languages ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
