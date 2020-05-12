/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayScaleGroup } from './PayScaleGroup';

/**
 * Request builder class for operations supported on the [[PayScaleGroup]] entity.
 */
export class PayScaleGroupRequestBuilder extends RequestBuilder<PayScaleGroup> {
  /**
   * Returns a request builder for retrieving one `PayScaleGroup` entity based on its keys.
   * @param code Key property. See [[PayScaleGroup.code]].
   * @returns A request builder for creating requests to retrieve one `PayScaleGroup` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<PayScaleGroup> {
    return new GetByKeyRequestBuilder(PayScaleGroup, { code: code });
  }

  /**
   * Returns a request builder for querying all `PayScaleGroup` entities.
   * @returns A request builder for creating requests to retrieve all `PayScaleGroup` entities.
   */
  getAll(): GetAllRequestBuilder<PayScaleGroup> {
    return new GetAllRequestBuilder(PayScaleGroup);
  }

  /**
   * Returns a request builder for creating a `PayScaleGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayScaleGroup`.
   */
  create(entity: PayScaleGroup): CreateRequestBuilder<PayScaleGroup> {
    return new CreateRequestBuilder(PayScaleGroup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayScaleGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayScaleGroup`.
   */
  update(entity: PayScaleGroup): UpdateRequestBuilder<PayScaleGroup> {
    return new UpdateRequestBuilder(PayScaleGroup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayScaleGroup`.
   * @param code Key property. See [[PayScaleGroup.code]].
   * @returns A request builder for creating requests that delete an entity of type `PayScaleGroup`.
   */
  delete(code: string): DeleteRequestBuilder<PayScaleGroup>;
  /**
   * Returns a request builder for deleting an entity of type `PayScaleGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayScaleGroup` by taking the entity as a parameter.
   */
  delete(entity: PayScaleGroup): DeleteRequestBuilder<PayScaleGroup>;
  delete(codeOrEntity: any): DeleteRequestBuilder<PayScaleGroup> {
    return new DeleteRequestBuilder(PayScaleGroup, codeOrEntity instanceof PayScaleGroup ? codeOrEntity : { code: codeOrEntity! });
  }
}
