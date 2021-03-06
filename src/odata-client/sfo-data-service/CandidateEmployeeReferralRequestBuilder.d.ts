import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateEmployeeReferral } from './CandidateEmployeeReferral';
/**
 * Request builder class for operations supported on the [[CandidateEmployeeReferral]] entity.
 */
export declare class CandidateEmployeeReferralRequestBuilder extends RequestBuilder<CandidateEmployeeReferral> {
    /**
     * Returns a request builder for retrieving one `CandidateEmployeeReferral` entity based on its keys.
     * @param candidateEmployeeReferralId Key property. See [[CandidateEmployeeReferral.candidateEmployeeReferralId]].
     * @returns A request builder for creating requests to retrieve one `CandidateEmployeeReferral` entity based on its keys.
     */
    getByKey(candidateEmployeeReferralId: BigNumber): GetByKeyRequestBuilder<CandidateEmployeeReferral>;
    /**
     * Returns a request builder for querying all `CandidateEmployeeReferral` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateEmployeeReferral` entities.
     */
    getAll(): GetAllRequestBuilder<CandidateEmployeeReferral>;
    /**
     * Returns a request builder for creating a `CandidateEmployeeReferral` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateEmployeeReferral`.
     */
    create(entity: CandidateEmployeeReferral): CreateRequestBuilder<CandidateEmployeeReferral>;
}
//# sourceMappingURL=CandidateEmployeeReferralRequestBuilder.d.ts.map