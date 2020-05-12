import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingEquipmentType_1 } from './OnboardingEquipmentType_1';
/**
 * Request builder class for operations supported on the [[OnboardingEquipmentType_1]] entity.
 */
export declare class OnboardingEquipmentType_1RequestBuilder extends RequestBuilder<OnboardingEquipmentType_1> {
    /**
     * Returns a request builder for retrieving one `OnboardingEquipmentType_1` entity based on its keys.
     * @param code Key property. See [[OnboardingEquipmentType_1.code]].
     * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentType_1` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<OnboardingEquipmentType_1>;
    /**
     * Returns a request builder for querying all `OnboardingEquipmentType_1` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentType_1` entities.
     */
    getAll(): GetAllRequestBuilder<OnboardingEquipmentType_1>;
}
//# sourceMappingURL=OnboardingEquipmentType_1RequestBuilder.d.ts.map