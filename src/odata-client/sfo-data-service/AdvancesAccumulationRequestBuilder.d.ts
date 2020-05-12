import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AdvancesAccumulation } from './AdvancesAccumulation';
/**
 * Request builder class for operations supported on the [[AdvancesAccumulation]] entity.
 */
export declare class AdvancesAccumulationRequestBuilder extends RequestBuilder<AdvancesAccumulation> {
    /**
     * Returns a request builder for retrieving one `AdvancesAccumulation` entity based on its keys.
     * @param externalCode Key property. See [[AdvancesAccumulation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesAccumulation` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<AdvancesAccumulation>;
    /**
     * Returns a request builder for querying all `AdvancesAccumulation` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesAccumulation` entities.
     */
    getAll(): GetAllRequestBuilder<AdvancesAccumulation>;
}
//# sourceMappingURL=AdvancesAccumulationRequestBuilder.d.ts.map