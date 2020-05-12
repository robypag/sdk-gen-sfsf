import { Onb2RehireCheckParams, Onb2RehireCheckParamsField } from './Onb2RehireCheckParams';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Onb2OnboardeeDetails
 */
export interface Onb2OnboardeeDetails {
    /**
     * applicationId.
     */
    applicationId: string;
    /**
     * email.
     */
    email: string;
    /**
     * rehireCheckParams.
     * @nullable
     */
    rehireCheckParams?: Onb2RehireCheckParams;
    /**
     * rehireUser.
     * @nullable
     */
    rehireUser?: string;
    /**
     * shouldCancelOnboarding.
     * @nullable
     */
    shouldCancelOnboarding?: boolean;
    /**
     * shouldCreateNewHire.
     * @nullable
     */
    shouldCreateNewHire?: boolean;
    /**
     * userId.
     */
    userId: string;
    /**
     * userName.
     */
    userName: string;
}
/**
 * @deprecated since v1.6.0. Use [[Onb2OnboardeeDetails.build]] instead.
 */
export declare function createOnb2OnboardeeDetails(json: any): Onb2OnboardeeDetails;
/**
 * Onb2OnboardeeDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Onb2OnboardeeDetailsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Onb2OnboardeeDetails.applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    applicationId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.email]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    email: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.rehireCheckParams]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rehireCheckParams: Onb2RehireCheckParamsField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.rehireUser]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rehireUser: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.shouldCancelOnboarding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shouldCancelOnboarding: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.shouldCreateNewHire]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shouldCreateNewHire: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2OnboardeeDetails.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Onb2OnboardeeDetails {
    function build(json: {
        [keys: string]: FieldType;
    }): Onb2OnboardeeDetails;
}
//# sourceMappingURL=Onb2OnboardeeDetails.d.ts.map