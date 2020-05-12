import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ParticipantColumn } from './Form360ParticipantColumn';
/**
 * Request builder class for operations supported on the [[Form360ParticipantColumn]] entity.
 */
export declare class Form360ParticipantColumnRequestBuilder extends RequestBuilder<Form360ParticipantColumn> {
    /**
     * Returns a request builder for retrieving one `Form360ParticipantColumn` entity based on its keys.
     * @param columnKey Key property. See [[Form360ParticipantColumn.columnKey]].
     * @param formContentId Key property. See [[Form360ParticipantColumn.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantColumn.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantColumn` entity based on its keys.
     */
    getByKey(columnKey: string, formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360ParticipantColumn>;
    /**
     * Returns a request builder for querying all `Form360ParticipantColumn` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantColumn` entities.
     */
    getAll(): GetAllRequestBuilder<Form360ParticipantColumn>;
}
//# sourceMappingURL=Form360ParticipantColumnRequestBuilder.d.ts.map