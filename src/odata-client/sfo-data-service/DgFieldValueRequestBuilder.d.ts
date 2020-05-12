import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgFieldValue } from './DgFieldValue';
/**
 * Request builder class for operations supported on the [[DgFieldValue]] entity.
 */
export declare class DgFieldValueRequestBuilder extends RequestBuilder<DgFieldValue> {
    /**
     * Returns a request builder for retrieving one `DgFieldValue` entity based on its keys.
     * @param fieldValue Key property. See [[DgFieldValue.fieldValue]].
     * @returns A request builder for creating requests to retrieve one `DgFieldValue` entity based on its keys.
     */
    getByKey(fieldValue: string): GetByKeyRequestBuilder<DgFieldValue>;
    /**
     * Returns a request builder for querying all `DgFieldValue` entities.
     * @returns A request builder for creating requests to retrieve all `DgFieldValue` entities.
     */
    getAll(): GetAllRequestBuilder<DgFieldValue>;
}
//# sourceMappingURL=DgFieldValueRequestBuilder.d.ts.map