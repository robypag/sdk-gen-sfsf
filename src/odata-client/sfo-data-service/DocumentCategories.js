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
var DocumentCategoryDetails_1 = require("./DocumentCategoryDetails");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[DocumentCategories.build]] instead.
 */
function createDocumentCategories(json) {
    return DocumentCategories.build(json);
}
exports.createDocumentCategories = createDocumentCategories;
/**
 * DocumentCategoriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentCategoriesField = /** @class */ (function (_super) {
    __extends(DocumentCategoriesField, _super);
    function DocumentCategoriesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentCategories.attachmemtCategories]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmemtCategories = new DocumentCategoryDetails_1.DocumentCategoryDetailsField('attachmemtCategories', _this);
        return _this;
    }
    return DocumentCategoriesField;
}(core_1.ComplexTypeField));
exports.DocumentCategoriesField = DocumentCategoriesField;
var DocumentCategories;
(function (DocumentCategories) {
    function build(json) {
        return core_1.createComplexType(json, {
            attachmemtCategories: function (attachmemtCategories) { return ({ attachmemtCategories: DocumentCategoryDetails_1.DocumentCategoryDetails.build(attachmemtCategories) }); }
        });
    }
    DocumentCategories.build = build;
})(DocumentCategories = exports.DocumentCategories || (exports.DocumentCategories = {}));
//# sourceMappingURL=DocumentCategories.js.map