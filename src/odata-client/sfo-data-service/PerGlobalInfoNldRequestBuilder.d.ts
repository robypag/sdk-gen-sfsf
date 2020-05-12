import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoNld } from './PerGlobalInfoNld';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoNld]] entity.
 */
export declare class PerGlobalInfoNldRequestBuilder extends RequestBuilder<PerGlobalInfoNld> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoNld` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoNld.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoNld.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoNld.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoNld` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoNld>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoNld` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoNld` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoNld>;
}
//# sourceMappingURL=PerGlobalInfoNldRequestBuilder.d.ts.map