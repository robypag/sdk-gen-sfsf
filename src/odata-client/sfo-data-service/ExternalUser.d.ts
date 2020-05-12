import { ExternalUserRequestBuilder } from './ExternalUserRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalUser" of service "SFOData".
 */
export declare class ExternalUser extends Entity implements ExternalUserType {
    /**
     * Technical entity name for ExternalUser.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalUser.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Default Locale.
     * Maximum length: 32.
     * @nullable
     */
    defaultLocale?: string;
    /**
     * is_deleted.
     * @nullable
     */
    isDeleted?: boolean;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * loginMethod.
     * Maximum length: 8.
     * @nullable
     */
    loginMethod?: string;
    /**
     * password.
     * Maximum length: 128.
     * @nullable
     */
    password?: string;
    /**
     * personGUID.
     * Maximum length: 32.
     * @nullable
     */
    personGuid?: string;
    /**
     * personId.
     * @nullable
     */
    personId?: BigNumber;
    /**
     * personIdExternal.
     * Maximum length: 100.
     * @nullable
     */
    personIdExternal?: string;
    /**
     * productName.
     * Maximum length: 32.
     * @nullable
     */
    productName?: string;
    /**
     * status.
     * Maximum length: 2.
     * @nullable
     */
    status?: string;
    /**
     * Time Zone.
     * Maximum length: 64.
     * @nullable
     */
    timeZone?: string;
    /**
     * userId.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * Username.
     * Maximum length: 100.
     * @nullable
     */
    userName?: string;
    /**
     * One-to-many navigation property to the [[ExtAddressInfo]] entity.
     */
    extAddressInfo: ExtAddressInfo[];
    /**
     * One-to-many navigation property to the [[ExtEmailInfo]] entity.
     */
    extEmailInfo: ExtEmailInfo[];
    /**
     * One-to-one navigation property to the [[ExtPersonalInfo]] entity.
     */
    extPersonalInfo: ExtPersonalInfo;
    /**
     * One-to-many navigation property to the [[ExtPhoneInfo]] entity.
     */
    extPhoneInfo: ExtPhoneInfo[];
    /**
     * Returns an entity builder to construct instances `ExternalUser`.
     * @returns A builder that constructs instances of entity type `ExternalUser`.
     */
    static builder(): EntityBuilderType<ExternalUser, ExternalUserTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalUser` entity type.
     * @returns A `ExternalUser` request builder.
     */
    static requestBuilder(): ExternalUserRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalUser`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalUser`.
     */
    static customField(fieldName: string): CustomField<ExternalUser>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ExtAddressInfo, ExtAddressInfoType } from './ExtAddressInfo';
import { ExtEmailInfo, ExtEmailInfoType } from './ExtEmailInfo';
import { ExtPersonalInfo, ExtPersonalInfoType } from './ExtPersonalInfo';
import { ExtPhoneInfo, ExtPhoneInfoType } from './ExtPhoneInfo';
export interface ExternalUserType {
    defaultLocale?: string;
    isDeleted?: boolean;
    lastModifiedDateTime?: Moment;
    loginMethod?: string;
    password?: string;
    personGuid?: string;
    personId?: BigNumber;
    personIdExternal?: string;
    productName?: string;
    status?: string;
    timeZone?: string;
    userId: string;
    userName?: string;
    extAddressInfo: ExtAddressInfoType[];
    extEmailInfo: ExtEmailInfoType[];
    extPersonalInfo: ExtPersonalInfoType;
    extPhoneInfo: ExtPhoneInfoType[];
}
export interface ExternalUserTypeForceMandatory {
    defaultLocale: string;
    isDeleted: boolean;
    lastModifiedDateTime: Moment;
    loginMethod: string;
    password: string;
    personGuid: string;
    personId: BigNumber;
    personIdExternal: string;
    productName: string;
    status: string;
    timeZone: string;
    userId: string;
    userName: string;
    extAddressInfo: ExtAddressInfoType[];
    extEmailInfo: ExtEmailInfoType[];
    extPersonalInfo: ExtPersonalInfoType;
    extPhoneInfo: ExtPhoneInfoType[];
}
export declare namespace ExternalUser {
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCALE: StringField<ExternalUser>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: BooleanField<ExternalUser>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalUser>;
    /**
     * Static representation of the [[loginMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOGIN_METHOD: StringField<ExternalUser>;
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSWORD: StringField<ExternalUser>;
    /**
     * Static representation of the [[personGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_GUID: StringField<ExternalUser>;
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID: BigNumberField<ExternalUser>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<ExternalUser>;
    /**
     * Static representation of the [[productName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_NAME: StringField<ExternalUser>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<ExternalUser>;
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ZONE: StringField<ExternalUser>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<ExternalUser>;
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAME: StringField<ExternalUser>;
    /**
     * Static representation of the one-to-many navigation property [[extAddressInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_ADDRESS_INFO: Link<ExternalUser, ExtAddressInfo>;
    /**
     * Static representation of the one-to-many navigation property [[extEmailInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_EMAIL_INFO: Link<ExternalUser, ExtEmailInfo>;
    /**
     * Static representation of the one-to-one navigation property [[extPersonalInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_PERSONAL_INFO: OneToOneLink<ExternalUser, ExtPersonalInfo>;
    /**
     * Static representation of the one-to-many navigation property [[extPhoneInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_PHONE_INFO: Link<ExternalUser, ExtPhoneInfo>;
    /**
     * All fields of the ExternalUser entity.
     */
    const _allFields: Array<StringField<ExternalUser> | BooleanField<ExternalUser> | DateField<ExternalUser> | BigNumberField<ExternalUser> | Link<ExternalUser, ExtAddressInfo> | Link<ExternalUser, ExtEmailInfo> | OneToOneLink<ExternalUser, ExtPersonalInfo> | Link<ExternalUser, ExtPhoneInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalUser>;
    /**
     * All key fields of the ExternalUser entity.
     */
    const _keyFields: Array<Selectable<ExternalUser>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalUser.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalUser>;
    };
}
//# sourceMappingURL=ExternalUser.d.ts.map