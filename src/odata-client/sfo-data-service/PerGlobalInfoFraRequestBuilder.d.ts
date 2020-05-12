import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoFra } from './PerGlobalInfoFra';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoFra]] entity.
 */
export declare class PerGlobalInfoFraRequestBuilder extends RequestBuilder<PerGlobalInfoFra> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoFra` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoFra.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoFra.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoFra` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoFra>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoFra` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoFra` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoFra>;
}
//# sourceMappingURL=PerGlobalInfoFraRequestBuilder.d.ts.map