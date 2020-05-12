/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoEventReason } from './FoEventReason';

/**
 * Request builder class for operations supported on the [[FoEventReason]] entity.
 */
export class FoEventReasonRequestBuilder extends RequestBuilder<FoEventReason> {
  /**
   * Returns a request builder for retrieving one `FoEventReason` entity based on its keys.
   * @param externalCode Key property. See [[FoEventReason.externalCode]].
   * @param startDate Key property. See [[FoEventReason.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoEventReason` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoEventReason> {
    return new GetByKeyRequestBuilder(FoEventReason, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoEventReason` entities.
   * @returns A request builder for creating requests to retrieve all `FoEventReason` entities.
   */
  getAll(): GetAllRequestBuilder<FoEventReason> {
    return new GetAllRequestBuilder(FoEventReason);
  }
}
