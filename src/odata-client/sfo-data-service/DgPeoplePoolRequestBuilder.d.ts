import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgPeoplePool } from './DgPeoplePool';
/**
 * Request builder class for operations supported on the [[DgPeoplePool]] entity.
 */
export declare class DgPeoplePoolRequestBuilder extends RequestBuilder<DgPeoplePool> {
    /**
     * Returns a request builder for retrieving one `DgPeoplePool` entity based on its keys.
     * @param peoplePoolId Key property. See [[DgPeoplePool.peoplePoolId]].
     * @returns A request builder for creating requests to retrieve one `DgPeoplePool` entity based on its keys.
     */
    getByKey(peoplePoolId: string): GetByKeyRequestBuilder<DgPeoplePool>;
    /**
     * Returns a request builder for querying all `DgPeoplePool` entities.
     * @returns A request builder for creating requests to retrieve all `DgPeoplePool` entities.
     */
    getAll(): GetAllRequestBuilder<DgPeoplePool>;
}
//# sourceMappingURL=DgPeoplePoolRequestBuilder.d.ts.map