/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SkillProfile } from './SkillProfile';

/**
 * Request builder class for operations supported on the [[SkillProfile]] entity.
 */
export class SkillProfileRequestBuilder extends RequestBuilder<SkillProfile> {
  /**
   * Returns a request builder for retrieving one `SkillProfile` entity based on its keys.
   * @param externalCode Key property. See [[SkillProfile.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SkillProfile` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<SkillProfile> {
    return new GetByKeyRequestBuilder(SkillProfile, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `SkillProfile` entities.
   * @returns A request builder for creating requests to retrieve all `SkillProfile` entities.
   */
  getAll(): GetAllRequestBuilder<SkillProfile> {
    return new GetAllRequestBuilder(SkillProfile);
  }

  /**
   * Returns a request builder for creating a `SkillProfile` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SkillProfile`.
   */
  create(entity: SkillProfile): CreateRequestBuilder<SkillProfile> {
    return new CreateRequestBuilder(SkillProfile, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SkillProfile`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SkillProfile`.
   */
  update(entity: SkillProfile): UpdateRequestBuilder<SkillProfile> {
    return new UpdateRequestBuilder(SkillProfile, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SkillProfile`.
   * @param externalCode Key property. See [[SkillProfile.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SkillProfile`.
   */
  delete(externalCode: string): DeleteRequestBuilder<SkillProfile>;
  /**
   * Returns a request builder for deleting an entity of type `SkillProfile`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SkillProfile` by taking the entity as a parameter.
   */
  delete(entity: SkillProfile): DeleteRequestBuilder<SkillProfile>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<SkillProfile> {
    return new DeleteRequestBuilder(SkillProfile, externalCodeOrEntity instanceof SkillProfile ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
