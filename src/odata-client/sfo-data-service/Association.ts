/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssociationEnd, AssociationEndField } from './AssociationEnd';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Association
 */
export interface Association {
  /**
   * deletable.
   * @nullable
   */
  deletable?: boolean;
  /**
   * end1.
   * @nullable
   */
  end1?: AssociationEnd;
  /**
   * end2.
   * @nullable
   */
  end2?: AssociationEnd;
  /**
   * insertable.
   * @nullable
   */
  insertable?: boolean;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * path.
   */
  path: string;
  /**
   * updatable.
   * @nullable
   */
  updatable?: boolean;
  /**
   * upsertable.
   * @nullable
   */
  upsertable?: boolean;
}

/**
 * @deprecated since v1.6.0. Use [[Association.build]] instead.
 */
export function createAssociation(json: any): Association {
  return Association.build(json);
}

/**
 * AssociationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssociationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Association.deletable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deletable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('deletable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Association.end1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  end1: AssociationEndField<EntityT> = new AssociationEndField('end1', this);
  /**
   * Representation of the [[Association.end2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  end2: AssociationEndField<EntityT> = new AssociationEndField('end2', this);
  /**
   * Representation of the [[Association.insertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  insertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('insertable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Association.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[Association.path]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('path', this, 'Edm.String');
  /**
   * Representation of the [[Association.updatable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('updatable', this, 'Edm.Boolean');
  /**
   * Representation of the [[Association.upsertable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  upsertable: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('upsertable', this, 'Edm.Boolean');
}

export namespace Association {
  export function build(json: { [keys: string]: FieldType }): Association {
    return createComplexType(json, {
      deletable: (deletable: boolean) => ({ deletable: edmToTs(deletable, 'Edm.Boolean') }),
      end1: (end1: AssociationEnd) => ({ end1: AssociationEnd.build(end1) }),
      end2: (end2: AssociationEnd) => ({ end2: AssociationEnd.build(end2) }),
      insertable: (insertable: boolean) => ({ insertable: edmToTs(insertable, 'Edm.Boolean') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      path: (path: string) => ({ path: edmToTs(path, 'Edm.String') }),
      updatable: (updatable: boolean) => ({ updatable: edmToTs(updatable, 'Edm.Boolean') }),
      upsertable: (upsertable: boolean) => ({ upsertable: edmToTs(upsertable, 'Edm.Boolean') })
    });
  }
}
