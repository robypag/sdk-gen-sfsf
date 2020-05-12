import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearnerPhoneInfo } from './ExternalLearnerPhoneInfo';
/**
 * Request builder class for operations supported on the [[ExternalLearnerPhoneInfo]] entity.
 */
export declare class ExternalLearnerPhoneInfoRequestBuilder extends RequestBuilder<ExternalLearnerPhoneInfo> {
    /**
     * Returns a request builder for retrieving one `ExternalLearnerPhoneInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerPhoneInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerPhoneInfo` entity based on its keys.
     */
    getByKey(itemId: BigNumber): GetByKeyRequestBuilder<ExternalLearnerPhoneInfo>;
    /**
     * Returns a request builder for querying all `ExternalLearnerPhoneInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerPhoneInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalLearnerPhoneInfo>;
    /**
     * Returns a request builder for creating a `ExternalLearnerPhoneInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPhoneInfo`.
     */
    create(entity: ExternalLearnerPhoneInfo): CreateRequestBuilder<ExternalLearnerPhoneInfo>;
}
//# sourceMappingURL=ExternalLearnerPhoneInfoRequestBuilder.d.ts.map