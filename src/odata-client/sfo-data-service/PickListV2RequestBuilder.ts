/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PickListV2 } from './PickListV2';

/**
 * Request builder class for operations supported on the [[PickListV2]] entity.
 */
export class PickListV2RequestBuilder extends RequestBuilder<PickListV2> {
  /**
   * Returns a request builder for retrieving one `PickListV2` entity based on its keys.
   * @param effectiveStartDate Key property. See [[PickListV2.effectiveStartDate]].
   * @param id Key property. See [[PickListV2.id]].
   * @returns A request builder for creating requests to retrieve one `PickListV2` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, id: string): GetByKeyRequestBuilder<PickListV2> {
    return new GetByKeyRequestBuilder(PickListV2, {
      effectiveStartDate: effectiveStartDate,
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `PickListV2` entities.
   * @returns A request builder for creating requests to retrieve all `PickListV2` entities.
   */
  getAll(): GetAllRequestBuilder<PickListV2> {
    return new GetAllRequestBuilder(PickListV2);
  }

  /**
   * Returns a request builder for creating a `PickListV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickListV2`.
   */
  create(entity: PickListV2): CreateRequestBuilder<PickListV2> {
    return new CreateRequestBuilder(PickListV2, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PickListV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickListV2`.
   */
  update(entity: PickListV2): UpdateRequestBuilder<PickListV2> {
    return new UpdateRequestBuilder(PickListV2, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PickListV2`.
   * @param effectiveStartDate Key property. See [[PickListV2.effectiveStartDate]].
   * @param id Key property. See [[PickListV2.id]].
   * @returns A request builder for creating requests that delete an entity of type `PickListV2`.
   */
  delete(effectiveStartDate: Moment, id: string): DeleteRequestBuilder<PickListV2>;
  /**
   * Returns a request builder for deleting an entity of type `PickListV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickListV2` by taking the entity as a parameter.
   */
  delete(entity: PickListV2): DeleteRequestBuilder<PickListV2>;
  delete(effectiveStartDateOrEntity: any, id?: string): DeleteRequestBuilder<PickListV2> {
    return new DeleteRequestBuilder(PickListV2, effectiveStartDateOrEntity instanceof PickListV2 ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      id: id!
    });
  }
}
