import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoSau } from './PerGlobalInfoSau';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoSau]] entity.
 */
export declare class PerGlobalInfoSauRequestBuilder extends RequestBuilder<PerGlobalInfoSau> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoSau` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoSau.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoSau.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoSau.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoSau` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoSau>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoSau` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoSau` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoSau>;
}
//# sourceMappingURL=PerGlobalInfoSauRequestBuilder.d.ts.map