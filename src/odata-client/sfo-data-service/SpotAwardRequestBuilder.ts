/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAward } from './SpotAward';

/**
 * Request builder class for operations supported on the [[SpotAward]] entity.
 */
export class SpotAwardRequestBuilder extends RequestBuilder<SpotAward> {
  /**
   * Returns a request builder for retrieving one `SpotAward` entity based on its keys.
   * @param externalCode Key property. See [[SpotAward.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAward` entity based on its keys.
   */
  getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<SpotAward> {
    return new GetByKeyRequestBuilder(SpotAward, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `SpotAward` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAward` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAward> {
    return new GetAllRequestBuilder(SpotAward);
  }

  /**
   * Returns a request builder for creating a `SpotAward` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAward`.
   */
  create(entity: SpotAward): CreateRequestBuilder<SpotAward> {
    return new CreateRequestBuilder(SpotAward, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAward`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAward`.
   */
  update(entity: SpotAward): UpdateRequestBuilder<SpotAward> {
    return new UpdateRequestBuilder(SpotAward, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAward`.
   * @param externalCode Key property. See [[SpotAward.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAward`.
   */
  delete(externalCode: BigNumber): DeleteRequestBuilder<SpotAward>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAward`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAward` by taking the entity as a parameter.
   */
  delete(entity: SpotAward): DeleteRequestBuilder<SpotAward>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<SpotAward> {
    return new DeleteRequestBuilder(SpotAward, externalCodeOrEntity instanceof SpotAward ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
