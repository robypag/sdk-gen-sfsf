import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoBra } from './PerGlobalInfoBra';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoBra]] entity.
 */
export declare class PerGlobalInfoBraRequestBuilder extends RequestBuilder<PerGlobalInfoBra> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoBra` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoBra.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoBra.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoBra.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoBra` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoBra>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoBra` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoBra` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoBra>;
}
//# sourceMappingURL=PerGlobalInfoBraRequestBuilder.d.ts.map