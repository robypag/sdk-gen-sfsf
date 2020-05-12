/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmEventPayload } from './EmEventPayload';

/**
 * Request builder class for operations supported on the [[EmEventPayload]] entity.
 */
export class EmEventPayloadRequestBuilder extends RequestBuilder<EmEventPayload> {
  /**
   * Returns a request builder for retrieving one `EmEventPayload` entity based on its keys.
   * @param id Key property. See [[EmEventPayload.id]].
   * @returns A request builder for creating requests to retrieve one `EmEventPayload` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<EmEventPayload> {
    return new GetByKeyRequestBuilder(EmEventPayload, { id: id });
  }

  /**
   * Returns a request builder for querying all `EmEventPayload` entities.
   * @returns A request builder for creating requests to retrieve all `EmEventPayload` entities.
   */
  getAll(): GetAllRequestBuilder<EmEventPayload> {
    return new GetAllRequestBuilder(EmEventPayload);
  }

  /**
   * Returns a request builder for creating a `EmEventPayload` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmEventPayload`.
   */
  create(entity: EmEventPayload): CreateRequestBuilder<EmEventPayload> {
    return new CreateRequestBuilder(EmEventPayload, entity);
  }
}
