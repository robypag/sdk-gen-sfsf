/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CertificationContent } from './CertificationContent';

/**
 * Request builder class for operations supported on the [[CertificationContent]] entity.
 */
export class CertificationContentRequestBuilder extends RequestBuilder<CertificationContent> {
  /**
   * Returns a request builder for retrieving one `CertificationContent` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[CertificationContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[CertificationContent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `CertificationContent` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<CertificationContent> {
    return new GetByKeyRequestBuilder(CertificationContent, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `CertificationContent` entities.
   * @returns A request builder for creating requests to retrieve all `CertificationContent` entities.
   */
  getAll(): GetAllRequestBuilder<CertificationContent> {
    return new GetAllRequestBuilder(CertificationContent);
  }

  /**
   * Returns a request builder for creating a `CertificationContent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificationContent`.
   */
  create(entity: CertificationContent): CreateRequestBuilder<CertificationContent> {
    return new CreateRequestBuilder(CertificationContent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CertificationContent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificationContent`.
   */
  update(entity: CertificationContent): UpdateRequestBuilder<CertificationContent> {
    return new UpdateRequestBuilder(CertificationContent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificationContent`.
   * @param jobProfileExternalCode Key property. See [[CertificationContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[CertificationContent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `CertificationContent`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<CertificationContent>;
  /**
   * Returns a request builder for deleting an entity of type `CertificationContent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificationContent` by taking the entity as a parameter.
   */
  delete(entity: CertificationContent): DeleteRequestBuilder<CertificationContent>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<CertificationContent> {
    return new DeleteRequestBuilder(CertificationContent, jobProfileExternalCodeOrEntity instanceof CertificationContent ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
