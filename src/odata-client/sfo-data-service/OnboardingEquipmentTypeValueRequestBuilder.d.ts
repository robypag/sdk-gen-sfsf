import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingEquipmentTypeValue } from './OnboardingEquipmentTypeValue';
/**
 * Request builder class for operations supported on the [[OnboardingEquipmentTypeValue]] entity.
 */
export declare class OnboardingEquipmentTypeValueRequestBuilder extends RequestBuilder<OnboardingEquipmentTypeValue> {
    /**
     * Returns a request builder for retrieving one `OnboardingEquipmentTypeValue` entity based on its keys.
     * @param code Key property. See [[OnboardingEquipmentTypeValue.code]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentTypeValue` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<OnboardingEquipmentTypeValue>;
    /**
     * Returns a request builder for querying all `OnboardingEquipmentTypeValue` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentTypeValue` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingEquipmentTypeValue>;
}
//# sourceMappingURL=OnboardingEquipmentTypeValueRequestBuilder.d.ts.map