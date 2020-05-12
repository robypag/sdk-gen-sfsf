import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_VarPayEmpHistDataInt } from './Background_VarPayEmpHistDataInt';
/**
 * Request builder class for operations supported on the [[Background_VarPayEmpHistDataInt]] entity.
 */
export declare class Background_VarPayEmpHistDataIntRequestBuilder extends RequestBuilder<Background_VarPayEmpHistDataInt> {
    /**
     * Returns a request builder for retrieving one `Background_VarPayEmpHistDataInt` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_VarPayEmpHistDataInt.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `Background_VarPayEmpHistDataInt` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<Background_VarPayEmpHistDataInt>;
    /**
     * Returns a request builder for querying all `Background_VarPayEmpHistDataInt` entities.
     * @returns A request builder for creating requests to retrieve all `Background_VarPayEmpHistDataInt` entities.
     */
    getAll(): GetAllRequestBuilder<Background_VarPayEmpHistDataInt>;
    /**
     * Returns a request builder for creating a `Background_VarPayEmpHistDataInt` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_VarPayEmpHistDataInt`.
     */
    create(entity: Background_VarPayEmpHistDataInt): CreateRequestBuilder<Background_VarPayEmpHistDataInt>;
    /**
     * Returns a request builder for updating an entity of type `Background_VarPayEmpHistDataInt`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_VarPayEmpHistDataInt`.
     */
    update(entity: Background_VarPayEmpHistDataInt): UpdateRequestBuilder<Background_VarPayEmpHistDataInt>;
    /**
     * Returns a request builder for deleting an entity of type `Background_VarPayEmpHistDataInt`.
     * @param backgroundElementId Key property. See [[Background_VarPayEmpHistDataInt.backgroundElementId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_VarPayEmpHistDataInt`.
     */
    delete(backgroundElementId: BigNumber): DeleteRequestBuilder<Background_VarPayEmpHistDataInt>;
    /**
     * Returns a request builder for deleting an entity of type `Background_VarPayEmpHistDataInt`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_VarPayEmpHistDataInt` by taking the entity as a parameter.
     */
    delete(entity: Background_VarPayEmpHistDataInt): DeleteRequestBuilder<Background_VarPayEmpHistDataInt>;
}
//# sourceMappingURL=Background_VarPayEmpHistDataIntRequestBuilder.d.ts.map