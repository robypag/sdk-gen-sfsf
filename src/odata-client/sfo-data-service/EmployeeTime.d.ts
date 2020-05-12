import { EmployeeTimeRequestBuilder } from './EmployeeTimeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTime" of service "SFOData".
 */
export declare class EmployeeTime extends Entity implements EmployeeTimeType {
    /**
     * Technical entity name for EmployeeTime.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTime.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Approval Status.
     * Maximum length: 255.
     * @nullable
     */
    approvalStatus?: string;
    /**
     * Cancellation Workflow Request.
     * @nullable
     */
    cancellationWorkflowRequestId?: BigNumber;
    /**
     * Comment.
     * Maximum length: 4000.
     * @nullable
     */
    comment?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Deduction Quantity.
     * @nullable
     */
    deductionQuantity?: BigNumber;
    /**
     * displayQuantity.
     * @nullable
     */
    displayQuantity?: BigNumber;
    /**
     * Editable.
     * @nullable
     */
    editable?: boolean;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * End Time.
     * @nullable
     */
    endTime?: Time;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Flexible Requesting.
     * @nullable
     */
    flexibleRequesting?: boolean;
    /**
     * Fraction Quantity.
     * @nullable
     */
    fractionQuantity?: BigNumber;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Actual Return Date.
     * @nullable
     */
    loaActualReturnDate?: Moment;
    /**
     * Leave Of Absence Job Info ID (Return To Work).
     * @nullable
     */
    loaEndJobInfoId?: BigNumber;
    /**
     * Expected Return Date.
     * @nullable
     */
    loaExpectedReturnDate?: Moment;
    /**
     * Leave Of Absence Job Info ID (Start).
     * @nullable
     */
    loaStartJobInfoId?: BigNumber;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Original Number of Days.
     * @nullable
     */
    originalQuantityInDays?: BigNumber;
    /**
     * Number Of Days.
     * @nullable
     */
    quantityInDays?: BigNumber;
    /**
     * Number Of Hours.
     * @nullable
     */
    quantityInHours?: BigNumber;
    /**
     * Recurrence Group.
     * Maximum length: 128.
     * @nullable
     */
    recurrenceGroup?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * Time Record Origin.
     * Maximum length: 255.
     * @nullable
     */
    timeRecordOrigin?: string;
    /**
     * Time Type.
     * Maximum length: 128.
     * @nullable
     */
    timeType?: string;
    /**
     * Undetermined End Date.
     * @nullable
     */
    undeterminedEndDate?: boolean;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * Workflow Initiated By Admin.
     * @nullable
     */
    workflowInitiatedByAdmin?: boolean;
    /**
     * Workflow Request.
     * @nullable
     */
    workflowRequestId?: BigNumber;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    approvalStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[EmployeeTimeAus]] entity.
     */
    countryExtensionAus: EmployeeTimeAus;
    /**
     * One-to-one navigation property to the [[EmployeeTimeCol]] entity.
     */
    countryExtensionCol: EmployeeTimeCol;
    /**
     * One-to-one navigation property to the [[EmployeeTimeDeu]] entity.
     */
    countryExtensionDeu: EmployeeTimeDeu;
    /**
     * One-to-one navigation property to the [[EmployeeTimeEsp]] entity.
     */
    countryExtensionEsp: EmployeeTimeEsp;
    /**
     * One-to-one navigation property to the [[EmployeeTimeMex]] entity.
     */
    countryExtensionMex: EmployeeTimeMex;
    /**
     * One-to-one navigation property to the [[EmployeeTimePol]] entity.
     */
    countryExtensionPol: EmployeeTimePol;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    custAttachmentNav: Attachment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
     */
    recurrenceGroupNav: EmployeeTimeGroup;
    /**
     * One-to-many navigation property to the [[EmployeeTimeCalendar]] entity.
     */
    timeCalendar: EmployeeTimeCalendar[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    timeRecordOriginNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[TimeType]] entity.
     */
    timeTypeNav: TimeType;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmployeeTime`.
     * @returns A builder that constructs instances of entity type `EmployeeTime`.
     */
    static builder(): EntityBuilderType<EmployeeTime, EmployeeTimeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTime` entity type.
     * @returns A `EmployeeTime` request builder.
     */
    static requestBuilder(): EmployeeTimeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTime`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTime`.
     */
    static customField(fieldName: string): CustomField<EmployeeTime>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeTimeAus, EmployeeTimeAusType } from './EmployeeTimeAus';
