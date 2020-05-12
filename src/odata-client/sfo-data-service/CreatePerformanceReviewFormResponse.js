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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[CreatePerformanceReviewFormResponse.build]] instead.
 */
function createCreatePerformanceReviewFormResponse(json) {
    return CreatePerformanceReviewFormResponse.build(json);
}
exports.createCreatePerformanceReviewFormResponse = createCreatePerformanceReviewFormResponse;
/**
 * CreatePerformanceReviewFormResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreatePerformanceReviewFormResponseField = /** @class */ (function (_super) {
    __extends(CreatePerformanceReviewFormResponseField, _super);
    function CreatePerformanceReviewFormResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreatePerformanceReviewFormResponse.formDataId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formDataId = new core_1.ComplexTypeBigNumberPropertyField('formDataId', _this, 'Edm.Int64');
        /**
         * Representation of the [[CreatePerformanceReviewFormResponse.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        /**
         * Representation of the [[CreatePerformanceReviewFormResponse.statusCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusCode = new core_1.ComplexTypeBigNumberPropertyField('statusCode', _this, 'Edm.Int64');
        return _this;
    }
    return CreatePerformanceReviewFormResponseField;
}(core_1.ComplexTypeField));
exports.CreatePerformanceReviewFormResponseField = CreatePerformanceReviewFormResponseField;
var CreatePerformanceReviewFormResponse;
(function (CreatePerformanceReviewFormResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            formDataId: function (formDataId) { return ({ formDataId: core_1.edmToTs(formDataId, 'Edm.Int64') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); },
            statusCode: function (statusCode) { return ({ statusCode: core_1.edmToTs(statusCode, 'Edm.Int64') }); }
        });
    }
    CreatePerformanceReviewFormResponse.build = build;
})(CreatePerformanceReviewFormResponse = exports.CreatePerformanceReviewFormResponse || (exports.CreatePerformanceReviewFormResponse = {}));
//# sourceMappingURL=CreatePerformanceReviewFormResponse.js.map