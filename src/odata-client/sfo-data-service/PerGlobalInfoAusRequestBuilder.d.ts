import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoAus } from './PerGlobalInfoAus';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoAus]] entity.
 */
export declare class PerGlobalInfoAusRequestBuilder extends RequestBuilder<PerGlobalInfoAus> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoAus` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoAus.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoAus.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoAus.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoAus` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoAus>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoAus` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoAus` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoAus>;
}
//# sourceMappingURL=PerGlobalInfoAusRequestBuilder.d.ts.map