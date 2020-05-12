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
var ThemeInfo_1 = require("./ThemeInfo");
/**
 * Request builder class for operations supported on the [[ThemeInfo]] entity.
 */
var ThemeInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ThemeInfoRequestBuilder, _super);
    function ThemeInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ThemeInfo` entity based on its keys.
     * @param id Key property. See [[ThemeInfo.id]].
     * @returns A request builder for creating requests to retrieve one `ThemeInfo` entity based on its keys.
     */
    ThemeInfoRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(ThemeInfo_1.ThemeInfo, { id: id });
    };
    /**
     * Returns a request builder for querying all `ThemeInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ThemeInfo` entities.
     */
    ThemeInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ThemeInfo_1.ThemeInfo);
    };
    return ThemeInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ThemeInfoRequestBuilder = ThemeInfoRequestBuilder;
//# sourceMappingURL=ThemeInfoRequestBuilder.js.map