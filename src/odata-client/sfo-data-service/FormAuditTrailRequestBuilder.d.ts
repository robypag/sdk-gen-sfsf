import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormAuditTrail } from './FormAuditTrail';
/**
 * Request builder class for operations supported on the [[FormAuditTrail]] entity.
 */
export declare class FormAuditTrailRequestBuilder extends RequestBuilder<FormAuditTrail> {
    /**
     * Returns a request builder for retrieving one `FormAuditTrail` entity based on its keys.
     * @param auditTrailId Key property. See [[FormAuditTrail.auditTrailId]].
     * @returns A request builder for creating requests to retrieve one `FormAuditTrail` entity based on its keys.
     */
    getByKey(auditTrailId: BigNumber): GetByKeyRequestBuilder<FormAuditTrail>;
    /**
     * Returns a request builder for querying all `FormAuditTrail` entities.
     * @returns A request builder for creating requests to retrieve all `FormAuditTrail` entities.
     */
    getAll(): GetAllRequestBuilder<FormAuditTrail>;
}
//# sourceMappingURL=FormAuditTrailRequestBuilder.d.ts.map