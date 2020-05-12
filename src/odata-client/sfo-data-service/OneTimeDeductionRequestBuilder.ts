/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OneTimeDeduction } from './OneTimeDeduction';

/**
 * Request builder class for operations supported on the [[OneTimeDeduction]] entity.
 */
export class OneTimeDeductionRequestBuilder extends RequestBuilder<OneTimeDeduction> {
  /**
   * Returns a request builder for retrieving one `OneTimeDeduction` entity based on its keys.
   * @param externalCode Key property. See [[OneTimeDeduction.externalCode]].
   * @returns A request builder for creating requests to retrieve one `OneTimeDeduction` entity based on its keys.
   */
  getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<OneTimeDeduction> {
    return new GetByKeyRequestBuilder(OneTimeDeduction, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `OneTimeDeduction` entities.
   * @returns A request builder for creating requests to retrieve all `OneTimeDeduction` entities.
   */
  getAll(): GetAllRequestBuilder<OneTimeDeduction> {
    return new GetAllRequestBuilder(OneTimeDeduction);
  }
}
