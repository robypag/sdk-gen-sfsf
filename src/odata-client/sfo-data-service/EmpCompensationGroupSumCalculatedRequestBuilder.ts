/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpCompensationGroupSumCalculated } from './EmpCompensationGroupSumCalculated';

/**
 * Request builder class for operations supported on the [[EmpCompensationGroupSumCalculated]] entity.
 */
export class EmpCompensationGroupSumCalculatedRequestBuilder extends RequestBuilder<EmpCompensationGroupSumCalculated> {
  /**
   * Returns a request builder for retrieving one `EmpCompensationGroupSumCalculated` entity based on its keys.
   * @param seqNumber Key property. See [[EmpCompensationGroupSumCalculated.seqNumber]].
   * @param startDate Key property. See [[EmpCompensationGroupSumCalculated.startDate]].
   * @param userId Key property. See [[EmpCompensationGroupSumCalculated.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpCompensationGroupSumCalculated` entity based on its keys.
   */
  getByKey(seqNumber: BigNumber, startDate: Moment, userId: string): GetByKeyRequestBuilder<EmpCompensationGroupSumCalculated> {
    return new GetByKeyRequestBuilder(EmpCompensationGroupSumCalculated, {
      seqNumber: seqNumber,
      startDate: startDate,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpCompensationGroupSumCalculated` entities.
   * @returns A request builder for creating requests to retrieve all `EmpCompensationGroupSumCalculated` entities.
   */
  getAll(): GetAllRequestBuilder<EmpCompensationGroupSumCalculated> {
    return new GetAllRequestBuilder(EmpCompensationGroupSumCalculated);
  }
}
