import { ExternalTimeRecordRequestBuilder } from './ExternalTimeRecordRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalTimeRecord" of service "SFOData".
 */
export declare class ExternalTimeRecord extends Entity implements ExternalTimeRecordType {
    /**
     * Technical entity name for ExternalTimeRecord.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeRecord.
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
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Delete this External Time Record.
     * @nullable
     */
    deleteExternalTime?: boolean;
    /**
     * External Code.
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
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[ExternalTimeSegment]] entity.
     */
    externalTimeSegments: ExternalTimeSegment[];
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
    statusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `ExternalTimeRecord`.
     * @returns A builder that constructs instances of entity type `ExternalTimeRecord`.
     */
    static builder(): EntityBuilderType<ExternalTimeRecord, ExternalTimeRecordTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeRecord` entity type.
     * @returns A `ExternalTimeRecord` request builder.
     */
    static requestBuilder(): ExternalTimeRecordRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeRecord`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeRecord`.
     */
    static customField(fieldName: string): CustomField<ExternalTimeRecord>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { ExternalTimeSegment, ExternalTimeSegmentType } from './ExternalTimeSegment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface ExternalTimeRecordType {
    createdBy?: string;
    createdDateTime?: Moment;
    date?: Moment;
    deleteExternalTime?: boolean;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    userId?: string;
    createdByNav: UserType;
    externalTimeSegments: ExternalTimeSegmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface ExternalTimeRecordTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    date: Moment;
    deleteExternalTime: boolean;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    userId: string;
    createdByNav: UserType;
    externalTimeSegments: ExternalTimeSegmentType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace ExternalTimeRecord {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ExternalTimeRecord>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<ExternalTimeRecord>;
    /**
     * Static representation of the [[deleteExternalTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETE_EXTERNAL_TIME: BooleanField<ExternalTimeRecord>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalTimeRecord>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<ExternalTimeRecord>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ExternalTimeRecord, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalTimeSegments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_TIME_SEGMENTS: Link<ExternalTimeRecord, ExternalTimeSegment>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ExternalTimeRecord, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ExternalTimeRecord, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<ExternalTimeRecord, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<ExternalTimeRecord, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<ExternalTimeRecord, WfRequest>;
    /**
     * All fields of the ExternalTimeRecord entity.
     */
    const _allFields: Array<StringField<ExternalTimeRecord> | DateField<ExternalTimeRecord> | BooleanField<ExternalTimeRecord> | OneToOneLink<ExternalTimeRecord, User> | Link<ExternalTimeRecord, ExternalTimeSegment> | OneToOneLink<ExternalTimeRecord, MdfEnumValue> | Link<ExternalTimeRecord, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalTimeRecord>;
    /**
     * All key fields of the ExternalTimeRecord entity.
     */
    const _keyFields: Array<Selectable<ExternalTimeRecord>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeRecord.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalTimeRecord>;
    };
}
//# sourceMappingURL=ExternalTimeRecord.d.ts.map