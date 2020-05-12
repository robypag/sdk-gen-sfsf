import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoDepartment } from './FoDepartment';
/**
 * Request builder class for operations supported on the [[FoDepartment]] entity.
 */
export declare class FoDepartmentRequestBuilder extends RequestBuilder<FoDepartment> {
    /**
     * Returns a request builder for retrieving one `FoDepartment` entity based on its keys.
     * @param externalCode Key property. See [[FoDepartment.externalCode]].
     * @param startDate Key property. See [[FoDepartment.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoDepartment` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoDepartment>;
    /**
     * Returns a request builder for querying all `FoDepartment` entities.
     * @returns A request builder for creating requests to retrieve all `FoDepartment` entities.
     */
    getAll(): GetAllRequestBuilder<FoDepartment>;
    /**
     * Returns a request builder for creating a `FoDepartment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoDepartment`.
     */
    create(entity: FoDepartment): CreateRequestBuilder<FoDepartment>;
    /**
     * Returns a request builder for updating an entity of type `FoDepartment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoDepartment`.
     */
    update(entity: FoDepartment): UpdateRequestBuilder<FoDepartment>;
    /**
     * Returns a request builder for deleting an entity of type `FoDepartment`.
     * @param externalCode Key property. See [[FoDepartment.externalCode]].
     * @param startDate Key property. See [[FoDepartment.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoDepartment`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoDepartment>;
    /**
     * Returns a request builder for deleting an entity of type `FoDepartment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoDepartment` by taking the entity as a parameter.
     */
    delete(entity: FoDepartment): DeleteRequestBuilder<FoDepartment>;
}
//# sourceMappingURL=FoDepartmentRequestBuilder.d.ts.map