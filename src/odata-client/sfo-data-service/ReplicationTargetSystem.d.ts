import { ReplicationTargetSystemRequestBuilder } from './ReplicationTargetSystemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ReplicationTargetSystem" of service "SFOData".
 */
export declare class ReplicationTargetSystem extends Entity implements ReplicationTargetSystemType {
    /**
     * Technical entity name for ReplicationTargetSystem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ReplicationTargetSystem.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Relevant for ERP Integration.
     * @nullable
     */
    isOrganizationalManagementIntegration?: boolean;
    /**
     * Relevant for Payroll Integration.
     * @nullable
     */
    isPayrollIntegration?: boolean;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
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
     * Replication Time Offset in Minutes.
     * @nullable
     */
    replicationTimeOffsetInMinutes?: BigNumber;
    /**
     * SAP System Configuration.
     * Maximum length: 128.
     * @nullable
     */
    sapSystemConfiguration?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[SapSystemConfiguration]] entity.
     */
    sapSystemConfigurationNav: SapSystemConfiguration;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `ReplicationTargetSystem`.
     * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
     */
    static builder(): EntityBuilderType<ReplicationTargetSystem, ReplicationTargetSystemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ReplicationTargetSystem` entity type.
     * @returns A `ReplicationTargetSystem` request builder.
     */
    static requestBuilder(): ReplicationTargetSystemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReplicationTargetSystem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReplicationTargetSystem`.
     */
    static customField(fieldName: string): CustomField<ReplicationTargetSystem>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SapSystemConfiguration, SapSystemConfigurationType } from './SapSystemConfiguration';
import { WfRequest, WfRequestType } from './WfRequest';
export interface ReplicationTargetSystemType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnDebug?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameEsMx?: string;
    externalNameFrCa?: string;
    externalNameFrFr?: string;
    externalNameItIt?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNameZhCn?: string;
    isOrganizationalManagementIntegration?: boolean;
    isPayrollIntegration?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    replicationTimeOffsetInMinutes?: BigNumber;
    sapSystemConfiguration?: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    sapSystemConfigurationNav: SapSystemConfigurationType;
    wfRequestNav: WfRequestType[];
}
export interface ReplicationTargetSystemTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnDebug: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameEsMx: string;
    externalNameFrCa: string;
    externalNameFrFr: string;
    externalNameItIt: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNameZhCn: string;
    isOrganizationalManagementIntegration: boolean;
    isPayrollIntegration: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    replicationTimeOffsetInMinutes: BigNumber;
    sapSystemConfiguration: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    sapSystemConfigurationNav: SapSystemConfigurationType;
    wfRequestNav: WfRequestType[];
}
export declare namespace ReplicationTargetSystem {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[isOrganizationalManagementIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ORGANIZATIONAL_MANAGEMENT_INTEGRATION: BooleanField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[isPayrollIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PAYROLL_INTEGRATION: BooleanField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[replicationTimeOffsetInMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLICATION_TIME_OFFSET_IN_MINUTES: BigNumberField<ReplicationTargetSystem>;
    /**
     * Static representation of the [[sapSystemConfiguration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_SYSTEM_CONFIGURATION: StringField<ReplicationTargetSystem>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ReplicationTargetSystem, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<ReplicationTargetSystem, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ReplicationTargetSystem, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ReplicationTargetSystem, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[sapSystemConfigurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_SYSTEM_CONFIGURATION_NAV: OneToOneLink<ReplicationTargetSystem, SapSystemConfiguration>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<ReplicationTargetSystem, WfRequest>;
    /**
     * All fields of the ReplicationTargetSystem entity.
     */
    const _allFields: Array<StringField<ReplicationTargetSystem> | DateField<ReplicationTargetSystem> | BooleanField<ReplicationTargetSystem> | BigNumberField<ReplicationTargetSystem> | OneToOneLink<ReplicationTargetSystem, User> | Link<ReplicationTargetSystem, MdfLocalizedValue> | OneToOneLink<ReplicationTargetSystem, MdfEnumValue> | OneToOneLink<ReplicationTargetSystem, SapSystemConfiguration> | Link<ReplicationTargetSystem, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ReplicationTargetSystem>;
    /**
     * All key fields of the ReplicationTargetSystem entity.
     */
    const _keyFields: Array<Selectable<ReplicationTargetSystem>>;
    /**
     * Mapping of all key field names to the respective static field property ReplicationTargetSystem.
     */
    const _keys: {
        [keys: string]: Selectable<ReplicationTargetSystem>;
    };
}
//# sourceMappingURL=ReplicationTargetSystem.d.ts.map