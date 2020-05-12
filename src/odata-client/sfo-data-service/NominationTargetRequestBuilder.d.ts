import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NominationTarget } from './NominationTarget';
/**
 * Request builder class for operations supported on the [[NominationTarget]] entity.
 */
export declare class NominationTargetRequestBuilder extends RequestBuilder<NominationTarget> {
    /**
     * Returns a request builder for retrieving one `NominationTarget` entity based on its keys.
     * @param nominationId Key property. See [[NominationTarget.nominationId]].
     * @returns A request builder for creating requests to retrieve one `NominationTarget` entity based on its keys.
     */
    getByKey(nominationId: BigNumber): GetByKeyRequestBuilder<NominationTarget>;
    /**
     * Returns a request builder for querying all `NominationTarget` entities.
     * @returns A request builder for creating requests to retrieve all `NominationTarget` entities.
     */
    getAll(): GetAllRequestBuilder<NominationTarget>;
}
//# sourceMappingURL=NominationTargetRequestBuilder.d.ts.map