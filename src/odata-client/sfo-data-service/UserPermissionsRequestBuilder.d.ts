import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { UserPermissions } from './UserPermissions';
/**
 * Request builder class for operations supported on the [[UserPermissions]] entity.
 */
export declare class UserPermissionsRequestBuilder extends RequestBuilder<UserPermissions> {
    /**
     * Returns a request builder for retrieving one `UserPermissions` entity based on its keys.
     * @param userId Key property. See [[UserPermissions.userId]].
     * @returns A request builder for creating requests to retrieve one `UserPermissions` entity based on its keys.
     */
    getByKey(userId: number): GetByKeyRequestBuilder<UserPermissions>;
    /**
     * Returns a request builder for querying all `UserPermissions` entities.
     * @returns A request builder for creating requests to retrieve all `UserPermissions` entities.
     */
    getAll(): GetAllRequestBuilder<UserPermissions>;
}
//# sourceMappingURL=UserPermissionsRequestBuilder.d.ts.map