/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardLevel } from './SpotAwardLevel';

/**
 * Request builder class for operations supported on the [[SpotAwardLevel]] entity.
 */
export class SpotAwardLevelRequestBuilder extends RequestBuilder<SpotAwardLevel> {
  /**
   * Returns a request builder for retrieving one `SpotAwardLevel` entity based on its keys.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardLevel.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardLevel.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardLevel` entity based on its keys.
   */
  getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardLevel> {
    return new GetByKeyRequestBuilder(SpotAwardLevel, {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SpotAwardLevel` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardLevel` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardLevel> {
    return new GetAllRequestBuilder(SpotAwardLevel);
  }

  /**
   * Returns a request builder for creating a `SpotAwardLevel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardLevel`.
   */
  create(entity: SpotAwardLevel): CreateRequestBuilder<SpotAwardLevel> {
    return new CreateRequestBuilder(SpotAwardLevel, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardLevel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardLevel`.
   */
  update(entity: SpotAwardLevel): UpdateRequestBuilder<SpotAwardLevel> {
    return new UpdateRequestBuilder(SpotAwardLevel, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardLevel`.
   * @param spotAwardProgramExternalCode Key property. See [[SpotAwardLevel.spotAwardProgramExternalCode]].
   * @param externalCode Key property. See [[SpotAwardLevel.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardLevel`.
   */
  delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardLevel>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardLevel`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardLevel` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardLevel): DeleteRequestBuilder<SpotAwardLevel>;
  delete(spotAwardProgramExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<SpotAwardLevel> {
    return new DeleteRequestBuilder(SpotAwardLevel, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardLevel ? spotAwardProgramExternalCodeOrEntity : {
      SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
