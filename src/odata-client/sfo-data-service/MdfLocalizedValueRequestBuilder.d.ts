import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MdfLocalizedValue } from './MdfLocalizedValue';
/**
 * Request builder class for operations supported on the [[MdfLocalizedValue]] entity.
 */
export declare class MdfLocalizedValueRequestBuilder extends RequestBuilder<MdfLocalizedValue> {
    /**
     * Returns a request builder for retrieving one `MdfLocalizedValue` entity based on its keys.
     * @param locale Key property. See [[MdfLocalizedValue.locale]].
     * @returns A request builder for creating requests to retrieve one `MdfLocalizedValue` entity based on its keys.
     */
    getByKey(locale: string): GetByKeyRequestBuilder<MdfLocalizedValue>;
    /**
     * Returns a request builder for querying all `MdfLocalizedValue` entities.
     * @returns A request builder for creating requests to retrieve all `MdfLocalizedValue` entities.
     */
    getAll(): GetAllRequestBuilder<MdfLocalizedValue>;
}
//# sourceMappingURL=MdfLocalizedValueRequestBuilder.d.ts.map