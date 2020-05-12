import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayComponentGroup } from './FoPayComponentGroup';
/**
 * Request builder class for operations supported on the [[FoPayComponentGroup]] entity.
 */
export declare class FoPayComponentGroupRequestBuilder extends RequestBuilder<FoPayComponentGroup> {
    /**
     * Returns a request builder for retrieving one `FoPayComponentGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoPayComponentGroup.externalCode]].
     * @param startDate Key property. See [[FoPayComponentGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayComponentGroup` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayComponentGroup>;
    /**
     * Returns a request builder for querying all `FoPayComponentGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayComponentGroup` entities.
     */
    getAll(): GetAllRequestBuilder<FoPayComponentGroup>;
}
//# sourceMappingURL=FoPayComponentGroupRequestBuilder.d.ts.map