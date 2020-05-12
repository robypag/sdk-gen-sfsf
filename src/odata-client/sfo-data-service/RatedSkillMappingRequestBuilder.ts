/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RatedSkillMapping } from './RatedSkillMapping';

/**
 * Request builder class for operations supported on the [[RatedSkillMapping]] entity.
 */
export class RatedSkillMappingRequestBuilder extends RequestBuilder<RatedSkillMapping> {
  /**
   * Returns a request builder for retrieving one `RatedSkillMapping` entity based on its keys.
   * @param skillProfileExternalCode Key property. See [[RatedSkillMapping.skillProfileExternalCode]].
   * @param externalCode Key property. See [[RatedSkillMapping.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RatedSkillMapping` entity based on its keys.
   */
  getByKey(skillProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RatedSkillMapping> {
    return new GetByKeyRequestBuilder(RatedSkillMapping, {
      SkillProfile_externalCode: skillProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `RatedSkillMapping` entities.
   * @returns A request builder for creating requests to retrieve all `RatedSkillMapping` entities.
   */
  getAll(): GetAllRequestBuilder<RatedSkillMapping> {
    return new GetAllRequestBuilder(RatedSkillMapping);
  }

  /**
   * Returns a request builder for creating a `RatedSkillMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RatedSkillMapping`.
   */
  create(entity: RatedSkillMapping): CreateRequestBuilder<RatedSkillMapping> {
    return new CreateRequestBuilder(RatedSkillMapping, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RatedSkillMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RatedSkillMapping`.
   */
  update(entity: RatedSkillMapping): UpdateRequestBuilder<RatedSkillMapping> {
    return new UpdateRequestBuilder(RatedSkillMapping, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RatedSkillMapping`.
   * @param skillProfileExternalCode Key property. See [[RatedSkillMapping.skillProfileExternalCode]].
   * @param externalCode Key property. See [[RatedSkillMapping.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RatedSkillMapping`.
   */
  delete(skillProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<RatedSkillMapping>;
  /**
   * Returns a request builder for deleting an entity of type `RatedSkillMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RatedSkillMapping` by taking the entity as a parameter.
   */
  delete(entity: RatedSkillMapping): DeleteRequestBuilder<RatedSkillMapping>;
  delete(skillProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<RatedSkillMapping> {
    return new DeleteRequestBuilder(RatedSkillMapping, skillProfileExternalCodeOrEntity instanceof RatedSkillMapping ? skillProfileExternalCodeOrEntity : {
      SkillProfile_externalCode: skillProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
