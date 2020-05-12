"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Localstring_1 = require("./Localstring");
var Type_1 = require("./Type");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Property.build]] instead.
 */
function createProperty(json) {
    return Property.build(json);
}
exports.createProperty = createProperty;
/**
 * PropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PropertyField = /** @class */ (function (_super) {
    __extends(PropertyField, _super);
    function PropertyField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Property.aggregationRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aggregationRole = new core_1.ComplexTypeStringPropertyField('aggregationRole', _this, 'Edm.String');
        /**
         * Representation of the [[Property.businessKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessKey = new core_1.ComplexTypeBooleanPropertyField('businessKey', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.defaultValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultValue = new core_1.ComplexTypeStringPropertyField('defaultValue', _this, 'Edm.String');
        /**
         * Representation of the [[Property.displayFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayFormat = new core_1.ComplexTypeStringPropertyField('displayFormat', _this, 'Edm.String');
        /**
         * Representation of the [[Property.fieldControl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldControl = new core_1.ComplexTypeStringPropertyField('fieldControl', _this, 'Edm.String');
        /**
         * Representation of the [[Property.filterable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.filterable = new core_1.ComplexTypeBooleanPropertyField('filterable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeBooleanPropertyField('id', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.inlineRequired]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inlineRequired = new core_1.ComplexTypeBooleanPropertyField('inlineRequired', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.insertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.insertable = new core_1.ComplexTypeBooleanPropertyField('insertable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.insertablePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.insertablePath = new core_1.ComplexTypeStringPropertyField('insertablePath', _this, 'Edm.String');
        /**
         * Representation of the [[Property.label]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.label = new Localstring_1.LocalstringField('label', _this);
        /**
         * Representation of the [[Property.maxLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLength = new core_1.ComplexTypeNumberPropertyField('maxLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[Property.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[Property.path]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.path = new core_1.ComplexTypeStringPropertyField('path', _this, 'Edm.String');
        /**
         * Representation of the [[Property.picklistOptionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picklistOptionId = new core_1.ComplexTypeStringPropertyField('picklistOptionId', _this, 'Edm.String');
        /**
         * Representation of the [[Property.precision]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.precision = new core_1.ComplexTypeNumberPropertyField('precision', _this, 'Edm.Int32');
        /**
         * Representation of the [[Property.required]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.required = new core_1.ComplexTypeBooleanPropertyField('required', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.scale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.scale = new core_1.ComplexTypeNumberPropertyField('scale', _this, 'Edm.Int32');
        /**
         * Representation of the [[Property.semantics]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.semantics = new core_1.ComplexTypeStringPropertyField('semantics', _this, 'Edm.String');
        /**
         * Representation of the [[Property.sensitive]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sensitive = new core_1.ComplexTypeBooleanPropertyField('sensitive', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.sortable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortable = new core_1.ComplexTypeBooleanPropertyField('sortable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.text]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.text = new core_1.ComplexTypeStringPropertyField('text', _this, 'Edm.String');
        /**
         * Representation of the [[Property.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new Type_1.TypeField('type', _this);
        /**
         * Representation of the [[Property.updatable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updatable = new core_1.ComplexTypeBooleanPropertyField('updatable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.upsertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.upsertable = new core_1.ComplexTypeBooleanPropertyField('upsertable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Property.viewable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.viewable = new core_1.ComplexTypeBooleanPropertyField('viewable', _this, 'Edm.Boolean');
        return _this;
    }
    return PropertyField;
}(core_1.ComplexTypeField));
exports.PropertyField = PropertyField;
var Property;
(function (Property) {
    function build(json) {
        return core_1.createComplexType(json, {
            aggregationRole: function (aggregationRole) { return ({ aggregationRole: core_1.edmToTs(aggregationRole, 'Edm.String') }); },
            businessKey: function (businessKey) { return ({ businessKey: core_1.edmToTs(businessKey, 'Edm.Boolean') }); },
            defaultValue: function (defaultValue) { return ({ defaultValue: core_1.edmToTs(defaultValue, 'Edm.String') }); },
            displayFormat: function (displayFormat) { return ({ displayFormat: core_1.edmToTs(displayFormat, 'Edm.String') }); },
            fieldControl: function (fieldControl) { return ({ fieldControl: core_1.edmToTs(fieldControl, 'Edm.String') }); },
            filterable: function (filterable) { return ({ filterable: core_1.edmToTs(filterable, 'Edm.Boolean') }); },
            id: function (id) { return ({ id: core_1.edmToTs(id, 'Edm.Boolean') }); },
            inlineRequired: function (inlineRequired) { return ({ inlineRequired: core_1.edmToTs(inlineRequired, 'Edm.Boolean') }); },
            insertable: function (insertable) { return ({ insertable: core_1.edmToTs(insertable, 'Edm.Boolean') }); },
            insertablePath: function (insertablePath) { return ({ insertablePath: core_1.edmToTs(insertablePath, 'Edm.String') }); },
            label: function (label) { return ({ label: Localstring_1.Localstring.build(label) }); },
            maxLength: function (maxLength) { return ({ maxLength: core_1.edmToTs(maxLength, 'Edm.Int32') }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            path: function (path) { return ({ path: core_1.edmToTs(path, 'Edm.String') }); },
            picklistOptionId: function (picklistOptionId) { return ({ picklistOptionId: core_1.edmToTs(picklistOptionId, 'Edm.String') }); },
            precision: function (precision) { return ({ precision: core_1.edmToTs(precision, 'Edm.Int32') }); },
            required: function (required) { return ({ required: core_1.edmToTs(required, 'Edm.Boolean') }); },
            scale: function (scale) { return ({ scale: core_1.edmToTs(scale, 'Edm.Int32') }); },
            semantics: function (semantics) { return ({ semantics: core_1.edmToTs(semantics, 'Edm.String') }); },
            sensitive: function (sensitive) { return ({ sensitive: core_1.edmToTs(sensitive, 'Edm.Boolean') }); },
            sortable: function (sortable) { return ({ sortable: core_1.edmToTs(sortable, 'Edm.Boolean') }); },
            text: function (text) { return ({ text: core_1.edmToTs(text, 'Edm.String') }); },
            type: function (type) { return ({ type: Type_1.Type.build(type) }); },
            updatable: function (updatable) { return ({ updatable: core_1.edmToTs(updatable, 'Edm.Boolean') }); },
            upsertable: function (upsertable) { return ({ upsertable: core_1.edmToTs(upsertable, 'Edm.Boolean') }); },
            viewable: function (viewable) { return ({ viewable: core_1.edmToTs(viewable, 'Edm.Boolean') }); }
        });
    }
    Property.build = build;
})(Property = exports.Property || (exports.Property = {}));
//# sourceMappingURL=Property.js.map