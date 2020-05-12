/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestUiData } from './WfRequestUiData';

/**
 * Request builder class for operations supported on the [[WfRequestUiData]] entity.
 */
export class WfRequestUiDataRequestBuilder extends RequestBuilder<WfRequestUiData> {
  /**
   * Returns a request builder for retrieving one `WfRequestUiData` entity based on its keys.
   * @param wfRequestId Key property. See [[WfRequestUiData.wfRequestId]].
   * @returns A request builder for creating requests to retrieve one `WfRequestUiData` entity based on its keys.
   */
  getByKey(wfRequestId: BigNumber): GetByKeyRequestBuilder<WfRequestUiData> {
    return new GetByKeyRequestBuilder(WfRequestUiData, { wfRequestId: wfRequestId });
  }

  /**
   * Returns a request builder for querying all `WfRequestUiData` entities.
   * @returns A request builder for creating requests to retrieve all `WfRequestUiData` entities.
   */
  getAll(): GetAllRequestBuilder<WfRequestUiData> {
    return new GetAllRequestBuilder(WfRequestUiData);
  }
}
