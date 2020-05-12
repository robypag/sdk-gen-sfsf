import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRouteStep } from './FormRouteStep';
/**
 * Request builder class for operations supported on the [[FormRouteStep]] entity.
 */
export declare class FormRouteStepRequestBuilder extends RequestBuilder<FormRouteStep> {
    /**
     * Returns a request builder for retrieving one `FormRouteStep` entity based on its keys.
     * @param formDataId Key property. See [[FormRouteStep.formDataId]].
     * @param stepOrder Key property. See [[FormRouteStep.stepOrder]].
     * @returns A request builder for creating requests to retrieve one `FormRouteStep` entity based on its keys.
     */
    getByKey(formDataId: BigNumber, stepOrder: number): GetByKeyRequestBuilder<FormRouteStep>;
    /**
     * Returns a request builder for querying all `FormRouteStep` entities.
     * @returns A request builder for creating requests to retrieve all `FormRouteStep` entities.
     */
    getAll(): GetAllRequestBuilder<FormRouteStep>;
}
//# sourceMappingURL=FormRouteStepRequestBuilder.d.ts.map