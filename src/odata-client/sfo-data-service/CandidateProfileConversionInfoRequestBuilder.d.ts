import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateProfileConversionInfo } from './CandidateProfileConversionInfo';
/**
 * Request builder class for operations supported on the [[CandidateProfileConversionInfo]] entity.
 */
export declare class CandidateProfileConversionInfoRequestBuilder extends RequestBuilder<CandidateProfileConversionInfo> {
    /**
     * Returns a request builder for retrieving one `CandidateProfileConversionInfo` entity based on its keys.
     * @param candidateId Key property. See [[CandidateProfileConversionInfo.candidateId]].
     * @returns A request builder for creating requests to retrieve one `CandidateProfileConversionInfo` entity based on its keys.
     */
    getByKey(candidateId: BigNumber): GetByKeyRequestBuilder<CandidateProfileConversionInfo>;
    /**
     * Returns a request builder for querying all `CandidateProfileConversionInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateProfileConversionInfo` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateProfileConversionInfo>;
}
//# sourceMappingURL=CandidateProfileConversionInfoRequestBuilder.d.ts.map