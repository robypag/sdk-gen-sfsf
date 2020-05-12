import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormFolder } from './FormFolder';
/**
 * Request builder class for operations supported on the [[FormFolder]] entity.
 */
export declare class FormFolderRequestBuilder extends RequestBuilder<FormFolder> {
    /**
     * Returns a request builder for retrieving one `FormFolder` entity based on its keys.
     * @param folderId Key property. See [[FormFolder.folderId]].
     * @returns A request builder for creating requests to retrieve one `FormFolder` entity based on its keys.
     */
    getByKey(folderId: BigNumber): GetByKeyRequestBuilder<FormFolder>;
    /**
     * Returns a request builder for querying all `FormFolder` entities.
     * @returns A request builder for creating requests to retrieve all `FormFolder` entities.
     */
    getAll(): GetAllRequestBuilder<FormFolder>;
}
//# sourceMappingURL=FormFolderRequestBuilder.d.ts.map