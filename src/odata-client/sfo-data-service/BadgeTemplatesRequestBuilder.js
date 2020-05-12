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
var BadgeTemplates_1 = require("./BadgeTemplates");
/**
 * Request builder class for operations supported on the [[BadgeTemplates]] entity.
 */
var BadgeTemplatesRequestBuilder = /** @class */ (function (_super) {
    __extends(BadgeTemplatesRequestBuilder, _super);
    function BadgeTemplatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BadgeTemplates` entity based on its keys.
     * @param badgeId Key property. See [[BadgeTemplates.badgeId]].
     * @returns A request builder for creating requests to retrieve one `BadgeTemplates` entity based on its keys.
     */
    BadgeTemplatesRequestBuilder.prototype.getByKey = function (badgeId) {
        return new core_1.GetByKeyRequestBuilder(BadgeTemplates_1.BadgeTemplates, { badgeId: badgeId });
    };
    /**
     * Returns a request builder for querying all `BadgeTemplates` entities.
     * @returns A request builder for creating requests to retrieve all `BadgeTemplates` entities.
     */
    BadgeTemplatesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BadgeTemplates_1.BadgeTemplates);
    };
    return BadgeTemplatesRequestBuilder;
}(core_1.RequestBuilder));
exports.BadgeTemplatesRequestBuilder = BadgeTemplatesRequestBuilder;
//# sourceMappingURL=BadgeTemplatesRequestBuilder.js.map