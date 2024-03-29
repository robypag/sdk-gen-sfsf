import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardRedemptionOrder } from './SpotAwardRedemptionOrder';
/**
 * Request builder class for operations supported on the [[SpotAwardRedemptionOrder]] entity.
 */
export declare class SpotAwardRedemptionOrderRequestBuilder extends RequestBuilder<SpotAwardRedemptionOrder> {
    /**
     * Returns a request builder for retrieving one `SpotAwardRedemptionOrder` entity based on its keys.
     * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionOrder.spotAwardRedemptionExternalCode]].
     * @param externalCode Key property. See [[SpotAwardRedemptionOrder.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardRedemptionOrder` entity based on its keys.
     */
    getByKey(spotAwardRedemptionExternalCode: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<SpotAwardRedemptionOrder>;
    /**
     * Returns a request builder for querying all `SpotAwardRedemptionOrder` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardRedemptionOrder` entities.
     */
    getAll(): GetAllRequestBuilder<SpotAwardRedemptionOrder>;
    /**
     * Returns a request builder for creating a `SpotAwardRedemptionOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemptionOrder`.
     */
    create(entity: SpotAwardRedemptionOrder): CreateRequestBuilder<SpotAwardRedemptionOrder>;
    /**
     * Returns a request builder for updating an entity of type `SpotAwardRedemptionOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemptionOrder`.
     */
    update(entity: SpotAwardRedemptionOrder): UpdateRequestBuilder<SpotAwardRedemptionOrder>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardRedemptionOrder`.
     * @param spotAwardRedemptionExternalCode Key property. See [[SpotAwardRedemptionOrder.spotAwardRedemptionExternalCode]].
     * @param externalCode Key property. See [[SpotAwardRedemptionOrder.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemptionOrder`.
     */
    delete(spotAwardRedemptionExternalCode: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<SpotAwardRedemptionOrder>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardRedemptionOrder`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardRedemptionOrder` by taking the entity as a parameter.
     */
    delete(entity: SpotAwardRedemptionOrder): DeleteRequestBuilder<SpotAwardRedemptionOrder>;
}
//# sourceMappingURL=SpotAwardRedemptionOrderRequestBuilder.d.ts.map