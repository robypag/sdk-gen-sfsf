import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { AdvancesInstallments } from './AdvancesInstallments';
/**
 * Request builder class for operations supported on the [[AdvancesInstallments]] entity.
 */
export declare class AdvancesInstallmentsRequestBuilder extends RequestBuilder<AdvancesInstallments> {
    /**
     * Returns a request builder for retrieving one `AdvancesInstallments` entity based on its keys.
     * @param advanceExternalCode Key property. See [[AdvancesInstallments.advanceExternalCode]].
     * @param nonRecurringPaymentExternalCode Key property. See [[AdvancesInstallments.nonRecurringPaymentExternalCode]].
     * @param externalCode Key property. See [[AdvancesInstallments.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesInstallments` entity based on its keys.
     */
    getByKey(advanceExternalCode: string, nonRecurringPaymentExternalCode: string, externalCode: string): GetByKeyRequestBuilder<AdvancesInstallments>;
    /**
     * Returns a request builder for querying all `AdvancesInstallments` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesInstallments` entities.
     */
    getAll(): GetAllRequestBuilder<AdvancesInstallments>;
}
//# sourceMappingURL=AdvancesInstallmentsRequestBuilder.d.ts.map