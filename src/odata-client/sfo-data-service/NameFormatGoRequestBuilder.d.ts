import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NameFormatGo } from './NameFormatGo';
/**
 * Request builder class for operations supported on the [[NameFormatGo]] entity.
 */
export declare class NameFormatGoRequestBuilder extends RequestBuilder<NameFormatGo> {
    /**
     * Returns a request builder for retrieving one `NameFormatGo` entity based on its keys.
     * @param externalCode Key property. See [[NameFormatGo.externalCode]].
     * @returns A request builder for creating requests to retrieve one `NameFormatGo` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<NameFormatGo>;
    /**
     * Returns a request builder for querying all `NameFormatGo` entities.
     * @returns A request builder for creating requests to retrieve all `NameFormatGo` entities.
     */
    getAll(): GetAllRequestBuilder<NameFormatGo>;
}
//# sourceMappingURL=NameFormatGoRequestBuilder.d.ts.map