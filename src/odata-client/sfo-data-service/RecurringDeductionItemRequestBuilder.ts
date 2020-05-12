/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { RecurringDeductionItem } from './RecurringDeductionItem';

/**
 * Request builder class for operations supported on the [[RecurringDeductionItem]] entity.
 */
export class RecurringDeductionItemRequestBuilder extends RequestBuilder<RecurringDeductionItem> {
  /**
   * Returns a request builder for retrieving one `RecurringDeductionItem` entity based on its keys.
   * @param recurringDeductionEffectiveStartDate Key property. See [[RecurringDeductionItem.recurringDeductionEffectiveStartDate]].
   * @param recurringDeductionUserSysId Key property. See [[RecurringDeductionItem.recurringDeductionUserSysId]].
   * @param payComponentType Key property. See [[RecurringDeductionItem.payComponentType]].
   * @returns A request builder for creating requests to retrieve one `RecurringDeductionItem` entity based on its keys.
   */
  getByKey(recurringDeductionEffectiveStartDate: Moment, recurringDeductionUserSysId: string, payComponentType: string): GetByKeyRequestBuilder<RecurringDeductionItem> {
    return new GetByKeyRequestBuilder(RecurringDeductionItem, {
      RecurringDeduction_effectiveStartDate: recurringDeductionEffectiveStartDate,
      RecurringDeduction_userSysId: recurringDeductionUserSysId,
      payComponentType: payComponentType
    });
  }

  /**
   * Returns a request builder for querying all `RecurringDeductionItem` entities.
   * @returns A request builder for creating requests to retrieve all `RecurringDeductionItem` entities.
   */
  getAll(): GetAllRequestBuilder<RecurringDeductionItem> {
    return new GetAllRequestBuilder(RecurringDeductionItem);
  }
}
