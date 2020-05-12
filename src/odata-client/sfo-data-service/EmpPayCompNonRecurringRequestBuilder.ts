/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpPayCompNonRecurring } from './EmpPayCompNonRecurring';

/**
 * Request builder class for operations supported on the [[EmpPayCompNonRecurring]] entity.
 */
export class EmpPayCompNonRecurringRequestBuilder extends RequestBuilder<EmpPayCompNonRecurring> {
  /**
   * Returns a request builder for retrieving one `EmpPayCompNonRecurring` entity based on its keys.
   * @param payComponentCode Key property. See [[EmpPayCompNonRecurring.payComponentCode]].
   * @param payDate Key property. See [[EmpPayCompNonRecurring.payDate]].
   * @param userId Key property. See [[EmpPayCompNonRecurring.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpPayCompNonRecurring` entity based on its keys.
   */
  getByKey(payComponentCode: string, payDate: Moment, userId: string): GetByKeyRequestBuilder<EmpPayCompNonRecurring> {
    return new GetByKeyRequestBuilder(EmpPayCompNonRecurring, {
      payComponentCode: payComponentCode,
      payDate: payDate,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpPayCompNonRecurring` entities.
   * @returns A request builder for creating requests to retrieve all `EmpPayCompNonRecurring` entities.
   */
  getAll(): GetAllRequestBuilder<EmpPayCompNonRecurring> {
    return new GetAllRequestBuilder(EmpPayCompNonRecurring);
  }
}
