/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmEvent } from './EmEvent';

/**
 * Request builder class for operations supported on the [[EmEvent]] entity.
 */
export class EmEventRequestBuilder extends RequestBuilder<EmEvent> {
  /**
   * Returns a request builder for retrieving one `EmEvent` entity based on its keys.
   * @param id Key property. See [[EmEvent.id]].
   * @returns A request builder for creating requests to retrieve one `EmEvent` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<EmEvent> {
    return new GetByKeyRequestBuilder(EmEvent, { id: id });
  }

  /**
   * Returns a request builder for querying all `EmEvent` entities.
   * @returns A request builder for creating requests to retrieve all `EmEvent` entities.
   */
  getAll(): GetAllRequestBuilder<EmEvent> {
    return new GetAllRequestBuilder(EmEvent);
  }

  /**
   * Returns a request builder for creating a `EmEvent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmEvent`.
   */
  create(entity: EmEvent): CreateRequestBuilder<EmEvent> {
    return new CreateRequestBuilder(EmEvent, entity);
  }
}
