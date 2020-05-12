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
var AssociationEnd_1 = require("./AssociationEnd");
var Localstring_1 = require("./Localstring");
var Association_1 = require("./Association");
var Type_1 = require("./Type");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Navigation.build]] instead.
 */
function createNavigation(json) {
    return Navigation.build(json);
}
exports.createNavigation = createNavigation;
/**
 * NavigationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NavigationField = /** @class */ (function (_super) {
    __extends(NavigationField, _super);
    function NavigationField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Navigation.aggregationRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aggregationRole = new core_1.ComplexTypeStringPropertyField('aggregationRole', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.businessKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessKey = new core_1.ComplexTypeBooleanPropertyField('businessKey', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.defaultValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultValue = new core_1.ComplexTypeStringPropertyField('defaultValue', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.displayFormat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayFormat = new core_1.ComplexTypeStringPropertyField('displayFormat', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.elmStrength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.elmStrength = new core_1.ComplexTypeStringPropertyField('elmStrength', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.fieldControl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fieldControl = new core_1.ComplexTypeStringPropertyField('fieldControl', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.filterable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.filterable = new core_1.ComplexTypeBooleanPropertyField('filterable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.fromRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromRole = new AssociationEnd_1.AssociationEndField('fromRole', _this);
        /**
         * Representation of the [[Navigation.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new core_1.ComplexTypeBooleanPropertyField('id', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.inlineRequired]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inlineRequired = new core_1.ComplexTypeBooleanPropertyField('inlineRequired', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.insertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.insertable = new core_1.ComplexTypeBooleanPropertyField('insertable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.insertablePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.insertablePath = new core_1.ComplexTypeStringPropertyField('insertablePath', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.label]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.label = new Localstring_1.LocalstringField('label', _this);
        /**
         * Representation of the [[Navigation.maxLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLength = new core_1.ComplexTypeNumberPropertyField('maxLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[Navigation.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('name', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.navigateToPojo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.navigateToPojo = new core_1.ComplexTypeBooleanPropertyField('navigateToPojo', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.path]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.path = new core_1.ComplexTypeStringPropertyField('path', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.picklistOptionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picklistOptionId = new core_1.ComplexTypeStringPropertyField('picklistOptionId', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.precision]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.precision = new core_1.ComplexTypeNumberPropertyField('precision', _this, 'Edm.Int32');
        /**
         * Representation of the [[Navigation.relationship]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relationship = new Association_1.AssociationField('relationship', _this);
        /**
         * Representation of the [[Navigation.required]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.required = new core_1.ComplexTypeBooleanPropertyField('required', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.scale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.scale = new core_1.ComplexTypeNumberPropertyField('scale', _this, 'Edm.Int32');
        /**
         * Representation of the [[Navigation.semantics]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.semantics = new core_1.ComplexTypeStringPropertyField('semantics', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.sensitive]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sensitive = new core_1.ComplexTypeBooleanPropertyField('sensitive', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.sortable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sortable = new core_1.ComplexTypeBooleanPropertyField('sortable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.text]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.text = new core_1.ComplexTypeStringPropertyField('text', _this, 'Edm.String');
        /**
         * Representation of the [[Navigation.toRole]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toRole = new AssociationEnd_1.AssociationEndField('toRole', _this);
        /**
         * Representation of the [[Navigation.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new Type_1.TypeField('type', _this);
        /**
         * Representation of the [[Navigation.updatable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.updatable = new core_1.ComplexTypeBooleanPropertyField('updatable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.upsertable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.upsertable = new core_1.ComplexTypeBooleanPropertyField('upsertable', _this, 'Edm.Boolean');
        /**
         * Representation of the [[Navigation.viewable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.viewable = new core_1.ComplexTypeBooleanPropertyField('viewable', _this, 'Edm.Boolean');
        return _this;
    }
    return NavigationField;
}(core_1.ComplexTypeField));
exports.NavigationField = NavigationField;
var Navigation;
(function (Navigation) {
    function build(json) {
        return core_1.createComplexType(json, {
            aggregationRole: function (aggregationRole) { return ({ aggregationRole: core_1.edmToTs(aggregationRole, 'Edm.String') }); },
            businessKey: function (businessKey) { return ({ businessKey: core_1.edmToTs(businessKey, 'Edm.Boolean') }); },
            defaultValue: function (defaultValue) { return ({ defaultValue: core_1.edmToTs(defaultValue, 'Edm.String') }); },
            displayFormat: function (displayFormat) { return ({ displayFormat: core_1.edmToTs(displayFormat, 'Edm.String') }); },
            elmStrength: function (elmStrength) { return ({ elmStrength: core_1.edmToTs(elmStrength, 'Edm.String') }); },
            fieldControl: function (fieldControl) { return ({ fieldControl: core_1.edmToTs(fieldControl, 'Edm.String') }); },
            filterable: function (filterable) { return ({ filterable: core_1.edmToTs(filterable, 'Edm.Boolean') }); },
            fromRole: function (fromRole) { return ({ fromRole: AssociationEnd_1.AssociationEnd.build(fromRole) }); },
            id: function (id) { return ({ id: core_1.edmToTs(id, 'Edm.Boolean') }); },
            inlineRequired: function (inlineRequired) { return ({ inlineRequired: core_1.edmToTs(inlineRequired, 'Edm.Boolean') }); },
            insertable: function (insertable) { return ({ insertable: core_1.edmToTs(insertable, 'Edm.Boolean') }); },
            insertablePath: function (insertablePath) { return ({ insertablePath: core_1.edmToTs(insertablePath, 'Edm.String') }); },
            label: function (label) { return ({ label: Localstring_1.Localstring.build(label) }); },
            maxLength: function (maxLength) { return ({ maxLength: core_1.edmToTs(maxLength, 'Edm.Int32') }); },
            name: function (name) { return ({ name: core_1.edmToTs(name, 'Edm.String') }); },
            navigateToPojo: function (navigateToPojo) { return ({ navigateToPojo: core_1.edmToTs(navigateToPojo, 'Edm.Boolean') }); },
            path: function (path) { return ({ path: core_1.edmToTs(path, 'Edm.String') }); },
            picklistOptionId: function (picklistOptionId) { return ({ picklistOptionId: core_1.edmToTs(picklistOptionId, 'Edm.String') }); },
            precision: function (precision) { return ({ precision: core_1.edmToTs(precision, 'Edm.Int32') }); },
            relationship: function (relationship) { return ({ relationship: Association_1.Association.build(relationship) }); },
            required: function (required) { return ({ required: core_1.edmToTs(required, 'Edm.Boolean') }); },
            scale: function (scale) { return ({ scale: core_1.edmToTs(scale, 'Edm.Int32') }); },
            semantics: function (semantics) { return ({ semantics: core_1.edmToTs(semantics, 'Edm.String') }); },
            sensitive: function (sensitive) { return ({ sensitive: core_1.edmToTs(sensitive, 'Edm.Boolean') }); },
            sortable: function (sortable) { return ({ sortable: core_1.edmToTs(sortable, 'Edm.Boolean') }); },
            text: function (text) { return ({ text: core_1.edmToTs(text, 'Edm.String') }); },
            toRole: function (toRole) { return ({ toRole: AssociationEnd_1.AssociationEnd.build(toRole) }); },
            type: function (type) { return ({ type: Type_1.Type.build(type) }); },
            updatable: function (updatable) { return ({ updatable: core_1.edmToTs(updatable, 'Edm.Boolean') }); },
            upsertable: function (upsertable) { return ({ upsertable: core_1.edmToTs(upsertable, 'Edm.Boolean') }); },
            viewable: function (viewable) { return ({ viewable: core_1.edmToTs(viewable, 'Edm.Boolean') }); }
        });
    }
    Navigation.build = build;
})(Navigation = exports.Navigation || (exports.Navigation = {}));
//# sourceMappingURL=Navigation.js.map