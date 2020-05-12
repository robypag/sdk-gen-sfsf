/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PositionEntity } from './PositionEntity';

/**
 * Request builder class for operations supported on the [[PositionEntity]] entity.
 */
export class PositionEntityRequestBuilder extends RequestBuilder<PositionEntity> {
  /**
   * Returns a request builder for retrieving one `PositionEntity` entity based on its keys.
   * @param externalCode Key property. See [[PositionEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PositionEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<PositionEntity> {
    return new GetByKeyRequestBuilder(PositionEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PositionEntity` entities.
   * @returns A request builder for creating requests to retrieve all `PositionEntity` entities.
   */
  getAll(): GetAllRequestBuilder<PositionEntity> {
    return new GetAllRequestBuilder(PositionEntity);
  }

  /**
   * Returns a request builder for creating a `PositionEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionEntity`.
   */
  create(entity: PositionEntity): CreateRequestBuilder<PositionEntity> {
    return new CreateRequestBuilder(PositionEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PositionEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionEntity`.
   */
  update(entity: PositionEntity): UpdateRequestBuilder<PositionEntity> {
    return new UpdateRequestBuilder(PositionEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionEntity`.
   * @param externalCode Key property. See [[PositionEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PositionEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<PositionEntity>;
  /**
   * Returns a request builder for deleting an entity of type `PositionEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionEntity` by taking the entity as a parameter.
   */
  delete(entity: PositionEntity): DeleteRequestBuilder<PositionEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<PositionEntity> {
    return new DeleteRequestBuilder(PositionEntity, externalCodeOrEntity instanceof PositionEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
