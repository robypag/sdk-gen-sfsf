import { ExtPersonalInfoRequestBuilder } from './ExtPersonalInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExtPersonalInfo" of service "SFOData".
 */
export declare class ExtPersonalInfo extends Entity implements ExtPersonalInfoType {
    /**
     * Technical entity name for ExtPersonalInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtPersonalInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * First Name.
     * Maximum length: 128.
     * @nullable
     */
    firstName?: string;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Name.
     * Maximum length: 128.
     * @nullable
     */
    lastName?: string;
    /**
     * Middle Name.
     * Maximum length: 128.
     * @nullable
     */
    middleName?: string;
    /**
     * personalInfoId.
     */
    personalInfoId: BigNumber;
    /**
     * Returns an entity builder to construct instances `ExtPersonalInfo`.
     * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
     */
    static builder(): EntityBuilderType<ExtPersonalInfo, ExtPersonalInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExtPersonalInfo` entity type.
     * @returns A `ExtPersonalInfo` request builder.
     */
    static requestBuilder(): ExtPersonalInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPersonalInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
     */
    static customField(fieldName: string): CustomField<ExtPersonalInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ExtPersonalInfoType {
    firstName?: string;
    lastModifiedDateTime?: Moment;
    lastName?: string;
    middleName?: string;
    personalInfoId: BigNumber;
}
export interface ExtPersonalInfoTypeForceMandatory {
    firstName: string;
    lastModifiedDateTime: Moment;
    lastName: string;
    middleName: string;
    personalInfoId: BigNumber;
}
export declare namespace ExtPersonalInfo {
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<ExtPersonalInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExtPersonalInfo>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<ExtPersonalInfo>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<ExtPersonalInfo>;
    /**
     * Static representation of the [[personalInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSONAL_INFO_ID: BigNumberField<ExtPersonalInfo>;
    /**
     * All fields of the ExtPersonalInfo entity.
     */
    const _allFields: Array<StringField<ExtPersonalInfo> | DateField<ExtPersonalInfo> | BigNumberField<ExtPersonalInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExtPersonalInfo>;
    /**
     * All key fields of the ExtPersonalInfo entity.
     */
    const _keyFields: Array<Selectable<ExtPersonalInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExtPersonalInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExtPersonalInfo>;
    };
}
//# sourceMappingURL=ExtPersonalInfo.d.ts.map