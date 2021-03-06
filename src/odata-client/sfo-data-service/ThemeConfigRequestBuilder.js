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
var ThemeConfig_1 = require("./ThemeConfig");
/**
 * Request builder class for operations supported on the [[ThemeConfig]] entity.
 */
var ThemeConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(ThemeConfigRequestBuilder, _super);
    function ThemeConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ThemeConfig` entity based on its keys.
     * @param id Key property. See [[ThemeConfig.id]].
     * @returns A request builder for creating requests to retrieve one `ThemeConfig` entity based on its keys.
     */
    ThemeConfigRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(ThemeConfig_1.ThemeConfig, { id: id });
    };
    /**
     * Returns a request builder for querying all `ThemeConfig` entities.
     * @returns A request builder for creating requests to retrieve all `ThemeConfig` entities.
     */
    ThemeConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ThemeConfig_1.ThemeConfig);
    };
    return ThemeConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.ThemeConfigRequestBuilder = ThemeConfigRequestBuilder;
//# sourceMappingURL=ThemeConfigRequestBuilder.js.map