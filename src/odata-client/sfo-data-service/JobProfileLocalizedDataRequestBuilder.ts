/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobProfileLocalizedData } from './JobProfileLocalizedData';

/**
 * Request builder class for operations supported on the [[JobProfileLocalizedData]] entity.
 */
export class JobProfileLocalizedDataRequestBuilder extends RequestBuilder<JobProfileLocalizedData> {
  /**
   * Returns a request builder for retrieving one `JobProfileLocalizedData` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[JobProfileLocalizedData.jobProfileExternalCode]].
   * @param externalCode Key property. See [[JobProfileLocalizedData.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobProfileLocalizedData` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JobProfileLocalizedData> {
    return new GetByKeyRequestBuilder(JobProfileLocalizedData, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobProfileLocalizedData` entities.
   * @returns A request builder for creating requests to retrieve all `JobProfileLocalizedData` entities.
   */
  getAll(): GetAllRequestBuilder<JobProfileLocalizedData> {
    return new GetAllRequestBuilder(JobProfileLocalizedData);
  }

  /**
   * Returns a request builder for creating a `JobProfileLocalizedData` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobProfileLocalizedData`.
   */
  create(entity: JobProfileLocalizedData): CreateRequestBuilder<JobProfileLocalizedData> {
    return new CreateRequestBuilder(JobProfileLocalizedData, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobProfileLocalizedData`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobProfileLocalizedData`.
   */
  update(entity: JobProfileLocalizedData): UpdateRequestBuilder<JobProfileLocalizedData> {
    return new UpdateRequestBuilder(JobProfileLocalizedData, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobProfileLocalizedData`.
   * @param jobProfileExternalCode Key property. See [[JobProfileLocalizedData.jobProfileExternalCode]].
   * @param externalCode Key property. See [[JobProfileLocalizedData.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobProfileLocalizedData`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<JobProfileLocalizedData>;
  /**
   * Returns a request builder for deleting an entity of type `JobProfileLocalizedData`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobProfileLocalizedData` by taking the entity as a parameter.
   */
  delete(entity: JobProfileLocalizedData): DeleteRequestBuilder<JobProfileLocalizedData>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<JobProfileLocalizedData> {
    return new DeleteRequestBuilder(JobProfileLocalizedData, jobProfileExternalCodeOrEntity instanceof JobProfileLocalizedData ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
