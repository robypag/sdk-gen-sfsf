import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoChe } from './PerGlobalInfoChe';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoChe]] entity.
 */
export declare class PerGlobalInfoCheRequestBuilder extends RequestBuilder<PerGlobalInfoChe> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoChe` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoChe.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoChe.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoChe.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoChe` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoChe>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoChe` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoChe` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoChe>;
}
//# sourceMappingURL=PerGlobalInfoCheRequestBuilder.d.ts.map