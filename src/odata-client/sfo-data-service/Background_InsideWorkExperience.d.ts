import { Background_InsideWorkExperienceRequestBuilder } from './Background_InsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_InsideWorkExperience" of service "SFOData".
 */
export declare class Background_InsideWorkExperience extends Entity implements Background_InsideWorkExperienceType {
    /**
     * Technical entity name for Background_InsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_InsideWorkExperience.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * bgOrderPos.
     */
    bgOrderPos: BigNumber;
    /**
     * Department.
     * @nullable
     */
    department?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Title.
     */
    title: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_InsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
     */
    static builder(): EntityBuilderType<Background_InsideWorkExperience, Background_InsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_InsideWorkExperience` entity type.
     * @returns A `Background_InsideWorkExperience` request builder.
     */
    static requestBuilder(): Background_InsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_InsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_InsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<Background_InsideWorkExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_InsideWorkExperienceType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    department?: string;
    endDate?: Moment;
    lastModifiedDate: Moment;
    startDate: Moment;
    title: string;
    userId: string;
    userIdNav: UserType;
}
export interface Background_InsideWorkExperienceTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    department: string;
    endDate: Moment;
    lastModifiedDate: Moment;
    startDate: Moment;
    title: string;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_InsideWorkExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<Background_InsideWorkExperience>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_InsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_InsideWorkExperience, User>;
    /**
     * All fields of the Background_InsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<Background_InsideWorkExperience> | StringField<Background_InsideWorkExperience> | DateField<Background_InsideWorkExperience> | OneToOneLink<Background_InsideWorkExperience, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_InsideWorkExperience>;
    /**
     * All key fields of the Background_InsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<Background_InsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property Background_InsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<Background_InsideWorkExperience>;
    };
}
//# sourceMappingURL=Background_InsideWorkExperience.d.ts.map