export class Theme {
  constructor(
    bodyBgColor = '',
    paraColor = '',
    preBgColor = '',
    preBorder = ''
  ) {
    this.bodyBgColor = bodyBgColor;
    this.paraColor = paraColor;
    this.preBgColor = preBgColor;
    this.preBorder = preBorder;
  }

  static OriginalTheme() {
    return new Theme('white', '', '', '');
  }

  static CustomTheme(bodyBgColor) {
    return new Theme(bodyBgColor, 'white', '#252525', '.3em solid white');
  }

  getBodyBgColor() {
    return this.bodyBgColor;
  }

  getParaColor() {
    return this.paraColor;
  }

  getPreBgColor() {
    return this.preBgColor;
  }

  getPreBorder() {
    return this.preBorder;
  }
}
