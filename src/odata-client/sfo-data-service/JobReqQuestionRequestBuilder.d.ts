import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqQuestion } from './JobReqQuestion';
/**
 * Request builder class for operations supported on the [[JobReqQuestion]] entity.
 */
export declare class JobReqQuestionRequestBuilder extends RequestBuilder<JobReqQuestion> {
    /**
     * Returns a request builder for retrieving one `JobReqQuestion` entity based on its keys.
     * @param questionId Key property. See [[JobReqQuestion.questionId]].
     * @returns A request builder for creating requests to retrieve one `JobReqQuestion` entity based on its keys.
     */
    getByKey(questionId: BigNumber): GetByKeyRequestBuilder<JobReqQuestion>;
    /**
     * Returns a request builder for querying all `JobReqQuestion` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqQuestion` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqQuestion>;
}
//# sourceMappingURL=JobReqQuestionRequestBuilder.d.ts.map