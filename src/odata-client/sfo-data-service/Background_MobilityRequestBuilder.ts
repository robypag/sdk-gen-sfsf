/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Mobility } from './Background_Mobility';

/**
 * Request builder class for operations supported on the [[Background_Mobility]] entity.
 */
export class Background_MobilityRequestBuilder extends RequestBuilder<Background_Mobility> {
  /**
   * Returns a request builder for retrieving one `Background_Mobility` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Mobility.backgroundElementId]].
   * @param userId Key property. See [[Background_Mobility.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Mobility` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Mobility> {
    return new GetByKeyRequestBuilder(Background_Mobility, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Mobility` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Mobility` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Mobility> {
    return new GetAllRequestBuilder(Background_Mobility);
  }

  /**
   * Returns a request builder for creating a `Background_Mobility` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Mobility`.
   */
  create(entity: Background_Mobility): CreateRequestBuilder<Background_Mobility> {
    return new CreateRequestBuilder(Background_Mobility, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Mobility`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Mobility`.
   */
  update(entity: Background_Mobility): UpdateRequestBuilder<Background_Mobility> {
    return new UpdateRequestBuilder(Background_Mobility, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Mobility`.
   * @param backgroundElementId Key property. See [[Background_Mobility.backgroundElementId]].
   * @param userId Key property. See [[Background_Mobility.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Mobility`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Mobility>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Mobility`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Mobility` by taking the entity as a parameter.
   */
  delete(entity: Background_Mobility): DeleteRequestBuilder<Background_Mobility>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Mobility> {
    return new DeleteRequestBuilder(Background_Mobility, backgroundElementIdOrEntity instanceof Background_Mobility ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
