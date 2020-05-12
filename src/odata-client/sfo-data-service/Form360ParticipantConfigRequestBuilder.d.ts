import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ParticipantConfig } from './Form360ParticipantConfig';
/**
 * Request builder class for operations supported on the [[Form360ParticipantConfig]] entity.
 */
export declare class Form360ParticipantConfigRequestBuilder extends RequestBuilder<Form360ParticipantConfig> {
    /**
     * Returns a request builder for retrieving one `Form360ParticipantConfig` entity based on its keys.
     * @param formContentId Key property. See [[Form360ParticipantConfig.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantConfig.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantConfig` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360ParticipantConfig>;
    /**
     * Returns a request builder for querying all `Form360ParticipantConfig` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantConfig` entities.
     */
    getAll(): GetAllRequestBuilder<Form360ParticipantConfig>;
}
//# sourceMappingURL=Form360ParticipantConfigRequestBuilder.d.ts.map