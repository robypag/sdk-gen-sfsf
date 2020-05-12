import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomPayTypeAssignment } from './CustomPayTypeAssignment';
/**
 * Request builder class for operations supported on the [[CustomPayTypeAssignment]] entity.
 */
export declare class CustomPayTypeAssignmentRequestBuilder extends RequestBuilder<CustomPayTypeAssignment> {
    /**
     * Returns a request builder for retrieving one `CustomPayTypeAssignment` entity based on its keys.
     * @param customPayTypeExternalCode Key property. See [[CustomPayTypeAssignment.customPayTypeExternalCode]].
     * @param externalCode Key property. See [[CustomPayTypeAssignment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CustomPayTypeAssignment` entity based on its keys.
     */
    getByKey(customPayTypeExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<CustomPayTypeAssignment>;
    /**
     * Returns a request builder for querying all `CustomPayTypeAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `CustomPayTypeAssignment` entities.
     */
    getAll(): GetAllRequestBuilder<CustomPayTypeAssignment>;
    /**
     * Returns a request builder for creating a `CustomPayTypeAssignment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomPayTypeAssignment`.
     */
    create(entity: CustomPayTypeAssignment): CreateRequestBuilder<CustomPayTypeAssignment>;
    /**
     * Returns a request builder for updating an entity of type `CustomPayTypeAssignment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomPayTypeAssignment`.
     */
    update(entity: CustomPayTypeAssignment): UpdateRequestBuilder<CustomPayTypeAssignment>;
    /**
     * Returns a request builder for deleting an entity of type `CustomPayTypeAssignment`.
     * @param customPayTypeExternalCode Key property. See [[CustomPayTypeAssignment.customPayTypeExternalCode]].
     * @param externalCode Key property. See [[CustomPayTypeAssignment.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `CustomPayTypeAssignment`.
     */
    delete(customPayTypeExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<CustomPayTypeAssignment>;
    /**
     * Returns a request builder for deleting an entity of type `CustomPayTypeAssignment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomPayTypeAssignment` by taking the entity as a parameter.
     */
    delete(entity: CustomPayTypeAssignment): DeleteRequestBuilder<CustomPayTypeAssignment>;
}
//# sourceMappingURL=CustomPayTypeAssignmentRequestBuilder.d.ts.map