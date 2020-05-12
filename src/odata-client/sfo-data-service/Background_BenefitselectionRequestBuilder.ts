/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Benefitselection } from './Background_Benefitselection';

/**
 * Request builder class for operations supported on the [[Background_Benefitselection]] entity.
 */
export class Background_BenefitselectionRequestBuilder extends RequestBuilder<Background_Benefitselection> {
  /**
   * Returns a request builder for retrieving one `Background_Benefitselection` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_Benefitselection.backgroundElementId]].
   * @param userId Key property. See [[Background_Benefitselection.userId]].
   * @returns A request builder for creating requests to retrieve one `Background_Benefitselection` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Benefitselection> {
    return new GetByKeyRequestBuilder(Background_Benefitselection, {
      backgroundElementId: backgroundElementId,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Background_Benefitselection` entities.
   * @returns A request builder for creating requests to retrieve all `Background_Benefitselection` entities.
   */
  getAll(): GetAllRequestBuilder<Background_Benefitselection> {
    return new GetAllRequestBuilder(Background_Benefitselection);
  }

  /**
   * Returns a request builder for creating a `Background_Benefitselection` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_Benefitselection`.
   */
  create(entity: Background_Benefitselection): CreateRequestBuilder<Background_Benefitselection> {
    return new CreateRequestBuilder(Background_Benefitselection, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_Benefitselection`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_Benefitselection`.
   */
  update(entity: Background_Benefitselection): UpdateRequestBuilder<Background_Benefitselection> {
    return new UpdateRequestBuilder(Background_Benefitselection, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_Benefitselection`.
   * @param backgroundElementId Key property. See [[Background_Benefitselection.backgroundElementId]].
   * @param userId Key property. See [[Background_Benefitselection.userId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_Benefitselection`.
   */
  delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Benefitselection>;
  /**
   * Returns a request builder for deleting an entity of type `Background_Benefitselection`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_Benefitselection` by taking the entity as a parameter.
   */
  delete(entity: Background_Benefitselection): DeleteRequestBuilder<Background_Benefitselection>;
  delete(backgroundElementIdOrEntity: any, userId?: string): DeleteRequestBuilder<Background_Benefitselection> {
    return new DeleteRequestBuilder(Background_Benefitselection, backgroundElementIdOrEntity instanceof Background_Benefitselection ? backgroundElementIdOrEntity : {
      backgroundElementId: backgroundElementIdOrEntity!,
      userId: userId!
    });
  }
}
