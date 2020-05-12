/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationUsa } from './JobClassificationUsa';

/**
 * Request builder class for operations supported on the [[JobClassificationUsa]] entity.
 */
export class JobClassificationUsaRequestBuilder extends RequestBuilder<JobClassificationUsa> {
  /**
   * Returns a request builder for retrieving one `JobClassificationUsa` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationUsa.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationUsa.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationUsa.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationUsa.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationUsa` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationUsa> {
    return new GetByKeyRequestBuilder(JobClassificationUsa, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationUsa` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationUsa` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationUsa> {
    return new GetAllRequestBuilder(JobClassificationUsa);
  }

  /**
   * Returns a request builder for creating a `JobClassificationUsa` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationUsa`.
   */
  create(entity: JobClassificationUsa): CreateRequestBuilder<JobClassificationUsa> {
    return new CreateRequestBuilder(JobClassificationUsa, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationUsa`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationUsa`.
   */
  update(entity: JobClassificationUsa): UpdateRequestBuilder<JobClassificationUsa> {
    return new UpdateRequestBuilder(JobClassificationUsa, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationUsa`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationUsa.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationUsa.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationUsa.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationUsa.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationUsa`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationUsa>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationUsa`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationUsa` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationUsa): DeleteRequestBuilder<JobClassificationUsa>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationUsa> {
    return new DeleteRequestBuilder(JobClassificationUsa, jobClassificationCountryCountryOrEntity instanceof JobClassificationUsa ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
