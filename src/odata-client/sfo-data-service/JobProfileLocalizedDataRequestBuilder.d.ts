import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobProfileLocalizedData } from './JobProfileLocalizedData';
/**
 * Request builder class for operations supported on the [[JobProfileLocalizedData]] entity.
 */
export declare class JobProfileLocalizedDataRequestBuilder extends RequestBuilder<JobProfileLocalizedData> {
    /**
     * Returns a request builder for retrieving one `JobProfileLocalizedData` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[JobProfileLocalizedData.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobProfileLocalizedData.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobProfileLocalizedData` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JobProfileLocalizedData>;
    /**
     * Returns a request builder for querying all `JobProfileLocalizedData` entities.
     * @returns A request builder for creating requests to retrieve all `JobProfileLocalizedData` entities.
     */
    getAll(): GetAllRequestBuilder<JobProfileLocalizedData>;
    /**
     * Returns a request builder for creating a `JobProfileLocalizedData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobProfileLocalizedData`.
     */
    create(entity: JobProfileLocalizedData): CreateRequestBuilder<JobProfileLocalizedData>;
    /**
     * Returns a request builder for updating an entity of type `JobProfileLocalizedData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobProfileLocalizedData`.
     */
    update(entity: JobProfileLocalizedData): UpdateRequestBuilder<JobProfileLocalizedData>;
    /**
     * Returns a request builder for deleting an entity of type `JobProfileLocalizedData`.
     * @param jobProfileExternalCode Key property. See [[JobProfileLocalizedData.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobProfileLocalizedData.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobProfileLocalizedData`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<JobProfileLocalizedData>;
    /**
     * Returns a request builder for deleting an entity of type `JobProfileLocalizedData`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobProfileLocalizedData` by taking the entity as a parameter.
     */
    delete(entity: JobProfileLocalizedData): DeleteRequestBuilder<JobProfileLocalizedData>;
}
//# sourceMappingURL=JobProfileLocalizedDataRequestBuilder.d.ts.map