/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayrollConfigurationCategoryLink } from './PayrollConfigurationCategoryLink';

/**
 * Request builder class for operations supported on the [[PayrollConfigurationCategoryLink]] entity.
 */
export class PayrollConfigurationCategoryLinkRequestBuilder extends RequestBuilder<PayrollConfigurationCategoryLink> {
  /**
   * Returns a request builder for retrieving one `PayrollConfigurationCategoryLink` entity based on its keys.
   * @param payrollConfigurationCategoryExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollConfigurationCategoryExternalCode]].
   * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollSystemConfigurationExternalCode]].
   * @param externalCode Key property. See [[PayrollConfigurationCategoryLink.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PayrollConfigurationCategoryLink` entity based on its keys.
   */
  getByKey(payrollConfigurationCategoryExternalCode: string, payrollSystemConfigurationExternalCode: string, externalCode: string): GetByKeyRequestBuilder<PayrollConfigurationCategoryLink> {
    return new GetByKeyRequestBuilder(PayrollConfigurationCategoryLink, {
      PayrollConfigurationCategory_externalCode: payrollConfigurationCategoryExternalCode,
      PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PayrollConfigurationCategoryLink` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollConfigurationCategoryLink` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollConfigurationCategoryLink> {
    return new GetAllRequestBuilder(PayrollConfigurationCategoryLink);
  }

  /**
   * Returns a request builder for creating a `PayrollConfigurationCategoryLink` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollConfigurationCategoryLink`.
   */
  create(entity: PayrollConfigurationCategoryLink): CreateRequestBuilder<PayrollConfigurationCategoryLink> {
    return new CreateRequestBuilder(PayrollConfigurationCategoryLink, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollConfigurationCategoryLink`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollConfigurationCategoryLink`.
   */
  update(entity: PayrollConfigurationCategoryLink): UpdateRequestBuilder<PayrollConfigurationCategoryLink> {
    return new UpdateRequestBuilder(PayrollConfigurationCategoryLink, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollConfigurationCategoryLink`.
   * @param payrollConfigurationCategoryExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollConfigurationCategoryExternalCode]].
   * @param payrollSystemConfigurationExternalCode Key property. See [[PayrollConfigurationCategoryLink.payrollSystemConfigurationExternalCode]].
   * @param externalCode Key property. See [[PayrollConfigurationCategoryLink.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PayrollConfigurationCategoryLink`.
   */
  delete(payrollConfigurationCategoryExternalCode: string, payrollSystemConfigurationExternalCode: string, externalCode: string): DeleteRequestBuilder<PayrollConfigurationCategoryLink>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollConfigurationCategoryLink`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollConfigurationCategoryLink` by taking the entity as a parameter.
   */
  delete(entity: PayrollConfigurationCategoryLink): DeleteRequestBuilder<PayrollConfigurationCategoryLink>;
  delete(payrollConfigurationCategoryExternalCodeOrEntity: any, payrollSystemConfigurationExternalCode?: string, externalCode?: string): DeleteRequestBuilder<PayrollConfigurationCategoryLink> {
    return new DeleteRequestBuilder(PayrollConfigurationCategoryLink, payrollConfigurationCategoryExternalCodeOrEntity instanceof PayrollConfigurationCategoryLink ? payrollConfigurationCategoryExternalCodeOrEntity : {
      PayrollConfigurationCategory_externalCode: payrollConfigurationCategoryExternalCodeOrEntity!,
      PayrollSystemConfiguration_externalCode: payrollSystemConfigurationExternalCode!,
      externalCode: externalCode!
    });
  }
}
