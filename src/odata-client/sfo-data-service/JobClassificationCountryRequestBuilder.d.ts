import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationCountry } from './JobClassificationCountry';
/**
 * Request builder class for operations supported on the [[JobClassificationCountry]] entity.
 */
export declare class JobClassificationCountryRequestBuilder extends RequestBuilder<JobClassificationCountry> {
    /**
     * Returns a request builder for retrieving one `JobClassificationCountry` entity based on its keys.
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCountry.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationCountry.jobClassificationExternalCode]].
     * @param country Key property. See [[JobClassificationCountry.country]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationCountry` entity based on its keys.
     */
    getByKey(jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, country: string): GetByKeyRequestBuilder<JobClassificationCountry>;
    /**
     * Returns a request builder for querying all `JobClassificationCountry` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationCountry` entities.
     */
    getAll(): GetAllRequestBuilder<JobClassificationCountry>;
    /**
     * Returns a request builder for creating a `JobClassificationCountry` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationCountry`.
     */
    create(entity: JobClassificationCountry): CreateRequestBuilder<JobClassificationCountry>;
    /**
     * Returns a request builder for updating an entity of type `JobClassificationCountry`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationCountry`.
     */
    update(entity: JobClassificationCountry): UpdateRequestBuilder<JobClassificationCountry>;
    /**
     * Returns a request builder for deleting an entity of type `JobClassificationCountry`.
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCountry.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationCountry.jobClassificationExternalCode]].
     * @param country Key property. See [[JobClassificationCountry.country]].
     * @returns A request builder for creating requests that delete an entity of type `JobClassificationCountry`.
     */
    delete(jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, country: string): DeleteRequestBuilder<JobClassificationCountry>;
    /**
     * Returns a request builder for deleting an entity of type `JobClassificationCountry`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobClassificationCountry` by taking the entity as a parameter.
     */
    delete(entity: JobClassificationCountry): DeleteRequestBuilder<JobClassificationCountry>;
}
//# sourceMappingURL=JobClassificationCountryRequestBuilder.d.ts.map