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
var TodoCategory_1 = require("./TodoCategory");
/**
 * Request builder class for operations supported on the [[TodoCategory]] entity.
 */
var TodoCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(TodoCategoryRequestBuilder, _super);
    function TodoCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TodoCategory` entity based on its keys.
     * @param categoryId Key property. See [[TodoCategory.categoryId]].
     * @returns A request builder for creating requests to retrieve one `TodoCategory` entity based on its keys.
     */
    TodoCategoryRequestBuilder.prototype.getByKey = function (categoryId) {
        return new core_1.GetByKeyRequestBuilder(TodoCategory_1.TodoCategory, { categoryId: categoryId });
    };
    /**
     * Returns a request builder for querying all `TodoCategory` entities.
     * @returns A request builder for creating requests to retrieve all `TodoCategory` entities.
     */
    TodoCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TodoCategory_1.TodoCategory);
    };
    return TodoCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.TodoCategoryRequestBuilder = TodoCategoryRequestBuilder;
//# sourceMappingURL=TodoCategoryRequestBuilder.js.map