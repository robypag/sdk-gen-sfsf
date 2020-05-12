/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PhysicalReqEntity } from './PhysicalReqEntity';

/**
 * Request builder class for operations supported on the [[PhysicalReqEntity]] entity.
 */
export class PhysicalReqEntityRequestBuilder extends RequestBuilder<PhysicalReqEntity> {
  /**
   * Returns a request builder for retrieving one `PhysicalReqEntity` entity based on its keys.
   * @param externalCode Key property. See [[PhysicalReqEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PhysicalReqEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<PhysicalReqEntity> {
    return new GetByKeyRequestBuilder(PhysicalReqEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PhysicalReqEntity` entities.
   * @returns A request builder for creating requests to retrieve all `PhysicalReqEntity` entities.
   */
  getAll(): GetAllRequestBuilder<PhysicalReqEntity> {
    return new GetAllRequestBuilder(PhysicalReqEntity);
  }

  /**
   * Returns a request builder for creating a `PhysicalReqEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PhysicalReqEntity`.
   */
  create(entity: PhysicalReqEntity): CreateRequestBuilder<PhysicalReqEntity> {
    return new CreateRequestBuilder(PhysicalReqEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PhysicalReqEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PhysicalReqEntity`.
   */
  update(entity: PhysicalReqEntity): UpdateRequestBuilder<PhysicalReqEntity> {
    return new UpdateRequestBuilder(PhysicalReqEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PhysicalReqEntity`.
   * @param externalCode Key property. See [[PhysicalReqEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PhysicalReqEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<PhysicalReqEntity>;
  /**
   * Returns a request builder for deleting an entity of type `PhysicalReqEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PhysicalReqEntity` by taking the entity as a parameter.
   */
  delete(entity: PhysicalReqEntity): DeleteRequestBuilder<PhysicalReqEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<PhysicalReqEntity> {
    return new DeleteRequestBuilder(PhysicalReqEntity, externalCodeOrEntity instanceof PhysicalReqEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
