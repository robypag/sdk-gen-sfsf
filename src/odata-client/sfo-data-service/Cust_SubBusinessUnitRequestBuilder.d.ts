import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Cust_SubBusinessUnit } from './Cust_SubBusinessUnit';
/**
 * Request builder class for operations supported on the [[Cust_SubBusinessUnit]] entity.
 */
export declare class Cust_SubBusinessUnitRequestBuilder extends RequestBuilder<Cust_SubBusinessUnit> {
    /**
     * Returns a request builder for retrieving one `Cust_SubBusinessUnit` entity based on its keys.
     * @param effectiveStartDate Key property. See [[Cust_SubBusinessUnit.effectiveStartDate]].
     * @param externalCode Key property. See [[Cust_SubBusinessUnit.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Cust_SubBusinessUnit` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<Cust_SubBusinessUnit>;
    /**
     * Returns a request builder for querying all `Cust_SubBusinessUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Cust_SubBusinessUnit` entities.
     */
    getAll(): GetAllRequestBuilder<Cust_SubBusinessUnit>;
    /**
     * Returns a request builder for creating a `Cust_SubBusinessUnit` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cust_SubBusinessUnit`.
     */
    create(entity: Cust_SubBusinessUnit): CreateRequestBuilder<Cust_SubBusinessUnit>;
    /**
     * Returns a request builder for updating an entity of type `Cust_SubBusinessUnit`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cust_SubBusinessUnit`.
     */
    update(entity: Cust_SubBusinessUnit): UpdateRequestBuilder<Cust_SubBusinessUnit>;
    /**
     * Returns a request builder for deleting an entity of type `Cust_SubBusinessUnit`.
     * @param effectiveStartDate Key property. See [[Cust_SubBusinessUnit.effectiveStartDate]].
     * @param externalCode Key property. See [[Cust_SubBusinessUnit.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `Cust_SubBusinessUnit`.
     */
    delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<Cust_SubBusinessUnit>;
    /**
     * Returns a request builder for deleting an entity of type `Cust_SubBusinessUnit`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Cust_SubBusinessUnit` by taking the entity as a parameter.
     */
    delete(entity: Cust_SubBusinessUnit): DeleteRequestBuilder<Cust_SubBusinessUnit>;
}
//# sourceMappingURL=Cust_SubBusinessUnitRequestBuilder.d.ts.map