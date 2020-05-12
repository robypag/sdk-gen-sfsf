import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileBlockLink } from './EmployeeProfileBlockLink';
/**
 * Request builder class for operations supported on the [[EmployeeProfileBlockLink]] entity.
 */
export declare class EmployeeProfileBlockLinkRequestBuilder extends RequestBuilder<EmployeeProfileBlockLink> {
    /**
     * Returns a request builder for retrieving one `EmployeeProfileBlockLink` entity based on its keys.
     * @param employeeProfileBlockContentCode Key property. See [[EmployeeProfileBlockLink.employeeProfileBlockContentCode]].
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfileSectionConfigCode]].
     * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileBlockLink.employeeProfileSubSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileBlockLink.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileBlockLink` entity based on its keys.
     */
    getByKey(employeeProfileBlockContentCode: string, employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, employeeProfileSubSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileBlockLink>;
    /**
     * Returns a request builder for querying all `EmployeeProfileBlockLink` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileBlockLink` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeProfileBlockLink>;
}
//# sourceMappingURL=EmployeeProfileBlockLinkRequestBuilder.d.ts.map