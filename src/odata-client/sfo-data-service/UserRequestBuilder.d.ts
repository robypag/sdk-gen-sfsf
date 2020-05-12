import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { User } from './User';
/**
 * Request builder class for operations supported on the [[User]] entity.
 */
export declare class UserRequestBuilder extends RequestBuilder<User> {
    /**
     * Returns a request builder for retrieving one `User` entity based on its keys.
     * @param userId Key property. See [[User.userId]].
     * @returns A request builder for creating requests to retrieve one `User` entity based on its keys.
     */
    getByKey(userId: string): GetByKeyRequestBuilder<User>;
    /**
     * Returns a request builder for querying all `User` entities.
     * @returns A request builder for creating requests to retrieve all `User` entities.
     */
    getAll(): GetAllRequestBuilder<User>;
    /**
     * Returns a request builder for creating a `User` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `User`.
     */
    create(entity: User): CreateRequestBuilder<User>;
    /**
     * Returns a request builder for updating an entity of type `User`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `User`.
     */
    update(entity: User): UpdateRequestBuilder<User>;
}
//# sourceMappingURL=UserRequestBuilder.d.ts.map