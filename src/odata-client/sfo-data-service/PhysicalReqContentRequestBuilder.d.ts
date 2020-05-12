import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PhysicalReqContent } from './PhysicalReqContent';
/**
 * Request builder class for operations supported on the [[PhysicalReqContent]] entity.
 */
export declare class PhysicalReqContentRequestBuilder extends RequestBuilder<PhysicalReqContent> {
    /**
     * Returns a request builder for retrieving one `PhysicalReqContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[PhysicalReqContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[PhysicalReqContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PhysicalReqContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<PhysicalReqContent>;
    /**
     * Returns a request builder for querying all `PhysicalReqContent` entities.
     * @returns A request builder for creating requests to retrieve all `PhysicalReqContent` entities.
     */
    getAll(): GetAllRequestBuilder<PhysicalReqContent>;
    /**
     * Returns a request builder for creating a `PhysicalReqContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PhysicalReqContent`.
     */
    create(entity: PhysicalReqContent): CreateRequestBuilder<PhysicalReqContent>;
    /**
     * Returns a request builder for updating an entity of type `PhysicalReqContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PhysicalReqContent`.
     */
    update(entity: PhysicalReqContent): UpdateRequestBuilder<PhysicalReqContent>;
    /**
     * Returns a request builder for deleting an entity of type `PhysicalReqContent`.
     * @param jobProfileExternalCode Key property. See [[PhysicalReqContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[PhysicalReqContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PhysicalReqContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<PhysicalReqContent>;
    /**
     * Returns a request builder for deleting an entity of type `PhysicalReqContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PhysicalReqContent` by taking the entity as a parameter.
     */
    delete(entity: PhysicalReqContent): DeleteRequestBuilder<PhysicalReqContent>;
}
//# sourceMappingURL=PhysicalReqContentRequestBuilder.d.ts.map