"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Likes = void 0;
var Likes = /** @class */ (function () {
    /* Camel case is Used
      There are two class Member Variables
    */
    function Likes(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(Likes.prototype, "likeCount", {
        /* Following are the properties instead of field and they are by default Public
         */
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Likes.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    // When click we be called
    Likes.prototype.onClick = function () {
        if (this.isSelected) {
            this._likeCount--;
        }
        else {
            this._likeCount++;
        }
        this._isSelected = !this.isSelected;
    };
    return Likes;
}());
exports.Likes = Likes;
