import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ThemeConfig } from './ThemeConfig';
/**
 * Request builder class for operations supported on the [[ThemeConfig]] entity.
 */
export declare class ThemeConfigRequestBuilder extends RequestBuilder<ThemeConfig> {
    /**
     * Returns a request builder for retrieving one `ThemeConfig` entity based on its keys.
     * @param id Key property. See [[ThemeConfig.id]].
     * @returns A request builder for creating requests to retrieve one `ThemeConfig` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<ThemeConfig>;
    /**
     * Returns a request builder for querying all `ThemeConfig` entities.
     * @returns A request builder for creating requests to retrieve all `ThemeConfig` entities.
     */
    getAll(): GetAllRequestBuilder<ThemeConfig>;
}
//# sourceMappingURL=ThemeConfigRequestBuilder.d.ts.map