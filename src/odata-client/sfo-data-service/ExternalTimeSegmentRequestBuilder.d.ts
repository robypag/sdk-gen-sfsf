import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalTimeSegment } from './ExternalTimeSegment';
/**
 * Request builder class for operations supported on the [[ExternalTimeSegment]] entity.
 */
export declare class ExternalTimeSegmentRequestBuilder extends RequestBuilder<ExternalTimeSegment> {
    /**
     * Returns a request builder for retrieving one `ExternalTimeSegment` entity based on its keys.
     * @param externalTimeRecordExternalCode Key property. See [[ExternalTimeSegment.externalTimeRecordExternalCode]].
     * @param externalCode Key property. See [[ExternalTimeSegment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ExternalTimeSegment` entity based on its keys.
     */
    getByKey(externalTimeRecordExternalCode: string, externalCode: string): GetByKeyRequestBuilder<ExternalTimeSegment>;
    /**
     * Returns a request builder for querying all `ExternalTimeSegment` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalTimeSegment` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalTimeSegment>;
    /**
     * Returns a request builder for creating a `ExternalTimeSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalTimeSegment`.
     */
    create(entity: ExternalTimeSegment): CreateRequestBuilder<ExternalTimeSegment>;
    /**
     * Returns a request builder for updating an entity of type `ExternalTimeSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalTimeSegment`.
     */
    update(entity: ExternalTimeSegment): UpdateRequestBuilder<ExternalTimeSegment>;
    /**
     * Returns a request builder for deleting an entity of type `ExternalTimeSegment`.
     * @param externalTimeRecordExternalCode Key property. See [[ExternalTimeSegment.externalTimeRecordExternalCode]].
     * @param externalCode Key property. See [[ExternalTimeSegment.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `ExternalTimeSegment`.
     */
    delete(externalTimeRecordExternalCode: string, externalCode: string): DeleteRequestBuilder<ExternalTimeSegment>;
    /**
     * Returns a request builder for deleting an entity of type `ExternalTimeSegment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ExternalTimeSegment` by taking the entity as a parameter.
     */
    delete(entity: ExternalTimeSegment): DeleteRequestBuilder<ExternalTimeSegment>;
}
//# sourceMappingURL=ExternalTimeSegmentRequestBuilder.d.ts.map