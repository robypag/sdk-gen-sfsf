/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InformationDataSubjectConfiguration } from './InformationDataSubjectConfiguration';

/**
 * Request builder class for operations supported on the [[InformationDataSubjectConfiguration]] entity.
 */
export class InformationDataSubjectConfigurationRequestBuilder extends RequestBuilder<InformationDataSubjectConfiguration> {
  /**
   * Returns a request builder for retrieving one `InformationDataSubjectConfiguration` entity based on its keys.
   * @param externalCode Key property. See [[InformationDataSubjectConfiguration.externalCode]].
   * @returns A request builder for creating requests to retrieve one `InformationDataSubjectConfiguration` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<InformationDataSubjectConfiguration> {
    return new GetByKeyRequestBuilder(InformationDataSubjectConfiguration, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `InformationDataSubjectConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `InformationDataSubjectConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<InformationDataSubjectConfiguration> {
    return new GetAllRequestBuilder(InformationDataSubjectConfiguration);
  }

  /**
   * Returns a request builder for creating a `InformationDataSubjectConfiguration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InformationDataSubjectConfiguration`.
   */
  create(entity: InformationDataSubjectConfiguration): CreateRequestBuilder<InformationDataSubjectConfiguration> {
    return new CreateRequestBuilder(InformationDataSubjectConfiguration, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InformationDataSubjectConfiguration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InformationDataSubjectConfiguration`.
   */
  update(entity: InformationDataSubjectConfiguration): UpdateRequestBuilder<InformationDataSubjectConfiguration> {
    return new UpdateRequestBuilder(InformationDataSubjectConfiguration, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InformationDataSubjectConfiguration`.
   * @param externalCode Key property. See [[InformationDataSubjectConfiguration.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `InformationDataSubjectConfiguration`.
   */
  delete(externalCode: string): DeleteRequestBuilder<InformationDataSubjectConfiguration>;
  /**
   * Returns a request builder for deleting an entity of type `InformationDataSubjectConfiguration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InformationDataSubjectConfiguration` by taking the entity as a parameter.
   */
  delete(entity: InformationDataSubjectConfiguration): DeleteRequestBuilder<InformationDataSubjectConfiguration>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<InformationDataSubjectConfiguration> {
    return new DeleteRequestBuilder(InformationDataSubjectConfiguration, externalCodeOrEntity instanceof InformationDataSubjectConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
