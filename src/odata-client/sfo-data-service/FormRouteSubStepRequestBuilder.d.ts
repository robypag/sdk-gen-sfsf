import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRouteSubStep } from './FormRouteSubStep';
/**
 * Request builder class for operations supported on the [[FormRouteSubStep]] entity.
 */
export declare class FormRouteSubStepRequestBuilder extends RequestBuilder<FormRouteSubStep> {
    /**
     * Returns a request builder for retrieving one `FormRouteSubStep` entity based on its keys.
     * @param formDataId Key property. See [[FormRouteSubStep.formDataId]].
     * @param stepOrder Key property. See [[FormRouteSubStep.stepOrder]].
     * @param subStepOrder Key property. See [[FormRouteSubStep.subStepOrder]].
     * @returns A request builder for creating requests to retrieve one `FormRouteSubStep` entity based on its keys.
     */
    getByKey(formDataId: BigNumber, stepOrder: number, subStepOrder: number): GetByKeyRequestBuilder<FormRouteSubStep>;
    /**
     * Returns a request builder for querying all `FormRouteSubStep` entities.
     * @returns A request builder for creating requests to retrieve all `FormRouteSubStep` entities.
     */
    getAll(): GetAllRequestBuilder<FormRouteSubStep>;
}
//# sourceMappingURL=FormRouteSubStepRequestBuilder.d.ts.map