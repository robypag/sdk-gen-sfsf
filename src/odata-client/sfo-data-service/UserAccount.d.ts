import { UserAccountRequestBuilder } from './UserAccountRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserAccount" of service "SFOData".
 */
export declare class UserAccount extends Entity implements UserAccountType {
    /**
     * Technical entity name for UserAccount.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserAccount.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * ???USER_MANAGEMENT_COPROPERTY_LABEL_ACCOUNT_ID???.
     */
    accountId: BigNumber;
    /**
     * Account Status.
     */
    accountStatus: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Default Locale.
     * Maximum length: 32.
     * @nullable
     */
    defaultLocale?: string;
    /**
     * Last Inactivation Date Time.
     * @nullable
     */
    lastInactivationDateTime?: Moment;
    /**
     * Last Failed Login Date Time.
     * @nullable
     */
    lastLoginFailedDateTime?: Moment;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Person ID External.
     */
    personIdExternal: string;
    /**
     * ???USER_MANAGEMENT_COPROPERTY_LABEL_SAP_GLOBAL_USER_ID???.
     * @nullable
     */
    sapGlobalUserId?: string;
    /**
     * Username.
     * Maximum length: 100.
     */
    username: string;
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    user: User[];
    /**
     * Returns an entity builder to construct instances `UserAccount`.
     * @returns A builder that constructs instances of entity type `UserAccount`.
     */
    static builder(): EntityBuilderType<UserAccount, UserAccountTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserAccount` entity type.
     * @returns A `UserAccount` request builder.
     */
    static requestBuilder(): UserAccountRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserAccount`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserAccount`.
     */
    static customField(fieldName: string): CustomField<UserAccount>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface UserAccountType {
    accountId: BigNumber;
    accountStatus: string;
    createdDateTime?: Moment;
    defaultLocale?: string;
    lastInactivationDateTime?: Moment;
    lastLoginFailedDateTime?: Moment;
    lastModifiedDateTime?: Moment;
    personIdExternal: string;
    sapGlobalUserId?: string;
    username: string;
    user: UserType[];
}
export interface UserAccountTypeForceMandatory {
    accountId: BigNumber;
    accountStatus: string;
    createdDateTime: Moment;
    defaultLocale: string;
    lastInactivationDateTime: Moment;
    lastLoginFailedDateTime: Moment;
    lastModifiedDateTime: Moment;
    personIdExternal: string;
    sapGlobalUserId: string;
    username: string;
    user: UserType[];
}
export declare namespace UserAccount {
    /**
     * Static representation of the [[accountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_ID: BigNumberField<UserAccount>;
    /**
     * Static representation of the [[accountStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_STATUS: StringField<UserAccount>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<UserAccount>;
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCALE: StringField<UserAccount>;
    /**
     * Static representation of the [[lastInactivationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_INACTIVATION_DATE_TIME: DateField<UserAccount>;
    /**
     * Static representation of the [[lastLoginFailedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_LOGIN_FAILED_DATE_TIME: DateField<UserAccount>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<UserAccount>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<UserAccount>;
    /**
     * Static representation of the [[sapGlobalUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_GLOBAL_USER_ID: StringField<UserAccount>;
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERNAME: StringField<UserAccount>;
    /**
     * Static representation of the one-to-many navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: Link<UserAccount, User>;
    /**
     * All fields of the UserAccount entity.
     */
    const _allFields: Array<BigNumberField<UserAccount> | StringField<UserAccount> | DateField<UserAccount> | Link<UserAccount, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserAccount>;
    /**
     * All key fields of the UserAccount entity.
     */
    const _keyFields: Array<Selectable<UserAccount>>;
    /**
     * Mapping of all key field names to the respective static field property UserAccount.
     */
    const _keys: {
        [keys: string]: Selectable<UserAccount>;
    };
}
//# sourceMappingURL=UserAccount.d.ts.map