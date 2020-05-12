import { ExternalTimeDataRequestBuilder } from './ExternalTimeDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalTimeData" of service "SFOData".
 */
export declare class ExternalTimeData extends Entity implements ExternalTimeDataType {
    /**
     * Technical entity name for ExternalTimeData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeData.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Category.
     * Maximum length: 128.
     * @nullable
     */
    category?: string;
    /**
     * Cost Center.
     * Maximum length: 128.
     * @nullable
     */
    costCenter?: string;
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
     * Delete this External Time Data.
     * @nullable
     */
    deleteExternalTime?: boolean;
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
     * Number of Hours.
     * @nullable
     */
    hours?: BigNumber;
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
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * Status.
     * Maximum length: 128.
     * @nullable
     */
    status?: string;
    /**
     * Time Type.
     * Maximum length: 128.
     * @nullable
     */
    timeType?: string;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    categoryNav: MdfEnumValue;
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
     * Returns an entity builder to construct instances `ExternalTimeData`.
     * @returns A builder that constructs instances of entity type `ExternalTimeData`.
     */
    static builder(): EntityBuilderType<ExternalTimeData, ExternalTimeDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeData` entity type.
     * @returns A `ExternalTimeData` request builder.
     */
    static requestBuilder(): ExternalTimeDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeData`.
     */
    static customField(fieldName: string): CustomField<ExternalTimeData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';
export interface ExternalTimeDataType {
    category?: string;
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    deleteExternalTime?: boolean;
    endDate?: Moment;
    endTime?: Time;
    externalCode: string;
    hours?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    startDate?: Moment;
    startTime?: Time;
    status?: string;
    timeType?: string;
    userId?: string;
    categoryNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface ExternalTimeDataTypeForceMandatory {
    category: string;
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    deleteExternalTime: boolean;
    endDate: Moment;
    endTime: Time;
    externalCode: string;
    hours: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    startDate: Moment;
    startTime: Time;
    status: string;
    timeType: string;
    userId: string;
    categoryNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace ExternalTimeData {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ExternalTimeData>;
    /**
     * Static representation of the [[deleteExternalTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETE_EXTERNAL_TIME: BooleanField<ExternalTimeData>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<ExternalTimeData>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<ExternalTimeData>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS: BigNumberField<ExternalTimeData>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalTimeData>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<ExternalTimeData>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<ExternalTimeData>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[timeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE: StringField<ExternalTimeData>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<ExternalTimeData>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ExternalTimeData, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ExternalTimeData, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<ExternalTimeData, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<ExternalTimeData, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<ExternalTimeData, WfRequest>;
    /**
     * All fields of the ExternalTimeData entity.
     */
    const _allFields: Array<StringField<ExternalTimeData> | DateField<ExternalTimeData> | BooleanField<ExternalTimeData> | TimeField<ExternalTimeData> | BigNumberField<ExternalTimeData> | OneToOneLink<ExternalTimeData, MdfEnumValue> | OneToOneLink<ExternalTimeData, User> | Link<ExternalTimeData, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalTimeData>;
    /**
     * All key fields of the ExternalTimeData entity.
     */
    const _keyFields: Array<Selectable<ExternalTimeData>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeData.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalTimeData>;
    };
}
//# sourceMappingURL=ExternalTimeData.d.ts.map