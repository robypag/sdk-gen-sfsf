import { LegacyPositionEntityRequestBuilder } from './LegacyPositionEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegacyPositionEntity" of service "SFOData".
 */
export declare class LegacyPositionEntity extends Entity implements LegacyPositionEntityType {
    /**
     * Technical entity name for LegacyPositionEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegacyPositionEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Create Date.
     * @nullable
     */
    createDate?: Moment;
    /**
     * incumbent.
     * Maximum length: 100.
     * @nullable
     */
    incumbent?: string;
    /**
     * Position Code.
     * Maximum length: 4000.
     * @nullable
     */
    positionCode?: string;
    /**
     * Position Id.
     */
    positionId: BigNumber;
    /**
     * Title.
     * Maximum length: 256.
     * @nullable
     */
    title?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    incumbentNav: User;
    /**
     * One-to-one navigation property to the [[LegacyPositionEntity]] entity.
     */
    parentNav: LegacyPositionEntity;
    /**
     * One-to-many navigation property to the [[Successor]] entity.
     */
    successorNav: Successor[];
    /**
     * Returns an entity builder to construct instances `LegacyPositionEntity`.
     * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
     */
    static builder(): EntityBuilderType<LegacyPositionEntity, LegacyPositionEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegacyPositionEntity` entity type.
     * @returns A `LegacyPositionEntity` request builder.
     */
    static requestBuilder(): LegacyPositionEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegacyPositionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
     */
    static customField(fieldName: string): CustomField<LegacyPositionEntity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { Successor, SuccessorType } from './Successor';
export interface LegacyPositionEntityType {
    createDate?: Moment;
    incumbent?: string;
    positionCode?: string;
    positionId: BigNumber;
    title?: string;
    incumbentNav: UserType;
    parentNav: LegacyPositionEntityType;
    successorNav: SuccessorType[];
}
export interface LegacyPositionEntityTypeForceMandatory {
    createDate: Moment;
    incumbent: string;
    positionCode: string;
    positionId: BigNumber;
    title: string;
    incumbentNav: UserType;
    parentNav: LegacyPositionEntityType;
    successorNav: SuccessorType[];
}
export declare namespace LegacyPositionEntity {
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_DATE: DateField<LegacyPositionEntity>;
    /**
     * Static representation of the [[incumbent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCUMBENT: StringField<LegacyPositionEntity>;
    /**
     * Static representation of the [[positionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_CODE: StringField<LegacyPositionEntity>;
    /**
     * Static representation of the [[positionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_ID: BigNumberField<LegacyPositionEntity>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<LegacyPositionEntity>;
    /**
     * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCUMBENT_NAV: OneToOneLink<LegacyPositionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_NAV: OneToOneLink<LegacyPositionEntity, LegacyPositionEntity>;
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUCCESSOR_NAV: Link<LegacyPositionEntity, Successor>;
    /**
     * All fields of the LegacyPositionEntity entity.
     */
    const _allFields: Array<DateField<LegacyPositionEntity> | StringField<LegacyPositionEntity> | BigNumberField<LegacyPositionEntity> | OneToOneLink<LegacyPositionEntity, User> | OneToOneLink<LegacyPositionEntity, LegacyPositionEntity> | Link<LegacyPositionEntity, Successor>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegacyPositionEntity>;
    /**
     * All key fields of the LegacyPositionEntity entity.
     */
    const _keyFields: Array<Selectable<LegacyPositionEntity>>;
    /**
     * Mapping of all key field names to the respective static field property LegacyPositionEntity.
     */
    const _keys: {
        [keys: string]: Selectable<LegacyPositionEntity>;
    };
}
//# sourceMappingURL=LegacyPositionEntity.d.ts.map