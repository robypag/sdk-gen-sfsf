/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationZaf } from './JobClassificationZaf';

/**
 * Request builder class for operations supported on the [[JobClassificationZaf]] entity.
 */
export class JobClassificationZafRequestBuilder extends RequestBuilder<JobClassificationZaf> {
  /**
   * Returns a request builder for retrieving one `JobClassificationZaf` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationZaf.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationZaf.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationZaf.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationZaf.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationZaf` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationZaf> {
    return new GetByKeyRequestBuilder(JobClassificationZaf, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationZaf` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationZaf` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationZaf> {
    return new GetAllRequestBuilder(JobClassificationZaf);
  }

  /**
   * Returns a request builder for creating a `JobClassificationZaf` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationZaf`.
   */
  create(entity: JobClassificationZaf): CreateRequestBuilder<JobClassificationZaf> {
    return new CreateRequestBuilder(JobClassificationZaf, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationZaf`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationZaf`.
   */
  update(entity: JobClassificationZaf): UpdateRequestBuilder<JobClassificationZaf> {
    return new UpdateRequestBuilder(JobClassificationZaf, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationZaf`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationZaf.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationZaf.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationZaf.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationZaf.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationZaf`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationZaf>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationZaf`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationZaf` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationZaf): DeleteRequestBuilder<JobClassificationZaf>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationZaf> {
    return new DeleteRequestBuilder(JobClassificationZaf, jobClassificationCountryCountryOrEntity instanceof JobClassificationZaf ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
