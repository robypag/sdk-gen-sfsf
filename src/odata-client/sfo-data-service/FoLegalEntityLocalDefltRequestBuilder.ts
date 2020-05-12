/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalDeflt } from './FoLegalEntityLocalDeflt';

/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalDeflt]] entity.
 */
export class FoLegalEntityLocalDefltRequestBuilder extends RequestBuilder<FoLegalEntityLocalDeflt> {
  /**
   * Returns a request builder for retrieving one `FoLegalEntityLocalDeflt` entity based on its keys.
   * @param country Key property. See [[FoLegalEntityLocalDeflt.country]].
   * @param externalCode Key property. See [[FoLegalEntityLocalDeflt.externalCode]].
   * @param startDate Key property. See [[FoLegalEntityLocalDeflt.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalDeflt` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalDeflt> {
    return new GetByKeyRequestBuilder(FoLegalEntityLocalDeflt, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLegalEntityLocalDeflt` entities.
   * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalDeflt` entities.
   */
  getAll(): GetAllRequestBuilder<FoLegalEntityLocalDeflt> {
    return new GetAllRequestBuilder(FoLegalEntityLocalDeflt);
  }
}
