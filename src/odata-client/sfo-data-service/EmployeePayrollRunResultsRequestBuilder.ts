/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeePayrollRunResults } from './EmployeePayrollRunResults';

/**
 * Request builder class for operations supported on the [[EmployeePayrollRunResults]] entity.
 */
export class EmployeePayrollRunResultsRequestBuilder extends RequestBuilder<EmployeePayrollRunResults> {
  /**
   * Returns a request builder for retrieving one `EmployeePayrollRunResults` entity based on its keys.
   * @param externalCode Key property. See [[EmployeePayrollRunResults.externalCode]].
   * @param mdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResults.mdfSystemEffectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `EmployeePayrollRunResults` entity based on its keys.
   */
  getByKey(externalCode: string, mdfSystemEffectiveStartDate: Moment): GetByKeyRequestBuilder<EmployeePayrollRunResults> {
    return new GetByKeyRequestBuilder(EmployeePayrollRunResults, {
      externalCode: externalCode,
      mdfSystemEffectiveStartDate: mdfSystemEffectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `EmployeePayrollRunResults` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeePayrollRunResults` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeePayrollRunResults> {
    return new GetAllRequestBuilder(EmployeePayrollRunResults);
  }

  /**
   * Returns a request builder for creating a `EmployeePayrollRunResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeePayrollRunResults`.
   */
  create(entity: EmployeePayrollRunResults): CreateRequestBuilder<EmployeePayrollRunResults> {
    return new CreateRequestBuilder(EmployeePayrollRunResults, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeePayrollRunResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeePayrollRunResults`.
   */
  update(entity: EmployeePayrollRunResults): UpdateRequestBuilder<EmployeePayrollRunResults> {
    return new UpdateRequestBuilder(EmployeePayrollRunResults, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeePayrollRunResults`.
   * @param externalCode Key property. See [[EmployeePayrollRunResults.externalCode]].
   * @param mdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResults.mdfSystemEffectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `EmployeePayrollRunResults`.
   */
  delete(externalCode: string, mdfSystemEffectiveStartDate: Moment): DeleteRequestBuilder<EmployeePayrollRunResults>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeePayrollRunResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeePayrollRunResults` by taking the entity as a parameter.
   */
  delete(entity: EmployeePayrollRunResults): DeleteRequestBuilder<EmployeePayrollRunResults>;
  delete(externalCodeOrEntity: any, mdfSystemEffectiveStartDate?: Moment): DeleteRequestBuilder<EmployeePayrollRunResults> {
    return new DeleteRequestBuilder(EmployeePayrollRunResults, externalCodeOrEntity instanceof EmployeePayrollRunResults ? externalCodeOrEntity : {
      externalCode: externalCodeOrEntity!,
      mdfSystemEffectiveStartDate: mdfSystemEffectiveStartDate!
    });
  }
}
