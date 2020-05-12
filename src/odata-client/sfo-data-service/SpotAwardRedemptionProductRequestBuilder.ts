/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardRedemptionProduct } from './SpotAwardRedemptionProduct';

/**
 * Request builder class for operations supported on the [[SpotAwardRedemptionProduct]] entity.
 */
export class SpotAwardRedemptionProductRequestBuilder extends RequestBuilder<SpotAwardRedemptionProduct> {
  /**
   * Returns a request builder for retrieving one `SpotAwardRedemptionProduct` entity based on its keys.
   * @param spotAwardRedemptionOrderExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionOrderExternalCode]].
   * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionExternalCode]].
   * @param externalCode Key property. See [[SpotAwardRedemptionProduct.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardRedemptionProduct` entity based on its keys.
   */
  getByKey(spotAwardRedemptionOrderExternalCode: BigNumber, spotAwardRedemptionExternalCode: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<SpotAwardRedemptionProduct> {
    return new GetByKeyRequestBuilder(SpotAwardRedemptionProduct, {
      SpotAwardRedemptionOrder_externalCode: spotAwardRedemptionOrderExternalCode,
      SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SpotAwardRedemptionProduct` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardRedemptionProduct` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardRedemptionProduct> {
    return new GetAllRequestBuilder(SpotAwardRedemptionProduct);
  }

  /**
   * Returns a request builder for creating a `SpotAwardRedemptionProduct` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemptionProduct`.
   */
  create(entity: SpotAwardRedemptionProduct): CreateRequestBuilder<SpotAwardRedemptionProduct> {
    return new CreateRequestBuilder(SpotAwardRedemptionProduct, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardRedemptionProduct`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemptionProduct`.
   */
  update(entity: SpotAwardRedemptionProduct): UpdateRequestBuilder<SpotAwardRedemptionProduct> {
    return new UpdateRequestBuilder(SpotAwardRedemptionProduct, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardRedemptionProduct`.
   * @param spotAwardRedemptionOrderExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionOrderExternalCode]].
   * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionExternalCode]].
   * @param externalCode Key property. See [[SpotAwardRedemptionProduct.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemptionProduct`.
   */
  delete(spotAwardRedemptionOrderExternalCode: BigNumber, spotAwardRedemptionExternalCode: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<SpotAwardRedemptionProduct>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardRedemptionProduct`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemptionProduct` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardRedemptionProduct): DeleteRequestBuilder<SpotAwardRedemptionProduct>;
  delete(spotAwardRedemptionOrderExternalCodeOrEntity: any, spotAwardRedemptionExternalCode?: BigNumber, externalCode?: BigNumber): DeleteRequestBuilder<SpotAwardRedemptionProduct> {
    return new DeleteRequestBuilder(SpotAwardRedemptionProduct, spotAwardRedemptionOrderExternalCodeOrEntity instanceof SpotAwardRedemptionProduct ? spotAwardRedemptionOrderExternalCodeOrEntity : {
      SpotAwardRedemptionOrder_externalCode: spotAwardRedemptionOrderExternalCodeOrEntity!,
      SpotAwardRedemption_externalCode: spotAwardRedemptionExternalCode!,
      externalCode: externalCode!
    });
  }
}
