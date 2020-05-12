/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalEsp } from './FoLegalEntityLocalEsp';

/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalEsp]] entity.
 */
export class FoLegalEntityLocalEspRequestBuilder extends RequestBuilder<FoLegalEntityLocalEsp> {
  /**
   * Returns a request builder for retrieving one `FoLegalEntityLocalEsp` entity based on its keys.
   * @param country Key property. See [[FoLegalEntityLocalEsp.country]].
   * @param externalCode Key property. See [[FoLegalEntityLocalEsp.externalCode]].
   * @param startDate Key property. See [[FoLegalEntityLocalEsp.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalEsp` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalEsp> {
    return new GetByKeyRequestBuilder(FoLegalEntityLocalEsp, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLegalEntityLocalEsp` entities.
   * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalEsp` entities.
   */
  getAll(): GetAllRequestBuilder<FoLegalEntityLocalEsp> {
    return new GetAllRequestBuilder(FoLegalEntityLocalEsp);
  }
}
