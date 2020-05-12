/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqScreeningQuestionChoice } from './JobReqScreeningQuestionChoice';

/**
 * Request builder class for operations supported on the [[JobReqScreeningQuestionChoice]] entity.
 */
export class JobReqScreeningQuestionChoiceRequestBuilder extends RequestBuilder<JobReqScreeningQuestionChoice> {
  /**
   * Returns a request builder for retrieving one `JobReqScreeningQuestionChoice` entity based on its keys.
   * @param locale Key property. See [[JobReqScreeningQuestionChoice.locale]].
   * @param optionId Key property. See [[JobReqScreeningQuestionChoice.optionId]].
   * @param optionValue Key property. See [[JobReqScreeningQuestionChoice.optionValue]].
   * @returns A request builder for creating requests to retrieve one `JobReqScreeningQuestionChoice` entity based on its keys.
   */
  getByKey(locale: string, optionId: BigNumber, optionValue: number): GetByKeyRequestBuilder<JobReqScreeningQuestionChoice> {
    return new GetByKeyRequestBuilder(JobReqScreeningQuestionChoice, {
      locale: locale,
      optionId: optionId,
      optionValue: optionValue
    });
  }

  /**
   * Returns a request builder for querying all `JobReqScreeningQuestionChoice` entities.
   * @returns A request builder for creating requests to retrieve all `JobReqScreeningQuestionChoice` entities.
   */
  getAll(): GetAllRequestBuilder<JobReqScreeningQuestionChoice> {
    return new GetAllRequestBuilder(JobReqScreeningQuestionChoice);
  }
}
