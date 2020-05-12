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
 * @deprecated since v1.6.0. Use [[WfRequestActionResponse.build]] instead.
 */
function createWfRequestActionResponse(json) {
    return WfRequestActionResponse.build(json);
}
exports.createWfRequestActionResponse = createWfRequestActionResponse;
/**
 * WfRequestActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WfRequestActionResponseField = /** @class */ (function (_super) {
    __extends(WfRequestActionResponseField, _super);
    function WfRequestActionResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WfRequestActionResponse.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        /**
         * Representation of the [[WfRequestActionResponse.wfRequestId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wfRequestId = new core_1.ComplexTypeBigNumberPropertyField('wfRequestId', _this, 'Edm.Int64');
        return _this;
    }
    return WfRequestActionResponseField;
}(core_1.ComplexTypeField));
exports.WfRequestActionResponseField = WfRequestActionResponseField;
var WfRequestActionResponse;
(function (WfRequestActionResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); },
            wfRequestId: function (wfRequestId) { return ({ wfRequestId: core_1.edmToTs(wfRequestId, 'Edm.Int64') }); }
        });
    }
    WfRequestActionResponse.build = build;
})(WfRequestActionResponse = exports.WfRequestActionResponse || (exports.WfRequestActionResponse = {}));
//# sourceMappingURL=WfRequestActionResponse.js.map