import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobCode } from './FoJobCode';
/**
 * Request builder class for operations supported on the [[FoJobCode]] entity.
 */
export declare class FoJobCodeRequestBuilder extends RequestBuilder<FoJobCode> {
    /**
     * Returns a request builder for retrieving one `FoJobCode` entity based on its keys.
     * @param externalCode Key property. See [[FoJobCode.externalCode]].
     * @param startDate Key property. See [[FoJobCode.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobCode` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobCode>;
    /**
     * Returns a request builder for querying all `FoJobCode` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobCode` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobCode>;
    /**
     * Returns a request builder for creating a `FoJobCode` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoJobCode`.
     */
    create(entity: FoJobCode): CreateRequestBuilder<FoJobCode>;
    /**
     * Returns a request builder for updating an entity of type `FoJobCode`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoJobCode`.
     */
    update(entity: FoJobCode): UpdateRequestBuilder<FoJobCode>;
    /**
     * Returns a request builder for deleting an entity of type `FoJobCode`.
     * @param externalCode Key property. See [[FoJobCode.externalCode]].
     * @param startDate Key property. See [[FoJobCode.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoJobCode`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoJobCode>;
    /**
     * Returns a request builder for deleting an entity of type `FoJobCode`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoJobCode` by taking the entity as a parameter.
     */
    delete(entity: FoJobCode): DeleteRequestBuilder<FoJobCode>;
}
//# sourceMappingURL=FoJobCodeRequestBuilder.d.ts.map