import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DataReplicationProxy } from './DataReplicationProxy';
/**
 * Request builder class for operations supported on the [[DataReplicationProxy]] entity.
 */
export declare class DataReplicationProxyRequestBuilder extends RequestBuilder<DataReplicationProxy> {
    /**
     * Returns a request builder for retrieving one `DataReplicationProxy` entity based on its keys.
     * @param externalCode Key property. See [[DataReplicationProxy.externalCode]].
     * @returns A request builder for creating requests to retrieve one `DataReplicationProxy` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<DataReplicationProxy>;
    /**
     * Returns a request builder for querying all `DataReplicationProxy` entities.
     * @returns A request builder for creating requests to retrieve all `DataReplicationProxy` entities.
     */
    getAll(): GetAllRequestBuilder<DataReplicationProxy>;
}
//# sourceMappingURL=DataReplicationProxyRequestBuilder.d.ts.map