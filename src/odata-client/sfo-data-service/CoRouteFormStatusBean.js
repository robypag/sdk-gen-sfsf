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
 * @deprecated since v1.6.0. Use [[CoRouteFormStatusBean.build]] instead.
 */
function createCoRouteFormStatusBean(json) {
    return CoRouteFormStatusBean.build(json);
}
exports.createCoRouteFormStatusBean = createCoRouteFormStatusBean;
/**
 * CoRouteFormStatusBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CoRouteFormStatusBeanField = /** @class */ (function (_super) {
    __extends(CoRouteFormStatusBeanField, _super);
    function CoRouteFormStatusBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CoRouteFormStatusBean.redirectUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.redirectUrl = new core_1.ComplexTypeStringPropertyField('redirectUrl', _this, 'Edm.String');
        /**
         * Representation of the [[CoRouteFormStatusBean.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeStringPropertyField('status', _this, 'Edm.String');
        return _this;
    }
    return CoRouteFormStatusBeanField;
}(core_1.ComplexTypeField));
exports.CoRouteFormStatusBeanField = CoRouteFormStatusBeanField;
var CoRouteFormStatusBean;
(function (CoRouteFormStatusBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            redirectUrl: function (redirectUrl) { return ({ redirectUrl: core_1.edmToTs(redirectUrl, 'Edm.String') }); },
            status: function (status) { return ({ status: core_1.edmToTs(status, 'Edm.String') }); }
        });
    }
    CoRouteFormStatusBean.build = build;
})(CoRouteFormStatusBean = exports.CoRouteFormStatusBean || (exports.CoRouteFormStatusBean = {}));
//# sourceMappingURL=CoRouteFormStatusBean.js.map