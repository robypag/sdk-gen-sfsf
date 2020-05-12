import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OneTimeDeduction } from './OneTimeDeduction';
/**
 * Request builder class for operations supported on the [[OneTimeDeduction]] entity.
 */
export declare class OneTimeDeductionRequestBuilder extends RequestBuilder<OneTimeDeduction> {
    /**
     * Returns a request builder for retrieving one `OneTimeDeduction` entity based on its keys.
     * @param externalCode Key property. See [[OneTimeDeduction.externalCode]].
     * @returns A request builder for creating requests to retrieve one `OneTimeDeduction` entity based on its keys.
     */
    getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<OneTimeDeduction>;
    /**
     * Returns a request builder for querying all `OneTimeDeduction` entities.
     * @returns A request builder for creating requests to retrieve all `OneTimeDeduction` entities.
     */
    getAll(): GetAllRequestBuilder<OneTimeDeduction>;
}
//# sourceMappingURL=OneTimeDeductionRequestBuilder.d.ts.map