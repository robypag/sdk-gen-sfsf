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
var EmEventAttribute_1 = require("./EmEventAttribute");
/**
 * Request builder class for operations supported on the [[EmEventAttribute]] entity.
 */
var EmEventAttributeRequestBuilder = /** @class */ (function (_super) {
    __extends(EmEventAttributeRequestBuilder, _super);
    function EmEventAttributeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmEventAttribute` entity based on its keys.
     * @param id Key property. See [[EmEventAttribute.id]].
     * @returns A request builder for creating requests to retrieve one `EmEventAttribute` entity based on its keys.
     */
    EmEventAttributeRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(EmEventAttribute_1.EmEventAttribute, { id: id });
    };
    /**
     * Returns a request builder for querying all `EmEventAttribute` entities.
     * @returns A request builder for creating requests to retrieve all `EmEventAttribute` entities.
     */
    EmEventAttributeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmEventAttribute_1.EmEventAttribute);
    };
    /**
     * Returns a request builder for creating a `EmEventAttribute` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmEventAttribute`.
     */
    EmEventAttributeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmEventAttribute_1.EmEventAttribute, entity);
    };
    return EmEventAttributeRequestBuilder;
}(core_1.RequestBuilder));
exports.EmEventAttributeRequestBuilder = EmEventAttributeRequestBuilder;
//# sourceMappingURL=EmEventAttributeRequestBuilder.js.map