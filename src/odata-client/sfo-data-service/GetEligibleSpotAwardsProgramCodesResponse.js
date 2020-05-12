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
 * @deprecated since v1.6.0. Use [[GetEligibleSpotAwardsProgramCodesResponse.build]] instead.
 */
function createGetEligibleSpotAwardsProgramCodesResponse(json) {
    return GetEligibleSpotAwardsProgramCodesResponse.build(json);
}
exports.createGetEligibleSpotAwardsProgramCodesResponse = createGetEligibleSpotAwardsProgramCodesResponse;
/**
 * GetEligibleSpotAwardsProgramCodesResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GetEligibleSpotAwardsProgramCodesResponseField = /** @class */ (function (_super) {
    __extends(GetEligibleSpotAwardsProgramCodesResponseField, _super);
    function GetEligibleSpotAwardsProgramCodesResponseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GetEligibleSpotAwardsProgramCodesResponse.eligibleProgramCodes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eligibleProgramCodes = new MapEntry_String_String_1.MapEntry_String_String_Field('eligibleProgramCodes', _this);
        return _this;
    }
    return GetEligibleSpotAwardsProgramCodesResponseField;
}(core_1.ComplexTypeField));
exports.GetEligibleSpotAwardsProgramCodesResponseField = GetEligibleSpotAwardsProgramCodesResponseField;
var GetEligibleSpotAwardsProgramCodesResponse;
(function (GetEligibleSpotAwardsProgramCodesResponse) {
    function build(json) {
        return core_1.createComplexType(json, {
            eligibleProgramCodes: function (eligibleProgramCodes) { return ({ eligibleProgramCodes: MapEntry_String_String_1.MapEntry_String_String_.build(eligibleProgramCodes) }); }
        });
    }
    GetEligibleSpotAwardsProgramCodesResponse.build = build;
})(GetEligibleSpotAwardsProgramCodesResponse = exports.GetEligibleSpotAwardsProgramCodesResponse || (exports.GetEligibleSpotAwardsProgramCodesResponse = {}));
//# sourceMappingURL=GetEligibleSpotAwardsProgramCodesResponse.js.map