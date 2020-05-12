import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardCategory } from './SpotAwardCategory';
/**
 * Request builder class for operations supported on the [[SpotAwardCategory]] entity.
 */
export declare class SpotAwardCategoryRequestBuilder extends RequestBuilder<SpotAwardCategory> {
    /**
     * Returns a request builder for retrieving one `SpotAwardCategory` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardCategory.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardCategory.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardCategory` entity based on its keys.
     */
    getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardCategory>;
    /**
     * Returns a request builder for querying all `SpotAwardCategory` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardCategory` entities.
     */
    getAll(): GetAllRequestBuilder<SpotAwardCategory>;
    /**
     * Returns a request builder for creating a `SpotAwardCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardCategory`.
     */
    create(entity: SpotAwardCategory): CreateRequestBuilder<SpotAwardCategory>;
    /**
     * Returns a request builder for updating an entity of type `SpotAwardCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardCategory`.
     */
    update(entity: SpotAwardCategory): UpdateRequestBuilder<SpotAwardCategory>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardCategory`.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardCategory.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardCategory.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardCategory`.
     */
    delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardCategory>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardCategory`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardCategory` by taking the entity as a parameter.
     */
    delete(entity: SpotAwardCategory): DeleteRequestBuilder<SpotAwardCategory>;
}
//# sourceMappingURL=SpotAwardCategoryRequestBuilder.d.ts.map