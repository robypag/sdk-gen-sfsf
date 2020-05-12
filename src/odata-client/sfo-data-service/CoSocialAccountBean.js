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
 * @deprecated since v1.6.0. Use [[CoSocialAccountBean.build]] instead.
 */
function createCoSocialAccountBean(json) {
    return CoSocialAccountBean.build(json);
}
exports.createCoSocialAccountBean = createCoSocialAccountBean;
/**
 * CoSocialAccountBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CoSocialAccountBeanField = /** @class */ (function (_super) {
    __extends(CoSocialAccountBeanField, _super);
    function CoSocialAccountBeanField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CoSocialAccountBean.domain]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.domain = new core_1.ComplexTypeStringPropertyField('domain', _this, 'Edm.String');
        /**
         * Representation of the [[CoSocialAccountBean.instantMessagingId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instantMessagingId = new core_1.ComplexTypeStringPropertyField('instantMessagingId', _this, 'Edm.String');
        /**
         * Representation of the [[CoSocialAccountBean.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new core_1.ComplexTypeStringPropertyField('url', _this, 'Edm.String');
        return _this;
    }
    return CoSocialAccountBeanField;
}(core_1.ComplexTypeField));
exports.CoSocialAccountBeanField = CoSocialAccountBeanField;
var CoSocialAccountBean;
(function (CoSocialAccountBean) {
    function build(json) {
        return core_1.createComplexType(json, {
            domain: function (domain) { return ({ domain: core_1.edmToTs(domain, 'Edm.String') }); },
            instantMessagingId: function (instantMessagingId) { return ({ instantMessagingId: core_1.edmToTs(instantMessagingId, 'Edm.String') }); },
            url: function (url) { return ({ url: core_1.edmToTs(url, 'Edm.String') }); }
        });
    }
    CoSocialAccountBean.build = build;
})(CoSocialAccountBean = exports.CoSocialAccountBean || (exports.CoSocialAccountBean = {}));
//# sourceMappingURL=CoSocialAccountBean.js.map