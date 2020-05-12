import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AdvancesEligibility } from './AdvancesEligibility';
/**
 * Request builder class for operations supported on the [[AdvancesEligibility]] entity.
 */
export declare class AdvancesEligibilityRequestBuilder extends RequestBuilder<AdvancesEligibility> {
    /**
     * Returns a request builder for retrieving one `AdvancesEligibility` entity based on its keys.
     * @param effectiveStartDate Key property. See [[AdvancesEligibility.effectiveStartDate]].
     * @param externalCode Key property. See [[AdvancesEligibility.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesEligibility` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<AdvancesEligibility>;
    /**
     * Returns a request builder for querying all `AdvancesEligibility` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesEligibility` entities.
     */
    getAll(): GetAllRequestBuilder<AdvancesEligibility>;
}
//# sourceMappingURL=AdvancesEligibilityRequestBuilder.d.ts.map