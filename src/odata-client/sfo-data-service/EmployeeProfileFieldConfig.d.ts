import { EmployeeProfileFieldConfigRequestBuilder } from './EmployeeProfileFieldConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeProfileFieldConfig" of service "SFOData".
 */
export declare class EmployeeProfileFieldConfig extends Entity implements EmployeeProfileFieldConfigType {
    /**
     * Technical entity name for EmployeeProfileFieldConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeProfileFieldConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * EmployeeProfileBlockContent_code.
     * Maximum length: 128.
     */
    employeeProfileBlockContentCode: string;
    /**
     * EmployeeProfilePageConfig_code.
     * Maximum length: 128.
     */
    employeeProfilePageConfigCode: string;
    /**
     * EmployeeProfileSectionConfig_code.
     * Maximum length: 128.
     */
    employeeProfileSectionConfigCode: string;
    /**
     * EmployeeProfileSubSectionConfig_code.
     * Maximum length: 128.
     */
    employeeProfileSubSectionConfigCode: string;
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
     * fieldId.
     * Maximum length: 255.
     * @nullable
     */
    fieldId?: string;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * order.
     * @nullable
     */
    order?: BigNumber;
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
     * Returns an entity builder to construct instances `EmployeeProfileFieldConfig`.
     * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
     */
    static builder(): EntityBuilderType<EmployeeProfileFieldConfig, EmployeeProfileFieldConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeProfileFieldConfig` entity type.
     * @returns A `EmployeeProfileFieldConfig` request builder.
     */
    static requestBuilder(): EmployeeProfileFieldConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileFieldConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeProfileFieldConfig`.
     */
    static customField(fieldName: string): CustomField<EmployeeProfileFieldConfig>;
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
export interface EmployeeProfileFieldConfigType {
    employeeProfileBlockContentCode: string;
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    fieldId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeProfileFieldConfigTypeForceMandatory {
    employeeProfileBlockContentCode: string;
    employeeProfilePageConfigCode: string;
    employeeProfileSectionConfigCode: string;
    employeeProfileSubSectionConfigCode: string;
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    fieldId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeProfileFieldConfig {
    /**
     * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EmployeeProfileFieldConfig>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeProfileFieldConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileFieldConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileFieldConfig, MdfEnumValue>;
    /**
     * All fields of the EmployeeProfileFieldConfig entity.
     */
    const _allFields: Array<StringField<EmployeeProfileFieldConfig> | DateField<EmployeeProfileFieldConfig> | BigNumberField<EmployeeProfileFieldConfig> | OneToOneLink<EmployeeProfileFieldConfig, User> | OneToOneLink<EmployeeProfileFieldConfig, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeProfileFieldConfig>;
    /**
     * All key fields of the EmployeeProfileFieldConfig entity.
     */
    const _keyFields: Array<Selectable<EmployeeProfileFieldConfig>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeProfileFieldConfig.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeProfileFieldConfig>;
    };
}
//# sourceMappingURL=EmployeeProfileFieldConfig.d.ts.map