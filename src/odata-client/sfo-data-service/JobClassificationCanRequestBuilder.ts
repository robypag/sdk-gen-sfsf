/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationCan } from './JobClassificationCan';

/**
 * Request builder class for operations supported on the [[JobClassificationCan]] entity.
 */
export class JobClassificationCanRequestBuilder extends RequestBuilder<JobClassificationCan> {
  /**
   * Returns a request builder for retrieving one `JobClassificationCan` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationCan.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCan.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationCan.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationCan.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationCan` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationCan> {
    return new GetByKeyRequestBuilder(JobClassificationCan, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationCan` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationCan` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationCan> {
    return new GetAllRequestBuilder(JobClassificationCan);
  }

  /**
   * Returns a request builder for creating a `JobClassificationCan` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationCan`.
   */
  create(entity: JobClassificationCan): CreateRequestBuilder<JobClassificationCan> {
    return new CreateRequestBuilder(JobClassificationCan, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationCan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationCan`.
   */
  update(entity: JobClassificationCan): UpdateRequestBuilder<JobClassificationCan> {
    return new UpdateRequestBuilder(JobClassificationCan, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationCan`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationCan.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCan.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationCan.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationCan.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationCan`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationCan>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationCan`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationCan` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationCan): DeleteRequestBuilder<JobClassificationCan>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationCan> {
    return new DeleteRequestBuilder(JobClassificationCan, jobClassificationCountryCountryOrEntity instanceof JobClassificationCan ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
