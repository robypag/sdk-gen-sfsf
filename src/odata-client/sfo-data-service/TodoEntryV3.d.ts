import { TodoEntryV3RequestBuilder } from './TodoEntryV3RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TodoEntryV3" of service "SFOData".
 */
export declare class TodoEntryV3 extends Entity implements TodoEntryV3Type {
    /**
     * Technical entity name for TodoEntryV3.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TodoEntryV3.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * categoryId.
     */
    categoryId: string;
    /**
     * categoryLabel.
     * @nullable
     */
    categoryLabel?: string;
    /**
     * completedDateTime.
     * @nullable
     */
    completedDateTime?: Moment;
    /**
     * createDate.
     */
    createdDate: Moment;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * displayTitle.
     * @nullable
     */
    displayTitle?: string;
    /**
     * dueDate.
     */
    dueDate: Moment;
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: number;
    /**
     * lastModifedDateTime.
     */
    lastModifiedDateTime: Moment;
    /**
     * linkUrl.
     * Maximum length: 2000.
     * @nullable
     */
    linkUrl?: string;
    /**
     * mobileLinkUrl.
     * @nullable
     */
    mobileLinkUrl?: string;
    /**
     * priority.
     * @nullable
     */
    priority?: number;
    /**
     * routingStepOrder.
     * @nullable
     */
    routingStepOrder?: number;
    /**
     * status.
     */
    status: number;
    /**
     * subjectId.
     * Maximum length: 100.
     * @nullable
     */
    subjectId?: string;
    /**
     * todoEntryId.
     */
    todoEntryId: BigNumber;
    /**
     * todoEntryName.
     */
    todoEntryName: string;
    /**
     * One-to-one navigation property to the [[TodoCategory]] entity.
     */
    categoryNav: TodoCategory;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `TodoEntryV3`.
     * @returns A builder that constructs instances of entity type `TodoEntryV3`.
     */
    static builder(): EntityBuilderType<TodoEntryV3, TodoEntryV3TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TodoEntryV3` entity type.
     * @returns A `TodoEntryV3` request builder.
     */
    static requestBuilder(): TodoEntryV3RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TodoEntryV3`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TodoEntryV3`.
     */
    static customField(fieldName: string): CustomField<TodoEntryV3>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { TodoCategory, TodoCategoryType } from './TodoCategory';
import { User, UserType } from './User';
export interface TodoEntryV3Type {
    categoryId: string;
    categoryLabel?: string;
    completedDateTime?: Moment;
    createdDate: Moment;
    description?: string;
    displayTitle?: string;
    dueDate: Moment;
    formDataId?: number;
    lastModifiedDateTime: Moment;
    linkUrl?: string;
    mobileLinkUrl?: string;
    priority?: number;
    routingStepOrder?: number;
    status: number;
    subjectId?: string;
    todoEntryId: BigNumber;
    todoEntryName: string;
    categoryNav: TodoCategoryType;
    userNav: UserType;
}
export interface TodoEntryV3TypeForceMandatory {
    categoryId: string;
    categoryLabel: string;
    completedDateTime: Moment;
    createdDate: Moment;
    description: string;
    displayTitle: string;
    dueDate: Moment;
    formDataId: number;
    lastModifiedDateTime: Moment;
    linkUrl: string;
    mobileLinkUrl: string;
    priority: number;
    routingStepOrder: number;
    status: number;
    subjectId: string;
    todoEntryId: BigNumber;
    todoEntryName: string;
    categoryNav: TodoCategoryType;
    userNav: UserType;
}
export declare namespace TodoEntryV3 {
    /**
     * Static representation of the [[categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ID: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_LABEL: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[completedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLETED_DATE_TIME: DateField<TodoEntryV3>;
    /**
     * Static representation of the [[createdDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE: DateField<TodoEntryV3>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[displayTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_TITLE: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<TodoEntryV3>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: NumberField<TodoEntryV3>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TodoEntryV3>;
    /**
     * Static representation of the [[linkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINK_URL: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[mobileLinkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_LINK_URL: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIORITY: NumberField<TodoEntryV3>;
    /**
     * Static representation of the [[routingStepOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTING_STEP_ORDER: NumberField<TodoEntryV3>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<TodoEntryV3>;
    /**
     * Static representation of the [[subjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_ID: StringField<TodoEntryV3>;
    /**
     * Static representation of the [[todoEntryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TODO_ENTRY_ID: BigNumberField<TodoEntryV3>;
    /**
     * Static representation of the [[todoEntryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TODO_ENTRY_NAME: StringField<TodoEntryV3>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<TodoEntryV3, TodoCategory>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<TodoEntryV3, User>;
    /**
     * All fields of the TodoEntryV3 entity.
     */
    const _allFields: Array<StringField<TodoEntryV3> | DateField<TodoEntryV3> | NumberField<TodoEntryV3> | BigNumberField<TodoEntryV3> | OneToOneLink<TodoEntryV3, TodoCategory> | OneToOneLink<TodoEntryV3, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TodoEntryV3>;
    /**
     * All key fields of the TodoEntryV3 entity.
     */
    const _keyFields: Array<Selectable<TodoEntryV3>>;
    /**
     * Mapping of all key field names to the respective static field property TodoEntryV3.
     */
    const _keys: {
        [keys: string]: Selectable<TodoEntryV3>;
    };
}
//# sourceMappingURL=TodoEntryV3.d.ts.map