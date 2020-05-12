import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardRedemptionProduct } from './SpotAwardRedemptionProduct';
/**
 * Request builder class for operations supported on the [[SpotAwardRedemptionProduct]] entity.
 */
export declare class SpotAwardRedemptionProductRequestBuilder extends RequestBuilder<SpotAwardRedemptionProduct> {
    /**
     * Returns a request builder for retrieving one `SpotAwardRedemptionProduct` entity based on its keys.
     * @param spotAwardRedemptionOrderExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionOrderExternalCode]].
     * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionProduct.spotAwardRedemptionExternalCode]].
     * @param externalCode Key property. See [[SpotAwardRedemptionProduct.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardRedemptionProduct` entity based on its keys.
     */
    getByKey(spotAwardRedemptionOrderExternalCode: BigNumber, spotAwardRedemptionExternalCode: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<SpotAwardRedemptionProduct>;
    /**
     * Returns a request builder for querying all `SpotAwardRedemptionProduct` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardRedemptionProduct` entities.
     */
    getAll(): GetAllRequestBuilder<SpotAwardRedemptionProduct>;
    /**
     * Returns a request builder for creating a `SpotAwardRedemptionProduct` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemptionProduct`.
     */
    create(entity: SpotAwardRedemptionProduct): CreateRequestBuilder<SpotAwardRedemptionProduct>;
    /**
     * Returns a request builder for updating an entity of type `SpotAwardRedemptionProduct`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemptionProduct`.
     */
    update(entity: SpotAwardRedemptionProduct): UpdateRequestBuilder<SpotAwardRedemptionProduct>;
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
}
//# sourceMappingURL=SpotAwardRedemptionProductRequestBuilder.d.ts.map