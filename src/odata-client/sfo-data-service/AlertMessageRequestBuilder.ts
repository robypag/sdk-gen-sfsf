/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AlertMessage } from './AlertMessage';

/**
 * Request builder class for operations supported on the [[AlertMessage]] entity.
 */
export class AlertMessageRequestBuilder extends RequestBuilder<AlertMessage> {
  /**
   * Returns a request builder for retrieving one `AlertMessage` entity based on its keys.
   * @param externalCode Key property. See [[AlertMessage.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AlertMessage` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<AlertMessage> {
    return new GetByKeyRequestBuilder(AlertMessage, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `AlertMessage` entities.
   * @returns A request builder for creating requests to retrieve all `AlertMessage` entities.
   */
  getAll(): GetAllRequestBuilder<AlertMessage> {
    return new GetAllRequestBuilder(AlertMessage);
  }

  /**
   * Returns a request builder for creating a `AlertMessage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlertMessage`.
   */
  create(entity: AlertMessage): CreateRequestBuilder<AlertMessage> {
    return new CreateRequestBuilder(AlertMessage, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AlertMessage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlertMessage`.
   */
  update(entity: AlertMessage): UpdateRequestBuilder<AlertMessage> {
    return new UpdateRequestBuilder(AlertMessage, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AlertMessage`.
   * @param externalCode Key property. See [[AlertMessage.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `AlertMessage`.
   */
  delete(externalCode: string): DeleteRequestBuilder<AlertMessage>;
  /**
   * Returns a request builder for deleting an entity of type `AlertMessage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlertMessage` by taking the entity as a parameter.
   */
  delete(entity: AlertMessage): DeleteRequestBuilder<AlertMessage>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<AlertMessage> {
    return new DeleteRequestBuilder(AlertMessage, externalCodeOrEntity instanceof AlertMessage ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
