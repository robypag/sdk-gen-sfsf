import { PositionRightToReturnRequestBuilder } from './PositionRightToReturnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PositionRightToReturn" of service "SFOData".
 */
export declare class PositionRightToReturn extends Entity implements PositionRightToReturnType {
    /**
     * Technical entity name for PositionRightToReturn.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionRightToReturn.
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
     * Status.
     * Maximum length: 128.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Code.
     */
    externalCode: BigNumber;
    /**
     * gaEndJobInfoId.
     * @nullable
     */
    gaEndJobInfoId?: BigNumber;
    /**
     * Event Reason.
     * Maximum length: 32.
     * @nullable
     */
    gaEventReason?: string;
    /**
     * gaStartJobInfoId.
     * @nullable
     */
    gaStartJobInfoId?: BigNumber;
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
     * Time Type.
     * Maximum length: 128.
     * @nullable
     */
    loaTimeType?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * posTBHEndRowId.
     * @nullable
     */
    posTbhEndRowId?: BigNumber;
    /**
     * posTBHStartRowId.
     * @nullable
     */
    posTbhStartRowId?: BigNumber;
    /**
     * Position.
     * Maximum length: 128.
     * @nullable
     */
    position?: string;
    /**
     * Reason.
     * Maximum length: 128.
     * @nullable
     */
    reason?: string;
    /**
     * rootObjectId.
     * Maximum length: 255.
     * @nullable
     */
    rootObjectId?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[FoEventReason]] entity.
     */
    gaEventReasonNav: FoEventReason[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[TimeType]] entity.
     */
    loaTimeTypeNav: TimeType;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    positionNav: Position[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    reasonNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PositionRightToReturn`.
     * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
     */
    static builder(): EntityBuilderType<PositionRightToReturn, PositionRightToReturnTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PositionRightToReturn` entity type.
     * @returns A `PositionRightToReturn` request builder.
     */
    static requestBuilder(): PositionRightToReturnRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionRightToReturn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
     */
    static customField(fieldName: string): CustomField<PositionRightToReturn>;
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
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { TimeType, TimeTypeType } from './TimeType';
import { Position, PositionType } from './Position';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PositionRightToReturnType {
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveStatus?: string;
    endDate?: Moment;
    externalCode: BigNumber;
    gaEndJobInfoId?: BigNumber;
    gaEventReason?: string;
    gaStartJobInfoId?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    loaTimeType?: string;
    mdfSystemRecordStatus?: string;
    posTbhEndRowId?: BigNumber;
    posTbhStartRowId?: BigNumber;
    position?: string;
    reason?: string;
    rootObjectId?: string;
    startDate?: Moment;
    userId?: string;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    gaEventReasonNav: FoEventReasonType[];
    lastModifiedByNav: UserType;
    loaTimeTypeNav: TimeTypeType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    positionNav: PositionType[];
    reasonNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface PositionRightToReturnTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    effectiveStatus: string;
    endDate: Moment;
    externalCode: BigNumber;
    gaEndJobInfoId: BigNumber;
    gaEventReason: string;
    gaStartJobInfoId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    loaTimeType: string;
    mdfSystemRecordStatus: string;
    posTbhEndRowId: BigNumber;
    posTbhStartRowId: BigNumber;
    position: string;
    reason: string;
    rootObjectId: string;
    startDate: Moment;
    userId: string;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    gaEventReasonNav: FoEventReasonType[];
    lastModifiedByNav: UserType;
    loaTimeTypeNav: TimeTypeType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    positionNav: PositionType[];
    reasonNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PositionRightToReturn {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PositionRightToReturn>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<PositionRightToReturn>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<PositionRightToReturn>;
    /**
     * Static representation of the [[gaEndJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GA_END_JOB_INFO_ID: BigNumberField<PositionRightToReturn>;
    /**
     * Static representation of the [[gaEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GA_EVENT_REASON: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[gaStartJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GA_START_JOB_INFO_ID: BigNumberField<PositionRightToReturn>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PositionRightToReturn>;
    /**
     * Static representation of the [[loaTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_TIME_TYPE: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[posTbhEndRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_TBH_END_ROW_ID: BigNumberField<PositionRightToReturn>;
    /**
     * Static representation of the [[posTbhStartRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_TBH_START_ROW_ID: BigNumberField<PositionRightToReturn>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[rootObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOT_OBJECT_ID: StringField<PositionRightToReturn>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<PositionRightToReturn>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<PositionRightToReturn>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PositionRightToReturn, User>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[gaEventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GA_EVENT_REASON_NAV: Link<PositionRightToReturn, FoEventReason>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionRightToReturn, User>;
    /**
     * Static representation of the one-to-one navigation property [[loaTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOA_TIME_TYPE_NAV: OneToOneLink<PositionRightToReturn, TimeType>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: Link<PositionRightToReturn, Position>;
    /**
     * Static representation of the one-to-one navigation property [[reasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_NAV: OneToOneLink<PositionRightToReturn, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<PositionRightToReturn, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PositionRightToReturn, WfRequest>;
    /**
     * All fields of the PositionRightToReturn entity.
     */
    const _allFields: Array<StringField<PositionRightToReturn> | DateField<PositionRightToReturn> | BigNumberField<PositionRightToReturn> | OneToOneLink<PositionRightToReturn, User> | OneToOneLink<PositionRightToReturn, MdfEnumValue> | Link<PositionRightToReturn, FoEventReason> | OneToOneLink<PositionRightToReturn, TimeType> | Link<PositionRightToReturn, Position> | Link<PositionRightToReturn, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PositionRightToReturn>;
    /**
     * All key fields of the PositionRightToReturn entity.
     */
    const _keyFields: Array<Selectable<PositionRightToReturn>>;
    /**
     * Mapping of all key field names to the respective static field property PositionRightToReturn.
     */
    const _keys: {
        [keys: string]: Selectable<PositionRightToReturn>;
    };
}
//# sourceMappingURL=PositionRightToReturn.d.ts.map