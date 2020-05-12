import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationSubjectRank } from './CalibrationSubjectRank';
/**
 * Request builder class for operations supported on the [[CalibrationSubjectRank]] entity.
 */
export declare class CalibrationSubjectRankRequestBuilder extends RequestBuilder<CalibrationSubjectRank> {
    /**
     * Returns a request builder for retrieving one `CalibrationSubjectRank` entity based on its keys.
     * @param subjectRankId Key property. See [[CalibrationSubjectRank.subjectRankId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationSubjectRank` entity based on its keys.
     */
    getByKey(subjectRankId: BigNumber): GetByKeyRequestBuilder<CalibrationSubjectRank>;
    /**
     * Returns a request builder for querying all `CalibrationSubjectRank` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationSubjectRank` entities.
     */
    getAll(): GetAllRequestBuilder<CalibrationSubjectRank>;
}
//# sourceMappingURL=CalibrationSubjectRankRequestBuilder.d.ts.map