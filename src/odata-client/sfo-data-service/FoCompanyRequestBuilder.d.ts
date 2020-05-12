import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoCompany } from './FoCompany';
/**
 * Request builder class for operations supported on the [[FoCompany]] entity.
 */
export declare class FoCompanyRequestBuilder extends RequestBuilder<FoCompany> {
    /**
     * Returns a request builder for retrieving one `FoCompany` entity based on its keys.
     * @param externalCode Key property. See [[FoCompany.externalCode]].
     * @param startDate Key property. See [[FoCompany.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoCompany` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoCompany>;
    /**
     * Returns a request builder for querying all `FoCompany` entities.
     * @returns A request builder for creating requests to retrieve all `FoCompany` entities.
     */
    getAll(): GetAllRequestBuilder<FoCompany>;
    /**
     * Returns a request builder for creating a `FoCompany` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoCompany`.
     */
    create(entity: FoCompany): CreateRequestBuilder<FoCompany>;
    /**
     * Returns a request builder for updating an entity of type `FoCompany`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoCompany`.
     */
    update(entity: FoCompany): UpdateRequestBuilder<FoCompany>;
    /**
     * Returns a request builder for deleting an entity of type `FoCompany`.
     * @param externalCode Key property. See [[FoCompany.externalCode]].
     * @param startDate Key property. See [[FoCompany.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoCompany`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoCompany>;
    /**
     * Returns a request builder for deleting an entity of type `FoCompany`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoCompany` by taking the entity as a parameter.
     */
    delete(entity: FoCompany): DeleteRequestBuilder<FoCompany>;
}
//# sourceMappingURL=FoCompanyRequestBuilder.d.ts.map