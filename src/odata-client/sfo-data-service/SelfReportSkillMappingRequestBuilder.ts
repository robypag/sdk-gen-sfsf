/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SelfReportSkillMapping } from './SelfReportSkillMapping';

/**
 * Request builder class for operations supported on the [[SelfReportSkillMapping]] entity.
 */
export class SelfReportSkillMappingRequestBuilder extends RequestBuilder<SelfReportSkillMapping> {
  /**
   * Returns a request builder for retrieving one `SelfReportSkillMapping` entity based on its keys.
   * @param skillProfileExternalCode Key property. See [[SelfReportSkillMapping.skillProfileExternalCode]].
   * @param externalCode Key property. See [[SelfReportSkillMapping.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SelfReportSkillMapping` entity based on its keys.
   */
  getByKey(skillProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SelfReportSkillMapping> {
    return new GetByKeyRequestBuilder(SelfReportSkillMapping, {
      SkillProfile_externalCode: skillProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SelfReportSkillMapping` entities.
   * @returns A request builder for creating requests to retrieve all `SelfReportSkillMapping` entities.
   */
  getAll(): GetAllRequestBuilder<SelfReportSkillMapping> {
    return new GetAllRequestBuilder(SelfReportSkillMapping);
  }

  /**
   * Returns a request builder for creating a `SelfReportSkillMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SelfReportSkillMapping`.
   */
  create(entity: SelfReportSkillMapping): CreateRequestBuilder<SelfReportSkillMapping> {
    return new CreateRequestBuilder(SelfReportSkillMapping, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SelfReportSkillMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SelfReportSkillMapping`.
   */
  update(entity: SelfReportSkillMapping): UpdateRequestBuilder<SelfReportSkillMapping> {
    return new UpdateRequestBuilder(SelfReportSkillMapping, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SelfReportSkillMapping`.
   * @param skillProfileExternalCode Key property. See [[SelfReportSkillMapping.skillProfileExternalCode]].
   * @param externalCode Key property. See [[SelfReportSkillMapping.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SelfReportSkillMapping`.
   */
  delete(skillProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<SelfReportSkillMapping>;
  /**
   * Returns a request builder for deleting an entity of type `SelfReportSkillMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SelfReportSkillMapping` by taking the entity as a parameter.
   */
  delete(entity: SelfReportSkillMapping): DeleteRequestBuilder<SelfReportSkillMapping>;
  delete(skillProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<SelfReportSkillMapping> {
    return new DeleteRequestBuilder(SelfReportSkillMapping, skillProfileExternalCodeOrEntity instanceof SelfReportSkillMapping ? skillProfileExternalCodeOrEntity : {
      SkillProfile_externalCode: skillProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
