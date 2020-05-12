import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgFilter } from './DgFilter';
/**
 * Request builder class for operations supported on the [[DgFilter]] entity.
 */
export declare class DgFilterRequestBuilder extends RequestBuilder<DgFilter> {
    /**
     * Returns a request builder for retrieving one `DgFilter` entity based on its keys.
     * @param filterId Key property. See [[DgFilter.filterId]].
     * @returns A request builder for creating requests to retrieve one `DgFilter` entity based on its keys.
     */
    getByKey(filterId: string): GetByKeyRequestBuilder<DgFilter>;
    /**
     * Returns a request builder for querying all `DgFilter` entities.
     * @returns A request builder for creating requests to retrieve all `DgFilter` entities.
     */
    getAll(): GetAllRequestBuilder<DgFilter>;
}
//# sourceMappingURL=DgFilterRequestBuilder.d.ts.map