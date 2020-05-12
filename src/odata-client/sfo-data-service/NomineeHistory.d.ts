import { NomineeHistoryRequestBuilder } from './NomineeHistoryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "NomineeHistory" of service "SFOData".
 */
export declare class NomineeHistory extends Entity implements NomineeHistoryType {
    /**
     * Technical entity name for NomineeHistory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NomineeHistory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * changeType.
     */
    changeType: number;
    /**
     * changeTypeLabel.
     * @nullable
     */
    changeTypeLabel?: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * modifiedBy.
     * Maximum length: 100.
     */
    modifiedBy: string;
    /**
     * modifiedDate.
     */
    modifiedDateTime: Moment;
    /**
     * nomineeId.
     */
    nomineeId: BigNumber;
    /**
     * note.
     * Maximum length: 4000.
     * @nullable
     */
    note?: string;
    /**
     * rank.
     * @nullable
     */
    rank?: number;
    /**
     * readiness.
     * @nullable
     */
    readiness?: number;
    /**
     * readinessLabel.
     * @nullable
     */
    readinessLabel?: string;
    /**
     * status.
     */
    status: number;
    /**
     * statusLabel.
     * @nullable
     */
    statusLabel?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    modifiedByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    nomineeUserNav: User;
    /**
     * Returns an entity builder to construct instances `NomineeHistory`.
     * @returns A builder that constructs instances of entity type `NomineeHistory`.
     */
    static builder(): EntityBuilderType<NomineeHistory, NomineeHistoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `NomineeHistory` entity type.
     * @returns A `NomineeHistory` request builder.
     */
    static requestBuilder(): NomineeHistoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NomineeHistory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NomineeHistory`.
     */
    static customField(fieldName: string): CustomField<NomineeHistory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface NomineeHistoryType {
    changeType: number;
    changeTypeLabel?: string;
    id: BigNumber;
    modifiedBy: string;
    modifiedDateTime: Moment;
    nomineeId: BigNumber;
    note?: string;
    rank?: number;
    readiness?: number;
    readinessLabel?: string;
    status: number;
    statusLabel?: string;
    modifiedByNav: UserType;
    nomineeUserNav: UserType;
}
export interface NomineeHistoryTypeForceMandatory {
    changeType: number;
    changeTypeLabel: string;
    id: BigNumber;
    modifiedBy: string;
    modifiedDateTime: Moment;
    nomineeId: BigNumber;
    note: string;
    rank: number;
    readiness: number;
    readinessLabel: string;
    status: number;
    statusLabel: string;
    modifiedByNav: UserType;
    nomineeUserNav: UserType;
}
export declare namespace NomineeHistory {
    /**
     * Static representation of the [[changeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_TYPE: NumberField<NomineeHistory>;
    /**
     * Static representation of the [[changeTypeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_TYPE_LABEL: StringField<NomineeHistory>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<NomineeHistory>;
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_BY: StringField<NomineeHistory>;
    /**
     * Static representation of the [[modifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_DATE_TIME: DateField<NomineeHistory>;
    /**
     * Static representation of the [[nomineeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINEE_ID: BigNumberField<NomineeHistory>;
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTE: StringField<NomineeHistory>;
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RANK: NumberField<NomineeHistory>;
    /**
     * Static representation of the [[readiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READINESS: NumberField<NomineeHistory>;
    /**
     * Static representation of the [[readinessLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READINESS_LABEL: StringField<NomineeHistory>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<NomineeHistory>;
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_LABEL: StringField<NomineeHistory>;
    /**
     * Static representation of the one-to-one navigation property [[modifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_BY_NAV: OneToOneLink<NomineeHistory, User>;
    /**
     * Static representation of the one-to-one navigation property [[nomineeUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINEE_USER_NAV: OneToOneLink<NomineeHistory, User>;
    /**
     * All fields of the NomineeHistory entity.
     */
    const _allFields: Array<NumberField<NomineeHistory> | StringField<NomineeHistory> | BigNumberField<NomineeHistory> | DateField<NomineeHistory> | OneToOneLink<NomineeHistory, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NomineeHistory>;
    /**
     * All key fields of the NomineeHistory entity.
     */
    const _keyFields: Array<Selectable<NomineeHistory>>;
    /**
     * Mapping of all key field names to the respective static field property NomineeHistory.
     */
    const _keys: {
        [keys: string]: Selectable<NomineeHistory>;
    };
}
//# sourceMappingURL=NomineeHistory.d.ts.map