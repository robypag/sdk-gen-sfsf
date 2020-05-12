import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplication } from './JobApplication';
/**
 * Request builder class for operations supported on the [[JobApplication]] entity.
 */
export declare class JobApplicationRequestBuilder extends RequestBuilder<JobApplication> {
    /**
     * Returns a request builder for retrieving one `JobApplication` entity based on its keys.
     * @param applicationId Key property. See [[JobApplication.applicationId]].
     * @returns A request builder for creating requests to retrieve one `JobApplication` entity based on its keys.
     */
    getByKey(applicationId: BigNumber): GetByKeyRequestBuilder<JobApplication>;
    /**
     * Returns a request builder for querying all `JobApplication` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplication` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplication>;
    /**
     * Returns a request builder for creating a `JobApplication` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplication`.
     */
    create(entity: JobApplication): CreateRequestBuilder<JobApplication>;
    /**
     * Returns a request builder for updating an entity of type `JobApplication`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplication`.
     */
    update(entity: JobApplication): UpdateRequestBuilder<JobApplication>;
}
//# sourceMappingURL=JobApplicationRequestBuilder.d.ts.map