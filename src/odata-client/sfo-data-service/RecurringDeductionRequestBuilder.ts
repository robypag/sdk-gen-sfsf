/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { RecurringDeduction } from './RecurringDeduction';

/**
 * Request builder class for operations supported on the [[RecurringDeduction]] entity.
 */
export class RecurringDeductionRequestBuilder extends RequestBuilder<RecurringDeduction> {
  /**
   * Returns a request builder for retrieving one `RecurringDeduction` entity based on its keys.
   * @param effectiveStartDate Key property. See [[RecurringDeduction.effectiveStartDate]].
   * @param userSysId Key property. See [[RecurringDeduction.userSysId]].
   * @returns A request builder for creating requests to retrieve one `RecurringDeduction` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, userSysId: string): GetByKeyRequestBuilder<RecurringDeduction> {
    return new GetByKeyRequestBuilder(RecurringDeduction, {
      effectiveStartDate: effectiveStartDate,
      userSysId: userSysId
    });
  }

  /**
   * Returns a request builder for querying all `RecurringDeduction` entities.
   * @returns A request builder for creating requests to retrieve all `RecurringDeduction` entities.
   */
  getAll(): GetAllRequestBuilder<RecurringDeduction> {
    return new GetAllRequestBuilder(RecurringDeduction);
  }
}
