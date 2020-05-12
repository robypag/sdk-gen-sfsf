import { TimeCollectorRequestBuilder } from './TimeCollectorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeCollector" of service "SFOData".
 */
export declare class TimeCollector extends Entity implements TimeCollectorType {
    /**
     * Technical entity name for TimeCollector.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeCollector.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Last Posting Date.
     * @nullable
     */
    bookingDate?: Moment;
    /**
     * Last Posting Value.
     * @nullable
     */
    changeValue?: BigNumber;
    /**
     * Collector Value.
     * @nullable
     */
    collectorValue?: BigNumber;
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
     * Valid To.
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
     * Valid From.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Collector Name.
     * Maximum length: 128.
     * @nullable
     */
    timeCollectorType?: string;
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
     * Returns an entity builder to construct instances `TimeCollector`.
     * @returns A builder that constructs instances of entity type `TimeCollector`.
     */
    static builder(): EntityBuilderType<TimeCollector, TimeCollectorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeCollector` entity type.
     * @returns A `TimeCollector` request builder.
     */
    static requestBuilder(): TimeCollectorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeCollector`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeCollector`.
     */
    static customField(fieldName: string): CustomField<TimeCollector>;
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
export interface TimeCollectorType {
    bookingDate?: Moment;
    changeValue?: BigNumber;
    collectorValue?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    startDate?: Moment;
    timeCollectorType?: string;
    userId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface TimeCollectorTypeForceMandatory {
    bookingDate: Moment;
    changeValue: BigNumber;
    collectorValue: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    startDate: Moment;
    timeCollectorType: string;
    userId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace TimeCollector {
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_DATE: DateField<TimeCollector>;
    /**
     * Static representation of the [[changeValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_VALUE: BigNumberField<TimeCollector>;
    /**
     * Static representation of the [[collectorValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTOR_VALUE: BigNumberField<TimeCollector>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeCollector>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeCollector>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<TimeCollector>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeCollector>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeCollector>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeCollector>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeCollector>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<TimeCollector>;
    /**
     * Static representation of the [[timeCollectorType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_COLLECTOR_TYPE: StringField<TimeCollector>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<TimeCollector>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<TimeCollector, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeCollector, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeCollector, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<TimeCollector, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<TimeCollector, WfRequest>;
    /**
     * All fields of the TimeCollector entity.
     */
    const _allFields: Array<DateField<TimeCollector> | BigNumberField<TimeCollector> | StringField<TimeCollector> | OneToOneLink<TimeCollector, User> | OneToOneLink<TimeCollector, MdfEnumValue> | Link<TimeCollector, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeCollector>;
    /**
     * All key fields of the TimeCollector entity.
     */
    const _keyFields: Array<Selectable<TimeCollector>>;
    /**
     * Mapping of all key field names to the respective static field property TimeCollector.
     */
    const _keys: {
        [keys: string]: Selectable<TimeCollector>;
    };
}
//# sourceMappingURL=TimeCollector.d.ts.map