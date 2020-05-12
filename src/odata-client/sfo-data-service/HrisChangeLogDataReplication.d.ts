import { HrisChangeLogDataReplicationRequestBuilder } from './HrisChangeLogDataReplicationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "HRISChangeLogDataReplication" of service "SFOData".
 */
export declare class HrisChangeLogDataReplication extends Entity implements HrisChangeLogDataReplicationType {
    /**
     * Technical entity name for HrisChangeLogDataReplication.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HrisChangeLogDataReplication.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * changedEffectiveStartDate.
     * @nullable
     */
    changedEffectiveStartDate?: Moment;
    /**
     * changedExternalCode.
     * Maximum length: 255.
     * @nullable
     */
    changedExternalCode?: string;
    /**
     * changedInternalId.
     * @nullable
     */
    changedInternalId?: BigNumber;
    /**
     * changedObjectType.
     * Maximum length: 255.
     * @nullable
     */
    changedObjectType?: string;
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
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * field2.
     * Maximum length: 255.
     * @nullable
     */
    field2?: string;
    /**
     * field3.
     * Maximum length: 255.
     * @nullable
     */
    field3?: string;
    /**
     * field4.
     * Maximum length: 255.
     * @nullable
     */
    field4?: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
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
     * performanceChangedExternalCode.
     * Maximum length: 255.
     * @nullable
     */
    performanceChangedExternalCode?: string;
    /**
     * userId.
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
     * Returns an entity builder to construct instances `HrisChangeLogDataReplication`.
     * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
     */
    static builder(): EntityBuilderType<HrisChangeLogDataReplication, HrisChangeLogDataReplicationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HrisChangeLogDataReplication` entity type.
     * @returns A `HrisChangeLogDataReplication` request builder.
     */
    static requestBuilder(): HrisChangeLogDataReplicationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HrisChangeLogDataReplication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
     */
    static customField(fieldName: string): CustomField<HrisChangeLogDataReplication>;
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
export interface HrisChangeLogDataReplicationType {
    changedEffectiveStartDate?: Moment;
    changedExternalCode?: string;
    changedInternalId?: BigNumber;
    changedObjectType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    field2?: string;
    field3?: string;
    field4?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    performanceChangedExternalCode?: string;
    userId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface HrisChangeLogDataReplicationTypeForceMandatory {
    changedEffectiveStartDate: Moment;
    changedExternalCode: string;
    changedInternalId: BigNumber;
    changedObjectType: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    field2: string;
    field3: string;
    field4: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    performanceChangedExternalCode: string;
    userId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace HrisChangeLogDataReplication {
    /**
     * Static representation of the [[changedEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_EFFECTIVE_START_DATE: DateField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[changedExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_EXTERNAL_CODE: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[changedInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_INTERNAL_ID: BigNumberField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[changedObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_OBJECT_TYPE: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[field2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_2: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[field3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_3: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[field4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_4: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[performanceChangedExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERFORMANCE_CHANGED_EXTERNAL_CODE: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<HrisChangeLogDataReplication>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<HrisChangeLogDataReplication, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<HrisChangeLogDataReplication, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HrisChangeLogDataReplication, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<HrisChangeLogDataReplication, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<HrisChangeLogDataReplication, WfRequest>;
    /**
     * All fields of the HrisChangeLogDataReplication entity.
     */
    const _allFields: Array<DateField<HrisChangeLogDataReplication> | StringField<HrisChangeLogDataReplication> | BigNumberField<HrisChangeLogDataReplication> | OneToOneLink<HrisChangeLogDataReplication, User> | OneToOneLink<HrisChangeLogDataReplication, MdfEnumValue> | Link<HrisChangeLogDataReplication, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HrisChangeLogDataReplication>;
    /**
     * All key fields of the HrisChangeLogDataReplication entity.
     */
    const _keyFields: Array<Selectable<HrisChangeLogDataReplication>>;
    /**
     * Mapping of all key field names to the respective static field property HrisChangeLogDataReplication.
     */
    const _keys: {
        [keys: string]: Selectable<HrisChangeLogDataReplication>;
    };
}
//# sourceMappingURL=HrisChangeLogDataReplication.d.ts.map