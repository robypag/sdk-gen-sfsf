import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationAus } from './JobClassificationAus';
/**
 * Request builder class for operations supported on the [[JobClassificationAus]] entity.
 */
export declare class JobClassificationAusRequestBuilder extends RequestBuilder<JobClassificationAus> {
    /**
     * Returns a request builder for retrieving one `JobClassificationAus` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationAus.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationAus.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationAus.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationAus` entity based on its keys.
     */
    getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationAus>;
    /**
     * Returns a request builder for querying all `JobClassificationAus` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationAus` entities.
     */
    getAll(): GetAllRequestBuilder<JobClassificationAus>;
    /**
     * Returns a request builder for creating a `JobClassificationAus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationAus`.
     */
    create(entity: JobClassificationAus): CreateRequestBuilder<JobClassificationAus>;
    /**
     * Returns a request builder for updating an entity of type `JobClassificationAus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationAus`.
     */
    update(entity: JobClassificationAus): UpdateRequestBuilder<JobClassificationAus>;
    /**
     * Returns a request builder for deleting an entity of type `JobClassificationAus`.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationAus.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationAus.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationAus.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationAus.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobClassificationAus`.
     */
    delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationAus>;
    /**
     * Returns a request builder for deleting an entity of type `JobClassificationAus`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobClassificationAus` by taking the entity as a parameter.
     */
    delete(entity: JobClassificationAus): DeleteRequestBuilder<JobClassificationAus>;
}
//# sourceMappingURL=JobClassificationAusRequestBuilder.d.ts.map