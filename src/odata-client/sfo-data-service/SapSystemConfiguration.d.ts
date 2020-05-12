import { SapSystemConfigurationRequestBuilder } from './SapSystemConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SAPSystemConfiguration" of service "SFOData".
 */
export declare class SapSystemConfiguration extends Entity implements SapSystemConfigurationType {
    /**
     * Technical entity name for SapSystemConfiguration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SapSystemConfiguration.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * System Name.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Client.
     * Maximum length: 255.
     * @nullable
     */
    payrollSystemClientId?: string;
    /**
     * System URL.
     * Maximum length: 255.
     * @nullable
     */
    payrollSystemUrl?: string;
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
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SapSystemConfiguration`.
     * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
     */
    static builder(): EntityBuilderType<SapSystemConfiguration, SapSystemConfigurationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SapSystemConfiguration` entity type.
     * @returns A `SapSystemConfiguration` request builder.
     */
    static requestBuilder(): SapSystemConfigurationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SapSystemConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SapSystemConfiguration`.
     */
    static customField(fieldName: string): CustomField<SapSystemConfiguration>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface SapSystemConfigurationType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payrollSystemClientId?: string;
    payrollSystemUrl?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface SapSystemConfigurationTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payrollSystemClientId: string;
    payrollSystemUrl: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SapSystemConfiguration {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SapSystemConfiguration>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SapSystemConfiguration>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the [[payrollSystemClientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_SYSTEM_CLIENT_ID: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the [[payrollSystemUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_SYSTEM_URL: StringField<SapSystemConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SapSystemConfiguration, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SapSystemConfiguration, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SapSystemConfiguration, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SapSystemConfiguration, WfRequest>;
    /**
     * All fields of the SapSystemConfiguration entity.
     */
    const _allFields: Array<StringField<SapSystemConfiguration> | DateField<SapSystemConfiguration> | OneToOneLink<SapSystemConfiguration, User> | OneToOneLink<SapSystemConfiguration, MdfEnumValue> | Link<SapSystemConfiguration, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SapSystemConfiguration>;
    /**
     * All key fields of the SapSystemConfiguration entity.
     */
    const _keyFields: Array<Selectable<SapSystemConfiguration>>;
    /**
     * Mapping of all key field names to the respective static field property SapSystemConfiguration.
     */
    const _keys: {
        [keys: string]: Selectable<SapSystemConfiguration>;
    };
}
//# sourceMappingURL=SapSystemConfiguration.d.ts.map