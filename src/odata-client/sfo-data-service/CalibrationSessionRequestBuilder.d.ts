import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationSession } from './CalibrationSession';
/**
 * Request builder class for operations supported on the [[CalibrationSession]] entity.
 */
export declare class CalibrationSessionRequestBuilder extends RequestBuilder<CalibrationSession> {
    /**
     * Returns a request builder for retrieving one `CalibrationSession` entity based on its keys.
     * @param sessionId Key property. See [[CalibrationSession.sessionId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationSession` entity based on its keys.
     */
    getByKey(sessionId: BigNumber): GetByKeyRequestBuilder<CalibrationSession>;
    /**
     * Returns a request builder for querying all `CalibrationSession` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationSession` entities.
     */
    getAll(): GetAllRequestBuilder<CalibrationSession>;
}
//# sourceMappingURL=CalibrationSessionRequestBuilder.d.ts.map