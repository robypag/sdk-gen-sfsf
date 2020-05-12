import { SecondaryAssignmentsRequestBuilder } from './SecondaryAssignmentsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SecondaryAssignments" of service "SFOData".
 */
export declare class SecondaryAssignments extends Entity implements SecondaryAssignmentsType {
    /**
     * Technical entity name for SecondaryAssignments.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SecondaryAssignments.
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
     * effectiveEndDate.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective Start Date.
     */
    effectiveStartDate: Moment;
    /**
     * Person ID External.
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * One-to-many navigation property to the [[SecondaryAssignmentsItem]] entity.
     */
    allSfProcesses: SecondaryAssignmentsItem[];
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
     * Returns an entity builder to construct instances `SecondaryAssignments`.
     * @returns A builder that constructs instances of entity type `SecondaryAssignments`.
     */
    static builder(): EntityBuilderType<SecondaryAssignments, SecondaryAssignmentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SecondaryAssignments` entity type.
     * @returns A `SecondaryAssignments` request builder.
     */
    static requestBuilder(): SecondaryAssignmentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SecondaryAssignments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SecondaryAssignments`.
     */
    static customField(fieldName: string): CustomField<SecondaryAssignments>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SecondaryAssignmentsItem, SecondaryAssignmentsItemType } from './SecondaryAssignmentsItem';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface SecondaryAssignmentsType {
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    allSfProcesses: SecondaryAssignmentsItemType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface SecondaryAssignmentsTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    allSfProcesses: SecondaryAssignmentsItemType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SecondaryAssignments {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SecondaryAssignments>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SecondaryAssignments>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<SecondaryAssignments>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<SecondaryAssignments>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SecondaryAssignments>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SecondaryAssignments>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SecondaryAssignments>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SecondaryAssignments>;
    /**
     * Static representation of the one-to-many navigation property [[allSfProcesses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALL_SF_PROCESSES: Link<SecondaryAssignments, SecondaryAssignmentsItem>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SecondaryAssignments, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SecondaryAssignments, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SecondaryAssignments, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SecondaryAssignments, WfRequest>;
    /**
     * All fields of the SecondaryAssignments entity.
     */
    const _allFields: Array<StringField<SecondaryAssignments> | DateField<SecondaryAssignments> | Link<SecondaryAssignments, SecondaryAssignmentsItem> | OneToOneLink<SecondaryAssignments, User> | OneToOneLink<SecondaryAssignments, MdfEnumValue> | Link<SecondaryAssignments, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SecondaryAssignments>;
    /**
     * All key fields of the SecondaryAssignments entity.
     */
    const _keyFields: Array<Selectable<SecondaryAssignments>>;
    /**
     * Mapping of all key field names to the respective static field property SecondaryAssignments.
     */
    const _keys: {
        [keys: string]: Selectable<SecondaryAssignments>;
    };
}
//# sourceMappingURL=SecondaryAssignments.d.ts.map