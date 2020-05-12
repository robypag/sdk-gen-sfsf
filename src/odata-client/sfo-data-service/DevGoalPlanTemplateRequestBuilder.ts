/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalPlanTemplate } from './DevGoalPlanTemplate';

/**
 * Request builder class for operations supported on the [[DevGoalPlanTemplate]] entity.
 */
export class DevGoalPlanTemplateRequestBuilder extends RequestBuilder<DevGoalPlanTemplate> {
  /**
   * Returns a request builder for retrieving one `DevGoalPlanTemplate` entity based on its keys.
   * @param id Key property. See [[DevGoalPlanTemplate.id]].
   * @returns A request builder for creating requests to retrieve one `DevGoalPlanTemplate` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalPlanTemplate> {
    return new GetByKeyRequestBuilder(DevGoalPlanTemplate, { id: id });
  }

  /**
   * Returns a request builder for querying all `DevGoalPlanTemplate` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalPlanTemplate` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalPlanTemplate> {
    return new GetAllRequestBuilder(DevGoalPlanTemplate);
  }
}
