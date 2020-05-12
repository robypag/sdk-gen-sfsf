/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpCompensationCalculated } from './EmpCompensationCalculated';

/**
 * Request builder class for operations supported on the [[EmpCompensationCalculated]] entity.
 */
export class EmpCompensationCalculatedRequestBuilder extends RequestBuilder<EmpCompensationCalculated> {
  /**
   * Returns a request builder for retrieving one `EmpCompensationCalculated` entity based on its keys.
   * @param seqNumber Key property. See [[EmpCompensationCalculated.seqNumber]].
   * @param startDate Key property. See [[EmpCompensationCalculated.startDate]].
   * @param userId Key property. See [[EmpCompensationCalculated.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpCompensationCalculated` entity based on its keys.
   */
  getByKey(seqNumber: BigNumber, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpCompensationCalculated> {
    return new GetByKeyRequestBuilder(EmpCompensationCalculated, {
      seqNumber: seqNumber,
      startDate: startDate,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpCompensationCalculated` entities.
   * @returns A request builder for creating requests to retrieve all `EmpCompensationCalculated` entities.
   */
  getAll(): GetAllRequestBuilder<EmpCompensationCalculated> {
    return new GetAllRequestBuilder(EmpCompensationCalculated);
  }
}
