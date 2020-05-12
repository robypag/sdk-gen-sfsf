import { BankRequestBuilder } from './BankRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Bank" of service "SFOData".
 */
export declare class Bank extends Entity implements BankType {
    /**
     * Technical entity name for Bank.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Bank.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Branch Name.
     * Maximum length: 60.
     * @nullable
     */
    bankBranch?: string;
    /**
     * Bank Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Bank Name.
     * Maximum length: 128.
     * @nullable
     */
    bankName?: string;
    /**
     * Business Identifier Code.
     * Maximum length: 20.
     * @nullable
     */
    businessIdentifierCode?: string;
    /**
     * City.
     * Maximum length: 255.
     * @nullable
     */
    city?: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * Bank ID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Postal Code.
     * Maximum length: 255.
     * @nullable
     */
    postalCode?: string;
    /**
     * Routing Number.
     * Maximum length: 255.
     * @nullable
     */
    routingNumber?: string;
    /**
     * Street.
     * Maximum length: 255.
     * @nullable
     */
    street?: string;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    bankCountryNav: Country[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Bank`.
     * @returns A builder that constructs instances of entity type `Bank`.
     */
    static builder(): EntityBuilderType<Bank, BankTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Bank` entity type.
     * @returns A `Bank` request builder.
     */
    static requestBuilder(): BankRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Bank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Bank`.
     */
    static customField(fieldName: string): CustomField<Bank>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface BankType {
    bankBranch?: string;
    bankCountry?: string;
    bankName?: string;
    businessIdentifierCode?: string;
    city?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveStatus?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    postalCode?: string;
    routingNumber?: string;
    street?: string;
    bankCountryNav: CountryType[];
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface BankTypeForceMandatory {
    bankBranch: string;
    bankCountry: string;
    bankName: string;
    businessIdentifierCode: string;
    city: string;
    createdBy: string;
    createdDateTime: Moment;
    effectiveStatus: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    postalCode: string;
    routingNumber: string;
    street: string;
    bankCountryNav: CountryType[];
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Bank {
    /**
     * Static representation of the [[bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_BRANCH: StringField<Bank>;
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY: StringField<Bank>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: StringField<Bank>;
    /**
     * Static representation of the [[businessIdentifierCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_IDENTIFIER_CODE: StringField<Bank>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Bank>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Bank>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Bank>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<Bank>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<Bank>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Bank>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Bank>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Bank>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: StringField<Bank>;
    /**
     * Static representation of the [[routingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTING_NUMBER: StringField<Bank>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<Bank>;
    /**
     * Static representation of the one-to-many navigation property [[bankCountryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY_NAV: Link<Bank, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Bank, User>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<Bank, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Bank, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Bank, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Bank, WfRequest>;
    /**
     * All fields of the Bank entity.
     */
    const _allFields: Array<StringField<Bank> | DateField<Bank> | Link<Bank, Country> | OneToOneLink<Bank, User> | OneToOneLink<Bank, MdfEnumValue> | Link<Bank, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Bank>;
    /**
     * All key fields of the Bank entity.
     */
    const _keyFields: Array<Selectable<Bank>>;
    /**
     * Mapping of all key field names to the respective static field property Bank.
     */
    const _keys: {
        [keys: string]: Selectable<Bank>;
    };
}
//# sourceMappingURL=Bank.d.ts.map