import { EmployeeTimeCol, EmployeeTimeColType } from './EmployeeTimeCol';
import { EmployeeTimeDeu, EmployeeTimeDeuType } from './EmployeeTimeDeu';
import { EmployeeTimeEsp, EmployeeTimeEspType } from './EmployeeTimeEsp';
import { EmployeeTimeMex, EmployeeTimeMexType } from './EmployeeTimeMex';
import { EmployeeTimePol, EmployeeTimePolType } from './EmployeeTimePol';
import { User, UserType } from './User';
import { Attachment, AttachmentType } from './Attachment';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { TimeType, TimeTypeType } from './TimeType';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmployeeTimeType {
    approvalStatus?: string;
    cancellationWorkflowRequestId?: BigNumber;
    comment?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    deductionQuantity?: BigNumber;
    displayQuantity?: BigNumber;
    editable?: boolean;
    endDate?: Moment;
    endTime?: Time;
    externalCode: string;
    flexibleRequesting?: boolean;
    fractionQuantity?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    loaActualReturnDate?: Moment;
    loaEndJobInfoId?: BigNumber;
    loaExpectedReturnDate?: Moment;
    loaStartJobInfoId?: BigNumber;
    mdfSystemRecordStatus?: string;
    originalQuantityInDays?: BigNumber;
    quantityInDays?: BigNumber;
    quantityInHours?: BigNumber;
    recurrenceGroup?: string;
    startDate?: Moment;
    startTime?: Time;
    timeRecordOrigin?: string;
    timeType?: string;
    undeterminedEndDate?: boolean;
    userId?: string;
    workflowInitiatedByAdmin?: boolean;
    workflowRequestId?: BigNumber;
    approvalStatusNav: MdfEnumValueType;
    countryExtensionAus: EmployeeTimeAusType;
    countryExtensionCol: EmployeeTimeColType;
    countryExtensionDeu: EmployeeTimeDeuType;
    countryExtensionEsp: EmployeeTimeEspType;
    countryExtensionMex: EmployeeTimeMexType;
    countryExtensionPol: EmployeeTimePolType;
    createdByNav: UserType;
    custAttachmentNav: AttachmentType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    recurrenceGroupNav: EmployeeTimeGroupType;
    timeCalendar: EmployeeTimeCalendarType[];
    timeRecordOriginNav: MdfEnumValueType;
    timeTypeNav: TimeTypeType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface EmployeeTimeTypeForceMandatory {
    approvalStatus: string;
    cancellationWorkflowRequestId: BigNumber;
    comment: string;
    createdBy: string;
    createdDateTime: Moment;
    deductionQuantity: BigNumber;
    displayQuantity: BigNumber;
    editable: boolean;
    endDate: Moment;
    endTime: Time;
    externalCode: string;
    flexibleRequesting: boolean;
    fractionQuantity: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    loaActualReturnDate: Moment;
    loaEndJobInfoId: BigNumber;
    loaExpectedReturnDate: Moment;
    loaStartJobInfoId: BigNumber;
    mdfSystemRecordStatus: string;
    originalQuantityInDays: BigNumber;
    quantityInDays: BigNumber;
    quantityInHours: BigNumber;
    recurrenceGroup: string;
    startDate: Moment;
    startTime: Time;
    timeRecordOrigin: string;
    timeType: string;
    undeterminedEndDate: boolean;
    userId: string;
    workflowInitiatedByAdmin: boolean;
    workflowRequestId: BigNumber;
    approvalStatusNav: MdfEnumValueType;
    countryExtensionAus: EmployeeTimeAusType;
    countryExtensionCol: EmployeeTimeColType;
    countryExtensionDeu: EmployeeTimeDeuType;
    countryExtensionEsp: EmployeeTimeEspType;
    countryExtensionMex: EmployeeTimeMexType;
    countryExtensionPol: EmployeeTimePolType;
    createdByNav: UserType;
    custAttachmentNav: AttachmentType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    recurrenceGroupNav: EmployeeTimeGroupType;
    timeCalendar: EmployeeTimeCalendarType[];
    timeRecordOriginNav: MdfEnumValueType;
    timeTypeNav: TimeTypeType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmployeeTime {
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS: StringField<EmployeeTime>;
    /**
     * Static representation of the [[cancellationWorkflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELLATION_WORKFLOW_REQUEST_ID: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<EmployeeTime>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTime>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTime>;
    /**
     * Static representation of the [[deductionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_QUANTITY: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[displayQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_QUANTITY: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDITABLE: BooleanField<EmployeeTime>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmployeeTime>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<EmployeeTime>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTime>;
    /**
     * Static representation of the [[flexibleRequesting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLEXIBLE_REQUESTING: BooleanField<EmployeeTime>;
    /**
     * Static representation of the [[fractionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FRACTION_QUANTITY: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTime>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTime>;
    /**
     * Static representation of the [[loaActualReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_ACTUAL_RETURN_DATE: DateField<EmployeeTime>;
    /**
     * Static representation of the [[loaEndJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_END_JOB_INFO_ID: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[loaExpectedReturnDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_EXPECTED_RETURN_DATE: DateField<EmployeeTime>;
    /**
     * Static representation of the [[loaStartJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_START_JOB_INFO_ID: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTime>;
    /**
     * Static representation of the [[originalQuantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_QUANTITY_IN_DAYS: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[quantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_DAYS: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_HOURS: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the [[recurrenceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_GROUP: StringField<EmployeeTime>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmployeeTime>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<EmployeeTime>;
    /**
     * Static representation of the [[timeRecordOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORD_ORIGIN: StringField<EmployeeTime>;
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE: StringField<EmployeeTime>;
    /**
     * Static representation of the [[undeterminedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDETERMINED_END_DATE: BooleanField<EmployeeTime>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmployeeTime>;
    /**
     * Static representation of the [[workflowInitiatedByAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_INITIATED_BY_ADMIN: BooleanField<EmployeeTime>;
    /**
     * Static representation of the [[workflowRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKFLOW_REQUEST_ID: BigNumberField<EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS_NAV: OneToOneLink<EmployeeTime, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_AUS: OneToOneLink<EmployeeTime, EmployeeTimeAus>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionCol]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_COL: OneToOneLink<EmployeeTime, EmployeeTimeCol>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_DEU: OneToOneLink<EmployeeTime, EmployeeTimeDeu>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_ESP: OneToOneLink<EmployeeTime, EmployeeTimeEsp>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionMex]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_MEX: OneToOneLink<EmployeeTime, EmployeeTimeMex>;
    /**
     * Static representation of the one-to-one navigation property [[countryExtensionPol]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_EXTENSION_POL: OneToOneLink<EmployeeTime, EmployeeTimePol>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTime, User>;
    /**
     * Static representation of the one-to-one navigation property [[custAttachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_ATTACHMENT_NAV: OneToOneLink<EmployeeTime, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTime, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTime, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[recurrenceGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRENCE_GROUP_NAV: OneToOneLink<EmployeeTime, EmployeeTimeGroup>;
    /**
     * Static representation of the one-to-many navigation property [[timeCalendar]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_CALENDAR: Link<EmployeeTime, EmployeeTimeCalendar>;
    /**
     * Static representation of the one-to-one navigation property [[timeRecordOriginNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORD_ORIGIN_NAV: OneToOneLink<EmployeeTime, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_NAV: OneToOneLink<EmployeeTime, TimeType>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<EmployeeTime, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmployeeTime, WfRequest>;
    /**
     * All fields of the EmployeeTime entity.
     */
    const _allFields: Array<StringField<EmployeeTime> | BigNumberField<EmployeeTime> | DateField<EmployeeTime> | BooleanField<EmployeeTime> | TimeField<EmployeeTime> | OneToOneLink<EmployeeTime, MdfEnumValue> | OneToOneLink<EmployeeTime, EmployeeTimeAus> | OneToOneLink<EmployeeTime, EmployeeTimeCol> | OneToOneLink<EmployeeTime, EmployeeTimeDeu> | OneToOneLink<EmployeeTime, EmployeeTimeEsp> | OneToOneLink<EmployeeTime, EmployeeTimeMex> | OneToOneLink<EmployeeTime, EmployeeTimePol> | OneToOneLink<EmployeeTime, User> | OneToOneLink<EmployeeTime, Attachment> | OneToOneLink<EmployeeTime, EmployeeTimeGroup> | Link<EmployeeTime, EmployeeTimeCalendar> | OneToOneLink<EmployeeTime, TimeType> | Link<EmployeeTime, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTime>;
    /**
     * All key fields of the EmployeeTime entity.
     */
    const _keyFields: Array<Selectable<EmployeeTime>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTime.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTime>;
    };
}
//# sourceMappingURL=EmployeeTime.d.ts.map