/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqScreeningQuestion } from './JobReqScreeningQuestion';

/**
 * Request builder class for operations supported on the [[JobReqScreeningQuestion]] entity.
 */
export class JobReqScreeningQuestionRequestBuilder extends RequestBuilder<JobReqScreeningQuestion> {
  /**
   * Returns a request builder for retrieving one `JobReqScreeningQuestion` entity based on its keys.
   * @param jobReqId Key property. See [[JobReqScreeningQuestion.jobReqId]].
   * @param locale Key property. See [[JobReqScreeningQuestion.locale]].
   * @param order Key property. See [[JobReqScreeningQuestion.order]].
   * @returns A request builder for creating requests to retrieve one `JobReqScreeningQuestion` entity based on its keys.
   */
  getByKey(jobReqId: BigNumber, locale: string, order: BigNumber): GetByKeyRequestBuilder<JobReqScreeningQuestion> {
    return new GetByKeyRequestBuilder(JobReqScreeningQuestion, {
      jobReqId: jobReqId,
      locale: locale,
      order: order
    });
  }

  /**
   * Returns a request builder for querying all `JobReqScreeningQuestion` entities.
   * @returns A request builder for creating requests to retrieve all `JobReqScreeningQuestion` entities.
   */
  getAll(): GetAllRequestBuilder<JobReqScreeningQuestion> {
    return new GetAllRequestBuilder(JobReqScreeningQuestion);
  }

  /**
   * Returns a request builder for creating a `JobReqScreeningQuestion` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobReqScreeningQuestion`.
   */
  create(entity: JobReqScreeningQuestion): CreateRequestBuilder<JobReqScreeningQuestion> {
    return new CreateRequestBuilder(JobReqScreeningQuestion, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobReqScreeningQuestion`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobReqScreeningQuestion`.
   */
  update(entity: JobReqScreeningQuestion): UpdateRequestBuilder<JobReqScreeningQuestion> {
    return new UpdateRequestBuilder(JobReqScreeningQuestion, entity);
  }
}
