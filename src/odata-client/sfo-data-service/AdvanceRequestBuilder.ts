/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Advance } from './Advance';

/**
 * Request builder class for operations supported on the [[Advance]] entity.
 */
export class AdvanceRequestBuilder extends RequestBuilder<Advance> {
  /**
   * Returns a request builder for retrieving one `Advance` entity based on its keys.
   * @param nonRecurringPaymentExternalCode Key property. See [[Advance.nonRecurringPaymentExternalCode]].
   * @param externalCode Key property. See [[Advance.externalCode]].
   * @returns A request builder for creating requests to retrieve one `Advance` entity based on its keys.
   */
  getByKey(nonRecurringPaymentExternalCode: string, externalCode: string): GetByKeyRequestBuilder<Advance> {
    return new GetByKeyRequestBuilder(Advance, {
      NonRecurringPayment_externalCode: nonRecurringPaymentExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `Advance` entities.
   * @returns A request builder for creating requests to retrieve all `Advance` entities.
   */
  getAll(): GetAllRequestBuilder<Advance> {
    return new GetAllRequestBuilder(Advance);
  }
}
