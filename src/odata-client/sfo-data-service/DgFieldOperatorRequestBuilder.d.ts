import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgFieldOperator } from './DgFieldOperator';
/**
 * Request builder class for operations supported on the [[DgFieldOperator]] entity.
 */
export declare class DgFieldOperatorRequestBuilder extends RequestBuilder<DgFieldOperator> {
    /**
     * Returns a request builder for retrieving one `DgFieldOperator` entity based on its keys.
     * @param token Key property. See [[DgFieldOperator.token]].
     * @returns A request builder for creating requests to retrieve one `DgFieldOperator` entity based on its keys.
     */
    getByKey(token: string): GetByKeyRequestBuilder<DgFieldOperator>;
    /**
     * Returns a request builder for querying all `DgFieldOperator` entities.
     * @returns A request builder for creating requests to retrieve all `DgFieldOperator` entities.
     */
    getAll(): GetAllRequestBuilder<DgFieldOperator>;
}
//# sourceMappingURL=DgFieldOperatorRequestBuilder.d.ts.map