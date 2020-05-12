/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobClassificationFra } from './JobClassificationFra';

/**
 * Request builder class for operations supported on the [[JobClassificationFra]] entity.
 */
export class JobClassificationFraRequestBuilder extends RequestBuilder<JobClassificationFra> {
  /**
   * Returns a request builder for retrieving one `JobClassificationFra` entity based on its keys.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationFra.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationFra.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationFra.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationFra.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobClassificationFra` entity based on its keys.
   */
  getByKey(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<JobClassificationFra> {
    return new GetByKeyRequestBuilder(JobClassificationFra, {
      JobClassificationCountry_country: jobClassificationCountryCountry,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
      JobClassification_externalCode: jobClassificationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobClassificationFra` entities.
   * @returns A request builder for creating requests to retrieve all `JobClassificationFra` entities.
   */
  getAll(): GetAllRequestBuilder<JobClassificationFra> {
    return new GetAllRequestBuilder(JobClassificationFra);
  }

  /**
   * Returns a request builder for creating a `JobClassificationFra` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobClassificationFra`.
   */
  create(entity: JobClassificationFra): CreateRequestBuilder<JobClassificationFra> {
    return new CreateRequestBuilder(JobClassificationFra, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobClassificationFra`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobClassificationFra`.
   */
  update(entity: JobClassificationFra): UpdateRequestBuilder<JobClassificationFra> {
    return new UpdateRequestBuilder(JobClassificationFra, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobClassificationFra`.
   * @param jobClassificationCountryCountry Key property. See [[JobClassificationFra.jobClassificationCountryCountry]].
   * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationFra.jobClassificationEffectiveStartDate]].
   * @param jobClassificationExternalCode Key property. See [[JobClassificationFra.jobClassificationExternalCode]].
   * @param externalCode Key property. See [[JobClassificationFra.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationFra`.
   */
  delete(jobClassificationCountryCountry: string, jobClassificationEffectiveStartDate: Moment, jobClassificationExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<JobClassificationFra>;
  /**
   * Returns a request builder for deleting an entity of type `JobClassificationFra`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobClassificationFra` by taking the entity as a parameter.
   */
  delete(entity: JobClassificationFra): DeleteRequestBuilder<JobClassificationFra>;
  delete(jobClassificationCountryCountryOrEntity: any, jobClassificationEffectiveStartDate?: Moment, jobClassificationExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<JobClassificationFra> {
    return new DeleteRequestBuilder(JobClassificationFra, jobClassificationCountryCountryOrEntity instanceof JobClassificationFra ? jobClassificationCountryCountryOrEntity : {
      JobClassificationCountry_country: jobClassificationCountryCountryOrEntity!,
      JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate!,
      JobClassification_externalCode: jobClassificationExternalCode!,
      externalCode: externalCode!
    });
  }
}
