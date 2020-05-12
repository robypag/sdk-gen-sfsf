import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoEsp } from './PerGlobalInfoEsp';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoEsp]] entity.
 */
export declare class PerGlobalInfoEspRequestBuilder extends RequestBuilder<PerGlobalInfoEsp> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoEsp` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoEsp.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoEsp.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoEsp.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoEsp` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoEsp>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoEsp` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoEsp` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoEsp>;
}
//# sourceMappingURL=PerGlobalInfoEspRequestBuilder.d.ts.map