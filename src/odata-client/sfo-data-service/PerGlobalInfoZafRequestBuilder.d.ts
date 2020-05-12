import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoZaf } from './PerGlobalInfoZaf';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoZaf]] entity.
 */
export declare class PerGlobalInfoZafRequestBuilder extends RequestBuilder<PerGlobalInfoZaf> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoZaf` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoZaf.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoZaf.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoZaf.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoZaf` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoZaf>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoZaf` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoZaf` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoZaf>;
}
//# sourceMappingURL=PerGlobalInfoZafRequestBuilder.d.ts.map