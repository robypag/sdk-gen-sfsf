/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InlineResult } from './InlineResult';

/**
 * Request builder class for operations supported on the [[InlineResult]] entity.
 */
export class InlineResultRequestBuilder extends RequestBuilder<InlineResult> {
  /**
   * Returns a request builder for retrieving one `InlineResult` entity based on its keys.
   * @param inlineProperty Key property. See [[InlineResult.inlineProperty]].
   * @returns A request builder for creating requests to retrieve one `InlineResult` entity based on its keys.
   */
  getByKey(inlineProperty: string): GetByKeyRequestBuilder<InlineResult> {
    return new GetByKeyRequestBuilder(InlineResult, { inlineProperty: inlineProperty });
  }

  /**
   * Returns a request builder for querying all `InlineResult` entities.
   * @returns A request builder for creating requests to retrieve all `InlineResult` entities.
   */
  getAll(): GetAllRequestBuilder<InlineResult> {
    return new GetAllRequestBuilder(InlineResult);
  }

  /**
   * Returns a request builder for creating a `InlineResult` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InlineResult`.
   */
  create(entity: InlineResult): CreateRequestBuilder<InlineResult> {
    return new CreateRequestBuilder(InlineResult, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InlineResult`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InlineResult`.
   */
  update(entity: InlineResult): UpdateRequestBuilder<InlineResult> {
    return new UpdateRequestBuilder(InlineResult, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InlineResult`.
   * @param inlineProperty Key property. See [[InlineResult.inlineProperty]].
   * @returns A request builder for creating requests that delete an entity of type `InlineResult`.
   */
  delete(inlineProperty: string): DeleteRequestBuilder<InlineResult>;
  /**
   * Returns a request builder for deleting an entity of type `InlineResult`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InlineResult` by taking the entity as a parameter.
   */
  delete(entity: InlineResult): DeleteRequestBuilder<InlineResult>;
  delete(inlinePropertyOrEntity: any): DeleteRequestBuilder<InlineResult> {
    return new DeleteRequestBuilder(InlineResult, inlinePropertyOrEntity instanceof InlineResult ? inlinePropertyOrEntity : { inlineProperty: inlinePropertyOrEntity! });
  }
}
