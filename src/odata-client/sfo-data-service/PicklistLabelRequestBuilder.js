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
var PicklistLabel_1 = require("./PicklistLabel");
/**
 * Request builder class for operations supported on the [[PicklistLabel]] entity.
 */
var PicklistLabelRequestBuilder = /** @class */ (function (_super) {
    __extends(PicklistLabelRequestBuilder, _super);
    function PicklistLabelRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PicklistLabel` entity based on its keys.
     * @param locale Key property. See [[PicklistLabel.locale]].
     * @param optionId Key property. See [[PicklistLabel.optionId]].
     * @returns A request builder for creating requests to retrieve one `PicklistLabel` entity based on its keys.
     */
    PicklistLabelRequestBuilder.prototype.getByKey = function (locale, optionId) {
        return new core_1.GetByKeyRequestBuilder(PicklistLabel_1.PicklistLabel, {
            locale: locale,
            optionId: optionId
        });
    };
    /**
     * Returns a request builder for querying all `PicklistLabel` entities.
     * @returns A request builder for creating requests to retrieve all `PicklistLabel` entities.
     */
    PicklistLabelRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PicklistLabel_1.PicklistLabel);
    };
    /**
     * Returns a request builder for creating a `PicklistLabel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PicklistLabel`.
     */
    PicklistLabelRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PicklistLabel_1.PicklistLabel, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PicklistLabel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PicklistLabel`.
     */
    PicklistLabelRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PicklistLabel_1.PicklistLabel, entity);
    };
    return PicklistLabelRequestBuilder;
}(core_1.RequestBuilder));
exports.PicklistLabelRequestBuilder = PicklistLabelRequestBuilder;
//# sourceMappingURL=PicklistLabelRequestBuilder.js.map