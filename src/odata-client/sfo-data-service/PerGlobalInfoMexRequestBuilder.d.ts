import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoMex } from './PerGlobalInfoMex';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoMex]] entity.
 */
export declare class PerGlobalInfoMexRequestBuilder extends RequestBuilder<PerGlobalInfoMex> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoMex` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoMex.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoMex.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoMex.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoMex` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoMex>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoMex` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoMex` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoMex>;
}
//# sourceMappingURL=PerGlobalInfoMexRequestBuilder.d.ts.map