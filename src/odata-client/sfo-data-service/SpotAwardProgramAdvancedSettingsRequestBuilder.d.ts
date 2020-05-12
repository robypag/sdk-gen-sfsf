import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardProgramAdvancedSettings } from './SpotAwardProgramAdvancedSettings';
/**
 * Request builder class for operations supported on the [[SpotAwardProgramAdvancedSettings]] entity.
 */
export declare class SpotAwardProgramAdvancedSettingsRequestBuilder extends RequestBuilder<SpotAwardProgramAdvancedSettings> {
    /**
     * Returns a request builder for retrieving one `SpotAwardProgramAdvancedSettings` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardProgramAdvancedSettings.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardProgramAdvancedSettings.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardProgramAdvancedSettings` entity based on its keys.
     */
    getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardProgramAdvancedSettings>;
    /**
     * Returns a request builder for querying all `SpotAwardProgramAdvancedSettings` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardProgramAdvancedSettings` entities.
     */
    getAll(): GetAllRequestBuilder<SpotAwardProgramAdvancedSettings>;
    /**
     * Returns a request builder for creating a `SpotAwardProgramAdvancedSettings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardProgramAdvancedSettings`.
     */
    create(entity: SpotAwardProgramAdvancedSettings): CreateRequestBuilder<SpotAwardProgramAdvancedSettings>;
    /**
     * Returns a request builder for updating an entity of type `SpotAwardProgramAdvancedSettings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardProgramAdvancedSettings`.
     */
    update(entity: SpotAwardProgramAdvancedSettings): UpdateRequestBuilder<SpotAwardProgramAdvancedSettings>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardProgramAdvancedSettings`.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardProgramAdvancedSettings.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardProgramAdvancedSettings.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardProgramAdvancedSettings`.
     */
    delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardProgramAdvancedSettings>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardProgramAdvancedSettings`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardProgramAdvancedSettings` by taking the entity as a parameter.
     */
    delete(entity: SpotAwardProgramAdvancedSettings): DeleteRequestBuilder<SpotAwardProgramAdvancedSettings>;
}
//# sourceMappingURL=SpotAwardProgramAdvancedSettingsRequestBuilder.d.ts.map