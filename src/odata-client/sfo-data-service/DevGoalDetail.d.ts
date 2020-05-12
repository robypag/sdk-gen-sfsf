import { DevGoalDetailRequestBuilder } from './DevGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalDetail" of service "SFOData".
 */
export declare class DevGoalDetail extends Entity implements DevGoalDetailType {
    /**
     * Technical entity name for DevGoalDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Activity_Activity ID.
     */
    activityActivityId: BigNumber;
    /**
     * Activity Development Goal Detail Linked By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Activity Development Goal Detail Linked Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     */
    externalCode: BigNumber;
    /**
     * Activity Development Goal ID.
     * @nullable
     */
    goalId?: BigNumber;
    /**
     * Activity Development Goal Detail Link Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Activity Development Goal Detail Link Modification Date.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Record Status.
     * Maximum length: 128.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * snapshot.
     * @nullable
     */
    snapshot?: boolean;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[SimpleDevGoal]] entity.
     */
    mdfDevGoalDetailToSimpleDevGoalNav: SimpleDevGoal;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `DevGoalDetail`.
     * @returns A builder that constructs instances of entity type `DevGoalDetail`.
     */
    static builder(): EntityBuilderType<DevGoalDetail, DevGoalDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalDetail` entity type.
     * @returns A `DevGoalDetail` request builder.
     */
    static requestBuilder(): DevGoalDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalDetail`.
     */
    static customField(fieldName: string): CustomField<DevGoalDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { SimpleDevGoal, SimpleDevGoalType } from './SimpleDevGoal';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface DevGoalDetailType {
    activityActivityId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    goalId?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    snapshot?: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface DevGoalDetailTypeForceMandatory {
    activityActivityId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    goalId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    snapshot: boolean;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace DevGoalDetail {
    /**
     * Static representation of the [[activityActivityId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVITY_ACTIVITY_ID: BigNumberField<DevGoalDetail>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<DevGoalDetail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<DevGoalDetail>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<DevGoalDetail>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: BigNumberField<DevGoalDetail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<DevGoalDetail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<DevGoalDetail>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<DevGoalDetail>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<DevGoalDetail>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<DevGoalDetail>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<DevGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<DevGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfDevGoalDetailToSimpleDevGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV: OneToOneLink<DevGoalDetail, SimpleDevGoal>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<DevGoalDetail, MdfEnumValue>;
    /**
     * All fields of the DevGoalDetail entity.
     */
    const _allFields: Array<BigNumberField<DevGoalDetail> | StringField<DevGoalDetail> | DateField<DevGoalDetail> | BooleanField<DevGoalDetail> | OneToOneLink<DevGoalDetail, User> | OneToOneLink<DevGoalDetail, SimpleDevGoal> | OneToOneLink<DevGoalDetail, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalDetail>;
    /**
     * All key fields of the DevGoalDetail entity.
     */
    const _keyFields: Array<Selectable<DevGoalDetail>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalDetail.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalDetail>;
    };
}
//# sourceMappingURL=DevGoalDetail.d.ts.map