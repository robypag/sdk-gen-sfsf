import { FormRaterListSectionRequestBuilder } from './FormRaterListSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRaterListSection" of service "SFOData".
 */
export declare class FormRaterListSection extends Entity implements FormRaterListSectionType {
    /**
     * Technical entity name for FormRaterListSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRaterListSection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * category.
     * @nullable
     */
    category?: string;
    /**
     * cellPhone.
     * @nullable
     */
    cellPhone?: string;
    /**
     * company.
     * @nullable
     */
    company?: string;
    /**
     * department.
     * @nullable
     */
    department?: string;
    /**
     * division.
     * @nullable
     */
    division?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * internalOrExternal.
     * @nullable
     */
    internalOrExternal?: string;
    /**
     * jobCode.
     * @nullable
     */
    jobCode?: string;
    /**
     * jobTitle.
     * @nullable
     */
    jobTitle?: string;
    /**
     * mail.
     * @nullable
     */
    mail?: string;
    /**
     * manager.
     * @nullable
     */
    manager?: string;
    /**
     * participantID.
     * @nullable
     */
    participantId?: string;
    /**
     * participantName.
     * @nullable
     */
    participantName?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUser: User;
    /**
     * Returns an entity builder to construct instances `FormRaterListSection`.
     * @returns A builder that constructs instances of entity type `FormRaterListSection`.
     */
    static builder(): EntityBuilderType<FormRaterListSection, FormRaterListSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRaterListSection` entity type.
     * @returns A `FormRaterListSection` request builder.
     */
    static requestBuilder(): FormRaterListSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRaterListSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRaterListSection`.
     */
    static customField(fieldName: string): CustomField<FormRaterListSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface FormRaterListSectionType {
    category?: string;
    cellPhone?: string;
    company?: string;
    department?: string;
    division?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    internalOrExternal?: string;
    jobCode?: string;
    jobTitle?: string;
    mail?: string;
    manager?: string;
    participantId?: string;
    participantName?: string;
    participantUser: UserType;
}
export interface FormRaterListSectionTypeForceMandatory {
    category: string;
    cellPhone: string;
    company: string;
    department: string;
    division: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    internalOrExternal: string;
    jobCode: string;
    jobTitle: string;
    mail: string;
    manager: string;
    participantId: string;
    participantName: string;
    participantUser: UserType;
}
export declare namespace FormRaterListSection {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormRaterListSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRaterListSection>;
    /**
     * Static representation of the [[internalOrExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_OR_EXTERNAL: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[mail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_ID: StringField<FormRaterListSection>;
    /**
     * Static representation of the [[participantName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_NAME: StringField<FormRaterListSection>;
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER: OneToOneLink<FormRaterListSection, User>;
    /**
     * All fields of the FormRaterListSection entity.
     */
    const _allFields: Array<StringField<FormRaterListSection> | BigNumberField<FormRaterListSection> | OneToOneLink<FormRaterListSection, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRaterListSection>;
    /**
     * All key fields of the FormRaterListSection entity.
     */
    const _keyFields: Array<Selectable<FormRaterListSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormRaterListSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormRaterListSection>;
    };
}
//# sourceMappingURL=FormRaterListSection.d.ts.map