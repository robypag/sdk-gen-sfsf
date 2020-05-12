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
var ThemeTemplate_1 = require("./ThemeTemplate");
/**
 * Request builder class for operations supported on the [[ThemeTemplate]] entity.
 */
var ThemeTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(ThemeTemplateRequestBuilder, _super);
    function ThemeTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ThemeTemplate` entity based on its keys.
     * @param id Key property. See [[ThemeTemplate.id]].
     * @returns A request builder for creating requests to retrieve one `ThemeTemplate` entity based on its keys.
     */
    ThemeTemplateRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(ThemeTemplate_1.ThemeTemplate, { id: id });
    };
    /**
     * Returns a request builder for querying all `ThemeTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `ThemeTemplate` entities.
     */
    ThemeTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ThemeTemplate_1.ThemeTemplate);
    };
    return ThemeTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.ThemeTemplateRequestBuilder = ThemeTemplateRequestBuilder;
//# sourceMappingURL=ThemeTemplateRequestBuilder.js.map