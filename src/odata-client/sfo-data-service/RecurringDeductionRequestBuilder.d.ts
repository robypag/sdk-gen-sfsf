import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { RecurringDeduction } from './RecurringDeduction';
/**
 * Request builder class for operations supported on the [[RecurringDeduction]] entity.
 */
export declare class RecurringDeductionRequestBuilder extends RequestBuilder<RecurringDeduction> {
    /**
     * Returns a request builder for retrieving one `RecurringDeduction` entity based on its keys.
     * @param effectiveStartDate Key property. See [[RecurringDeduction.effectiveStartDate]].
     * @param userSysId Key property. See [[RecurringDeduction.userSysId]].
     * @returns A request builder for creating requests to retrieve one `RecurringDeduction` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, userSysId: string): GetByKeyRequestBuilder<RecurringDeduction>;
    /**
     * Returns a request builder for querying all `RecurringDeduction` entities.
     * @returns A request builder for creating requests to retrieve all `RecurringDeduction` entities.
     */
    getAll(): GetAllRequestBuilder<RecurringDeduction>;
}
//# sourceMappingURL=RecurringDeductionRequestBuilder.d.ts.map