import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NomineeHistory } from './NomineeHistory';
/**
 * Request builder class for operations supported on the [[NomineeHistory]] entity.
 */
export declare class NomineeHistoryRequestBuilder extends RequestBuilder<NomineeHistory> {
    /**
     * Returns a request builder for retrieving one `NomineeHistory` entity based on its keys.
     * @param id Key property. See [[NomineeHistory.id]].
     * @returns A request builder for creating requests to retrieve one `NomineeHistory` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<NomineeHistory>;
    /**
     * Returns a request builder for querying all `NomineeHistory` entities.
     * @returns A request builder for creating requests to retrieve all `NomineeHistory` entities.
     */
    getAll(): GetAllRequestBuilder<NomineeHistory>;
}
//# sourceMappingURL=NomineeHistoryRequestBuilder.d.ts.map