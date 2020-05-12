/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Multiplicity, MultiplicityField } from './Multiplicity';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * AssociationEnd
 */
export interface AssociationEnd {
  /**
   * multiplicity.
   * @nullable
   */
  multiplicity?: Multiplicity;
  /**
   * path.
   */
  path: string;
  /**
   * role.
   * @nullable
   */
  role?: string;
}

/**
 * @deprecated since v1.6.0. Use [[AssociationEnd.build]] instead.
 */
export function createAssociationEnd(json: any): AssociationEnd {
  return AssociationEnd.build(json);
}

/**
 * AssociationEndField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssociationEndField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AssociationEnd.multiplicity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multiplicity: MultiplicityField<EntityT> = new MultiplicityField('multiplicity', this);
  /**
   * Representation of the [[AssociationEnd.path]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('path', this, 'Edm.String');
  /**
   * Representation of the [[AssociationEnd.role]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  role: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('role', this, 'Edm.String');
}

export namespace AssociationEnd {
  export function build(json: { [keys: string]: FieldType }): AssociationEnd {
    return createComplexType(json, {
      multiplicity: (multiplicity: Multiplicity) => ({ multiplicity: Multiplicity.build(multiplicity) }),
      path: (path: string) => ({ path: edmToTs(path, 'Edm.String') }),
      role: (role: string) => ({ role: edmToTs(role, 'Edm.String') })
    });
  }
}
