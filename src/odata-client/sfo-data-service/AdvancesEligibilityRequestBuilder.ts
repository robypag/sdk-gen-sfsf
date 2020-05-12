/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AdvancesEligibility } from './AdvancesEligibility';

/**
 * Request builder class for operations supported on the [[AdvancesEligibility]] entity.
 */
export class AdvancesEligibilityRequestBuilder extends RequestBuilder<AdvancesEligibility> {
  /**
   * Returns a request builder for retrieving one `AdvancesEligibility` entity based on its keys.
   * @param effectiveStartDate Key property. See [[AdvancesEligibility.effectiveStartDate]].
   * @param externalCode Key property. See [[AdvancesEligibility.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AdvancesEligibility` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<AdvancesEligibility> {
    return new GetByKeyRequestBuilder(AdvancesEligibility, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `AdvancesEligibility` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancesEligibility` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancesEligibility> {
    return new GetAllRequestBuilder(AdvancesEligibility);
  }
}
