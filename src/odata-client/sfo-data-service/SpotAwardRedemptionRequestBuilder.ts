/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardRedemption } from './SpotAwardRedemption';

/**
 * Request builder class for operations supported on the [[SpotAwardRedemption]] entity.
 */
export class SpotAwardRedemptionRequestBuilder extends RequestBuilder<SpotAwardRedemption> {
  /**
   * Returns a request builder for retrieving one `SpotAwardRedemption` entity based on its keys.
   * @param externalCode Key property. See [[SpotAwardRedemption.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardRedemption` entity based on its keys.
   */
  getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<SpotAwardRedemption> {
    return new GetByKeyRequestBuilder(SpotAwardRedemption, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `SpotAwardRedemption` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardRedemption` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardRedemption> {
    return new GetAllRequestBuilder(SpotAwardRedemption);
  }

  /**
   * Returns a request builder for creating a `SpotAwardRedemption` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemption`.
   */
  create(entity: SpotAwardRedemption): CreateRequestBuilder<SpotAwardRedemption> {
    return new CreateRequestBuilder(SpotAwardRedemption, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardRedemption`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemption`.
   */
  update(entity: SpotAwardRedemption): UpdateRequestBuilder<SpotAwardRedemption> {
    return new UpdateRequestBuilder(SpotAwardRedemption, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardRedemption`.
   * @param externalCode Key property. See [[SpotAwardRedemption.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemption`.
   */
  delete(externalCode: BigNumber): DeleteRequestBuilder<SpotAwardRedemption>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardRedemption`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemption` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardRedemption): DeleteRequestBuilder<SpotAwardRedemption>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<SpotAwardRedemption> {
    return new DeleteRequestBuilder(SpotAwardRedemption, externalCodeOrEntity instanceof SpotAwardRedemption ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
