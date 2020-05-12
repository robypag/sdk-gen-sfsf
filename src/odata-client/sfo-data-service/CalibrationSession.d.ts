import { CalibrationSessionRequestBuilder } from './CalibrationSessionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CalibrationSession" of service "SFOData".
 */
export declare class CalibrationSession extends Entity implements CalibrationSessionType {
    /**
     * Technical entity name for CalibrationSession.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSession.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * activationDate.
     * @nullable
     */
    activationDate?: Moment;
    /**
     * lastModifiedBy.
     */
    lastModifiedBy: string;
    /**
     * lastModifiedDateTime.
     */
    lastModifiedDateTime: Moment;
    /**
     * sessionDate.
     * @nullable
     */
    sessionDate?: Moment;
    /**
     * sessionId.
     */
    sessionId: BigNumber;
    /**
     * sessionLocation.
     * @nullable
     */
    sessionLocation?: string;
    /**
     * sessionName.
     */
    sessionName: string;
    /**
     * status.
     */
    status: number;
    /**
     * One-to-one navigation property to the [[CalibrationTemplate]] entity.
     */
    calTemplate: CalibrationTemplate;
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    facilitatorList: User[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    ownerList: User[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    participantList: User[];
    /**
     * One-to-many navigation property to the [[CalibrationSessionSubject]] entity.
     */
    subjectList: CalibrationSessionSubject[];
    /**
     * Returns an entity builder to construct instances `CalibrationSession`.
     * @returns A builder that constructs instances of entity type `CalibrationSession`.
     */
    static builder(): EntityBuilderType<CalibrationSession, CalibrationSessionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSession` entity type.
     * @returns A `CalibrationSession` request builder.
     */
    static requestBuilder(): CalibrationSessionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSession`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSession`.
     */
    static customField(fieldName: string): CustomField<CalibrationSession>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CalibrationTemplate, CalibrationTemplateType } from './CalibrationTemplate';
import { User, UserType } from './User';
import { CalibrationSessionSubject, CalibrationSessionSubjectType } from './CalibrationSessionSubject';
export interface CalibrationSessionType {
    activationDate?: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    sessionDate?: Moment;
    sessionId: BigNumber;
    sessionLocation?: string;
    sessionName: string;
    status: number;
    calTemplate: CalibrationTemplateType;
    facilitatorList: UserType[];
    ownerList: UserType[];
    participantList: UserType[];
    subjectList: CalibrationSessionSubjectType[];
}
export interface CalibrationSessionTypeForceMandatory {
    activationDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    sessionDate: Moment;
    sessionId: BigNumber;
    sessionLocation: string;
    sessionName: string;
    status: number;
    calTemplate: CalibrationTemplateType;
    facilitatorList: UserType[];
    ownerList: UserType[];
    participantList: UserType[];
    subjectList: CalibrationSessionSubjectType[];
}
export declare namespace CalibrationSession {
    /**
     * Static representation of the [[activationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVATION_DATE: DateField<CalibrationSession>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CalibrationSession>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CalibrationSession>;
    /**
     * Static representation of the [[sessionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_DATE: DateField<CalibrationSession>;
    /**
     * Static representation of the [[sessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_ID: BigNumberField<CalibrationSession>;
    /**
     * Static representation of the [[sessionLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_LOCATION: StringField<CalibrationSession>;
    /**
     * Static representation of the [[sessionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_NAME: StringField<CalibrationSession>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<CalibrationSession>;
    /**
     * Static representation of the one-to-one navigation property [[calTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAL_TEMPLATE: OneToOneLink<CalibrationSession, CalibrationTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[facilitatorList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACILITATOR_LIST: Link<CalibrationSession, User>;
    /**
     * Static representation of the one-to-many navigation property [[ownerList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_LIST: Link<CalibrationSession, User>;
    /**
     * Static representation of the one-to-many navigation property [[participantList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_LIST: Link<CalibrationSession, User>;
    /**
     * Static representation of the one-to-many navigation property [[subjectList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_LIST: Link<CalibrationSession, CalibrationSessionSubject>;
    /**
     * All fields of the CalibrationSession entity.
     */
    const _allFields: Array<DateField<CalibrationSession> | StringField<CalibrationSession> | BigNumberField<CalibrationSession> | NumberField<CalibrationSession> | OneToOneLink<CalibrationSession, CalibrationTemplate> | Link<CalibrationSession, User> | Link<CalibrationSession, CalibrationSessionSubject>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CalibrationSession>;
    /**
     * All key fields of the CalibrationSession entity.
     */
    const _keyFields: Array<Selectable<CalibrationSession>>;
    /**
     * Mapping of all key field names to the respective static field property CalibrationSession.
     */
    const _keys: {
        [keys: string]: Selectable<CalibrationSession>;
    };
}
//# sourceMappingURL=CalibrationSession.d.ts.map