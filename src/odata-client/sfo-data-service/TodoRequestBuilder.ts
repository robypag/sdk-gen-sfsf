/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Todo } from './Todo';

/**
 * Request builder class for operations supported on the [[Todo]] entity.
 */
export class TodoRequestBuilder extends RequestBuilder<Todo> {
  /**
   * Returns a request builder for retrieving one `Todo` entity based on its keys.
   * @param categoryId Key property. See [[Todo.categoryId]].
   * @returns A request builder for creating requests to retrieve one `Todo` entity based on its keys.
   */
  getByKey(categoryId: string): GetByKeyRequestBuilder<Todo> {
    return new GetByKeyRequestBuilder(Todo, { categoryId: categoryId });
  }

  /**
   * Returns a request builder for querying all `Todo` entities.
   * @returns A request builder for creating requests to retrieve all `Todo` entities.
   */
  getAll(): GetAllRequestBuilder<Todo> {
    return new GetAllRequestBuilder(Todo);
  }
}
