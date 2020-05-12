import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerEmergencyContacts } from './PerEmergencyContacts';
/**
 * Request builder class for operations supported on the [[PerEmergencyContacts]] entity.
 */
export declare class PerEmergencyContactsRequestBuilder extends RequestBuilder<PerEmergencyContacts> {
    /**
     * Returns a request builder for retrieving one `PerEmergencyContacts` entity based on its keys.
     * @param name Key property. See [[PerEmergencyContacts.name]].
     * @param personIdExternal Key property. See [[PerEmergencyContacts.personIdExternal]].
     * @param relationship Key property. See [[PerEmergencyContacts.relationship]].
     * @returns A request builder for creating requests to retrieve one `PerEmergencyContacts` entity based on its keys.
     */
    getByKey(name: string, personIdExternal: string, relationship: string): GetByKeyRequestBuilder<PerEmergencyContacts>;
    /**
     * Returns a request builder for querying all `PerEmergencyContacts` entities.
     * @returns A request builder for creating requests to retrieve all `PerEmergencyContacts` entities.
     */
    getAll(): GetAllRequestBuilder<PerEmergencyContacts>;
}
//# sourceMappingURL=PerEmergencyContactsRequestBuilder.d.ts.map