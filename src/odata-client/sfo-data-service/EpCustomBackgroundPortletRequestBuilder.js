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
var EpCustomBackgroundPortlet_1 = require("./EpCustomBackgroundPortlet");
/**
 * Request builder class for operations supported on the [[EpCustomBackgroundPortlet]] entity.
 */
var EpCustomBackgroundPortletRequestBuilder = /** @class */ (function (_super) {
    __extends(EpCustomBackgroundPortletRequestBuilder, _super);
    function EpCustomBackgroundPortletRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpCustomBackgroundPortlet` entity based on its keys.
     * @param backgroundElementId Key property. See [[EpCustomBackgroundPortlet.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `EpCustomBackgroundPortlet` entity based on its keys.
     */
    EpCustomBackgroundPortletRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new core_1.GetByKeyRequestBuilder(EpCustomBackgroundPortlet_1.EpCustomBackgroundPortlet, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `EpCustomBackgroundPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `EpCustomBackgroundPortlet` entities.
     */
    EpCustomBackgroundPortletRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EpCustomBackgroundPortlet_1.EpCustomBackgroundPortlet);
    };
    return EpCustomBackgroundPortletRequestBuilder;
}(core_1.RequestBuilder));
exports.EpCustomBackgroundPortletRequestBuilder = EpCustomBackgroundPortletRequestBuilder;
//# sourceMappingURL=EpCustomBackgroundPortletRequestBuilder.js.map