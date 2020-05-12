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
var core_1 = require("@sap-cloud-sdk/core");
var PicklistOption_1 = require("./PicklistOption");
/**
 * Request builder class for operations supported on the [[PicklistOption]] entity.
 */
var PicklistOptionRequestBuilder = /** @class */ (function (_super) {
    __extends(PicklistOptionRequestBuilder, _super);
    function PicklistOptionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PicklistOption` entity based on its keys.
     * @param id Key property. See [[PicklistOption.id]].
     * @returns A request builder for creating requests to retrieve one `PicklistOption` entity based on its keys.
     */
    PicklistOptionRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(PicklistOption_1.PicklistOption, { id: id });
    };
    /**
     * Returns a request builder for querying all `PicklistOption` entities.
     * @returns A request builder for creating requests to retrieve all `PicklistOption` entities.
     */
    PicklistOptionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PicklistOption_1.PicklistOption);
    };
    /**
     * Returns a request builder for creating a `PicklistOption` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PicklistOption`.
     */
    PicklistOptionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PicklistOption_1.PicklistOption, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PicklistOption`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PicklistOption`.
     */
    PicklistOptionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PicklistOption_1.PicklistOption, entity);
    };
    return PicklistOptionRequestBuilder;
}(core_1.RequestBuilder));
exports.PicklistOptionRequestBuilder = PicklistOptionRequestBuilder;
//# sourceMappingURL=PicklistOptionRequestBuilder.js.map