import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmEventAttribute } from './EmEventAttribute';
/**
 * Request builder class for operations supported on the [[EmEventAttribute]] entity.
 */
export declare class EmEventAttributeRequestBuilder extends RequestBuilder<EmEventAttribute> {
    /**
     * Returns a request builder for retrieving one `EmEventAttribute` entity based on its keys.
     * @param id Key property. See [[EmEventAttribute.id]].
     * @returns A request builder for creating requests to retrieve one `EmEventAttribute` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<EmEventAttribute>;
    /**
     * Returns a request builder for querying all `EmEventAttribute` entities.
     * @returns A request builder for creating requests to retrieve all `EmEventAttribute` entities.
     */
    getAll(): GetAllRequestBuilder<EmEventAttribute>;
    /**
     * Returns a request builder for creating a `EmEventAttribute` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmEventAttribute`.
     */
    create(entity: EmEventAttribute): CreateRequestBuilder<EmEventAttribute>;
}
//# sourceMappingURL=EmEventAttributeRequestBuilder.d.ts.map