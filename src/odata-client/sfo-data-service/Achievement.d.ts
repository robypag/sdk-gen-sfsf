import { AchievementRequestBuilder } from './AchievementRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Achievement" of service "SFOData".
 */
export declare class Achievement extends Entity implements AchievementType {
    /**
     * Technical entity name for Achievement.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Achievement.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Achievement Date.
     * @nullable
     */
    achievementDate?: Moment;
    /**
     * Achievement ID.
     */
    achievementId: BigNumber;
    /**
     * Achievement Name.
     * Maximum length: 4000.
     * @nullable
     */
    achievementName?: string;
    /**
     * Achievement Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Achievement Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Achievement Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Achievement Last Modified Date.
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
     * Activity.
     * @nullable
     */
    parentExternalId?: BigNumber;
    /**
     * Achievement Parent Type.
     * Maximum length: 128.
     * @nullable
     */
    parentTypeEnum?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * reviewed.
     * @nullable
     */
    reviewed?: boolean;
    /**
     * snapshot.
     * @nullable
     */
    snapshot?: boolean;
    /**
     * Achievement Owner.
     * Maximum length: 100.
     * @nullable
     */
    subjectUserId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[AchievementDevGoalDetail]] entity.
     */
    devGoalDetailList: AchievementDevGoalDetail[];
    /**
     * One-to-many navigation property to the [[AchievementGoalDetail]] entity.
     */
    goalDetailList: AchievementGoalDetail[];
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
    parentTypeEnumNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    subjectUserIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Achievement`.
     * @returns A builder that constructs instances of entity type `Achievement`.
     */
    static builder(): EntityBuilderType<Achievement, AchievementTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Achievement` entity type.
     * @returns A `Achievement` request builder.
     */
    static requestBuilder(): AchievementRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Achievement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Achievement`.
     */
    static customField(fieldName: string): CustomField<Achievement>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { AchievementDevGoalDetail, AchievementDevGoalDetailType } from './AchievementDevGoalDetail';
import { AchievementGoalDetail, AchievementGoalDetailType } from './AchievementGoalDetail';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface AchievementType {
    achievementDate?: Moment;
    achievementId: BigNumber;
    achievementName?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    parentExternalId?: BigNumber;
    parentTypeEnum?: string;
    recordId?: string;
    reviewed?: boolean;
    snapshot?: boolean;
    subjectUserId?: string;
    createdByNav: UserType;
    devGoalDetailList: AchievementDevGoalDetailType[];
    goalDetailList: AchievementGoalDetailType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentTypeEnumNav: MdfEnumValueType;
    subjectUserIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface AchievementTypeForceMandatory {
    achievementDate: Moment;
    achievementId: BigNumber;
    achievementName: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    parentExternalId: BigNumber;
    parentTypeEnum: string;
    recordId: string;
    reviewed: boolean;
    snapshot: boolean;
    subjectUserId: string;
    createdByNav: UserType;
    devGoalDetailList: AchievementDevGoalDetailType[];
    goalDetailList: AchievementGoalDetailType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentTypeEnumNav: MdfEnumValueType;
    subjectUserIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Achievement {
    /**
     * Static representation of the [[achievementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_DATE: DateField<Achievement>;
    /**
     * Static representation of the [[achievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_ID: BigNumberField<Achievement>;
    /**
     * Static representation of the [[achievementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_NAME: StringField<Achievement>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Achievement>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Achievement>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Achievement>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Achievement>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Achievement>;
    /**
     * Static representation of the [[parentExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_EXTERNAL_ID: BigNumberField<Achievement>;
    /**
     * Static representation of the [[parentTypeEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_TYPE_ENUM: StringField<Achievement>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<Achievement>;
    /**
     * Static representation of the [[reviewed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEWED: BooleanField<Achievement>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<Achievement>;
    /**
     * Static representation of the [[subjectUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID: StringField<Achievement>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Achievement, User>;
    /**
     * Static representation of the one-to-many navigation property [[devGoalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEV_GOAL_DETAIL_LIST: Link<Achievement, AchievementDevGoalDetail>;
    /**
     * Static representation of the one-to-many navigation property [[goalDetailList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_DETAIL_LIST: Link<Achievement, AchievementGoalDetail>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Achievement, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Achievement, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentTypeEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_TYPE_ENUM_NAV: OneToOneLink<Achievement, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[subjectUserIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID_NAV: OneToOneLink<Achievement, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Achievement, WfRequest>;
    /**
     * All fields of the Achievement entity.
     */
    const _allFields: Array<DateField<Achievement> | BigNumberField<Achievement> | StringField<Achievement> | BooleanField<Achievement> | OneToOneLink<Achievement, User> | Link<Achievement, AchievementDevGoalDetail> | Link<Achievement, AchievementGoalDetail> | OneToOneLink<Achievement, MdfEnumValue> | Link<Achievement, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Achievement>;
    /**
     * All key fields of the Achievement entity.
     */
    const _keyFields: Array<Selectable<Achievement>>;
    /**
     * Mapping of all key field names to the respective static field property Achievement.
     */
    const _keys: {
        [keys: string]: Selectable<Achievement>;
    };
}
//# sourceMappingURL=Achievement.d.ts.map