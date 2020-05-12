import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { BadgeTemplates } from './BadgeTemplates';
/**
 * Request builder class for operations supported on the [[BadgeTemplates]] entity.
 */
export declare class BadgeTemplatesRequestBuilder extends RequestBuilder<BadgeTemplates> {
    /**
     * Returns a request builder for retrieving one `BadgeTemplates` entity based on its keys.
     * @param badgeId Key property. See [[BadgeTemplates.badgeId]].
     * @returns A request builder for creating requests to retrieve one `BadgeTemplates` entity based on its keys.
     */
    getByKey(badgeId: number): GetByKeyRequestBuilder<BadgeTemplates>;
    /**
     * Returns a request builder for querying all `BadgeTemplates` entities.
     * @returns A request builder for creating requests to retrieve all `BadgeTemplates` entities.
     */
    getAll(): GetAllRequestBuilder<BadgeTemplates>;
}
//# sourceMappingURL=BadgeTemplatesRequestBuilder.d.ts.map