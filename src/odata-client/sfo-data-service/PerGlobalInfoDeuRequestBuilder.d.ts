import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoDeu } from './PerGlobalInfoDeu';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoDeu]] entity.
 */
export declare class PerGlobalInfoDeuRequestBuilder extends RequestBuilder<PerGlobalInfoDeu> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoDeu` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoDeu.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoDeu.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoDeu.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoDeu` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoDeu>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoDeu` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoDeu` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoDeu>;
}
//# sourceMappingURL=PerGlobalInfoDeuRequestBuilder.d.ts.map