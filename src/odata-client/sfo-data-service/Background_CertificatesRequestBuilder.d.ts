import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Certificates } from './Background_Certificates';
/**
 * Request builder class for operations supported on the [[Background_Certificates]] entity.
 */
export declare class Background_CertificatesRequestBuilder extends RequestBuilder<Background_Certificates> {
    /**
     * Returns a request builder for retrieving one `Background_Certificates` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Certificates.backgroundElementId]].
     * @param userId Key property. See [[Background_Certificates.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Certificates` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Certificates>;
    /**
     * Returns a request builder for querying all `Background_Certificates` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Certificates` entities.
     */
    getAll(): GetAllRequestBuilder<Background_Certificates>;
    /**
     * Returns a request builder for creating a `Background_Certificates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Certificates`.
     */
    create(entity: Background_Certificates): CreateRequestBuilder<Background_Certificates>;
    /**
     * Returns a request builder for updating an entity of type `Background_Certificates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Certificates`.
     */
    update(entity: Background_Certificates): UpdateRequestBuilder<Background_Certificates>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Certificates`.
     * @param backgroundElementId Key property. See [[Background_Certificates.backgroundElementId]].
     * @param userId Key property. See [[Background_Certificates.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_Certificates`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Certificates>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Certificates`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_Certificates` by taking the entity as a parameter.
     */
    delete(entity: Background_Certificates): DeleteRequestBuilder<Background_Certificates>;
}
//# sourceMappingURL=Background_CertificatesRequestBuilder.d.ts.map