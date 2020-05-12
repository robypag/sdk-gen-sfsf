import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgField } from './DgField';
/**
 * Request builder class for operations supported on the [[DgField]] entity.
 */
export declare class DgFieldRequestBuilder extends RequestBuilder<DgField> {
    /**
     * Returns a request builder for retrieving one `DgField` entity based on its keys.
     * @param name Key property. See [[DgField.name]].
     * @returns A request builder for creating requests to retrieve one `DgField` entity based on its keys.
     */
    getByKey(name: string): GetByKeyRequestBuilder<DgField>;
    /**
     * Returns a request builder for querying all `DgField` entities.
     * @returns A request builder for creating requests to retrieve all `DgField` entities.
     */
    getAll(): GetAllRequestBuilder<DgField>;
}
//# sourceMappingURL=DgFieldRequestBuilder.d.ts.map