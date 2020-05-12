/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpPayCompRecurring } from './EmpPayCompRecurring';

/**
 * Request builder class for operations supported on the [[EmpPayCompRecurring]] entity.
 */
export class EmpPayCompRecurringRequestBuilder extends RequestBuilder<EmpPayCompRecurring> {
  /**
   * Returns a request builder for retrieving one `EmpPayCompRecurring` entity based on its keys.
   * @param payComponent Key property. See [[EmpPayCompRecurring.payComponent]].
   * @param seqNumber Key property. See [[EmpPayCompRecurring.seqNumber]].
   * @param startDate Key property. See [[EmpPayCompRecurring.startDate]].
   * @param userId Key property. See [[EmpPayCompRecurring.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpPayCompRecurring` entity based on its keys.
   */
  getByKey(payComponent: string, seqNumber: BigNumber, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpPayCompRecurring> {
    return new GetByKeyRequestBuilder(EmpPayCompRecurring, {
      payComponent: payComponent,
      seqNumber: seqNumber,
      startDate: startDate,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpPayCompRecurring` entities.
   * @returns A request builder for creating requests to retrieve all `EmpPayCompRecurring` entities.
   */
  getAll(): GetAllRequestBuilder<EmpPayCompRecurring> {
    return new GetAllRequestBuilder(EmpPayCompRecurring);
  }
}
