import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360Participant } from './Form360Participant';
/**
 * Request builder class for operations supported on the [[Form360Participant]] entity.
 */
export declare class Form360ParticipantRequestBuilder extends RequestBuilder<Form360Participant> {
    /**
     * Returns a request builder for retrieving one `Form360Participant` entity based on its keys.
     * @param formContentId Key property. See [[Form360Participant.formContentId]].
     * @param formDataId Key property. See [[Form360Participant.formDataId]].
     * @param participantId Key property. See [[Form360Participant.participantId]].
     * @returns A request builder for creating requests to retrieve one `Form360Participant` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, participantId: string): GetByKeyRequestBuilder<Form360Participant>;
    /**
     * Returns a request builder for querying all `Form360Participant` entities.
     * @returns A request builder for creating requests to retrieve all `Form360Participant` entities.
     */
    getAll(): GetAllRequestBuilder<Form360Participant>;
}
//# sourceMappingURL=Form360ParticipantRequestBuilder.d.ts.map