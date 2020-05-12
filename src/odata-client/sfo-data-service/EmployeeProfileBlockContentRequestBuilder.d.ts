import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileBlockContent } from './EmployeeProfileBlockContent';
/**
 * Request builder class for operations supported on the [[EmployeeProfileBlockContent]] entity.
 */
export declare class EmployeeProfileBlockContentRequestBuilder extends RequestBuilder<EmployeeProfileBlockContent> {
    /**
     * Returns a request builder for retrieving one `EmployeeProfileBlockContent` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSectionConfigCode]].
     * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSubSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileBlockContent.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileBlockContent` entity based on its keys.
     */
    getByKey(employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, employeeProfileSubSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileBlockContent>;
    /**
     * Returns a request builder for querying all `EmployeeProfileBlockContent` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileBlockContent` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeProfileBlockContent>;
}
//# sourceMappingURL=EmployeeProfileBlockContentRequestBuilder.d.ts.map