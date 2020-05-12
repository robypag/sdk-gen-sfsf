import { Background_CoursesRequestBuilder } from './Background_CoursesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Courses" of service "SFOData".
 */
export declare class Background_Courses extends Entity implements Background_CoursesType {
    /**
     * Technical entity name for Background_Courses.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Courses.
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
     * Course Name.
     */
    course: string;
    /**
     * Date Completed.
     */
    endDate: Moment;
    /**
     * Institution Name.
     * @nullable
     */
    institution?: string;
    /**
     * Type.
     * @nullable
     */
    instructionType?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Length.
     */
    length: string;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    instructionTypeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    lengthNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Courses`.
     * @returns A builder that constructs instances of entity type `Background_Courses`.
     */
    static builder(): EntityBuilderType<Background_Courses, Background_CoursesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Courses` entity type.
     * @returns A `Background_Courses` request builder.
     */
    static requestBuilder(): Background_CoursesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Courses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Courses`.
     */
    static customField(fieldName: string): CustomField<Background_Courses>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { User, UserType } from './User';
export interface Background_CoursesType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    course: string;
    endDate: Moment;
    institution?: string;
    instructionType?: string;
    lastModifiedDate: Moment;
    length: string;
    userId: string;
    instructionTypeNav: PicklistOptionType;
    lengthNav: PicklistOptionType;
    userIdNav: UserType;
}
export interface Background_CoursesTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    course: string;
    endDate: Moment;
    institution: string;
    instructionType: string;
    lastModifiedDate: Moment;
    length: string;
    userId: string;
    instructionTypeNav: PicklistOptionType;
    lengthNav: PicklistOptionType;
    userIdNav: UserType;
}
export declare namespace Background_Courses {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Courses>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Courses>;
    /**
     * Static representation of the [[course]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COURSE: StringField<Background_Courses>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Courses>;
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTITUTION: StringField<Background_Courses>;
    /**
     * Static representation of the [[instructionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_TYPE: StringField<Background_Courses>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Courses>;
    /**
     * Static representation of the [[length]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH: StringField<Background_Courses>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Courses>;
    /**
     * Static representation of the one-to-one navigation property [[instructionTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_TYPE_NAV: OneToOneLink<Background_Courses, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[lengthNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LENGTH_NAV: OneToOneLink<Background_Courses, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Courses, User>;
    /**
     * All fields of the Background_Courses entity.
     */
    const _allFields: Array<BigNumberField<Background_Courses> | StringField<Background_Courses> | DateField<Background_Courses> | OneToOneLink<Background_Courses, PicklistOption> | OneToOneLink<Background_Courses, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Courses>;
    /**
     * All key fields of the Background_Courses entity.
     */
    const _keyFields: Array<Selectable<Background_Courses>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Courses.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Courses>;
    };
}
//# sourceMappingURL=Background_Courses.d.ts.map