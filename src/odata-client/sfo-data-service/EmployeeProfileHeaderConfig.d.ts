import { EmployeeProfileHeaderConfigRequestBuilder } from './EmployeeProfileHeaderConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileHeaderConfig" of service "SFOData".
 */
export declare class EmployeeProfileHeaderConfig extends Entity implements EmployeeProfileHeaderConfigType {
    /**
     * Technical entity name for EmployeeProfileHeaderConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileHeaderConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * EmployeeProfilePageConfig_code.
     * Maximum length: 128.
     */
    employeeProfilePageConfigCode: string;
    /**
     * code.
     * Maximum length: 128.
     */
    code: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * customField1Enabled.
     * @nullable
     */
    customField1Enabled?: boolean;
    /**
     * customField1Key.
     * Maximum length: 255.
     * @nullable
     */
    customField1Key?: string;
    /**
     * customField2Enabled.
     * @nullable
     */
    customField2Enabled?: boolean;
    /**
     * customField2Key.
     * Maximum length: 255.
     * @nullable
     */
    customField2Key?: string;
    /**
     * customField3Enabled.
     * @nullable
     */
    customField3Enabled?: boolean;
    /**
     * customField3Key.
     * Maximum length: 255.
     * @nullable
     */
    customField3Key?: string;
    /**
     * departmentEnabled.
     * @nullable
     */
    departmentEnabled?: boolean;
    /**
     * displayNameEnabled.
     * @nullable
     */
    displayNameEnabled?: boolean;
    /**
     * divisionEnabled.
     * @nullable
     */
    divisionEnabled?: boolean;
    /**
     * emailEnabled.
     * @nullable
     */
    emailEnabled?: boolean;
    /**
     * identificationEnabled.
     * @nullable
     */
    identificationEnabled?: boolean;
    /**
     * jobTitleEnabled.
     * @nullable
     */
    jobTitleEnabled?: boolean;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * localTimeEnabled.
     * @nullable
     */
    localTimeEnabled?: boolean;
    /**
     * locationEnabled.
     * @nullable
     */
    locationEnabled?: boolean;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * phoneNumber1Enabled.
     * @nullable
     */
    phoneNumber1Enabled?: boolean;
    /**
     * phoneNumber1Key.
     * Maximum length: 255.
     * @nullable
     */
    phoneNumber1Key?: string;
    /**
     * phoneNumber2Enabled.
     * @nullable
     */
    phoneNumber2Enabled?: boolean;
    /**
     * phoneNumber2Key.
     * Maximum length: 255.
     * @nullable
     */
    phoneNumber2Key?: string;
    /**
     * profilePhotoEnabled.
     * @nullable
     */
    profilePhotoEnabled?: boolean;
    /**
     * socialNetwork1Enabled.
     * @nullable
     */
    socialNetwork1Enabled?: boolean;
    /**
     * socialNetwork1Key.
     * Maximum length: 255.
     * @nullable
     */
    socialNetwork1Key?: string;
    /**
     * socialNetwork2Enabled.
     * @nullable
     */
    socialNetwork2Enabled?: boolean;
    /**
     * socialNetwork2Key.
     * Maximum length: 255.
     * @nullable
     */
    socialNetwork2Key?: string;
    /**
     * timeZoneEnabled.
     * @nullable
     */
    timeZoneEnabled?: boolean;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    phoneNumber1KeyNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    phoneNumber2KeyNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    socialNetwork1KeyNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    socialNetwork2KeyNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeProfileHeaderConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileHeaderConfig`.
     */
    static builder(): EntityBuilderType<EmployeeProfileHeaderConfig, EmployeeProfileHeaderConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileHeaderConfig` entity type.
     * @returns A `EmployeeProfileHeaderConfig` request builder.
     */
    static requestBuilder(): EmployeeProfileHeaderConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileHeaderConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileHeaderConfig`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileHeaderConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmployeeProfileHeaderConfigType {
    employeeProfilePageConfigCode: string;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    customField1Enabled?: boolean;
    customField1Key?: string;
    customField2Enabled?: boolean;
    customField2Key?: string;
    customField3Enabled?: boolean;
    customField3Key?: string;
    departmentEnabled?: boolean;
    displayNameEnabled?: boolean;
    divisionEnabled?: boolean;
    emailEnabled?: boolean;
    identificationEnabled?: boolean;
    jobTitleEnabled?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    localTimeEnabled?: boolean;
    locationEnabled?: boolean;
    mdfSystemRecordStatus?: string;
    phoneNumber1Enabled?: boolean;
    phoneNumber1Key?: string;
    phoneNumber2Enabled?: boolean;
    phoneNumber2Key?: string;
    profilePhotoEnabled?: boolean;
    socialNetwork1Enabled?: boolean;
    socialNetwork1Key?: string;
    socialNetwork2Enabled?: boolean;
    socialNetwork2Key?: string;
    timeZoneEnabled?: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    phoneNumber1KeyNav: MdfEnumValueType;
    phoneNumber2KeyNav: MdfEnumValueType;
    socialNetwork1KeyNav: MdfEnumValueType;
    socialNetwork2KeyNav: MdfEnumValueType;
}
export interface EmployeeProfileHeaderConfigTypeForceMandatory {
    employeeProfilePageConfigCode: string;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    customField1Enabled: boolean;
    customField1Key: string;
    customField2Enabled: boolean;
    customField2Key: string;
    customField3Enabled: boolean;
    customField3Key: string;
    departmentEnabled: boolean;
    displayNameEnabled: boolean;
    divisionEnabled: boolean;
    emailEnabled: boolean;
    identificationEnabled: boolean;
    jobTitleEnabled: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    localTimeEnabled: boolean;
    locationEnabled: boolean;
    mdfSystemRecordStatus: string;
    phoneNumber1Enabled: boolean;
    phoneNumber1Key: string;
    phoneNumber2Enabled: boolean;
    phoneNumber2Key: string;
    profilePhotoEnabled: boolean;
    socialNetwork1Enabled: boolean;
    socialNetwork1Key: string;
    socialNetwork2Enabled: boolean;
    socialNetwork2Key: string;
    timeZoneEnabled: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    phoneNumber1KeyNav: MdfEnumValueType;
    phoneNumber2KeyNav: MdfEnumValueType;
    socialNetwork1KeyNav: MdfEnumValueType;
    socialNetwork2KeyNav: MdfEnumValueType;
}
export declare namespace EmployeeProfileHeaderConfig {
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_1_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_1_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_2_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_2_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField3Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_3_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[customField3Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FIELD_3_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[departmentEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[displayNameEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_NAME_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[divisionEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[emailEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[identificationEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IDENTIFICATION_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[jobTitleEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[localTimeEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_TIME_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[locationEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[phoneNumber1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_1_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[phoneNumber1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_1_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[phoneNumber2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_2_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[phoneNumber2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_2_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[profilePhotoEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFILE_PHOTO_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[socialNetwork1Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_1_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[socialNetwork1Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_1_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[socialNetwork2Enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_2_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[socialNetwork2Key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_2_KEY: StringField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the [[timeZoneEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ZONE_ENABLED: BooleanField<EmployeeProfileHeaderConfig>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[phoneNumber1KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_1_KEY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[phoneNumber2KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_2_KEY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[socialNetwork1KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_1_KEY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[socialNetwork2KeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_NETWORK_2_KEY_NAV: OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>;
    /**
     * All fields of the EmployeeProfileHeaderConfig entity.
     */
    const _allFields: Array<StringField<EmployeeProfileHeaderConfig> | DateField<EmployeeProfileHeaderConfig> | BooleanField<EmployeeProfileHeaderConfig> | OneToOneLink<EmployeeProfileHeaderConfig, User> | OneToOneLink<EmployeeProfileHeaderConfig, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileHeaderConfig>;
    /**
     * All key fields of the EmployeeProfileHeaderConfig entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileHeaderConfig>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileHeaderConfig.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileHeaderConfig>;
    };
}
//# sourceMappingURL=EmployeeProfileHeaderConfig.d.ts.map