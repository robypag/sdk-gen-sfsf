/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalEnum } from './DevGoalEnum';

/**
 * Request builder class for operations supported on the [[DevGoalEnum]] entity.
 */
export class DevGoalEnumRequestBuilder extends RequestBuilder<DevGoalEnum> {
  /**
   * Returns a request builder for retrieving one `DevGoalEnum` entity based on its keys.
   * @param fieldId Key property. See [[DevGoalEnum.fieldId]].
   * @param planId Key property. See [[DevGoalEnum.planId]].
   * @param value Key property. See [[DevGoalEnum.value]].
   * @returns A request builder for creating requests to retrieve one `DevGoalEnum` entity based on its keys.
   */
  getByKey(fieldId: string, planId: BigNumber, value: string): GetByKeyRequestBuilder<DevGoalEnum> {
    return new GetByKeyRequestBuilder(DevGoalEnum, {
      fieldId: fieldId,
      planId: planId,
      value: value
    });
  }

  /**
   * Returns a request builder for querying all `DevGoalEnum` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalEnum` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalEnum> {
    return new GetAllRequestBuilder(DevGoalEnum);
  }
}
