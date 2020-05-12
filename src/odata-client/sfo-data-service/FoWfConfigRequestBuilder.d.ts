import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoWfConfig } from './FoWfConfig';
/**
 * Request builder class for operations supported on the [[FoWfConfig]] entity.
 */
export declare class FoWfConfigRequestBuilder extends RequestBuilder<FoWfConfig> {
    /**
     * Returns a request builder for retrieving one `FoWfConfig` entity based on its keys.
     * @param externalCode Key property. See [[FoWfConfig.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FoWfConfig` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<FoWfConfig>;
    /**
     * Returns a request builder for querying all `FoWfConfig` entities.
     * @returns A request builder for creating requests to retrieve all `FoWfConfig` entities.
     */
    getAll(): GetAllRequestBuilder<FoWfConfig>;
}
//# sourceMappingURL=FoWfConfigRequestBuilder.d.ts.map