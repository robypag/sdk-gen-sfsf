import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TalentGraphicOption } from './TalentGraphicOption';
/**
 * Request builder class for operations supported on the [[TalentGraphicOption]] entity.
 */
export declare class TalentGraphicOptionRequestBuilder extends RequestBuilder<TalentGraphicOption> {
    /**
     * Returns a request builder for retrieving one `TalentGraphicOption` entity based on its keys.
     * @param dataIndex Key property. See [[TalentGraphicOption.dataIndex]].
     * @param optionKey Key property. See [[TalentGraphicOption.optionKey]].
     * @returns A request builder for creating requests to retrieve one `TalentGraphicOption` entity based on its keys.
     */
    getByKey(dataIndex: string, optionKey: string): GetByKeyRequestBuilder<TalentGraphicOption>;
    /**
     * Returns a request builder for querying all `TalentGraphicOption` entities.
     * @returns A request builder for creating requests to retrieve all `TalentGraphicOption` entities.
     */
    getAll(): GetAllRequestBuilder<TalentGraphicOption>;
}
//# sourceMappingURL=TalentGraphicOptionRequestBuilder.d.ts.map