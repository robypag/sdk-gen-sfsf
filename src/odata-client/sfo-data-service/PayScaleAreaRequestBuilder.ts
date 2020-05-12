/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayScaleArea } from './PayScaleArea';

/**
 * Request builder class for operations supported on the [[PayScaleArea]] entity.
 */
export class PayScaleAreaRequestBuilder extends RequestBuilder<PayScaleArea> {
  /**
   * Returns a request builder for retrieving one `PayScaleArea` entity based on its keys.
   * @param code Key property. See [[PayScaleArea.code]].
   * @returns A request builder for creating requests to retrieve one `PayScaleArea` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<PayScaleArea> {
    return new GetByKeyRequestBuilder(PayScaleArea, { code: code });
  }

  /**
   * Returns a request builder for querying all `PayScaleArea` entities.
   * @returns A request builder for creating requests to retrieve all `PayScaleArea` entities.
   */
  getAll(): GetAllRequestBuilder<PayScaleArea> {
    return new GetAllRequestBuilder(PayScaleArea);
  }

  /**
   * Returns a request builder for creating a `PayScaleArea` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayScaleArea`.
   */
  create(entity: PayScaleArea): CreateRequestBuilder<PayScaleArea> {
    return new CreateRequestBuilder(PayScaleArea, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayScaleArea`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayScaleArea`.
   */
  update(entity: PayScaleArea): UpdateRequestBuilder<PayScaleArea> {
    return new UpdateRequestBuilder(PayScaleArea, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayScaleArea`.
   * @param code Key property. See [[PayScaleArea.code]].
   * @returns A request builder for creating requests that delete an entity of type `PayScaleArea`.
   */
  delete(code: string): DeleteRequestBuilder<PayScaleArea>;
  /**
   * Returns a request builder for deleting an entity of type `PayScaleArea`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayScaleArea` by taking the entity as a parameter.
   */
  delete(entity: PayScaleArea): DeleteRequestBuilder<PayScaleArea>;
  delete(codeOrEntity: any): DeleteRequestBuilder<PayScaleArea> {
    return new DeleteRequestBuilder(PayScaleArea, codeOrEntity instanceof PayScaleArea ? codeOrEntity : { code: codeOrEntity! });
  }
}
