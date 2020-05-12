/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_FuncExperience } from './Background_FuncExperience';

/**
 * Request builder class for operations supported on the [[Background_FuncExperience]] entity.
 */
export class Background_FuncExperienceRequestBuilder extends RequestBuilder<Background_FuncExperience> {
  /**
   * Returns a request builder for retrieving one `Background_FuncExperience` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_FuncExperience.backgroundElementId]].
   * @param userId Key property. See [[Background_FuncExperience.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_FuncExperience` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_FuncExperience> {
    return new GetByKeyRequestBuilder(Background_FuncExperience, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_FuncExperience` entities.
   * @returns A request builder for creating requests to retrieve all `Background_FuncExperience` entities.
   */
  getAll(): GetAllRequestBuilder<Background_FuncExperience> {
    return new GetAllRequestBuilder(Background_FuncExperience);
  }

  /**
   * Returns a request builder for creating a `Background_FuncExperience` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_FuncExperience`.
   */
  create(entity: Background_FuncExperience): CreateRequestBuilder<Background_FuncExperience> {
    return new CreateRequestBuilder(Background_FuncExperience, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_FuncExperience`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_FuncExperience`.
   */
  update(entity: Background_FuncExperience): UpdateRequestBuilder<Background_FuncExperience> {
    return new UpdateRequestBuilder(Background_FuncExperience, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_FuncExperience`.
   * @param backgroundElementId Key property. See [[Background_FuncExperience.backgroundElementId]].
   * @param userId Key property. See [[Background_FuncExperience.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_FuncExperience`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_FuncExperience>;
  /**
   * Returns a request builder for deleting an entity of type `Background_FuncExperience`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_FuncExperience` by taking the entity as a parameter.
   */
  delete(entity: Background_FuncExperience): DeleteRequestBuilder<Background_FuncExperience>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_FuncExperience> {
    return new DeleteRequestBuilder(Background_FuncExperience, backgroundElementIdOrEntity instanceof Background_FuncExperience ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
