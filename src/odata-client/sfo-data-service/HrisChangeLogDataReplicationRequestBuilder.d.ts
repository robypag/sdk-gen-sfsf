import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { HrisChangeLogDataReplication } from './HrisChangeLogDataReplication';
/**
 * Request builder class for operations supported on the [[HrisChangeLogDataReplication]] entity.
 */
export declare class HrisChangeLogDataReplicationRequestBuilder extends RequestBuilder<HrisChangeLogDataReplication> {
    /**
     * Returns a request builder for retrieving one `HrisChangeLogDataReplication` entity based on its keys.
     * @param externalCode Key property. See [[HrisChangeLogDataReplication.externalCode]].
     * @returns A request builder for creating requests to retrieve one `HrisChangeLogDataReplication` entity based on its keys.
     */
    getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<HrisChangeLogDataReplication>;
    /**
     * Returns a request builder for querying all `HrisChangeLogDataReplication` entities.
     * @returns A request builder for creating requests to retrieve all `HrisChangeLogDataReplication` entities.
     */
    getAll(): GetAllRequestBuilder<HrisChangeLogDataReplication>;
}
//# sourceMappingURL=HrisChangeLogDataReplicationRequestBuilder.d.ts.map