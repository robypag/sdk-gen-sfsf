/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRouteSubStep } from './FormRouteSubStep';

/**
 * Request builder class for operations supported on the [[FormRouteSubStep]] entity.
 */
export class FormRouteSubStepRequestBuilder extends RequestBuilder<FormRouteSubStep> {
  /**
   * Returns a request builder for retrieving one `FormRouteSubStep` entity based on its keys.
   * @param formDataId Key property. See [[FormRouteSubStep.formDataId]].
   * @param stepOrder Key property. See [[FormRouteSubStep.stepOrder]].
   * @param subStepOrder Key property. See [[FormRouteSubStep.subStepOrder]].
   * @returns A request builder for creating requests to retrieve one `FormRouteSubStep` entity based on its keys.
   */
  getByKey(formDataId: BigNumber, stepOrder: number, subStepOrder: number): GetByKeyRequestBuilder<FormRouteSubStep> {
    return new GetByKeyRequestBuilder(FormRouteSubStep, {
      formDataId: formDataId,
      stepOrder: stepOrder,
      subStepOrder: subStepOrder
    });
  }

  /**
   * Returns a request builder for querying all `FormRouteSubStep` entities.
   * @returns A request builder for creating requests to retrieve all `FormRouteSubStep` entities.
   */
  getAll(): GetAllRequestBuilder<FormRouteSubStep> {
    return new GetAllRequestBuilder(FormRouteSubStep);
  }
}
