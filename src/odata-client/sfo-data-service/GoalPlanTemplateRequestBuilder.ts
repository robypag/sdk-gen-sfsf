/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalPlanTemplate } from './GoalPlanTemplate';

/**
 * Request builder class for operations supported on the [[GoalPlanTemplate]] entity.
 */
export class GoalPlanTemplateRequestBuilder extends RequestBuilder<GoalPlanTemplate> {
  /**
   * Returns a request builder for retrieving one `GoalPlanTemplate` entity based on its keys.
   * @param id Key property. See [[GoalPlanTemplate.id]].
   * @returns A request builder for creating requests to retrieve one `GoalPlanTemplate` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<GoalPlanTemplate> {
    return new GetByKeyRequestBuilder(GoalPlanTemplate, { id: id });
  }

  /**
   * Returns a request builder for querying all `GoalPlanTemplate` entities.
   * @returns A request builder for creating requests to retrieve all `GoalPlanTemplate` entities.
   */
  getAll(): GetAllRequestBuilder<GoalPlanTemplate> {
    return new GetAllRequestBuilder(GoalPlanTemplate);
  }
}
