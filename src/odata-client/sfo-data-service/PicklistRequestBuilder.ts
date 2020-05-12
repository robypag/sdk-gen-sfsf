/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Picklist } from './Picklist';

/**
 * Request builder class for operations supported on the [[Picklist]] entity.
 */
export class PicklistRequestBuilder extends RequestBuilder<Picklist> {
  /**
   * Returns a request builder for retrieving one `Picklist` entity based on its keys.
   * @param picklistId Key property. See [[Picklist.picklistId]].
   * @returns A request builder for creating requests to retrieve one `Picklist` entity based on its keys.
   */
  getByKey(picklistId: string): GetByKeyRequestBuilder<Picklist> {
    return new GetByKeyRequestBuilder(Picklist, { picklistId: picklistId });
  }

  /**
   * Returns a request builder for querying all `Picklist` entities.
   * @returns A request builder for creating requests to retrieve all `Picklist` entities.
   */
  getAll(): GetAllRequestBuilder<Picklist> {
    return new GetAllRequestBuilder(Picklist);
  }
}
