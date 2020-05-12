import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionAssessment } from './JobRequisitionAssessment';
/**
 * Request builder class for operations supported on the [[JobRequisitionAssessment]] entity.
 */
export declare class JobRequisitionAssessmentRequestBuilder extends RequestBuilder<JobRequisitionAssessment> {
    /**
     * Returns a request builder for retrieving one `JobRequisitionAssessment` entity based on its keys.
     * @param assessmentAssociationId Key property. See [[JobRequisitionAssessment.assessmentAssociationId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionAssessment` entity based on its keys.
     */
    getByKey(assessmentAssociationId: BigNumber): GetByKeyRequestBuilder<JobRequisitionAssessment>;
    /**
     * Returns a request builder for querying all `JobRequisitionAssessment` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionAssessment` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisitionAssessment>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisitionAssessment`.
     * @param assessmentAssociationId Key property. See [[JobRequisitionAssessment.assessmentAssociationId]].
     * @returns A request builder for creating requests that delete an entity of type `JobRequisitionAssessment`.
     */
    delete(assessmentAssociationId: BigNumber): DeleteRequestBuilder<JobRequisitionAssessment>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisitionAssessment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobRequisitionAssessment` by taking the entity as a parameter.
     */
    delete(entity: JobRequisitionAssessment): DeleteRequestBuilder<JobRequisitionAssessment>;
}
//# sourceMappingURL=JobRequisitionAssessmentRequestBuilder.d.ts.map