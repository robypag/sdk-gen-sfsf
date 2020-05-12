import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpPayCompNonRecurring } from './EmpPayCompNonRecurring';
/**
 * Request builder class for operations supported on the [[EmpPayCompNonRecurring]] entity.
 */
export declare class EmpPayCompNonRecurringRequestBuilder extends RequestBuilder<EmpPayCompNonRecurring> {
    /**
     * Returns a request builder for retrieving one `EmpPayCompNonRecurring` entity based on its keys.
     * @param payComponentCode Key property. See [[EmpPayCompNonRecurring.payComponentCode]].
     * @param payDate Key property. See [[EmpPayCompNonRecurring.payDate]].
     * @param userId Key property. See [[EmpPayCompNonRecurring.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpPayCompNonRecurring` entity based on its keys.
     */
    getByKey(payComponentCode: string, payDate: Moment, userId: string): GetByKeyRequestBuilder<EmpPayCompNonRecurring>;
    /**
     * Returns a request builder for querying all `EmpPayCompNonRecurring` entities.
     * @returns A request builder for creating requests to retrieve all `EmpPayCompNonRecurring` entities.
     */
    getAll(): GetAllRequestBuilder<EmpPayCompNonRecurring>;
}
//# sourceMappingURL=EmpPayCompNonRecurringRequestBuilder.d.ts.map