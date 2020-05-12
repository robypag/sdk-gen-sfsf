import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CertificationEntity } from './CertificationEntity';
/**
 * Request builder class for operations supported on the [[CertificationEntity]] entity.
 */
export declare class CertificationEntityRequestBuilder extends RequestBuilder<CertificationEntity> {
    /**
     * Returns a request builder for retrieving one `CertificationEntity` entity based on its keys.
     * @param externalCode Key property. See [[CertificationEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CertificationEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<CertificationEntity>;
    /**
     * Returns a request builder for querying all `CertificationEntity` entities.
     * @returns A request builder for creating requests to retrieve all `CertificationEntity` entities.
     */
    getAll(): GetAllRequestBuilder<CertificationEntity>;
    /**
     * Returns a request builder for creating a `CertificationEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CertificationEntity`.
     */
    create(entity: CertificationEntity): CreateRequestBuilder<CertificationEntity>;
    /**
     * Returns a request builder for updating an entity of type `CertificationEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CertificationEntity`.
     */
    update(entity: CertificationEntity): UpdateRequestBuilder<CertificationEntity>;
    /**
     * Returns a request builder for deleting an entity of type `CertificationEntity`.
     * @param externalCode Key property. See [[CertificationEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `CertificationEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<CertificationEntity>;
    /**
     * Returns a request builder for deleting an entity of type `CertificationEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CertificationEntity` by taking the entity as a parameter.
     */
    delete(entity: CertificationEntity): DeleteRequestBuilder<CertificationEntity>;
}
//# sourceMappingURL=CertificationEntityRequestBuilder.d.ts.map