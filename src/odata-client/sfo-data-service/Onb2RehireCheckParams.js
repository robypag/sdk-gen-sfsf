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
var MapEntry_String_String_1 = require("./MapEntry_String_String_");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[Onb2RehireCheckParams.build]] instead.
 */
function createOnb2RehireCheckParams(json) {
    return Onb2RehireCheckParams.build(json);
}
exports.createOnb2RehireCheckParams = createOnb2RehireCheckParams;
/**
 * Onb2RehireCheckParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Onb2RehireCheckParamsField = /** @class */ (function (_super) {
    __extends(Onb2RehireCheckParamsField, _super);
    function Onb2RehireCheckParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Onb2RehireCheckParams.dateOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfBirth = new core_1.ComplexTypeStringPropertyField('dateOfBirth', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2RehireCheckParams.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new core_1.ComplexTypeStringPropertyField('firstName', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2RehireCheckParams.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new core_1.ComplexTypeStringPropertyField('lastName', _this, 'Edm.String');
        /**
         * Representation of the [[Onb2RehireCheckParams.nationalIdDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nationalIdDetails = new MapEntry_String_String_1.MapEntry_String_String_Field('nationalIdDetails', _this);
        return _this;
    }
    return Onb2RehireCheckParamsField;
}(core_1.ComplexTypeField));
exports.Onb2RehireCheckParamsField = Onb2RehireCheckParamsField;
var Onb2RehireCheckParams;
(function (Onb2RehireCheckParams) {
    function build(json) {
        return core_1.createComplexType(json, {
            dateOfBirth: function (dateOfBirth) { return ({ dateOfBirth: core_1.edmToTs(dateOfBirth, 'Edm.String') }); },
            firstName: function (firstName) { return ({ firstName: core_1.edmToTs(firstName, 'Edm.String') }); },
            lastName: function (lastName) { return ({ lastName: core_1.edmToTs(lastName, 'Edm.String') }); },
            nationalIdDetails: function (nationalIdDetails) { return ({ nationalIdDetails: MapEntry_String_String_1.MapEntry_String_String_.build(nationalIdDetails) }); }
        });
    }
    Onb2RehireCheckParams.build = build;
})(Onb2RehireCheckParams = exports.Onb2RehireCheckParams || (exports.Onb2RehireCheckParams = {}));
//# sourceMappingURL=Onb2RehireCheckParams.js.map