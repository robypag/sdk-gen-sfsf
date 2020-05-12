import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayComponent } from './FoPayComponent';
/**
 * Request builder class for operations supported on the [[FoPayComponent]] entity.
 */
export declare class FoPayComponentRequestBuilder extends RequestBuilder<FoPayComponent> {
    /**
     * Returns a request builder for retrieving one `FoPayComponent` entity based on its keys.
     * @param externalCode Key property. See [[FoPayComponent.externalCode]].
     * @param startDate Key property. See [[FoPayComponent.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayComponent` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayComponent>;
    /**
     * Returns a request builder for querying all `FoPayComponent` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayComponent` entities.
     */
    getAll(): GetAllRequestBuilder<FoPayComponent>;
}
//# sourceMappingURL=FoPayComponentRequestBuilder.d.ts.map