import { FormObjectiveSectionRequestBuilder } from './FormObjectiveSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveSection" of service "SFOData".
 */
export declare class FormObjectiveSection extends Entity implements FormObjectiveSectionType {
    /**
     * Technical entity name for FormObjectiveSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveSection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * objPlanId.
     * @nullable
     */
    objPlanId?: BigNumber;
    /**
     * objPlanType.
     * @nullable
     */
    objPlanType?: string;
    /**
     * sectionDescription.
     * @nullable
     */
    sectionDescription?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * sectionName.
     * @nullable
     */
    sectionName?: string;
    /**
     * sectionWeight.
     * @nullable
     */
    sectionWeight?: string;
    /**
     * sectionWeightKey.
     * @nullable
     */
    sectionWeightKey?: string;
    /**
     * One-to-many navigation property to the [[FormObjective]] entity.
     */
    objectives: FormObjective[];
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersRatingComment: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
     */
    sectionConfiguration: FormSectionConfiguration;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    selfRatingComment: FormUserRatingComment;
    /**
     * Returns an entity builder to construct instances `FormObjectiveSection`.
     * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
     */
    static builder(): EntityBuilderType<FormObjectiveSection, FormObjectiveSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveSection` entity type.
     * @returns A `FormObjectiveSection` request builder.
     */
    static requestBuilder(): FormObjectiveSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveSection`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormObjective, FormObjectiveType } from './FormObjective';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';
export interface FormObjectiveSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    objPlanId?: BigNumber;
    objPlanType?: string;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    sectionWeight?: string;
    sectionWeightKey?: string;
    objectives: FormObjectiveType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export interface FormObjectiveSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    objPlanId: BigNumber;
    objPlanType: string;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    sectionWeight: string;
    sectionWeightKey: string;
    objectives: FormObjectiveType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export declare namespace FormObjectiveSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveSection>;
    /**
     * Static representation of the [[objPlanId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_PLAN_ID: BigNumberField<FormObjectiveSection>;
    /**
     * Static representation of the [[objPlanType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_PLAN_TYPE: StringField<FormObjectiveSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormObjectiveSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormObjectiveSection>;
    /**
     * Static representation of the [[sectionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_WEIGHT: StringField<FormObjectiveSection>;
    /**
     * Static representation of the [[sectionWeightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_WEIGHT_KEY: StringField<FormObjectiveSection>;
    /**
     * Static representation of the one-to-many navigation property [[objectives]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVES: Link<FormObjectiveSection, FormObjective>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormObjectiveSection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormObjectiveSection, FormSectionConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormObjectiveSection, FormUserRatingComment>;
    /**
     * All fields of the FormObjectiveSection entity.
     */
    const _allFields: Array<BigNumberField<FormObjectiveSection> | StringField<FormObjectiveSection> | NumberField<FormObjectiveSection> | Link<FormObjectiveSection, FormObjective> | Link<FormObjectiveSection, FormUserRatingComment> | OneToOneLink<FormObjectiveSection, FormSectionConfiguration> | OneToOneLink<FormObjectiveSection, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveSection>;
    /**
     * All key fields of the FormObjectiveSection entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveSection>;
    };
}
//# sourceMappingURL=FormObjectiveSection.d.ts.map