import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearnerAddressInfo } from './ExternalLearnerAddressInfo';
/**
 * Request builder class for operations supported on the [[ExternalLearnerAddressInfo]] entity.
 */
export declare class ExternalLearnerAddressInfoRequestBuilder extends RequestBuilder<ExternalLearnerAddressInfo> {
    /**
     * Returns a request builder for retrieving one `ExternalLearnerAddressInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerAddressInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerAddressInfo` entity based on its keys.
     */
    getByKey(itemId: BigNumber): GetByKeyRequestBuilder<ExternalLearnerAddressInfo>;
    /**
     * Returns a request builder for querying all `ExternalLearnerAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerAddressInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalLearnerAddressInfo>;
    /**
     * Returns a request builder for creating a `ExternalLearnerAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerAddressInfo`.
     */
    create(entity: ExternalLearnerAddressInfo): CreateRequestBuilder<ExternalLearnerAddressInfo>;
}
//# sourceMappingURL=ExternalLearnerAddressInfoRequestBuilder.d.ts.map