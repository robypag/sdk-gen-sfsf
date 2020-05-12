import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeDataReplicationNotification } from './EmployeeDataReplicationNotification';
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationNotification]] entity.
 */
export declare class EmployeeDataReplicationNotificationRequestBuilder extends RequestBuilder<EmployeeDataReplicationNotification> {
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationNotification` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationNotification.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationNotification` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeDataReplicationNotification>;
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationNotification` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationNotification` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeDataReplicationNotification>;
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationNotification` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationNotification`.
     */
    create(entity: EmployeeDataReplicationNotification): CreateRequestBuilder<EmployeeDataReplicationNotification>;
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationNotification`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationNotification`.
     */
    update(entity: EmployeeDataReplicationNotification): UpdateRequestBuilder<EmployeeDataReplicationNotification>;
}
//# sourceMappingURL=EmployeeDataReplicationNotificationRequestBuilder.d.ts.map