import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileSubSectionConfig } from './EmployeeProfileSubSectionConfig';
/**
 * Request builder class for operations supported on the [[EmployeeProfileSubSectionConfig]] entity.
 */
export declare class EmployeeProfileSubSectionConfigRequestBuilder extends RequestBuilder<EmployeeProfileSubSectionConfig> {
    /**
     * Returns a request builder for retrieving one `EmployeeProfileSubSectionConfig` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfilePageConfigCode]].
     * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfileSectionConfigCode]].
     * @param code Key property. See [[EmployeeProfileSubSectionConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileSubSectionConfig` entity based on its keys.
     */
    getByKey(employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileSubSectionConfig>;
    /**
     * Returns a request builder for querying all `EmployeeProfileSubSectionConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileSubSectionConfig` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeProfileSubSectionConfig>;
}
//# sourceMappingURL=EmployeeProfileSubSectionConfigRequestBuilder.d.ts.map