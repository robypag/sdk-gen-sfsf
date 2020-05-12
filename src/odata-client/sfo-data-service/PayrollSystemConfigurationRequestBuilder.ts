/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayrollSystemConfiguration } from './PayrollSystemConfiguration';

/**
 * Request builder class for operations supported on the [[PayrollSystemConfiguration]] entity.
 */
export class PayrollSystemConfigurationRequestBuilder extends RequestBuilder<PayrollSystemConfiguration> {
  /**
   * Returns a request builder for retrieving one `PayrollSystemConfiguration` entity based on its keys.
   * @param externalCode Key property. See [[PayrollSystemConfiguration.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PayrollSystemConfiguration` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<PayrollSystemConfiguration> {
    return new GetByKeyRequestBuilder(PayrollSystemConfiguration, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PayrollSystemConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollSystemConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollSystemConfiguration> {
    return new GetAllRequestBuilder(PayrollSystemConfiguration);
  }

  /**
   * Returns a request builder for creating a `PayrollSystemConfiguration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollSystemConfiguration`.
   */
  create(entity: PayrollSystemConfiguration): CreateRequestBuilder<PayrollSystemConfiguration> {
    return new CreateRequestBuilder(PayrollSystemConfiguration, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollSystemConfiguration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollSystemConfiguration`.
   */
  update(entity: PayrollSystemConfiguration): UpdateRequestBuilder<PayrollSystemConfiguration> {
    return new UpdateRequestBuilder(PayrollSystemConfiguration, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollSystemConfiguration`.
   * @param externalCode Key property. See [[PayrollSystemConfiguration.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PayrollSystemConfiguration`.
   */
  delete(externalCode: string): DeleteRequestBuilder<PayrollSystemConfiguration>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollSystemConfiguration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollSystemConfiguration` by taking the entity as a parameter.
   */
  delete(entity: PayrollSystemConfiguration): DeleteRequestBuilder<PayrollSystemConfiguration>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<PayrollSystemConfiguration> {
    return new DeleteRequestBuilder(PayrollSystemConfiguration, externalCodeOrEntity instanceof PayrollSystemConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
