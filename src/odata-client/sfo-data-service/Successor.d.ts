import { SuccessorRequestBuilder } from './SuccessorRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Successor" of service "SFOData".
 */
export declare class Successor extends Entity implements SuccessorType {
    /**
     * Technical entity name for Successor.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Successor.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * nomineeUserId.
     * Maximum length: 100.
     * @nullable
     */
    nomineeUserId?: string;
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
     * @nullable
     */
    status?: number;
    /**
     * statusLabel.
     * @nullable
     */
    statusLabel?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[NomineeHistory]] entity.
     */
    nomineeHistoryNav: NomineeHistory[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `Successor`.
     * @returns A builder that constructs instances of entity type `Successor`.
     */
    static builder(): EntityBuilderType<Successor, SuccessorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Successor` entity type.
     * @returns A `Successor` request builder.
     */
    static requestBuilder(): SuccessorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Successor`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Successor`.
     */
    static customField(fieldName: string): CustomField<Successor>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { NomineeHistory, NomineeHistoryType } from './NomineeHistory';
export interface SuccessorType {
    id: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    nomineeUserId?: string;
    note?: string;
    rank?: number;
    readiness?: number;
    readinessLabel?: string;
    status?: number;
    statusLabel?: string;
    lastModifiedByNav: UserType;
    nomineeHistoryNav: NomineeHistoryType[];
    userNav: UserType;
}
export interface SuccessorTypeForceMandatory {
    id: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    nomineeUserId: string;
    note: string;
    rank: number;
    readiness: number;
    readinessLabel: string;
    status: number;
    statusLabel: string;
    lastModifiedByNav: UserType;
    nomineeHistoryNav: NomineeHistoryType[];
    userNav: UserType;
}
export declare namespace Successor {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<Successor>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Successor>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Successor>;
    /**
     * Static representation of the [[nomineeUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINEE_USER_ID: StringField<Successor>;
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTE: StringField<Successor>;
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RANK: NumberField<Successor>;
    /**
     * Static representation of the [[readiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READINESS: NumberField<Successor>;
    /**
     * Static representation of the [[readinessLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READINESS_LABEL: StringField<Successor>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<Successor>;
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_LABEL: StringField<Successor>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Successor, User>;
    /**
     * Static representation of the one-to-many navigation property [[nomineeHistoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINEE_HISTORY_NAV: Link<Successor, NomineeHistory>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<Successor, User>;
    /**
     * All fields of the Successor entity.
     */
    const _allFields: Array<BigNumberField<Successor> | StringField<Successor> | DateField<Successor> | NumberField<Successor> | OneToOneLink<Successor, User> | Link<Successor, NomineeHistory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Successor>;
    /**
     * All key fields of the Successor entity.
     */
    const _keyFields: Array<Selectable<Successor>>;
    /**
     * Mapping of all key field names to the respective static field property Successor.
     */
    const _keys: {
        [keys: string]: Selectable<Successor>;
    };
}
//# sourceMappingURL=Successor.d.ts.map