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
 * @deprecated since v1.6.0. Use [[MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.build]] instead.
 */
function createMapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_(json) {
    return MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.build(json);
}
exports.createMapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ = createMapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_;
/**
 * MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field = /** @class */ (function (_super) {
    __extends(MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field, _super);
    function MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field;
}(core_1.ComplexTypeField));
exports.MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field = MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field;
var MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_;
(function (MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_) {
    function build(json) {
        return core_1.createComplexType(json, {});
    }
    MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.build = build;
})(MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ = exports.MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ || (exports.MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ = {}));
//# sourceMappingURL=MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.js.map