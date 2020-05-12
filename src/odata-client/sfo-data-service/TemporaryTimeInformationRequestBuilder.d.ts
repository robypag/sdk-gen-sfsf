import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TemporaryTimeInformation } from './TemporaryTimeInformation';
/**
 * Request builder class for operations supported on the [[TemporaryTimeInformation]] entity.
 */
export declare class TemporaryTimeInformationRequestBuilder extends RequestBuilder<TemporaryTimeInformation> {
    /**
     * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
     * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for querying all `TemporaryTimeInformation` entities.
     * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
     */
    getAll(): GetAllRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for creating a `TemporaryTimeInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TemporaryTimeInformation`.
     */
    create(entity: TemporaryTimeInformation): CreateRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for updating an entity of type `TemporaryTimeInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TemporaryTimeInformation`.
     */
    update(entity: TemporaryTimeInformation): UpdateRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
     * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation`.
     */
    delete(externalCode: string): DeleteRequestBuilder<TemporaryTimeInformation>;
    /**
     * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation` by taking the entity as a parameter.
     */
    delete(entity: TemporaryTimeInformation): DeleteRequestBuilder<TemporaryTimeInformation>;
}
//# sourceMappingURL=TemporaryTimeInformationRequestBuilder.d.ts.map