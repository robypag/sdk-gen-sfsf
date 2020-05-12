/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AdvancesAccumulation } from './AdvancesAccumulation';

/**
 * Request builder class for operations supported on the [[AdvancesAccumulation]] entity.
 */
export class AdvancesAccumulationRequestBuilder extends RequestBuilder<AdvancesAccumulation> {
  /**
   * Returns a request builder for retrieving one `AdvancesAccumulation` entity based on its keys.
   * @param externalCode Key property. See [[AdvancesAccumulation.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AdvancesAccumulation` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<AdvancesAccumulation> {
    return new GetByKeyRequestBuilder(AdvancesAccumulation, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AdvancesAccumulation` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancesAccumulation` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancesAccumulation> {
    return new GetAllRequestBuilder(AdvancesAccumulation);
  }
}
