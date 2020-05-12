/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TodoCategory } from './TodoCategory';

/**
 * Request builder class for operations supported on the [[TodoCategory]] entity.
 */
export class TodoCategoryRequestBuilder extends RequestBuilder<TodoCategory> {
  /**
   * Returns a request builder for retrieving one `TodoCategory` entity based on its keys.
   * @param categoryId Key property. See [[TodoCategory.categoryId]].
   * @returns A request builder for creating requests to retrieve one `TodoCategory` entity based on its keys.
   */
  getByKey(categoryId: string): GetByKeyRequestBuilder<TodoCategory> {
    return new GetByKeyRequestBuilder(TodoCategory, { categoryId: categoryId });
  }

  /**
   * Returns a request builder for querying all `TodoCategory` entities.
   * @returns A request builder for creating requests to retrieve all `TodoCategory` entities.
   */
  getAll(): GetAllRequestBuilder<TodoCategory> {
    return new GetAllRequestBuilder(TodoCategory);
  }
}
