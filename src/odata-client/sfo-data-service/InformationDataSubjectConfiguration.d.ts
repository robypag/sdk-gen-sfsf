import { InformationDataSubjectConfigurationRequestBuilder } from './InformationDataSubjectConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InformationDataSubjectConfiguration" of service "SFOData".
 */
export declare class InformationDataSubjectConfiguration extends Entity implements InformationDataSubjectConfigurationType {
    /**
     * Technical entity name for InformationDataSubjectConfiguration.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InformationDataSubjectConfiguration.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * configData.
     * @nullable
     */
    configData?: string;
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
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * locale.
     * Maximum length: 255.
     * @nullable
     */
    locale?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
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
     * Returns an entity builder to construct instances `InformationDataSubjectConfiguration`.
     * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
     */
    static builder(): EntityBuilderType<InformationDataSubjectConfiguration, InformationDataSubjectConfigurationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InformationDataSubjectConfiguration` entity type.
     * @returns A `InformationDataSubjectConfiguration` request builder.
     */
    static requestBuilder(): InformationDataSubjectConfigurationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InformationDataSubjectConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
     */
    static customField(fieldName: string): CustomField<InformationDataSubjectConfiguration>;
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
export interface InformationDataSubjectConfigurationType {
    configData?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    locale?: string;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface InformationDataSubjectConfigurationTypeForceMandatory {
    configData: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    locale: string;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace InformationDataSubjectConfiguration {
    /**
     * Static representation of the [[configData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONFIG_DATA: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<InformationDataSubjectConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<InformationDataSubjectConfiguration, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<InformationDataSubjectConfiguration, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InformationDataSubjectConfiguration, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<InformationDataSubjectConfiguration, WfRequest>;
    /**
     * All fields of the InformationDataSubjectConfiguration entity.
     */
    const _allFields: Array<StringField<InformationDataSubjectConfiguration> | DateField<InformationDataSubjectConfiguration> | OneToOneLink<InformationDataSubjectConfiguration, User> | OneToOneLink<InformationDataSubjectConfiguration, MdfEnumValue> | Link<InformationDataSubjectConfiguration, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InformationDataSubjectConfiguration>;
    /**
     * All key fields of the InformationDataSubjectConfiguration entity.
     */
    const _keyFields: Array<Selectable<InformationDataSubjectConfiguration>>;
    /**
     * Mapping of all key field names to the respective static field property InformationDataSubjectConfiguration.
     */
    const _keys: {
        [keys: string]: Selectable<InformationDataSubjectConfiguration>;
    };
}
//# sourceMappingURL=InformationDataSubjectConfiguration.d.ts.map