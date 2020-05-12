import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Cust_PickListAMapping } from './Cust_PickListAMapping';
/**
 * Request builder class for operations supported on the [[Cust_PickListAMapping]] entity.
 */
export declare class Cust_PickListAMappingRequestBuilder extends RequestBuilder<Cust_PickListAMapping> {
    /**
     * Returns a request builder for retrieving one `Cust_PickListAMapping` entity based on its keys.
     * @param externalCode Key property. See [[Cust_PickListAMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Cust_PickListAMapping` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<Cust_PickListAMapping>;
    /**
     * Returns a request builder for querying all `Cust_PickListAMapping` entities.
     * @returns A request builder for creating requests to retrieve all `Cust_PickListAMapping` entities.
     */
    getAll(): GetAllRequestBuilder<Cust_PickListAMapping>;
    /**
     * Returns a request builder for creating a `Cust_PickListAMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cust_PickListAMapping`.
     */
    create(entity: Cust_PickListAMapping): CreateRequestBuilder<Cust_PickListAMapping>;
    /**
     * Returns a request builder for updating an entity of type `Cust_PickListAMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cust_PickListAMapping`.
     */
    update(entity: Cust_PickListAMapping): UpdateRequestBuilder<Cust_PickListAMapping>;
    /**
     * Returns a request builder for deleting an entity of type `Cust_PickListAMapping`.
     * @param externalCode Key property. See [[Cust_PickListAMapping.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `Cust_PickListAMapping`.
     */
    delete(externalCode: string): DeleteRequestBuilder<Cust_PickListAMapping>;
    /**
     * Returns a request builder for deleting an entity of type `Cust_PickListAMapping`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Cust_PickListAMapping` by taking the entity as a parameter.
     */
    delete(entity: Cust_PickListAMapping): DeleteRequestBuilder<Cust_PickListAMapping>;
}
//# sourceMappingURL=Cust_PickListAMappingRequestBuilder.d.ts.map