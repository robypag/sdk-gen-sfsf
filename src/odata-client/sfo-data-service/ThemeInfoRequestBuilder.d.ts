import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ThemeInfo } from './ThemeInfo';
/**
 * Request builder class for operations supported on the [[ThemeInfo]] entity.
 */
export declare class ThemeInfoRequestBuilder extends RequestBuilder<ThemeInfo> {
    /**
     * Returns a request builder for retrieving one `ThemeInfo` entity based on its keys.
     * @param id Key property. See [[ThemeInfo.id]].
     * @returns A request builder for creating requests to retrieve one `ThemeInfo` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<ThemeInfo>;
    /**
     * Returns a request builder for querying all `ThemeInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ThemeInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ThemeInfo>;
}
//# sourceMappingURL=ThemeInfoRequestBuilder.d.ts.map