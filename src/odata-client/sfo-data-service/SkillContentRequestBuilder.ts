/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SkillContent } from './SkillContent';

/**
 * Request builder class for operations supported on the [[SkillContent]] entity.
 */
export class SkillContentRequestBuilder extends RequestBuilder<SkillContent> {
  /**
   * Returns a request builder for retrieving one `SkillContent` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[SkillContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[SkillContent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SkillContent` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SkillContent> {
    return new GetByKeyRequestBuilder(SkillContent, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SkillContent` entities.
   * @returns A request builder for creating requests to retrieve all `SkillContent` entities.
   */
  getAll(): GetAllRequestBuilder<SkillContent> {
    return new GetAllRequestBuilder(SkillContent);
  }

  /**
   * Returns a request builder for creating a `SkillContent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SkillContent`.
   */
  create(entity: SkillContent): CreateRequestBuilder<SkillContent> {
    return new CreateRequestBuilder(SkillContent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SkillContent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SkillContent`.
   */
  update(entity: SkillContent): UpdateRequestBuilder<SkillContent> {
    return new UpdateRequestBuilder(SkillContent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SkillContent`.
   * @param jobProfileExternalCode Key property. See [[SkillContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[SkillContent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SkillContent`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<SkillContent>;
  /**
   * Returns a request builder for deleting an entity of type `SkillContent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SkillContent` by taking the entity as a parameter.
   */
  delete(entity: SkillContent): DeleteRequestBuilder<SkillContent>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<SkillContent> {
    return new DeleteRequestBuilder(SkillContent, jobProfileExternalCodeOrEntity instanceof SkillContent ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
