import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeDataReplicationElement } from './EmployeeDataReplicationElement';
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationElement]] entity.
 */
export declare class EmployeeDataReplicationElementRequestBuilder extends RequestBuilder<EmployeeDataReplicationElement> {
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationElement` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationElement.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationElement` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeDataReplicationElement>;
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationElement` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationElement` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeDataReplicationElement>;
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationElement`.
     */
    create(entity: EmployeeDataReplicationElement): CreateRequestBuilder<EmployeeDataReplicationElement>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationElement`.
     */
    update(entity: EmployeeDataReplicationElement): UpdateRequestBuilder<EmployeeDataReplicationElement>;
}
//# sourceMappingURL=EmployeeDataReplicationElementRequestBuilder.d.ts.map