import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoSgp } from './PerGlobalInfoSgp';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoSgp]] entity.
 */
export declare class PerGlobalInfoSgpRequestBuilder extends RequestBuilder<PerGlobalInfoSgp> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoSgp` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoSgp.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoSgp.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoSgp.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoSgp` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoSgp>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoSgp` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoSgp` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoSgp>;
}
//# sourceMappingURL=PerGlobalInfoSgpRequestBuilder.d.ts.map