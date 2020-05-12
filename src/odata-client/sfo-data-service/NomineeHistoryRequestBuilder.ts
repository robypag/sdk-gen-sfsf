/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NomineeHistory } from './NomineeHistory';

/**
 * Request builder class for operations supported on the [[NomineeHistory]] entity.
 */
export class NomineeHistoryRequestBuilder extends RequestBuilder<NomineeHistory> {
  /**
   * Returns a request builder for retrieving one `NomineeHistory` entity based on its keys.
   * @param id Key property. See [[NomineeHistory.id]].
   * @returns A request builder for creating requests to retrieve one `NomineeHistory` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<NomineeHistory> {
    return new GetByKeyRequestBuilder(NomineeHistory, { id: id });
  }

  /**
   * Returns a request builder for querying all `NomineeHistory` entities.
   * @returns A request builder for creating requests to retrieve all `NomineeHistory` entities.
   */
  getAll(): GetAllRequestBuilder<NomineeHistory> {
    return new GetAllRequestBuilder(NomineeHistory);
  }
}
