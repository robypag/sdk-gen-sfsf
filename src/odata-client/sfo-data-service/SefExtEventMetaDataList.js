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
var SefExtEventMetaData_1 = require("./SefExtEventMetaData");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaDataList.build]] instead.
 */
function createSefExtEventMetaDataList(json) {
    return SefExtEventMetaDataList.build(json);
}
exports.createSefExtEventMetaDataList = createSefExtEventMetaDataList;
/**
 * SefExtEventMetaDataListField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SefExtEventMetaDataListField = /** @class */ (function (_super) {
    __extends(SefExtEventMetaDataListField, _super);
    function SefExtEventMetaDataListField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SefExtEventMetaDataList.data]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.data = new SefExtEventMetaData_1.SefExtEventMetaDataField('data', _this);
        /**
         * Representation of the [[SefExtEventMetaDataList.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        /**
         * Representation of the [[SefExtEventMetaDataList.statusMsg]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statusMsg = new core_1.ComplexTypeStringPropertyField('statusMsg', _this, 'Edm.String');
        return _this;
    }
    return SefExtEventMetaDataListField;
}(core_1.ComplexTypeField));
exports.SefExtEventMetaDataListField = SefExtEventMetaDataListField;
var SefExtEventMetaDataList;
(function (SefExtEventMetaDataList) {
    function build(json) {
        return core_1.createComplexType(json, {
            data: function (data) { return ({ data: SefExtEventMetaData_1.SefExtEventMetaData.build(data) }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); },
            statusMsg: function (statusMsg) { return ({ statusMsg: core_1.edmToTs(statusMsg, 'Edm.String') }); }
        });
    }
    SefExtEventMetaDataList.build = build;
})(SefExtEventMetaDataList = exports.SefExtEventMetaDataList || (exports.SefExtEventMetaDataList = {}));
//# sourceMappingURL=SefExtEventMetaDataList.js.map