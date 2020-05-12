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
 * @deprecated since v1.6.0. Use [[DocumentCategoryDetails.build]] instead.
 */
function createDocumentCategoryDetails(json) {
    return DocumentCategoryDetails.build(json);
}
exports.createDocumentCategoryDetails = createDocumentCategoryDetails;
/**
 * DocumentCategoryDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentCategoryDetailsField = /** @class */ (function (_super) {
    __extends(DocumentCategoryDetailsField, _super);
    function DocumentCategoryDetailsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentCategoryDetails.active]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.active = new core_1.ComplexTypeBooleanPropertyField('active', _this, 'Edm.Boolean');
        /**
         * Representation of the [[DocumentCategoryDetails.categoryCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryCode = new core_1.ComplexTypeStringPropertyField('categoryCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentCategoryDetails.categoryName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.categoryName = new core_1.ComplexTypeStringPropertyField('categoryName', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentCategoryDetails.entityName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entityName = new core_1.ComplexTypeStringPropertyField('entityName', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentCategoryDetails.entityTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.entityTypeCode = new core_1.ComplexTypeStringPropertyField('entityTypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentCategoryDetails.systemDefined]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemDefined = new core_1.ComplexTypeBooleanPropertyField('systemDefined', _this, 'Edm.Boolean');
        return _this;
    }
    return DocumentCategoryDetailsField;
}(core_1.ComplexTypeField));
exports.DocumentCategoryDetailsField = DocumentCategoryDetailsField;
var DocumentCategoryDetails;
(function (DocumentCategoryDetails) {
    function build(json) {
        return core_1.createComplexType(json, {
            active: function (active) { return ({ active: core_1.edmToTs(active, 'Edm.Boolean') }); },
            categoryCode: function (categoryCode) { return ({ categoryCode: core_1.edmToTs(categoryCode, 'Edm.String') }); },
            categoryName: function (categoryName) { return ({ categoryName: core_1.edmToTs(categoryName, 'Edm.String') }); },
            entityName: function (entityName) { return ({ entityName: core_1.edmToTs(entityName, 'Edm.String') }); },
            entityTypeCode: function (entityTypeCode) { return ({ entityTypeCode: core_1.edmToTs(entityTypeCode, 'Edm.String') }); },
            systemDefined: function (systemDefined) { return ({ systemDefined: core_1.edmToTs(systemDefined, 'Edm.Boolean') }); }
        });
    }
    DocumentCategoryDetails.build = build;
})(DocumentCategoryDetails = exports.DocumentCategoryDetails || (exports.DocumentCategoryDetails = {}));
//# sourceMappingURL=DocumentCategoryDetails.js.map