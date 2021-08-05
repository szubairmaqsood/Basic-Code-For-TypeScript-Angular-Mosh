export class Likes {
  /* Camel case is Used
    There are two class Member Variables 
  */
  constructor(private _likeCount: number, private _isSelected: boolean) {}

  /* Following are the properties instead of field and they are by default Public
   */
  get likeCount() {
    return this._likeCount;
  }

  get isSelected() {
    return this._isSelected;
  }

  // When click we be called
  onClick() {
    if (this.isSelected) {
      this._likeCount--;
    } else {
      this._likeCount++;
    }
    //Tenary operator can also  be used

    this._isSelected = !this.isSelected;
  }
}
