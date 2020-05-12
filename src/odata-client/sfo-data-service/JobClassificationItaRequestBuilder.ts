/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationIta } from './JobClassificationIta';

/**
 * Request builder class for operations supported on the [[JobClassificationIta]] entity.
 */
export class JobClassificationItaRequestBuilder extends RequestBuilder<JobClassificationIta> {
  /**
   * Returns a request builder for retrieving one `JobClassificationIta` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationIta.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationIta.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationIta.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationIta.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationIta` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationIta> {
    return new GetByKeyRequestBuilder(JobClassificationIta, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationIta` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationIta` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationIta> {
    return new GetAllRequestBuilder(JobClassificationIta);
  }

  /**
   * Returns a request builder for creating a `JobClassificationIta` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationIta`.
   */
  create(entity: JobClassificationIta): CreateRequestBuilder<JobClassificationIta> {
    return new CreateRequestBuilder(JobClassificationIta, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationIta`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationIta`.
   */
  update(entity: JobClassificationIta): UpdateRequestBuilder<JobClassificationIta> {
    return new UpdateRequestBuilder(JobClassificationIta, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationIta`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationIta.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationIta.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationIta.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationIta.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationIta`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationIta>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationIta`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationIta` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationIta): DeleteRequestBuilder<JobClassificationIta>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationIta> {
    return new DeleteRequestBuilder(JobClassificationIta, jobClassificationCountryCountryOrEntity instanceof JobClassificationIta ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
