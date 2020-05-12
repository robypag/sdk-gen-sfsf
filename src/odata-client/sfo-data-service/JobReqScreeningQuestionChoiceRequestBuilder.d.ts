import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqScreeningQuestionChoice } from './JobReqScreeningQuestionChoice';
/**
 * Request builder class for operations supported on the [[JobReqScreeningQuestionChoice]] entity.
 */
export declare class JobReqScreeningQuestionChoiceRequestBuilder extends RequestBuilder<JobReqScreeningQuestionChoice> {
    /**
     * Returns a request builder for retrieving one `JobReqScreeningQuestionChoice` entity based on its keys.
     * @param locale Key property. See [[JobReqScreeningQuestionChoice.locale]].
     * @param optionId Key property. See [[JobReqScreeningQuestionChoice.optionId]].
     * @param optionValue Key property. See [[JobReqScreeningQuestionChoice.optionValue]].
     * @returns A request builder for creating requests to retrieve one `JobReqScreeningQuestionChoice` entity based on its keys.
     */
    getByKey(locale: string, optionId: BigNumber, optionValue: number): GetByKeyRequestBuilder<JobReqScreeningQuestionChoice>;
    /**
     * Returns a request builder for querying all `JobReqScreeningQuestionChoice` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqScreeningQuestionChoice` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqScreeningQuestionChoice>;
}
//# sourceMappingURL=JobReqScreeningQuestionChoiceRequestBuilder.d.ts.map