import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CompanyProvisioner } from './CompanyProvisioner';
/**
 * Request builder class for operations supported on the [[CompanyProvisioner]] entity.
 */
export declare class CompanyProvisionerRequestBuilder extends RequestBuilder<CompanyProvisioner> {
    /**
     * Returns a request builder for retrieving one `CompanyProvisioner` entity based on its keys.
     * @param id Key property. See [[CompanyProvisioner.id]].
     * @returns A request builder for creating requests to retrieve one `CompanyProvisioner` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<CompanyProvisioner>;
    /**
     * Returns a request builder for querying all `CompanyProvisioner` entities.
     * @returns A request builder for creating requests to retrieve all `CompanyProvisioner` entities.
     */
    getAll(): GetAllRequestBuilder<CompanyProvisioner>;
}
//# sourceMappingURL=CompanyProvisionerRequestBuilder.d.ts.map