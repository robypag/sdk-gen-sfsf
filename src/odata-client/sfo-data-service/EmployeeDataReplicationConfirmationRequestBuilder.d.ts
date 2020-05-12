import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeDataReplicationConfirmation } from './EmployeeDataReplicationConfirmation';
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationConfirmation]] entity.
 */
export declare class EmployeeDataReplicationConfirmationRequestBuilder extends RequestBuilder<EmployeeDataReplicationConfirmation> {
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationConfirmation` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationConfirmation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationConfirmation` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeDataReplicationConfirmation>;
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationConfirmation` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationConfirmation` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeDataReplicationConfirmation>;
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationConfirmation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationConfirmation`.
     */
    create(entity: EmployeeDataReplicationConfirmation): CreateRequestBuilder<EmployeeDataReplicationConfirmation>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationConfirmation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationConfirmation`.
     */
    update(entity: EmployeeDataReplicationConfirmation): UpdateRequestBuilder<EmployeeDataReplicationConfirmation>;
}
//# sourceMappingURL=EmployeeDataReplicationConfirmationRequestBuilder.d.ts.map