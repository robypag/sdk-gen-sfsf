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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[EpCustomBackgroundPortletProperty.build]] instead.
 */
function createEpCustomBackgroundPortletProperty(json) {
    return EpCustomBackgroundPortletProperty.build(json);
}
exports.createEpCustomBackgroundPortletProperty = createEpCustomBackgroundPortletProperty;
/**
 * EpCustomBackgroundPortletPropertyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EpCustomBackgroundPortletPropertyField = /** @class */ (function (_super) {
    __extends(EpCustomBackgroundPortletPropertyField, _super);
    function EpCustomBackgroundPortletPropertyField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.isPii]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isPii = new core_1.ComplexTypeBooleanPropertyField('isPII', _this, 'Edm.Boolean');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.isPicklist]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isPicklist = new core_1.ComplexTypeBooleanPropertyField('isPicklist', _this, 'Edm.Boolean');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.isUrlLink]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isUrlLink = new core_1.ComplexTypeBooleanPropertyField('isUrlLink', _this, 'Edm.Boolean');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.label]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.label = new core_1.ComplexTypeStringPropertyField('label', _this, 'Edm.String');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.parentFieldId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentFieldId = new core_1.ComplexTypeStringPropertyField('parentFieldId', _this, 'Edm.String');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.picklistId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.picklistId = new core_1.ComplexTypeStringPropertyField('picklistId', _this, 'Edm.String');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.propertyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.propertyName = new core_1.ComplexTypeStringPropertyField('propertyName', _this, 'Edm.String');
        /**
         * Representation of the [[EpCustomBackgroundPortletProperty.required]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.required = new core_1.ComplexTypeBooleanPropertyField('required', _this, 'Edm.Boolean');
        return _this;
    }
    return EpCustomBackgroundPortletPropertyField;
}(core_1.ComplexTypeField));
exports.EpCustomBackgroundPortletPropertyField = EpCustomBackgroundPortletPropertyField;
var EpCustomBackgroundPortletProperty;
(function (EpCustomBackgroundPortletProperty) {
    function build(json) {
        return core_1.createComplexType(json, {
            isPII: function (isPii) { return ({ isPii: core_1.edmToTs(isPii, 'Edm.Boolean') }); },
            isPicklist: function (isPicklist) { return ({ isPicklist: core_1.edmToTs(isPicklist, 'Edm.Boolean') }); },
            isUrlLink: function (isUrlLink) { return ({ isUrlLink: core_1.edmToTs(isUrlLink, 'Edm.Boolean') }); },
            label: function (label) { return ({ label: core_1.edmToTs(label, 'Edm.String') }); },
            parentFieldId: function (parentFieldId) { return ({ parentFieldId: core_1.edmToTs(parentFieldId, 'Edm.String') }); },
            picklistId: function (picklistId) { return ({ picklistId: core_1.edmToTs(picklistId, 'Edm.String') }); },
            propertyName: function (propertyName) { return ({ propertyName: core_1.edmToTs(propertyName, 'Edm.String') }); },
            required: function (required) { return ({ required: core_1.edmToTs(required, 'Edm.Boolean') }); }
        });
    }
    EpCustomBackgroundPortletProperty.build = build;
})(EpCustomBackgroundPortletProperty = exports.EpCustomBackgroundPortletProperty || (exports.EpCustomBackgroundPortletProperty = {}));
//# sourceMappingURL=EpCustomBackgroundPortletProperty.js.map