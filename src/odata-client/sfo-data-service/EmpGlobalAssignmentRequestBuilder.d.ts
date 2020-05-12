import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpGlobalAssignment } from './EmpGlobalAssignment';
/**
 * Request builder class for operations supported on the [[EmpGlobalAssignment]] entity.
 */
export declare class EmpGlobalAssignmentRequestBuilder extends RequestBuilder<EmpGlobalAssignment> {
    /**
     * Returns a request builder for retrieving one `EmpGlobalAssignment` entity based on its keys.
     * @param userId Key property. See [[EmpGlobalAssignment.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpGlobalAssignment` entity based on its keys.
     */
    getByKey(userId: string): GetByKeyRequestBuilder<EmpGlobalAssignment>;
    /**
     * Returns a request builder for querying all `EmpGlobalAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `EmpGlobalAssignment` entities.
     */
    getAll(): GetAllRequestBuilder<EmpGlobalAssignment>;
}
//# sourceMappingURL=EmpGlobalAssignmentRequestBuilder.d.ts.map