import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeePayrollRunResults } from './EmployeePayrollRunResults';
/**
 * Request builder class for operations supported on the [[EmployeePayrollRunResults]] entity.
 */
export declare class EmployeePayrollRunResultsRequestBuilder extends RequestBuilder<EmployeePayrollRunResults> {
    /**
     * Returns a request builder for retrieving one `EmployeePayrollRunResults` entity based on its keys.
     * @param externalCode Key property. See [[EmployeePayrollRunResults.externalCode]].
     * @param mdfSystemEffectiveStartDate Key property. See [[EmployeePayrollRunResults.mdfSystemEffectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `EmployeePayrollRunResults` entity based on its keys.
     */
    getByKey(externalCode: string, mdfSystemEffectiveStartDate: Moment): GetByKeyRequestBuilder<EmployeePayrollRunResults>;
    /**
     * Returns a request builder for querying all `EmployeePayrollRunResults` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeePayrollRunResults` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeePayrollRunResults>;
    /**
     * Returns a request builder for creating a `EmployeePayrollRunResults` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeePayrollRunResults`.
     */
    create(entity: EmployeePayrollRunResults): CreateRequestBuilder<EmployeePayrollRunResults>;
    /**
     * Returns a request builder for updating an entity of type `EmployeePayrollRunResults`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeePayrollRunResults`.
     */
    update(entity: EmployeePayrollRunResults): UpdateRequestBuilder<EmployeePayrollRunResults>;
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
}
//# sourceMappingURL=EmployeePayrollRunResultsRequestBuilder.d.ts.map