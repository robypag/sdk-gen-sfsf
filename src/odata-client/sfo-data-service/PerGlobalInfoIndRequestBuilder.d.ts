import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoInd } from './PerGlobalInfoInd';
/**
 * Request builder class for operations supported on the [[PerGlobalInfoInd]] entity.
 */
export declare class PerGlobalInfoIndRequestBuilder extends RequestBuilder<PerGlobalInfoInd> {
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoInd` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoInd.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoInd.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoInd.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoInd` entity based on its keys.
     */
    getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoInd>;
    /**
     * Returns a request builder for querying all `PerGlobalInfoInd` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoInd` entities.
     */
    getAll(): GetAllRequestBuilder<PerGlobalInfoInd>;
}
//# sourceMappingURL=PerGlobalInfoIndRequestBuilder.d.ts.map