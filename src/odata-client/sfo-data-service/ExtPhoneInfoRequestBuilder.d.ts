import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExtPhoneInfo } from './ExtPhoneInfo';
/**
 * Request builder class for operations supported on the [[ExtPhoneInfo]] entity.
 */
export declare class ExtPhoneInfoRequestBuilder extends RequestBuilder<ExtPhoneInfo> {
    /**
     * Returns a request builder for retrieving one `ExtPhoneInfo` entity based on its keys.
     * @param phoneInfoId Key property. See [[ExtPhoneInfo.phoneInfoId]].
     * @returns A request builder for creating requests to retrieve one `ExtPhoneInfo` entity based on its keys.
     */
    getByKey(phoneInfoId: BigNumber): GetByKeyRequestBuilder<ExtPhoneInfo>;
    /**
     * Returns a request builder for querying all `ExtPhoneInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtPhoneInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ExtPhoneInfo>;
    /**
     * Returns a request builder for creating a `ExtPhoneInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtPhoneInfo`.
     */
    create(entity: ExtPhoneInfo): CreateRequestBuilder<ExtPhoneInfo>;
}
//# sourceMappingURL=ExtPhoneInfoRequestBuilder.d.ts.map