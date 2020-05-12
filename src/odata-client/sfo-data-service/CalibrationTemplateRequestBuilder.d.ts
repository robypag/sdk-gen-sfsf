import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationTemplate } from './CalibrationTemplate';
/**
 * Request builder class for operations supported on the [[CalibrationTemplate]] entity.
 */
export declare class CalibrationTemplateRequestBuilder extends RequestBuilder<CalibrationTemplate> {
    /**
     * Returns a request builder for retrieving one `CalibrationTemplate` entity based on its keys.
     * @param templateId Key property. See [[CalibrationTemplate.templateId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationTemplate` entity based on its keys.
     */
    getByKey(templateId: BigNumber): GetByKeyRequestBuilder<CalibrationTemplate>;
    /**
     * Returns a request builder for querying all `CalibrationTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationTemplate` entities.
     */
    getAll(): GetAllRequestBuilder<CalibrationTemplate>;
}
//# sourceMappingURL=CalibrationTemplateRequestBuilder.d.ts.map