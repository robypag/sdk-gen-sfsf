/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Compensation } from './Background_Compensation';

/**
 * Request builder class for operations supported on the [[Background_Compensation]] entity.
 */
export class Background_CompensationRequestBuilder extends RequestBuilder<Background_Compensation> {
  /**
   * Returns a request builder for retrieving one `Background_Compensation` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Compensation.backgroundElementId]].
   * @param userId Key property. See [[Background_Compensation.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Compensation` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Compensation> {
    return new GetByKeyRequestBuilder(Background_Compensation, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Compensation` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Compensation` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Compensation> {
    return new GetAllRequestBuilder(Background_Compensation);
  }

  /**
   * Returns a request builder for creating a `Background_Compensation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Compensation`.
   */
  create(entity: Background_Compensation): CreateRequestBuilder<Background_Compensation> {
    return new CreateRequestBuilder(Background_Compensation, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Compensation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Compensation`.
   */
  update(entity: Background_Compensation): UpdateRequestBuilder<Background_Compensation> {
    return new UpdateRequestBuilder(Background_Compensation, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Compensation`.
   * @param backgroundElementId Key property. See [[Background_Compensation.backgroundElementId]].
   * @param userId Key property. See [[Background_Compensation.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Compensation`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Compensation>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Compensation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Compensation` by taking the entity as a parameter.
   */
  delete(entity: Background_Compensation): DeleteRequestBuilder<Background_Compensation>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Compensation> {
    return new DeleteRequestBuilder(Background_Compensation, backgroundElementIdOrEntity instanceof Background_Compensation ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
