import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NonRecurringPayment } from './NonRecurringPayment';
/**
 * Request builder class for operations supported on the [[NonRecurringPayment]] entity.
 */
export declare class NonRecurringPaymentRequestBuilder extends RequestBuilder<NonRecurringPayment> {
    /**
     * Returns a request builder for retrieving one `NonRecurringPayment` entity based on its keys.
     * @param externalCode Key property. See [[NonRecurringPayment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `NonRecurringPayment` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<NonRecurringPayment>;
    /**
     * Returns a request builder for querying all `NonRecurringPayment` entities.
     * @returns A request builder for creating requests to retrieve all `NonRecurringPayment` entities.
     */
    getAll(): GetAllRequestBuilder<NonRecurringPayment>;
}
//# sourceMappingURL=NonRecurringPaymentRequestBuilder.d.ts.map