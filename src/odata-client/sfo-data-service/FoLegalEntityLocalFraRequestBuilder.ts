/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalFra } from './FoLegalEntityLocalFra';

/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalFra]] entity.
 */
export class FoLegalEntityLocalFraRequestBuilder extends RequestBuilder<FoLegalEntityLocalFra> {
  /**
   * Returns a request builder for retrieving one `FoLegalEntityLocalFra` entity based on its keys.
   * @param country Key property. See [[FoLegalEntityLocalFra.country]].
   * @param externalCode Key property. See [[FoLegalEntityLocalFra.externalCode]].
   * @param startDate Key property. See [[FoLegalEntityLocalFra.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalFra` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalFra> {
    return new GetByKeyRequestBuilder(FoLegalEntityLocalFra, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLegalEntityLocalFra` entities.
   * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalFra` entities.
   */
  getAll(): GetAllRequestBuilder<FoLegalEntityLocalFra> {
    return new GetAllRequestBuilder(FoLegalEntityLocalFra);
  }
}
