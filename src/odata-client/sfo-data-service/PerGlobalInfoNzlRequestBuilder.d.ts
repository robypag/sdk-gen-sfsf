import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoNzl } from './PerGlobalInfoNzl';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoNzl]] entity.
 */
export declare class PerGlobalInfoNzlRequestBuilder extends RequestBuilder<PerGlobalInfoNzl> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoNzl` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoNzl.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoNzl.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoNzl.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoNzl` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoNzl>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoNzl` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoNzl` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoNzl>;
}
//# sourceMappingURL=PerGlobalInfoNzlRequestBuilder.d.ts.map