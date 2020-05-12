/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Territory } from './Territory';

/**
 * Request builder class for operations supported on the [[Territory]] entity.
 */
export class TerritoryRequestBuilder extends RequestBuilder<Territory> {
  /**
   * Returns a request builder for retrieving one `Territory` entity based on its keys.
   * @param territoryCode Key property. See [[Territory.territoryCode]].
   * @returns A request builder for creating requests to retrieve one `Territory` entity based on its keys.
   */
  getByKey(territoryCode: string): GetByKeyRequestBuilder<Territory> {
    return new GetByKeyRequestBuilder(Territory, { territoryCode: territoryCode });
  }

  /**
   * Returns a request builder for querying all `Territory` entities.
   * @returns A request builder for creating requests to retrieve all `Territory` entities.
   */
  getAll(): GetAllRequestBuilder<Territory> {
    return new GetAllRequestBuilder(Territory);
  }
}
