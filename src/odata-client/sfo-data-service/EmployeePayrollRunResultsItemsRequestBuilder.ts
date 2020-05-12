/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeePayrollRunResultsItems } from './EmployeePayrollRunResultsItems';

/**
 * Request builder class for operations supported on the [[EmployeePayrollRunResultsItems]] entity.
 */
export class EmployeePayrollRunResultsItemsRequestBuilder extends RequestBuilder<EmployeePayrollRunResultsItems> {
  /**
   * Returns a request builder for retrieving one `EmployeePayrollRunResultsItems` entity based on its keys.
   * @param employeePayrollRunResultsExternalCode Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsExternalCode]].
   * @param employeePayrollRunResultsMdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsMdfSystemEffectiveStartDate]].
   * @param externalCode Key property. See [[EmployeePayrollRunResultsItems.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeePayrollRunResultsItems` entity based on its keys.
   */
  getByKey(employeePayrollRunResultsExternalCode: string, employeePayrollRunResultsMdfSystemEffectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<EmployeePayrollRunResultsItems> {
    return new GetByKeyRequestBuilder(EmployeePayrollRunResultsItems, {
      EmployeePayrollRunResults_externalCode: employeePayrollRunResultsExternalCode,
      EmployeePayrollRunResults_mdfSystemEffectiveStartDate: employeePayrollRunResultsMdfSystemEffectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeePayrollRunResultsItems` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeePayrollRunResultsItems` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeePayrollRunResultsItems> {
    return new GetAllRequestBuilder(EmployeePayrollRunResultsItems);
  }

  /**
   * Returns a request builder for creating a `EmployeePayrollRunResultsItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeePayrollRunResultsItems`.
   */
  create(entity: EmployeePayrollRunResultsItems): CreateRequestBuilder<EmployeePayrollRunResultsItems> {
    return new CreateRequestBuilder(EmployeePayrollRunResultsItems, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeePayrollRunResultsItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeePayrollRunResultsItems`.
   */
  update(entity: EmployeePayrollRunResultsItems): UpdateRequestBuilder<EmployeePayrollRunResultsItems> {
    return new UpdateRequestBuilder(EmployeePayrollRunResultsItems, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeePayrollRunResultsItems`.
   * @param employeePayrollRunResultsExternalCode Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsExternalCode]].
   * @param employeePayrollRunResultsMdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResultsItems.employeePayrollRunResultsMdfSystemEffectiveStartDate]].
   * @param externalCode Key property. See [[EmployeePayrollRunResultsItems.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeePayrollRunResultsItems`.
   */
  delete(employeePayrollRunResultsExternalCode: string, employeePayrollRunResultsMdfSystemEffectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<EmployeePayrollRunResultsItems>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeePayrollRunResultsItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePayrollRunResultsItems` by taking the entity as a parameter.
   */
  delete(entity: EmployeePayrollRunResultsItems): DeleteRequestBuilder<EmployeePayrollRunResultsItems>;
  delete(employeePayrollRunResultsExternalCodeOrEntity: any, employeePayrollRunResultsMdfSystemEffectiveStartDate?: Moment, externalCode?: string): DeleteRequestBuilder<EmployeePayrollRunResultsItems> {
    return new DeleteRequestBuilder(EmployeePayrollRunResultsItems, employeePayrollRunResultsExternalCodeOrEntity instanceof EmployeePayrollRunResultsItems ? employeePayrollRunResultsExternalCodeOrEntity : {
      EmployeePayrollRunResults_externalCode: employeePayrollRunResultsExternalCodeOrEntity!,
      EmployeePayrollRunResults_mdfSystemEffectiveStartDate: employeePayrollRunResultsMdfSystemEffectiveStartDate!,
      externalCode: externalCode!
    });
  }
}
