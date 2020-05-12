import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerPersonal } from './PerPersonal';
/**
 * Request builder class for operations supported on the [[PerPersonal]] entity.
 */
export declare class PerPersonalRequestBuilder extends RequestBuilder<PerPersonal> {
    /**
     * Returns a request builder for retrieving one `PerPersonal` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPersonal.personIdExternal]].
     * @param startDate Key property. See [[PerPersonal.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerPersonal` entity based on its keys.
     */
    getByKey(personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerPersonal>;
    /**
     * Returns a request builder for querying all `PerPersonal` entities.
     * @returns A request builder for creating requests to retrieve all `PerPersonal` entities.
     */
    getAll(): GetAllRequestBuilder<PerPersonal>;
}
//# sourceMappingURL=PerPersonalRequestBuilder.d.ts.map