/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalPermission_2005 } from './DevGoalPermission_2005';

/**
 * Request builder class for operations supported on the [[DevGoalPermission_2005]] entity.
 */
export class DevGoalPermission_2005RequestBuilder extends RequestBuilder<DevGoalPermission_2005> {
  /**
   * Returns a request builder for retrieving one `DevGoalPermission_2005` entity based on its keys.
   * @param id Key property. See [[DevGoalPermission_2005.id]].
   * @returns A request builder for creating requests to retrieve one `DevGoalPermission_2005` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalPermission_2005> {
    return new GetByKeyRequestBuilder(DevGoalPermission_2005, { id: id });
  }

  /**
   * Returns a request builder for querying all `DevGoalPermission_2005` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalPermission_2005` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalPermission_2005> {
    return new GetAllRequestBuilder(DevGoalPermission_2005);
  }
}
