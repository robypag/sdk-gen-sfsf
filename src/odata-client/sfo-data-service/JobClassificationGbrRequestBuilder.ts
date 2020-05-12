/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationGbr } from './JobClassificationGbr';

/**
 * Request builder class for operations supported on the [[JobClassificationGbr]] entity.
 */
export class JobClassificationGbrRequestBuilder extends RequestBuilder<JobClassificationGbr> {
  /**
   * Returns a request builder for retrieving one `JobClassificationGbr` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationGbr.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationGbr.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationGbr.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationGbr.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationGbr` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationGbr> {
    return new GetByKeyRequestBuilder(JobClassificationGbr, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationGbr` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationGbr` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationGbr> {
    return new GetAllRequestBuilder(JobClassificationGbr);
  }

  /**
   * Returns a request builder for creating a `JobClassificationGbr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationGbr`.
   */
  create(entity: JobClassificationGbr): CreateRequestBuilder<JobClassificationGbr> {
    return new CreateRequestBuilder(JobClassificationGbr, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationGbr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationGbr`.
   */
  update(entity: JobClassificationGbr): UpdateRequestBuilder<JobClassificationGbr> {
    return new UpdateRequestBuilder(JobClassificationGbr, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationGbr`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationGbr.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationGbr.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationGbr.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationGbr.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationGbr`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationGbr>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationGbr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationGbr` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationGbr): DeleteRequestBuilder<JobClassificationGbr>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationGbr> {
    return new DeleteRequestBuilder(JobClassificationGbr, jobClassificationCountryCountryOrEntity instanceof JobClassificationGbr ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
