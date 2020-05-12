import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpCompensation } from './EmpCompensation';
/**
 * Request builder class for operations supported on the [[EmpCompensation]] entity.
 */
export declare class EmpCompensationRequestBuilder extends RequestBuilder<EmpCompensation> {
    /**
     * Returns a request builder for retrieving one `EmpCompensation` entity based on its keys.
     * @param seqNumber Key property. See [[EmpCompensation.seqNumber]].
     * @param startDate Key property. See [[EmpCompensation.startDate]].
     * @param userId Key property. See [[EmpCompensation.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpCompensation` entity based on its keys.
     */
    getByKey(seqNumber: BigNumber, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpCompensation>;
    /**
     * Returns a request builder for querying all `EmpCompensation` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCompensation` entities.
     */
    getAll(): GetAllRequestBuilder<EmpCompensation>;
}
//# sourceMappingURL=EmpCompensationRequestBuilder.d.ts.map