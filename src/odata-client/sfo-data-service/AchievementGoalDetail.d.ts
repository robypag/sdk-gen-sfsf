import { AchievementGoalDetailRequestBuilder } from './AchievementGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AchievementGoalDetail" of service "SFOData".
 */
export declare class AchievementGoalDetail extends Entity implements AchievementGoalDetailType {
    /**
     * Technical entity name for AchievementGoalDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AchievementGoalDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Achievement_Achievement ID.
     */
    achievementAchievementId: BigNumber;
    /**
     * Achievement Goal Linked By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Achievement Goal Linked Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External code.
     */
    externalCode: BigNumber;
    /**
     * Achievement Goal ID.
     * @nullable
     */
    goalId?: BigNumber;
    /**
     * Achievement Goal Link Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Achievement Goal Link Modification Date.
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
     * One-to-one navigation property to the [[SimpleGoal]] entity.
     */
    mdfAchievementGoalDetailToSimpleGoalNav: SimpleGoal;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `AchievementGoalDetail`.
     * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
     */
    static builder(): EntityBuilderType<AchievementGoalDetail, AchievementGoalDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AchievementGoalDetail` entity type.
     * @returns A `AchievementGoalDetail` request builder.
     */
    static requestBuilder(): AchievementGoalDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AchievementGoalDetail`.
     */
    static customField(fieldName: string): CustomField<AchievementGoalDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { SimpleGoal, SimpleGoalType } from './SimpleGoal';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface AchievementGoalDetailType {
    achievementAchievementId: BigNumber;
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
    mdfAchievementGoalDetailToSimpleGoalNav: SimpleGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface AchievementGoalDetailTypeForceMandatory {
    achievementAchievementId: BigNumber;
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
    mdfAchievementGoalDetailToSimpleGoalNav: SimpleGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace AchievementGoalDetail {
    /**
     * Static representation of the [[achievementAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_ACHIEVEMENT_ID: BigNumberField<AchievementGoalDetail>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AchievementGoalDetail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AchievementGoalDetail>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<AchievementGoalDetail>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: BigNumberField<AchievementGoalDetail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AchievementGoalDetail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AchievementGoalDetail>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AchievementGoalDetail>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<AchievementGoalDetail>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<AchievementGoalDetail>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<AchievementGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<AchievementGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfAchievementGoalDetailToSimpleGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_ACHIEVEMENT_GOAL_DETAIL_TO_SIMPLE_GOAL_NAV: OneToOneLink<AchievementGoalDetail, SimpleGoal>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AchievementGoalDetail, MdfEnumValue>;
    /**
     * All fields of the AchievementGoalDetail entity.
     */
    const _allFields: Array<BigNumberField<AchievementGoalDetail> | StringField<AchievementGoalDetail> | DateField<AchievementGoalDetail> | BooleanField<AchievementGoalDetail> | OneToOneLink<AchievementGoalDetail, User> | OneToOneLink<AchievementGoalDetail, SimpleGoal> | OneToOneLink<AchievementGoalDetail, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AchievementGoalDetail>;
    /**
     * All key fields of the AchievementGoalDetail entity.
     */
    const _keyFields: Array<Selectable<AchievementGoalDetail>>;
    /**
     * Mapping of all key field names to the respective static field property AchievementGoalDetail.
     */
    const _keys: {
        [keys: string]: Selectable<AchievementGoalDetail>;
    };
}
//# sourceMappingURL=AchievementGoalDetail.d.ts.map