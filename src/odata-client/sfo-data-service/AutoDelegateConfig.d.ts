import { AutoDelegateConfigRequestBuilder } from './AutoDelegateConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AutoDelegateConfig" of service "SFOData".
 */
export declare class AutoDelegateConfig extends Entity implements AutoDelegateConfigType {
    /**
     * Technical entity name for AutoDelegateConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AutoDelegateConfig.
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
     * delegationStatus.
     * Maximum length: 128.
     * @nullable
     */
    delegationStatus?: string;
    /**
     * delegator.
     * Maximum length: 100.
     */
    delegator: string;
    /**
     * endTime.
     * @nullable
     */
    endTime?: Moment;
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
     * mdfSystemOptimisticLockUUID.
     * Maximum length: 255.
     * @nullable
     */
    optimisticLockUuid?: string;
    /**
     * startTime.
     * @nullable
     */
    startTime?: Moment;
    /**
     * One-to-many navigation property to the [[AutoDelegateDetail]] entity.
     */
    autoDelegateDetails: AutoDelegateDetail[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    delegationStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    delegatorNav: User;
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
     * Returns an entity builder to construct instances `AutoDelegateConfig`.
     * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
     */
    static builder(): EntityBuilderType<AutoDelegateConfig, AutoDelegateConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AutoDelegateConfig` entity type.
     * @returns A `AutoDelegateConfig` request builder.
     */
    static requestBuilder(): AutoDelegateConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AutoDelegateConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
     */
    static customField(fieldName: string): CustomField<AutoDelegateConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { AutoDelegateDetail, AutoDelegateDetailType } from './AutoDelegateDetail';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface AutoDelegateConfigType {
    createdBy?: string;
    createdDateTime?: Moment;
    delegationStatus?: string;
    delegator: string;
    endTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    optimisticLockUuid?: string;
    startTime?: Moment;
    autoDelegateDetails: AutoDelegateDetailType[];
    createdByNav: UserType;
    delegationStatusNav: MdfEnumValueType;
    delegatorNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface AutoDelegateConfigTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    delegationStatus: string;
    delegator: string;
    endTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    optimisticLockUuid: string;
    startTime: Moment;
    autoDelegateDetails: AutoDelegateDetailType[];
    createdByNav: UserType;
    delegationStatusNav: MdfEnumValueType;
    delegatorNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace AutoDelegateConfig {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AutoDelegateConfig>;
    /**
     * Static representation of the [[delegationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATION_STATUS: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[delegator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATOR: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: DateField<AutoDelegateConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AutoDelegateConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[optimisticLockUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTIMISTIC_LOCK_UUID: StringField<AutoDelegateConfig>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: DateField<AutoDelegateConfig>;
    /**
     * Static representation of the one-to-many navigation property [[autoDelegateDetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTO_DELEGATE_DETAILS: Link<AutoDelegateConfig, AutoDelegateDetail>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<AutoDelegateConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[delegationStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATION_STATUS_NAV: OneToOneLink<AutoDelegateConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[delegatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATOR_NAV: OneToOneLink<AutoDelegateConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<AutoDelegateConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AutoDelegateConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<AutoDelegateConfig, WfRequest>;
    /**
     * All fields of the AutoDelegateConfig entity.
     */
    const _allFields: Array<StringField<AutoDelegateConfig> | DateField<AutoDelegateConfig> | Link<AutoDelegateConfig, AutoDelegateDetail> | OneToOneLink<AutoDelegateConfig, User> | OneToOneLink<AutoDelegateConfig, MdfEnumValue> | Link<AutoDelegateConfig, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AutoDelegateConfig>;
    /**
     * All key fields of the AutoDelegateConfig entity.
     */
    const _keyFields: Array<Selectable<AutoDelegateConfig>>;
    /**
     * Mapping of all key field names to the respective static field property AutoDelegateConfig.
     */
    const _keys: {
        [keys: string]: Selectable<AutoDelegateConfig>;
    };
}
//# sourceMappingURL=AutoDelegateConfig.d.ts.map