import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRatingScale } from './FormRatingScale';
/**
 * Request builder class for operations supported on the [[FormRatingScale]] entity.
 */
export declare class FormRatingScaleRequestBuilder extends RequestBuilder<FormRatingScale> {
    /**
     * Returns a request builder for retrieving one `FormRatingScale` entity based on its keys.
     * @param formContentId Key property. See [[FormRatingScale.formContentId]].
     * @param formDataId Key property. See [[FormRatingScale.formDataId]].
     * @param sectionIndex Key property. See [[FormRatingScale.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormRatingScale` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormRatingScale>;
    /**
     * Returns a request builder for querying all `FormRatingScale` entities.
     * @returns A request builder for creating requests to retrieve all `FormRatingScale` entities.
     */
    getAll(): GetAllRequestBuilder<FormRatingScale>;
}
//# sourceMappingURL=FormRatingScaleRequestBuilder.d.ts.map