import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobAnalyzerReportingData } from './JobAnalyzerReportingData';
/**
 * Request builder class for operations supported on the [[JobAnalyzerReportingData]] entity.
 */
export declare class JobAnalyzerReportingDataRequestBuilder extends RequestBuilder<JobAnalyzerReportingData> {
    /**
     * Returns a request builder for retrieving one `JobAnalyzerReportingData` entity based on its keys.
     * @param externalCode Key property. See [[JobAnalyzerReportingData.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobAnalyzerReportingData` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<JobAnalyzerReportingData>;
    /**
     * Returns a request builder for querying all `JobAnalyzerReportingData` entities.
     * @returns A request builder for creating requests to retrieve all `JobAnalyzerReportingData` entities.
     */
    getAll(): GetAllRequestBuilder<JobAnalyzerReportingData>;
}
//# sourceMappingURL=JobAnalyzerReportingDataRequestBuilder.d.ts.map