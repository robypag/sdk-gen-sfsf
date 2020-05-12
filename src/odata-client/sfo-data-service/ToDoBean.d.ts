import { Moment } from 'moment';
import { ToDoEntry, ToDoEntryField } from './ToDoEntry';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * ToDoBean
 */
export interface ToDoBean {
    /**
     * categoryId.
     * @nullable
     */
    categoryId?: string;
    /**
     * completedDate.
     * @nullable
     */
    completedDate?: Moment;
    /**
     * dueDate.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * dueDateOffSet.
     * @nullable
     */
    dueDateOffSet?: number;
    /**
     * entries.
     * @nullable
     */
    entries?: ToDoEntry;
    /**
     * entryId.
     */
    entryId: number;
    /**
     * name.
     * @nullable
     */
    name?: string;
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
     * stepDescAlt.
     * @nullable
     */
    stepDescAlt?: string;
    /**
     * todoItemId.
     * @nullable
     */
    todoItemId?: string;
    /**
     * url.
     * @nullable
     */
    url?: string;
}
/**
 * @deprecated since v1.6.0. Use [[ToDoBean.build]] instead.
 */
export declare function createToDoBean(json: any): ToDoBean;
/**
 * ToDoBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ToDoBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ToDoBean.categoryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.completedDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    completedDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.dueDateOffSet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDateOffSet: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.entries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entries: ToDoEntryField<EntityT>;
    /**
     * Representation of the [[ToDoBean.entryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusLabel: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.stepDescAlt]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stepDescAlt: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.todoItemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    todoItemId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ToDoBean.url]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    url: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ToDoBean {
    function build(json: {
        [keys: string]: FieldType;
    }): ToDoBean;
}
//# sourceMappingURL=ToDoBean.d.ts.map