/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationBra } from './JobClassificationBra';

/**
 * Request builder class for operations supported on the [[JobClassificationBra]] entity.
 */
export class JobClassificationBraRequestBuilder extends RequestBuilder<JobClassificationBra> {
  /**
   * Returns a request builder for retrieving one `JobClassificationBra` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationBra.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationBra.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationBra.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationBra.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationBra` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationBra> {
    return new GetByKeyRequestBuilder(JobClassificationBra, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationBra` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationBra` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationBra> {
    return new GetAllRequestBuilder(JobClassificationBra);
  }

  /**
   * Returns a request builder for creating a `JobClassificationBra` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationBra`.
   */
  create(entity: JobClassificationBra): CreateRequestBuilder<JobClassificationBra> {
    return new CreateRequestBuilder(JobClassificationBra, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationBra`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationBra`.
   */
  update(entity: JobClassificationBra): UpdateRequestBuilder<JobClassificationBra> {
    return new UpdateRequestBuilder(JobClassificationBra, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationBra`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationBra.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationBra.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationBra.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationBra.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationBra`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationBra>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationBra`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationBra` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationBra): DeleteRequestBuilder<JobClassificationBra>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationBra> {
    return new DeleteRequestBuilder(JobClassificationBra, jobClassificationCountryCountryOrEntity instanceof JobClassificationBra ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
