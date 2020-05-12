/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmploymentConditionEntity } from './EmploymentConditionEntity';

/**
 * Request builder class for operations supported on the [[EmploymentConditionEntity]] entity.
 */
export class EmploymentConditionEntityRequestBuilder extends RequestBuilder<EmploymentConditionEntity> {
  /**
   * Returns a request builder for retrieving one `EmploymentConditionEntity` entity based on its keys.
   * @param externalCode Key property. See [[EmploymentConditionEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmploymentConditionEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<EmploymentConditionEntity> {
    return new GetByKeyRequestBuilder(EmploymentConditionEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmploymentConditionEntity` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentConditionEntity` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentConditionEntity> {
    return new GetAllRequestBuilder(EmploymentConditionEntity);
  }

  /**
   * Returns a request builder for creating a `EmploymentConditionEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentConditionEntity`.
   */
  create(entity: EmploymentConditionEntity): CreateRequestBuilder<EmploymentConditionEntity> {
    return new CreateRequestBuilder(EmploymentConditionEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentConditionEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentConditionEntity`.
   */
  update(entity: EmploymentConditionEntity): UpdateRequestBuilder<EmploymentConditionEntity> {
    return new UpdateRequestBuilder(EmploymentConditionEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentConditionEntity`.
   * @param externalCode Key property. See [[EmploymentConditionEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `EmploymentConditionEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<EmploymentConditionEntity>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentConditionEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentConditionEntity` by taking the entity as a parameter.
   */
  delete(entity: EmploymentConditionEntity): DeleteRequestBuilder<EmploymentConditionEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<EmploymentConditionEntity> {
    return new DeleteRequestBuilder(EmploymentConditionEntity, externalCodeOrEntity instanceof EmploymentConditionEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
