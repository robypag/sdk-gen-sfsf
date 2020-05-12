import { ExternalTimeSegmentRequestBuilder } from './ExternalTimeSegmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalTimeSegment" of service "SFOData".
 */
export declare class ExternalTimeSegment extends Entity implements ExternalTimeSegmentType {
    /**
     * Technical entity name for ExternalTimeSegment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalTimeSegment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * External Time Record_External Code.
     * Maximum length: 128.
     */
    externalTimeRecordExternalCode: string;
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
     * Returns an entity builder to construct instances `ExternalTimeSegment`.
     * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
     */
    static builder(): EntityBuilderType<ExternalTimeSegment, ExternalTimeSegmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalTimeSegment` entity type.
     * @returns A `ExternalTimeSegment` request builder.
     */
    static requestBuilder(): ExternalTimeSegmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeSegment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
     */
    static customField(fieldName: string): CustomField<ExternalTimeSegment>;
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
export interface ExternalTimeSegmentType {
    externalTimeRecordExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    hours?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface ExternalTimeSegmentTypeForceMandatory {
    externalTimeRecordExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    hours: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace ExternalTimeSegment {
    /**
     * Static representation of the [[externalTimeRecordExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_TIME_RECORD_EXTERNAL_CODE: StringField<ExternalTimeSegment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ExternalTimeSegment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<ExternalTimeSegment>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<ExternalTimeSegment>;
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS: BigNumberField<ExternalTimeSegment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<ExternalTimeSegment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalTimeSegment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<ExternalTimeSegment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<ExternalTimeSegment, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<ExternalTimeSegment, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ExternalTimeSegment, MdfEnumValue>;
    /**
     * All fields of the ExternalTimeSegment entity.
     */
    const _allFields: Array<StringField<ExternalTimeSegment> | DateField<ExternalTimeSegment> | BigNumberField<ExternalTimeSegment> | OneToOneLink<ExternalTimeSegment, User> | OneToOneLink<ExternalTimeSegment, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalTimeSegment>;
    /**
     * All key fields of the ExternalTimeSegment entity.
     */
    const _keyFields: Array<Selectable<ExternalTimeSegment>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalTimeSegment.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalTimeSegment>;
    };
}
//# sourceMappingURL=ExternalTimeSegment.d.ts.map