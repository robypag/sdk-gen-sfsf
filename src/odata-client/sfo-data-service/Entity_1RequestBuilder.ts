/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Entity_1 } from './Entity_1';

/**
 * Request builder class for operations supported on the [[Entity_1]] entity.
 */
export class Entity_1RequestBuilder extends RequestBuilder<Entity_1> {
  /**
   * Returns a request builder for retrieving one `Entity_1` entity based on its keys.
   * @param path Key property. See [[Entity_1.path]].
   * @returns A request builder for creating requests to retrieve one `Entity_1` entity based on its keys.
   */
  getByKey(path: string): GetByKeyRequestBuilder<Entity_1> {
    return new GetByKeyRequestBuilder(Entity_1, { path: path });
  }

  /**
   * Returns a request builder for querying all `Entity_1` entities.
   * @returns A request builder for creating requests to retrieve all `Entity_1` entities.
   */
  getAll(): GetAllRequestBuilder<Entity_1> {
    return new GetAllRequestBuilder(Entity_1);
  }
}
