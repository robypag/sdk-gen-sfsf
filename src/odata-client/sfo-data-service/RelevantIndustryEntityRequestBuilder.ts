/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RelevantIndustryEntity } from './RelevantIndustryEntity';

/**
 * Request builder class for operations supported on the [[RelevantIndustryEntity]] entity.
 */
export class RelevantIndustryEntityRequestBuilder extends RequestBuilder<RelevantIndustryEntity> {
  /**
   * Returns a request builder for retrieving one `RelevantIndustryEntity` entity based on its keys.
   * @param externalCode Key property. See [[RelevantIndustryEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RelevantIndustryEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<RelevantIndustryEntity> {
    return new GetByKeyRequestBuilder(RelevantIndustryEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `RelevantIndustryEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RelevantIndustryEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RelevantIndustryEntity> {
    return new GetAllRequestBuilder(RelevantIndustryEntity);
  }

  /**
   * Returns a request builder for creating a `RelevantIndustryEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RelevantIndustryEntity`.
   */
  create(entity: RelevantIndustryEntity): CreateRequestBuilder<RelevantIndustryEntity> {
    return new CreateRequestBuilder(RelevantIndustryEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RelevantIndustryEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RelevantIndustryEntity`.
   */
  update(entity: RelevantIndustryEntity): UpdateRequestBuilder<RelevantIndustryEntity> {
    return new UpdateRequestBuilder(RelevantIndustryEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RelevantIndustryEntity`.
   * @param externalCode Key property. See [[RelevantIndustryEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RelevantIndustryEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<RelevantIndustryEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RelevantIndustryEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RelevantIndustryEntity` by taking the entity as a parameter.
   */
  delete(entity: RelevantIndustryEntity): DeleteRequestBuilder<RelevantIndustryEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<RelevantIndustryEntity> {
    return new DeleteRequestBuilder(RelevantIndustryEntity, externalCodeOrEntity instanceof RelevantIndustryEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
