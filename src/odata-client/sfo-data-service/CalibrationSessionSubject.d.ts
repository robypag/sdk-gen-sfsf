import { CalibrationSessionSubjectRequestBuilder } from './CalibrationSessionSubjectRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CalibrationSessionSubject" of service "SFOData".
 */
export declare class CalibrationSessionSubject extends Entity implements CalibrationSessionSubjectType {
    /**
     * Technical entity name for CalibrationSessionSubject.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSessionSubject.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * authorizedBy.
     * @nullable
     */
    authorizedBy?: string;
    /**
     * calSessionId.
     */
    calSessionId: BigNumber;
    /**
     * calibratedFlag.
     * @nullable
     */
    calibratedFlag?: boolean;
    /**
     * comments.
     * @nullable
     */
    comments?: string;
    /**
     * createdBy.
     */
    createdBy: string;
    /**
     * createdDateTime.
     */
    createdDateTime: Moment;
    /**
     * externalComments.
     * @nullable
     */
    externalComments?: string;
    /**
     * lastModifiedBy.
     */
    lastModifiedBy: string;
    /**
     * lastModifiedDateTime.
     */
    lastModifiedDateTime: Moment;
    /**
     * pmFolderMapId.
     * @nullable
     */
    pmFolderMapId?: BigNumber;
    /**
     * pmFormDataId.
     * @nullable
     */
    pmFormDataId?: BigNumber;
    /**
     * pmFormOwnerId.
     * @nullable
     */
    pmFormOwnerId?: string;
    /**
     * reason.
     */
    reason: string;
    /**
     * reasonId.
     * @nullable
     */
    reasonId?: BigNumber;
    /**
     * sessionSubjectId.
     */
    sessionSubjectId: BigNumber;
    /**
     * status.
     */
    status: number;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[CalibrationSession]] entity.
     */
    calSession: CalibrationSession;
    /**
     * One-to-many navigation property to the [[TalentRatings]] entity.
     */
    pmRatingList: TalentRatings[];
    /**
     * One-to-many navigation property to the [[CalibrationSubjectRank]] entity.
     */
    rankList: CalibrationSubjectRank[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    subjectUser: User;
    /**
     * Returns an entity builder to construct instances `CalibrationSessionSubject`.
     * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
     */
    static builder(): EntityBuilderType<CalibrationSessionSubject, CalibrationSessionSubjectTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSessionSubject` entity type.
     * @returns A `CalibrationSessionSubject` request builder.
     */
    static requestBuilder(): CalibrationSessionSubjectRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSessionSubject`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
     */
    static customField(fieldName: string): CustomField<CalibrationSessionSubject>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CalibrationSession, CalibrationSessionType } from './CalibrationSession';
import { TalentRatings, TalentRatingsType } from './TalentRatings';
import { CalibrationSubjectRank, CalibrationSubjectRankType } from './CalibrationSubjectRank';
import { User, UserType } from './User';
export interface CalibrationSessionSubjectType {
    authorizedBy?: string;
    calSessionId: BigNumber;
    calibratedFlag?: boolean;
    comments?: string;
    createdBy: string;
    createdDateTime: Moment;
    externalComments?: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    pmFolderMapId?: BigNumber;
    pmFormDataId?: BigNumber;
    pmFormOwnerId?: string;
    reason: string;
    reasonId?: BigNumber;
    sessionSubjectId: BigNumber;
    status: number;
    userId: string;
    calSession: CalibrationSessionType;
    pmRatingList: TalentRatingsType[];
    rankList: CalibrationSubjectRankType[];
    subjectUser: UserType;
}
export interface CalibrationSessionSubjectTypeForceMandatory {
    authorizedBy: string;
    calSessionId: BigNumber;
    calibratedFlag: boolean;
    comments: string;
    createdBy: string;
    createdDateTime: Moment;
    externalComments: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    pmFolderMapId: BigNumber;
    pmFormDataId: BigNumber;
    pmFormOwnerId: string;
    reason: string;
    reasonId: BigNumber;
    sessionSubjectId: BigNumber;
    status: number;
    userId: string;
    calSession: CalibrationSessionType;
    pmRatingList: TalentRatingsType[];
    rankList: CalibrationSubjectRankType[];
    subjectUser: UserType;
}
export declare namespace CalibrationSessionSubject {
    /**
     * Static representation of the [[authorizedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZED_BY: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[calSessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAL_SESSION_ID: BigNumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[calibratedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALIBRATED_FLAG: BooleanField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[externalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_COMMENTS: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[pmFolderMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_FOLDER_MAP_ID: BigNumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[pmFormDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_FORM_DATA_ID: BigNumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[pmFormOwnerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_FORM_OWNER_ID: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_ID: BigNumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[sessionSubjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_SUBJECT_ID: BigNumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<CalibrationSessionSubject>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<CalibrationSessionSubject>;
    /**
     * Static representation of the one-to-one navigation property [[calSession]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAL_SESSION: OneToOneLink<CalibrationSessionSubject, CalibrationSession>;
    /**
     * Static representation of the one-to-many navigation property [[pmRatingList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PM_RATING_LIST: Link<CalibrationSessionSubject, TalentRatings>;
    /**
     * Static representation of the one-to-many navigation property [[rankList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RANK_LIST: Link<CalibrationSessionSubject, CalibrationSubjectRank>;
    /**
     * Static representation of the one-to-one navigation property [[subjectUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER: OneToOneLink<CalibrationSessionSubject, User>;
    /**
     * All fields of the CalibrationSessionSubject entity.
     */
    const _allFields: Array<StringField<CalibrationSessionSubject> | BigNumberField<CalibrationSessionSubject> | BooleanField<CalibrationSessionSubject> | DateField<CalibrationSessionSubject> | NumberField<CalibrationSessionSubject> | OneToOneLink<CalibrationSessionSubject, CalibrationSession> | Link<CalibrationSessionSubject, TalentRatings> | Link<CalibrationSessionSubject, CalibrationSubjectRank> | OneToOneLink<CalibrationSessionSubject, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CalibrationSessionSubject>;
    /**
     * All key fields of the CalibrationSessionSubject entity.
     */
    const _keyFields: Array<Selectable<CalibrationSessionSubject>>;
    /**
     * Mapping of all key field names to the respective static field property CalibrationSessionSubject.
     */
    const _keys: {
        [keys: string]: Selectable<CalibrationSessionSubject>;
    };
}
//# sourceMappingURL=CalibrationSessionSubject.d.ts.map