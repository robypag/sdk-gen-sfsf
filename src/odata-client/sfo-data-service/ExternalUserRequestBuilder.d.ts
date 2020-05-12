import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalUser } from './ExternalUser';
/**
 * Request builder class for operations supported on the [[ExternalUser]] entity.
 */
export declare class ExternalUserRequestBuilder extends RequestBuilder<ExternalUser> {
    /**
     * Returns a request builder for retrieving one `ExternalUser` entity based on its keys.
     * @param userId Key property. See [[ExternalUser.userId]].
     * @returns A request builder for creating requests to retrieve one `ExternalUser` entity based on its keys.
     */
    getByKey(userId: string): GetByKeyRequestBuilder<ExternalUser>;
    /**
     * Returns a request builder for querying all `ExternalUser` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalUser` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalUser>;
    /**
     * Returns a request builder for creating a `ExternalUser` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalUser`.
     */
    create(entity: ExternalUser): CreateRequestBuilder<ExternalUser>;
}
//# sourceMappingURL=ExternalUserRequestBuilder.d.ts.map