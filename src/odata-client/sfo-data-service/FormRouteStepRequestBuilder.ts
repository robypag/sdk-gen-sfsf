/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRouteStep } from './FormRouteStep';

/**
 * Request builder class for operations supported on the [[FormRouteStep]] entity.
 */
export class FormRouteStepRequestBuilder extends RequestBuilder<FormRouteStep> {
  /**
   * Returns a request builder for retrieving one `FormRouteStep` entity based on its keys.
   * @param formDataId Key property. See [[FormRouteStep.formDataId]].
   * @param stepOrder Key property. See [[FormRouteStep.stepOrder]].
   * @returns A request builder for creating requests to retrieve one `FormRouteStep` entity based on its keys.
   */
  getByKey(formDataId: BigNumber, stepOrder: number): GetByKeyRequestBuilder<FormRouteStep> {
    return new GetByKeyRequestBuilder(FormRouteStep, {
      formDataId: formDataId,
      stepOrder: stepOrder
    });
  }

  /**
   * Returns a request builder for querying all `FormRouteStep` entities.
   * @returns A request builder for creating requests to retrieve all `FormRouteStep` entities.
   */
  getAll(): GetAllRequestBuilder<FormRouteStep> {
    return new GetAllRequestBuilder(FormRouteStep);
  }
}
