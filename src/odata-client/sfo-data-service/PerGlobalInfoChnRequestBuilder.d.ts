import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoChn } from './PerGlobalInfoChn';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoChn]] entity.
 */
export declare class PerGlobalInfoChnRequestBuilder extends RequestBuilder<PerGlobalInfoChn> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoChn` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoChn.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoChn.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoChn.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoChn` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoChn>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoChn` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoChn` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoChn>;
}
//# sourceMappingURL=PerGlobalInfoChnRequestBuilder.d.ts.map