/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Education } from './Background_Education';

/**
 * Request builder class for operations supported on the [[Background_Education]] entity.
 */
export class Background_EducationRequestBuilder extends RequestBuilder<Background_Education> {
  /**
   * Returns a request builder for retrieving one `Background_Education` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Education.backgroundElementId]].
   * @param userId Key property. See [[Background_Education.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Education` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Education> {
    return new GetByKeyRequestBuilder(Background_Education, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Education` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Education` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Education> {
    return new GetAllRequestBuilder(Background_Education);
  }

  /**
   * Returns a request builder for creating a `Background_Education` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Education`.
   */
  create(entity: Background_Education): CreateRequestBuilder<Background_Education> {
    return new CreateRequestBuilder(Background_Education, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Education`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Education`.
   */
  update(entity: Background_Education): UpdateRequestBuilder<Background_Education> {
    return new UpdateRequestBuilder(Background_Education, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Education`.
   * @param backgroundElementId Key property. See [[Background_Education.backgroundElementId]].
   * @param userId Key property. See [[Background_Education.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Education`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Education>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Education`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Education` by taking the entity as a parameter.
   */
  delete(entity: Background_Education): DeleteRequestBuilder<Background_Education>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Education> {
    return new DeleteRequestBuilder(Background_Education, backgroundElementIdOrEntity instanceof Background_Education ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
