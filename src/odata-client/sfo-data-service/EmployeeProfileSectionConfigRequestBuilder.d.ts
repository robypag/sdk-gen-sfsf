import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileSectionConfig } from './EmployeeProfileSectionConfig';
/**
 * Request builder class for operations supported on the [[EmployeeProfileSectionConfig]] entity.
 */
export declare class EmployeeProfileSectionConfigRequestBuilder extends RequestBuilder<EmployeeProfileSectionConfig> {
    /**
     * Returns a request builder for retrieving one `EmployeeProfileSectionConfig` entity based on its keys.
     * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSectionConfig.employeeProfilePageConfigCode]].
     * @param code Key property. See [[EmployeeProfileSectionConfig.code]].
     * @returns A request builder for creating requests to retrieve one `EmployeeProfileSectionConfig` entity based on its keys.
     */
    getByKey(employeeProfilePageConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileSectionConfig>;
    /**
     * Returns a request builder for querying all `EmployeeProfileSectionConfig` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeProfileSectionConfig` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeProfileSectionConfig>;
}
//# sourceMappingURL=EmployeeProfileSectionConfigRequestBuilder.d.ts.map