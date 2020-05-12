/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InnerMessage } from './InnerMessage';

/**
 * Request builder class for operations supported on the [[InnerMessage]] entity.
 */
export class InnerMessageRequestBuilder extends RequestBuilder<InnerMessage> {
  /**
   * Returns a request builder for retrieving one `InnerMessage` entity based on its keys.
   * @param key Key property. See [[InnerMessage.key]].
   * @returns A request builder for creating requests to retrieve one `InnerMessage` entity based on its keys.
   */
  getByKey(key: string): GetByKeyRequestBuilder<InnerMessage> {
    return new GetByKeyRequestBuilder(InnerMessage, { key: key });
  }

  /**
   * Returns a request builder for querying all `InnerMessage` entities.
   * @returns A request builder for creating requests to retrieve all `InnerMessage` entities.
   */
  getAll(): GetAllRequestBuilder<InnerMessage> {
    return new GetAllRequestBuilder(InnerMessage);
  }

  /**
   * Returns a request builder for creating a `InnerMessage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InnerMessage`.
   */
  create(entity: InnerMessage): CreateRequestBuilder<InnerMessage> {
    return new CreateRequestBuilder(InnerMessage, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InnerMessage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InnerMessage`.
   */
  update(entity: InnerMessage): UpdateRequestBuilder<InnerMessage> {
    return new UpdateRequestBuilder(InnerMessage, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InnerMessage`.
   * @param key Key property. See [[InnerMessage.key]].
   * @returns A request builder for creating requests that delete an entity of type `InnerMessage`.
   */
  delete(key: string): DeleteRequestBuilder<InnerMessage>;
  /**
   * Returns a request builder for deleting an entity of type `InnerMessage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InnerMessage` by taking the entity as a parameter.
   */
  delete(entity: InnerMessage): DeleteRequestBuilder<InnerMessage>;
  delete(keyOrEntity: any): DeleteRequestBuilder<InnerMessage> {
    return new DeleteRequestBuilder(InnerMessage, keyOrEntity instanceof InnerMessage ? keyOrEntity : { key: keyOrEntity! });
  }
}
