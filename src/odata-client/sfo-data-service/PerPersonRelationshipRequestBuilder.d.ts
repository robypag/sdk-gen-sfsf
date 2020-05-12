import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerPersonRelationship } from './PerPersonRelationship';
/**
 * Request builder class for operations supported on the [[PerPersonRelationship]] entity.
 */
export declare class PerPersonRelationshipRequestBuilder extends RequestBuilder<PerPersonRelationship> {
    /**
     * Returns a request builder for retrieving one `PerPersonRelationship` entity based on its keys.
     * @param personIdExternal Key property. See [[PerPersonRelationship.personIdExternal]].
     * @param relatedPersonIdExternal Key property. See [[PerPersonRelationship.relatedPersonIdExternal]].
     * @param startDate Key property. See [[PerPersonRelationship.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerPersonRelationship` entity based on its keys.
     */
    getByKey(personIdExternal: string, relatedPersonIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerPersonRelationship>;
    /**
     * Returns a request builder for querying all `PerPersonRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `PerPersonRelationship` entities.
     */
    getAll(): GetAllRequestBuilder<PerPersonRelationship>;
}
//# sourceMappingURL=PerPersonRelationshipRequestBuilder.d.ts.map