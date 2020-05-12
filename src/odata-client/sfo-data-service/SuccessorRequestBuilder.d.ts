import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Successor } from './Successor';
/**
 * Request builder class for operations supported on the [[Successor]] entity.
 */
export declare class SuccessorRequestBuilder extends RequestBuilder<Successor> {
    /**
     * Returns a request builder for retrieving one `Successor` entity based on its keys.
     * @param id Key property. See [[Successor.id]].
     * @returns A request builder for creating requests to retrieve one `Successor` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<Successor>;
    /**
     * Returns a request builder for querying all `Successor` entities.
     * @returns A request builder for creating requests to retrieve all `Successor` entities.
     */
    getAll(): GetAllRequestBuilder<Successor>;
}
//# sourceMappingURL=SuccessorRequestBuilder.d.ts.map