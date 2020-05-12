/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TodoEntryV2 } from './TodoEntryV2';

/**
 * Request builder class for operations supported on the [[TodoEntryV2]] entity.
 */
export class TodoEntryV2RequestBuilder extends RequestBuilder<TodoEntryV2> {
  /**
   * Returns a request builder for retrieving one `TodoEntryV2` entity based on its keys.
   * @param todoEntryId Key property. See [[TodoEntryV2.todoEntryId]].
   * @returns A request builder for creating requests to retrieve one `TodoEntryV2` entity based on its keys.
   */
  getByKey(todoEntryId: BigNumber): GetByKeyRequestBuilder<TodoEntryV2> {
    return new GetByKeyRequestBuilder(TodoEntryV2, { todoEntryId: todoEntryId });
  }

  /**
   * Returns a request builder for querying all `TodoEntryV2` entities.
   * @returns A request builder for creating requests to retrieve all `TodoEntryV2` entities.
   */
  getAll(): GetAllRequestBuilder<TodoEntryV2> {
    return new GetAllRequestBuilder(TodoEntryV2);
  }

  /**
   * Returns a request builder for creating a `TodoEntryV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TodoEntryV2`.
   */
  create(entity: TodoEntryV2): CreateRequestBuilder<TodoEntryV2> {
    return new CreateRequestBuilder(TodoEntryV2, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TodoEntryV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TodoEntryV2`.
   */
  update(entity: TodoEntryV2): UpdateRequestBuilder<TodoEntryV2> {
    return new UpdateRequestBuilder(TodoEntryV2, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TodoEntryV2`.
   * @param todoEntryId Key property. See [[TodoEntryV2.todoEntryId]].
   * @returns A request builder for creating requests that delete an entity of type `TodoEntryV2`.
   */
  delete(todoEntryId: BigNumber): DeleteRequestBuilder<TodoEntryV2>;
  /**
   * Returns a request builder for deleting an entity of type `TodoEntryV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TodoEntryV2` by taking the entity as a parameter.
   */
  delete(entity: TodoEntryV2): DeleteRequestBuilder<TodoEntryV2>;
  delete(todoEntryIdOrEntity: any): DeleteRequestBuilder<TodoEntryV2> {
    return new DeleteRequestBuilder(TodoEntryV2, todoEntryIdOrEntity instanceof TodoEntryV2 ? todoEntryIdOrEntity : { todoEntryId: todoEntryIdOrEntity! });
  }
}
