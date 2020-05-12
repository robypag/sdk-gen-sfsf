import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PersonTypeUsage } from './PersonTypeUsage';
/**
 * Request builder class for operations supported on the [[PersonTypeUsage]] entity.
 */
export declare class PersonTypeUsageRequestBuilder extends RequestBuilder<PersonTypeUsage> {
    /**
     * Returns a request builder for retrieving one `PersonTypeUsage` entity based on its keys.
     * @param externalCode Key property. See [[PersonTypeUsage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PersonTypeUsage` entity based on its keys.
     */
    getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<PersonTypeUsage>;
    /**
     * Returns a request builder for querying all `PersonTypeUsage` entities.
     * @returns A request builder for creating requests to retrieve all `PersonTypeUsage` entities.
     */
    getAll(): GetAllRequestBuilder<PersonTypeUsage>;
}
//# sourceMappingURL=PersonTypeUsageRequestBuilder.d.ts.map