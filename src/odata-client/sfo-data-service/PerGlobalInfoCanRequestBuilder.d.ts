import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoCan } from './PerGlobalInfoCan';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoCan]] entity.
 */
export declare class PerGlobalInfoCanRequestBuilder extends RequestBuilder<PerGlobalInfoCan> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoCan` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoCan.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoCan.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoCan.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoCan` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoCan>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoCan` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoCan` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoCan>;
}
//# sourceMappingURL=PerGlobalInfoCanRequestBuilder.d.ts.map