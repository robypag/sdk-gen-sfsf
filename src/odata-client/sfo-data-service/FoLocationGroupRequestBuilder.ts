/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLocationGroup } from './FoLocationGroup';

/**
 * Request builder class for operations supported on the [[FoLocationGroup]] entity.
 */
export class FoLocationGroupRequestBuilder extends RequestBuilder<FoLocationGroup> {
  /**
   * Returns a request builder for retrieving one `FoLocationGroup` entity based on its keys.
   * @param externalCode Key property. See [[FoLocationGroup.externalCode]].
   * @param startDate Key property. See [[FoLocationGroup.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLocationGroup` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLocationGroup> {
    return new GetByKeyRequestBuilder(FoLocationGroup, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLocationGroup` entities.
   * @returns A request builder for creating requests to retrieve all `FoLocationGroup` entities.
   */
  getAll(): GetAllRequestBuilder<FoLocationGroup> {
    return new GetAllRequestBuilder(FoLocationGroup);
  }
}
