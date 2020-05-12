import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { UserRewardInfo } from './UserRewardInfo';
/**
 * Request builder class for operations supported on the [[UserRewardInfo]] entity.
 */
export declare class UserRewardInfoRequestBuilder extends RequestBuilder<UserRewardInfo> {
    /**
     * Returns a request builder for retrieving one `UserRewardInfo` entity based on its keys.
     * @param userId Key property. See [[UserRewardInfo.userId]].
     * @returns A request builder for creating requests to retrieve one `UserRewardInfo` entity based on its keys.
     */
    getByKey(userId: string): GetByKeyRequestBuilder<UserRewardInfo>;
    /**
     * Returns a request builder for querying all `UserRewardInfo` entities.
     * @returns A request builder for creating requests to retrieve all `UserRewardInfo` entities.
     */
    getAll(): GetAllRequestBuilder<UserRewardInfo>;
}
//# sourceMappingURL=UserRewardInfoRequestBuilder.d.ts.map