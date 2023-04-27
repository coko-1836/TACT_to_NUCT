const TACT_HEADER = document.getElementsByClassName("Mrphs-headerLogo");
const TACT_HEADER_LOGO_LEFT = document.getElementsByClassName("Mrphs-headerLogo--institution");
const NUCT_COLOR = "#006E4F";
const NUCT_LOGO_URL = "https://ct.nagoya-u.ac.jp/library/skin/morpheus-default/images/logo_nuct_nomoji+/logo_nuct_nomoji+15px.svg";
//tact header の　background を nuct color に
TACT_HEADER[0].style.background = NUCT_COLOR;
//tact header logoの background image を nuct logo に
TACT_HEADER_LOGO_LEFT[0].style.backgroundImage = `url(${NUCT_LOGO_URL})`;
