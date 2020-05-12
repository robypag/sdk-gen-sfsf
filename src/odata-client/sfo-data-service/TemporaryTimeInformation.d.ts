import { TemporaryTimeInformationRequestBuilder } from './TemporaryTimeInformationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TemporaryTimeInformation" of service "SFOData".
 */
export declare class TemporaryTimeInformation extends Entity implements TemporaryTimeInformationType {
    /**
     * Technical entity name for TemporaryTimeInformation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TemporaryTimeInformation.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Comment.
     * Maximum length: 255.
     * @nullable
     */
    comment?: string;
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
     * Day Model.
     * Maximum length: 128.
     * @nullable
     */
    dayModel?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
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
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * Work Schedule.
     * Maximum length: 128.
     * @nullable
     */
    workSchedule?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[WorkScheduleDayModel]] entity.
     */
    dayModelNav: WorkScheduleDayModel;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * One-to-one navigation property to the [[WorkSchedule]] entity.
     */
    workScheduleNav: WorkSchedule;
    /**
     * Returns an entity builder to construct instances `TemporaryTimeInformation`.
     * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
     */
    static builder(): EntityBuilderType<TemporaryTimeInformation, TemporaryTimeInformationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TemporaryTimeInformation` entity type.
     * @returns A `TemporaryTimeInformation` request builder.
     */
    static requestBuilder(): TemporaryTimeInformationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TemporaryTimeInformation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TemporaryTimeInformation`.
     */
    static customField(fieldName: string): CustomField<TemporaryTimeInformation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { WorkScheduleDayModel, WorkScheduleDayModelType } from './WorkScheduleDayModel';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
import { WorkSchedule, WorkScheduleType } from './WorkSchedule';
export interface TemporaryTimeInformationType {
    comment?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    dayModel?: string;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    startDate?: Moment;
    userId?: string;
    workSchedule?: string;
    createdByNav: UserType;
    dayModelNav: WorkScheduleDayModelType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
    workScheduleNav: WorkScheduleType;
}
export interface TemporaryTimeInformationTypeForceMandatory {
    comment: string;
    createdBy: string;
    createdDateTime: Moment;
    dayModel: string;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    startDate: Moment;
    userId: string;
    workSchedule: string;
    createdByNav: UserType;
    dayModelNav: WorkScheduleDayModelType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
    workScheduleNav: WorkScheduleType;
}
export declare namespace TemporaryTimeInformation {
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[dayModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_MODEL: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the [[workSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE: StringField<TemporaryTimeInformation>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<TemporaryTimeInformation, User>;
    /**
     * Static representation of the one-to-one navigation property [[dayModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY_MODEL_NAV: OneToOneLink<TemporaryTimeInformation, WorkScheduleDayModel>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<TemporaryTimeInformation, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TemporaryTimeInformation, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<TemporaryTimeInformation, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<TemporaryTimeInformation, WfRequest>;
    /**
     * Static representation of the one-to-one navigation property [[workScheduleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_NAV: OneToOneLink<TemporaryTimeInformation, WorkSchedule>;
    /**
     * All fields of the TemporaryTimeInformation entity.
     */
    const _allFields: Array<StringField<TemporaryTimeInformation> | DateField<TemporaryTimeInformation> | OneToOneLink<TemporaryTimeInformation, User> | OneToOneLink<TemporaryTimeInformation, WorkScheduleDayModel> | OneToOneLink<TemporaryTimeInformation, MdfEnumValue> | Link<TemporaryTimeInformation, WfRequest> | OneToOneLink<TemporaryTimeInformation, WorkSchedule>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TemporaryTimeInformation>;
    /**
     * All key fields of the TemporaryTimeInformation entity.
     */
    const _keyFields: Array<Selectable<TemporaryTimeInformation>>;
    /**
     * Mapping of all key field names to the respective static field property TemporaryTimeInformation.
     */
    const _keys: {
        [keys: string]: Selectable<TemporaryTimeInformation>;
    };
}
//# sourceMappingURL=TemporaryTimeInformation.d.ts.map