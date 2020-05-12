/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayrollConfigurationCategory } from './PayrollConfigurationCategory';

/**
 * Request builder class for operations supported on the [[PayrollConfigurationCategory]] entity.
 */
export class PayrollConfigurationCategoryRequestBuilder extends RequestBuilder<PayrollConfigurationCategory> {
  /**
   * Returns a request builder for retrieving one `PayrollConfigurationCategory` entity based on its keys.
   * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategory.payrollSystemConfigurationExternalCode]].
   * @param externalCode Key property. See [[PayrollConfigurationCategory.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PayrollConfigurationCategory` entity based on its keys.
   */
  getByKey(payrollSystemConfigurationExternalCode: string, externalCode: string): GetByKeyRequestBuilder<PayrollConfigurationCategory> {
    return new GetByKeyRequestBuilder(PayrollConfigurationCategory, {
      PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PayrollConfigurationCategory` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollConfigurationCategory` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollConfigurationCategory> {
    return new GetAllRequestBuilder(PayrollConfigurationCategory);
  }

  /**
   * Returns a request builder for creating a `PayrollConfigurationCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollConfigurationCategory`.
   */
  create(entity: PayrollConfigurationCategory): CreateRequestBuilder<PayrollConfigurationCategory> {
    return new CreateRequestBuilder(PayrollConfigurationCategory, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollConfigurationCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollConfigurationCategory`.
   */
  update(entity: PayrollConfigurationCategory): UpdateRequestBuilder<PayrollConfigurationCategory> {
    return new UpdateRequestBuilder(PayrollConfigurationCategory, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollConfigurationCategory`.
   * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategory.payrollSystemConfigurationExternalCode]].
   * @param externalCode Key property. See [[PayrollConfigurationCategory.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PayrollConfigurationCategory`.
   */
  delete(payrollSystemConfigurationExternalCode: string, externalCode: string): DeleteRequestBuilder<PayrollConfigurationCategory>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollConfigurationCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollConfigurationCategory` by taking the entity as a parameter.
   */
  delete(entity: PayrollConfigurationCategory): DeleteRequestBuilder<PayrollConfigurationCategory>;
  delete(payrollSystemConfigurationExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<PayrollConfigurationCategory> {
    return new DeleteRequestBuilder(PayrollConfigurationCategory, payrollSystemConfigurationExternalCodeOrEntity instanceof PayrollConfigurationCategory ? payrollSystemConfigurationExternalCodeOrEntity : {
      PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
