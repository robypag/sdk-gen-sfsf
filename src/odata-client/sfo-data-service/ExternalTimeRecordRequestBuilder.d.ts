import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalTimeRecord } from './ExternalTimeRecord';
/**
 * Request builder class for operations supported on the [[ExternalTimeRecord]] entity.
 */
export declare class ExternalTimeRecordRequestBuilder extends RequestBuilder<ExternalTimeRecord> {
    /**
     * Returns a request builder for retrieving one `ExternalTimeRecord` entity based on its keys.
     * @param externalCode Key property. See [[ExternalTimeRecord.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ExternalTimeRecord` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<ExternalTimeRecord>;
    /**
     * Returns a request builder for querying all `ExternalTimeRecord` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalTimeRecord` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalTimeRecord>;
    /**
     * Returns a request builder for creating a `ExternalTimeRecord` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalTimeRecord`.
     */
    create(entity: ExternalTimeRecord): CreateRequestBuilder<ExternalTimeRecord>;
    /**
     * Returns a request builder for updating an entity of type `ExternalTimeRecord`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalTimeRecord`.
     */
    update(entity: ExternalTimeRecord): UpdateRequestBuilder<ExternalTimeRecord>;
    /**
     * Returns a request builder for deleting an entity of type `ExternalTimeRecord`.
     * @param externalCode Key property. See [[ExternalTimeRecord.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `ExternalTimeRecord`.
     */
    delete(externalCode: string): DeleteRequestBuilder<ExternalTimeRecord>;
    /**
     * Returns a request builder for deleting an entity of type `ExternalTimeRecord`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ExternalTimeRecord` by taking the entity as a parameter.
     */
    delete(entity: ExternalTimeRecord): DeleteRequestBuilder<ExternalTimeRecord>;
}
//# sourceMappingURL=ExternalTimeRecordRequestBuilder.d.ts.map