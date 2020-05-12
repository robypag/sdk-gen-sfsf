/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CompetencyRating } from './CompetencyRating';

/**
 * Request builder class for operations supported on the [[CompetencyRating]] entity.
 */
export class CompetencyRatingRequestBuilder extends RequestBuilder<CompetencyRating> {
  /**
   * Returns a request builder for retrieving one `CompetencyRating` entity based on its keys.
   * @param id Key property. See [[CompetencyRating.id]].
   * @returns A request builder for creating requests to retrieve one `CompetencyRating` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<CompetencyRating> {
    return new GetByKeyRequestBuilder(CompetencyRating, { id: id });
  }

  /**
   * Returns a request builder for querying all `CompetencyRating` entities.
   * @returns A request builder for creating requests to retrieve all `CompetencyRating` entities.
   */
  getAll(): GetAllRequestBuilder<CompetencyRating> {
    return new GetAllRequestBuilder(CompetencyRating);
  }

  /**
   * Returns a request builder for creating a `CompetencyRating` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompetencyRating`.
   */
  create(entity: CompetencyRating): CreateRequestBuilder<CompetencyRating> {
    return new CreateRequestBuilder(CompetencyRating, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CompetencyRating`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompetencyRating`.
   */
  update(entity: CompetencyRating): UpdateRequestBuilder<CompetencyRating> {
    return new UpdateRequestBuilder(CompetencyRating, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CompetencyRating`.
   * @param id Key property. See [[CompetencyRating.id]].
   * @returns A request builder for creating requests that delete an entity of type `CompetencyRating`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<CompetencyRating>;
  /**
   * Returns a request builder for deleting an entity of type `CompetencyRating`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompetencyRating` by taking the entity as a parameter.
   */
  delete(entity: CompetencyRating): DeleteRequestBuilder<CompetencyRating>;
  delete(idOrEntity: any): DeleteRequestBuilder<CompetencyRating> {
    return new DeleteRequestBuilder(CompetencyRating, idOrEntity instanceof CompetencyRating ? idOrEntity : { id: idOrEntity! });
  }
}
