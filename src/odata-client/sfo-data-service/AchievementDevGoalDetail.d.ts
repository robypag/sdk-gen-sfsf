import { AchievementDevGoalDetailRequestBuilder } from './AchievementDevGoalDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AchievementDevGoalDetail" of service "SFOData".
 */
export declare class AchievementDevGoalDetail extends Entity implements AchievementDevGoalDetailType {
    /**
     * Technical entity name for AchievementDevGoalDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AchievementDevGoalDetail.
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
     * Achievement Development Goal Linked By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Achievement Development Goal Linked Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External code.
     */
    externalCode: BigNumber;
    /**
     * Achievement Development Goal ID.
     * @nullable
     */
    goalId?: BigNumber;
    /**
     * Achievement Development Goal Link Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Achievement Development Goal Link Modification Date.
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
    mdfAchievementDevGoalDetailToSimpleDevGoalNav: SimpleDevGoal;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `AchievementDevGoalDetail`.
     * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
     */
    static builder(): EntityBuilderType<AchievementDevGoalDetail, AchievementDevGoalDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AchievementDevGoalDetail` entity type.
     * @returns A `AchievementDevGoalDetail` request builder.
     */
    static requestBuilder(): AchievementDevGoalDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AchievementDevGoalDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AchievementDevGoalDetail`.
     */
    static customField(fieldName: string): CustomField<AchievementDevGoalDetail>;
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
export interface AchievementDevGoalDetailType {
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
    mdfAchievementDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface AchievementDevGoalDetailTypeForceMandatory {
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
    mdfAchievementDevGoalDetailToSimpleDevGoalNav: SimpleDevGoalType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace AchievementDevGoalDetail {
    /**
     * Static representation of the [[achievementAchievementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACHIEVEMENT_ACHIEVEMENT_ID: BigNumberField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[goalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOAL_ID: BigNumberField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<AchievementDevGoalDetail>;
    /**
     * Static representation of the [[snapshot]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAPSHOT: BooleanField<AchievementDevGoalDetail>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<AchievementDevGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<AchievementDevGoalDetail, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfAchievementDevGoalDetailToSimpleDevGoalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_ACHIEVEMENT_DEV_GOAL_DETAIL_TO_SIMPLE_DEV_GOAL_NAV: OneToOneLink<AchievementDevGoalDetail, SimpleDevGoal>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AchievementDevGoalDetail, MdfEnumValue>;
    /**
     * All fields of the AchievementDevGoalDetail entity.
     */
    const _allFields: Array<BigNumberField<AchievementDevGoalDetail> | StringField<AchievementDevGoalDetail> | DateField<AchievementDevGoalDetail> | BooleanField<AchievementDevGoalDetail> | OneToOneLink<AchievementDevGoalDetail, User> | OneToOneLink<AchievementDevGoalDetail, SimpleDevGoal> | OneToOneLink<AchievementDevGoalDetail, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AchievementDevGoalDetail>;
    /**
     * All key fields of the AchievementDevGoalDetail entity.
     */
    const _keyFields: Array<Selectable<AchievementDevGoalDetail>>;
    /**
     * Mapping of all key field names to the respective static field property AchievementDevGoalDetail.
     */
    const _keys: {
        [keys: string]: Selectable<AchievementDevGoalDetail>;
    };
}
//# sourceMappingURL=AchievementDevGoalDetail.d.ts.map